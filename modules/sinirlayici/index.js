/**
 * Modül: Uygulama Sınırlayıcı ve Kullanım Takipçisi (03:00 Döngülü)
 * Yüksek Performanslı, 60fps GPU destekli ve gecikmesiz mimari.
 */
(function() {
  let cachedInstalledApps = null;
  let isPreloading = false;

  function getCycleStartTimestamp() {
    const now = new Date();
    const cycle = new Date(now);
    if (now.getHours() < 3) {
      cycle.setDate(cycle.getDate() - 1);
    }
    cycle.setHours(3, 0, 0, 0);
    return cycle.getTime();
  }

  // Renkli minimalist uygulama simgesi veya gerçek uygulama ikonu
  function renderAppIcon(app) {
    if (app && app.icon) {
      const src = app.icon.startsWith('data:') ? app.icon : `data:image/png;base64,${app.icon}`;
      return `<img src="${src}" loading="lazy" style="width: 40px; height: 40px; border-radius: 12px; object-fit: contain; flex-shrink: 0; background: rgba(255,255,255,0.06); padding: 3px;">`;
    }

    const name = typeof app === 'string' ? app : (app ? app.name : '?');
    const initial = (name || '?').charAt(0).toUpperCase();
    const colors = [
      '#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4'
    ];
    let hash = 0;
    for (let i = 0; i < (name || '').length; i++) hash += name.charCodeAt(i);
    const bg = colors[hash % colors.length];

    return `<div style="width: 40px; height: 40px; border-radius: 12px; background: ${bg}; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.15rem; color: #fff; flex-shrink: 0;">${initial}</div>`;
  }

  function getAvailableApps() {
    if (cachedInstalledApps && cachedInstalledApps.length > 0) {
      return cachedInstalledApps;
    }

    if (window.AndroidBridge && typeof window.AndroidBridge.getInstalledApps === 'function') {
      try {
        const raw = window.AndroidBridge.getInstalledApps();
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) {
            cachedInstalledApps = parsed.map(p => ({
              id: p.packageName || p.id || '',
              name: p.appName || p.name || p.packageName || 'Uygulama',
              icon: p.icon || ''
            })).filter(a => !!a.id);
            return cachedInstalledApps;
          }
        }
      } catch (e) {
        console.warn('Bridge getInstalledApps hatası:', e);
      }
    }

    const fallbacks = [
      { id: 'com.google.android.youtube', name: 'YouTube', icon: '' },
      { id: 'com.instagram.android', name: 'Instagram', icon: '' },
      { id: 'com.whatsapp', name: 'WhatsApp', icon: '' },
      { id: 'com.zhiliaoapp.musically', name: 'TikTok', icon: '' },
      { id: 'com.twitter.android', name: 'X (Twitter)', icon: '' },
      { id: 'com.android.chrome', name: 'Google Chrome', icon: '' },
      { id: 'com.netflix.mediaclient', name: 'Netflix', icon: '' },
      { id: 'com.spotify.music', name: 'Spotify', icon: '' }
    ];
    cachedInstalledApps = fallbacks;
    return fallbacks;
  }

  function preloadAppsInBackground() {
    if (cachedInstalledApps || isPreloading) return;
    isPreloading = true;
    setTimeout(() => {
      try {
        getAvailableApps();
      } catch (e) {}
      isPreloading = false;
    }, 150);
  }

  const moduleDef = {
    id: 'sinirlayici',
    title: 'Sınırlayıcı',
    icon: '⏱️',

    init(context) {
      this.context = context;
      this.checkInterval = null;
      preloadAppsInBackground();
      this.startMonitor(context);
    },

    render(container, context) {
      const cycleStart = getCycleStartTimestamp();
      let storedCycle = context.storage.get('last_cycle_start', 0);

      if (cycleStart > storedCycle) {
        context.storage.set('last_cycle_start', cycleStart);
        let currentLimits = context.storage.get('limits', []);
        currentLimits = currentLimits.map(item => ({ ...item, usedSeconds: 0 }));
        context.storage.set('limits', currentLimits);
      }

      const isAccessEnabled = (window.AndroidBridge && typeof window.AndroidBridge.isAccessibilityServiceEnabled === 'function')
        ? window.AndroidBridge.isAccessibilityServiceEnabled()
        : true;

      container.innerHTML = `
        <div style="padding-top: 0.25rem; padding-bottom: 2.5rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
            <div>
              <h2 style="font-size: 1.15rem; font-weight: 800; color: #fff;">Uygulama Sınırları</h2>
              <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.1rem;">Gece 03:00 döngüsü ile kullanım kontrolü</div>
            </div>
            <button id="btnOpenAddModal" style="background: var(--accent-primary); border: none; color: #fff; padding: 0.55rem 1rem; border-radius: 12px; font-weight: 700; font-size: 0.82rem; cursor: pointer; box-shadow: 0 4px 14px var(--accent-glow);">
              + Yeni Sınırlayıcı Ekle
            </button>
          </div>

          <div id="limitsListContainer" style="display: flex; flex-direction: column; gap: 0.75rem;"></div>
        </div>

        <!-- Hızlı Uygulama Seçim Modalı -->
        <div id="addLimitModal" style="display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.85); z-index: 100; justify-content: center; align-items: flex-end;">
          <div style="background: var(--bg-secondary); border-top: 1px solid var(--border-card); width: 100%; max-width: 480px; border-radius: 24px 24px 0 0; padding: 1.25rem; max-height: 85vh; display: flex; flex-direction: column;">
            
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
              <h3 id="modalHeaderTitle" style="font-size: 1.1rem; font-weight: 700; color: #fff;">Uygulama Seçin</h3>
              <button id="btnCloseModal" style="background: none; border: none; color: var(--text-muted); font-size: 1.4rem; cursor: pointer; padding: 0.2rem 0.5rem;">✕</button>
            </div>

            <!-- Adım 1: Uygulama Listesi ve Arama -->
            <div id="stepAppArea" style="flex: 1; display: flex; flex-direction: column; gap: 0.6rem; overflow: hidden;">
              <input type="text" id="searchAppInput" placeholder="🔍 Uygulama ara..." 
                style="width: 100%; padding: 0.75rem 1rem; border-radius: 12px; background: rgba(0,0,0,0.3); border: 1px solid var(--border-card); color: #fff; font-size: 0.9rem; outline: none; margin-bottom: 0.35rem;">
              
              <div id="stepAppList" style="flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 0.5rem; max-height: 52vh; padding-right: 0.2rem; -webkit-overflow-scrolling: touch;">
                <!-- Uygulamalar buraya eklenir -->
              </div>
            </div>

            <!-- Adım 2: Süre Belirleme -->
            <div id="stepTimeConfig" style="display: none; flex-direction: column; gap: 1.2rem; padding: 0.5rem 0;">
              <div style="display: flex; align-items: center; gap: 1rem; background: rgba(255,255,255,0.04); padding: 1rem; border-radius: 16px; border: 1px solid var(--border-card);">
                <div id="configAppIcon"></div>
                <div>
                  <div id="configAppName" style="font-weight: 800; font-size: 1.05rem; color: #fff;"></div>
                  <div style="font-size: 0.75rem; color: var(--text-muted);">Günlük Kullanım Sınırı</div>
                </div>
              </div>

              <div>
                <label style="display: block; font-size: 0.82rem; font-weight: 700; color: var(--text-secondary); margin-bottom: 0.5rem;">
                  Süre (Dakika)
                </label>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                  <input type="number" id="limitMinutesInput" min="1" max="1440" value="30" 
                    style="flex: 1; padding: 0.8rem 1rem; border-radius: 12px; background: rgba(0,0,0,0.3); border: 1px solid var(--border-focus); color: #fff; font-size: 1.1rem; font-weight: 800; text-align: center; outline: none;">
                  <span style="font-size: 0.95rem; font-weight: 700; color: var(--text-secondary);">dakika</span>
                </div>
              </div>

              <div style="display: flex; gap: 0.4rem; justify-content: space-between;">
                <button type="button" class="quick-min-btn" data-min="15" style="flex: 1; padding: 0.5rem; border-radius: 8px; background: rgba(255,255,255,0.06); border: 1px solid var(--border-card); color: #fff; font-size: 0.8rem; font-weight: 700; cursor: pointer;">15 dk</button>
                <button type="button" class="quick-min-btn" data-min="30" style="flex: 1; padding: 0.5rem; border-radius: 8px; background: rgba(255,255,255,0.06); border: 1px solid var(--border-card); color: #fff; font-size: 0.8rem; font-weight: 700; cursor: pointer;">30 dk</button>
                <button type="button" class="quick-min-btn" data-min="45" style="flex: 1; padding: 0.5rem; border-radius: 8px; background: rgba(255,255,255,0.06); border: 1px solid var(--border-card); color: #fff; font-size: 0.8rem; font-weight: 700; cursor: pointer;">45 dk</button>
                <button type="button" class="quick-min-btn" data-min="60" style="flex: 1; padding: 0.5rem; border-radius: 8px; background: rgba(255,255,255,0.06); border: 1px solid var(--border-card); color: #fff; font-size: 0.8rem; font-weight: 700; cursor: pointer;">1 saat</button>
              </div>

              <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
                <button id="btnBackToAppList" style="flex: 1; background: rgba(255,255,255,0.06); border: 1px solid var(--border-card); color: var(--text-secondary); padding: 0.8rem; border-radius: 12px; font-weight: 700; cursor: pointer;">
                  Geri
                </button>
                <button id="btnConfirmSaveLimit" style="flex: 2; background: var(--accent-primary); border: none; color: #fff; padding: 0.8rem; border-radius: 12px; font-weight: 800; font-size: 0.95rem; cursor: pointer; box-shadow: 0 4px 14px var(--accent-glow);">
                  Sınırı Başlat
                </button>
              </div>
            </div>

          </div>
        </div>

        <!-- Kayan Bildirim Konteyneri -->
        <div id="floatingToast" style="display: none; position: fixed; top: 1.5rem; left: 50%; transform: translateX(-50%); background: rgba(239, 68, 68, 0.95); color: #fff; padding: 0.8rem 1.4rem; border-radius: 999px; font-size: 0.85rem; font-weight: 700; box-shadow: 0 10px 25px rgba(0,0,0,0.5); z-index: 200; border: 1px solid rgba(255,255,255,0.2);"></div>
      `;

      window.__openAccessibilitySettings = () => {
        if (window.AndroidBridge && typeof window.AndroidBridge.openAccessibilitySettings === 'function') {
          window.AndroidBridge.openAccessibilitySettings();
        }
      };

      this.bindEvents(container, context);
      this.renderLimitsList(container, context);
    },

    renderLimitsList(container, context) {
      const listEl = container.querySelector('#limitsListContainer');
      const limits = context.storage.get('limits', []);

      if (limits.length === 0) {
        listEl.innerHTML = `
          <div class="card-panel" style="text-align: center; padding: 2.5rem 1rem;">
            <div style="font-size: 2rem; margin-bottom: 0.5rem;">⏱️</div>
            <p style="color: var(--text-muted); font-size: 0.9rem;">Henüz bir sınır eklenmedi.</p>
          </div>
        `;
        return;
      }

      listEl.innerHTML = limits.map(item => {
        const usedMin = Math.floor((item.usedSeconds || 0) / 60);
        const percent = Math.min(100, Math.round((usedMin / item.maxMinutes) * 100));
        const isReached = usedMin >= item.maxMinutes;

        return `
          <div id="limit-card-${item.id}" class="card-panel" style="display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 0;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                ${renderAppIcon(item)}
                <div>
                  <div style="font-weight: 700; font-size: 0.95rem; color: #ffffff;">${item.name}</div>
                  <div class="limit-time-text" style="font-size: 0.75rem; color: ${isReached ? 'var(--accent-danger)' : 'var(--text-muted)'}; font-weight: 600;">
                    ${usedMin} dk / ${item.maxMinutes} dk ${isReached ? '• Sınır Doldu' : ''}
                  </div>
                </div>
              </div>
              <button onclick="window.__sinirlayiciDelete('${item.id}')" style="background: none; border: none; color: var(--text-muted); font-size: 1.1rem; cursor: pointer; padding: 0.4rem;">
                🗑️
              </button>
            </div>
            <div style="width: 100%; height: 6px; background: rgba(255,255,255,0.06); border-radius: 999px; overflow: hidden;">
              <div class="limit-progress-bar" style="width: ${percent}%; height: 100%; background: ${isReached ? 'var(--accent-danger)' : 'var(--accent-primary)'}; transition: width 0.2s ease;"></div>
            </div>
          </div>
        `;
      }).join('');
    },

    bindEvents(container, context) {
      let currentSelectedApp = null;
      const modal = container.querySelector('#addLimitModal');
      const stepAppArea = container.querySelector('#stepAppArea');
      const stepAppList = container.querySelector('#stepAppList');
      const stepTimeConfig = container.querySelector('#stepTimeConfig');
      const modalHeaderTitle = container.querySelector('#modalHeaderTitle');
      const minutesInput = container.querySelector('#limitMinutesInput');
      const searchInput = container.querySelector('#searchAppInput');

      let availableAppsList = [];

      const renderAvailableList = (query = '') => {
        const q = query.toLowerCase().trim();
        const filtered = q
          ? availableAppsList.filter(a => a.name.toLowerCase().includes(q) || a.id.toLowerCase().includes(q))
          : availableAppsList;

        if (filtered.length === 0) {
          stepAppList.innerHTML = `
            <div style="text-align: center; padding: 2rem 1rem; color: var(--text-secondary); font-size: 0.85rem;">
              ${q ? 'Aramanıza uygun uygulama bulunamadı.' : 'Tüm uygulamalar zaten sınır listesinde ekli.'}
            </div>
          `;
          return;
        }

        // Render first 40 apps for 0ms lag
        const slice = filtered.slice(0, 40);
        stepAppList.innerHTML = slice.map(app => `
          <div class="selectable-app-card" onclick="window.__selectAppForLimit('${app.id}')"
            style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 0.9rem; background: rgba(255,255,255,0.05); border-radius: 14px; cursor: pointer; border: 1px solid var(--border-card);">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              ${renderAppIcon(app)}
              <div>
                <div style="font-weight: 800; font-size: 0.92rem; color: #ffffff;">${app.name}</div>
                <div style="font-size: 0.7rem; color: var(--text-muted);">${app.id}</div>
              </div>
            </div>
            <span style="color: var(--accent-primary); font-size: 1.2rem; font-weight: 700;">+</span>
          </div>
        `).join('');
      };

      // Modal aç (Anında açılır, önceden hafızada)
      container.querySelector('#btnOpenAddModal').onclick = () => {
        const all = getAvailableApps();
        const existing = context.storage.get('limits', []).map(l => l.id);
        availableAppsList = all.filter(a => !existing.includes(a.id));

        searchInput.value = '';
        renderAvailableList();

        modalHeaderTitle.textContent = 'Uygulama Seçin';
        stepAppArea.style.display = 'flex';
        stepTimeConfig.style.display = 'none';
        modal.style.display = 'flex';
      };

      // Arama filtresi (Anında tepki)
      searchInput.oninput = () => {
        renderAvailableList(searchInput.value);
      };

      // Doğrudan tıklama seçimi
      window.__selectAppForLimit = (appId) => {
        const all = getAvailableApps();
        const found = all.find(a => a.id === appId);
        if (!found) return;

        currentSelectedApp = found;
        container.querySelector('#configAppName').textContent = found.name;
        container.querySelector('#configAppIcon').innerHTML = renderAppIcon(found);

        modalHeaderTitle.textContent = `${found.name} Sınırı`;
        stepAppArea.style.display = 'none';
        stepTimeConfig.style.display = 'flex';
        minutesInput.focus();
      };

      // Hızlı dakika butonları
      container.querySelectorAll('.quick-min-btn').forEach(btn => {
        btn.onclick = () => {
          minutesInput.value = btn.dataset.min;
        };
      });

      // Geri dön
      container.querySelector('#btnBackToAppList').onclick = () => {
        modalHeaderTitle.textContent = 'Uygulama Seçin';
        stepAppArea.style.display = 'flex';
        stepTimeConfig.style.display = 'none';
      };

      // Kapat
      container.querySelector('#btnCloseModal').onclick = () => {
        modal.style.display = 'none';
      };

      // Sınırı Kaydet
      container.querySelector('#btnConfirmSaveLimit').onclick = () => {
        if (!currentSelectedApp) return;
        const mins = parseInt(minutesInput.value, 10) || 30;

        let limits = context.storage.get('limits', []);
        limits.push({
          id: currentSelectedApp.id,
          name: currentSelectedApp.name,
          icon: currentSelectedApp.icon || '',
          maxMinutes: mins,
          usedSeconds: 0
        });
        context.storage.set('limits', limits);

        // Native Android senkronizasyonu
        if (window.AndroidBridge && typeof window.AndroidBridge.saveLimit === 'function') {
          try {
            window.AndroidBridge.saveLimit(JSON.stringify({
              packageName: currentSelectedApp.id,
              appName: currentSelectedApp.name,
              dailyLimitMinutes: mins,
              enabled: true
            }));
          } catch (e) {
            console.warn('Native saveLimit hatası:', e);
          }
        }

        modal.style.display = 'none';
        this.renderLimitsList(container, context);
      };

      // Sil
      window.__sinirlayiciDelete = (id) => {
        let limits = context.storage.get('limits', []);
        limits = limits.filter(l => l.id !== id);
        context.storage.set('limits', limits);

        if (window.AndroidBridge && typeof window.AndroidBridge.deleteLimit === 'function') {
          try {
            window.AndroidBridge.deleteLimit(id);
          } catch (e) {
            console.warn('Native deleteLimit hatası:', e);
          }
        }

        this.renderLimitsList(container, context);
      };
    },

    startMonitor(context) {
      if (this.checkInterval) clearInterval(this.checkInterval);

      // Performans Odaklı İzleme: Sadece değişen kartların DOM alanlarını günceller
      this.checkInterval = setInterval(() => {
        let limits = context.storage.get('limits', []);
        if (limits.length === 0) return;

        let changed = false;

        if (window.AndroidBridge && typeof window.AndroidBridge.getTodayUsageSeconds === 'function') {
          limits = limits.map(item => {
            try {
              const realSecs = window.AndroidBridge.getTodayUsageSeconds(item.id);
              if (realSecs >= 0 && realSecs !== item.usedSeconds) {
                changed = true;
                const usedMin = Math.floor(realSecs / 60);
                const percent = Math.min(100, Math.round((usedMin / item.maxMinutes) * 100));
                const isReached = usedMin >= item.maxMinutes;

                if (isReached && Math.floor((item.usedSeconds || 0) / 60) < item.maxMinutes) {
                  this.triggerEnforcement(item);
                }

                // Yüksek Hızlı Hedefli DOM Güncellemesi (Repaint lag yok)
                const card = document.getElementById(`limit-card-${item.id}`);
                if (card) {
                  const pBar = card.querySelector('.limit-progress-bar');
                  const txt = card.querySelector('.limit-time-text');
                  if (pBar) {
                    pBar.style.width = percent + '%';
                    pBar.style.background = isReached ? 'var(--accent-danger)' : 'var(--accent-primary)';
                  }
                  if (txt) {
                    txt.textContent = `${usedMin} dk / ${item.maxMinutes} dk` + (isReached ? ' • Sınır Doldu' : '');
                    txt.style.color = isReached ? 'var(--accent-danger)' : 'var(--text-muted)';
                  }
                }

                return { ...item, usedSeconds: realSecs };
              }
            } catch (e) {}
            return item;
          });
        }

        if (changed) {
          context.storage.set('limits', limits);
        }
      }, 1000);
    },

    triggerEnforcement(app) {
      const toast = document.getElementById('floatingToast');
      if (toast) {
        toast.textContent = `${app.name} sınırına ulaştınız!`;
        toast.style.display = 'block';
        setTimeout(() => { toast.style.display = 'none'; }, 3500);
      }
      if (window.AndroidBridge && typeof window.AndroidBridge.showToast === 'function') {
        window.AndroidBridge.showToast(`${app.name} kullanım sınırına ulaşıldı!`);
      }
    },

    destroy() {
      if (this.checkInterval) clearInterval(this.checkInterval);
      delete window.__sinirlayiciDelete;
      delete window.__selectAppForLimit;
      delete window.__openAccessibilitySettings;
    }
  };

  if (window.kernel) {
    window.kernel.registerModule(moduleDef);
  }
})();
