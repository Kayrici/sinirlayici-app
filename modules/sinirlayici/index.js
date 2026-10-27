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

    const name = typeof app === 'string' ? app : (app ? (app.name || app.appName) : '?');
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
              id: (p.packageName || p.id || '').trim(),
              packageName: (p.packageName || p.id || '').trim(),
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
      { id: 'com.google.android.youtube', packageName: 'com.google.android.youtube', name: 'YouTube', icon: '' },
      { id: 'com.instagram.android', packageName: 'com.instagram.android', name: 'Instagram', icon: '' },
      { id: 'com.whatsapp', packageName: 'com.whatsapp', name: 'WhatsApp', icon: '' },
      { id: 'com.zhiliaoapp.musically', packageName: 'com.zhiliaoapp.musically', name: 'TikTok', icon: '' },
      { id: 'com.twitter.android', packageName: 'com.twitter.android', name: 'X (Twitter)', icon: '' },
      { id: 'com.android.chrome', packageName: 'com.android.chrome', name: 'Google Chrome', icon: '' },
      { id: 'com.netflix.mediaclient', packageName: 'com.netflix.mediaclient', name: 'Netflix', icon: '' },
      { id: 'com.spotify.music', packageName: 'com.spotify.music', name: 'Spotify', icon: '' }
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

  function syncAllLimitsToNative(context) {
    if (!window.AndroidBridge || typeof window.AndroidBridge.saveLimit !== 'function') return;
    const limits = context.storage.get('limits', []);
    limits.forEach(item => {
      const pkg = (item.id || item.packageName || '').trim();
      if (!pkg) return;
      try {
        window.AndroidBridge.saveLimit(JSON.stringify({
          packageName: pkg,
          appName: item.name || item.appName || pkg,
          mode: 'daily',
          dailyLimitMinutes: item.maxMinutes || item.dailyLimitMinutes || 30,
          enabled: true
        }));
      } catch (e) {}
    });
  }

  const moduleDef = {
    id: 'sinirlayici',
    title: 'Sınırlayıcı',
    icon: '⏱️',

    init(context) {
      this.context = context;
      this.checkInterval = null;
      preloadAppsInBackground();

      // Native depodaki limitler ile yerel depoyu eşitle (çift yönlü senkronizasyon)
      if (window.AndroidBridge && typeof window.AndroidBridge.getLimits === 'function') {
        try {
          const raw = window.AndroidBridge.getLimits();
          if (raw) {
            const nativeList = JSON.parse(raw);
            if (Array.isArray(nativeList) && nativeList.length > 0) {
              let localLimits = context.storage.get('limits', []);
              let localMap = new Map();
              localLimits.forEach(l => {
                const k = (l.id || l.packageName || '').trim();
                if (k) localMap.set(k, l);
              });

              nativeList.forEach(nItem => {
                const pkg = (nItem.packageName || '').trim();
                if (!pkg) return;
                const existing = localMap.get(pkg);
                if (existing) {
                  existing.id = pkg;
                  existing.packageName = pkg;
                  if (typeof nItem.dailyLimitMinutes === 'number' && nItem.dailyLimitMinutes > 0) {
                    existing.maxMinutes = nItem.dailyLimitMinutes;
                  }
                  if (typeof nItem.usedTodaySeconds === 'number') {
                    existing.usedSeconds = Math.max(existing.usedSeconds || 0, nItem.usedTodaySeconds);
                  }
                  if (nItem.appName && (!existing.name || existing.name === pkg)) {
                    existing.name = nItem.appName;
                  }
                } else {
                  localLimits.push({
                    id: pkg,
                    packageName: pkg,
                    name: nItem.appName || pkg,
                    icon: '',
                    maxMinutes: nItem.dailyLimitMinutes || 30,
                    usedSeconds: nItem.usedTodaySeconds || 0
                  });
                }
              });
              context.storage.set('limits', localLimits);
            }
          }
        } catch (e) {
          console.warn('Native getLimits sync hatası:', e);
        }
      }

      syncAllLimitsToNative(context);
      this.startMonitor(context);
    },

    render(container, context) {
      const cycleStart = getCycleStartTimestamp();
      let storedCycle = context.storage.get('last_cycle_start', 0);

      if (storedCycle > 0 && cycleStart > storedCycle) {
        context.storage.set('last_cycle_start', cycleStart);
        let currentLimits = context.storage.get('limits', []);
        currentLimits = currentLimits.map(item => ({ ...item, usedSeconds: 0 }));
        context.storage.set('limits', currentLimits);
      } else if (!storedCycle) {
        context.storage.set('last_cycle_start', cycleStart);
      }

      const isAccessEnabled = (window.AndroidBridge && typeof window.AndroidBridge.isAccessibilityServiceEnabled === 'function')
        ? window.AndroidBridge.isAccessibilityServiceEnabled()
        : true;

      container.innerHTML = `
        <div style="padding-top: 0.25rem; padding-bottom: 2.5rem;">

          <!-- Erişilebilirlik Servis Uyarısı (Yalnızca servis kapalıysa şıkça görünür) -->
          <div class="accessibility-warning-banner" style="display: ${isAccessEnabled ? 'none' : 'block'}; background: linear-gradient(135deg, rgba(239, 68, 68, 0.16), rgba(245, 158, 11, 0.16)); border: 1px solid rgba(239, 68, 68, 0.35); border-radius: 16px; padding: 0.9rem 1rem; margin-bottom: 1rem;">
            <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
              <span style="font-size: 1.4rem; line-height: 1;">🛡️</span>
              <div style="flex: 1;">
                <div style="font-size: 0.9rem; font-weight: 800; color: #fff;">Sınırlayıcı ve Takip Servisi Kapalı</div>
                <div style="font-size: 0.75rem; color: #cbd5e1; margin-top: 0.2rem; line-height: 1.35;">
                  Uygulama kullanım sürelerinin sayılabilmesi ve limit dolunca kapatılabilmesi için <b>Erişilebilirlik İznini</b> açmanız gerekir.
                </div>
                <div style="display: flex; gap: 0.5rem; margin-top: 0.6rem; flex-wrap: wrap;">
                  <button type="button" onclick="window.__openAccessibilitySettings()" style="background: #ef4444; border: none; color: #fff; padding: 0.45rem 0.85rem; border-radius: 10px; font-weight: 800; font-size: 0.78rem; cursor: pointer;">
                    ⚙️ Erişilebilirlik İznini Aç
                  </button>
                  <button type="button" onclick="window.__openAppDetailSettings()" style="background: rgba(255,255,255,0.08); border: 1px solid var(--border-card); color: #fff; padding: 0.45rem 0.75rem; border-radius: 10px; font-weight: 700; font-size: 0.78rem; cursor: pointer;">
                    📋 Kullanım & Bildirim İzinleri
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem;">
            <div>
              <h2 style="font-size: 1.15rem; font-weight: 800; color: #fff;">Uygulama Sınırları</h2>
              <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.1rem;">Gece 03:00 döngüsü ile kullanım kontrolü</div>
            </div>
            <button type="button" id="btnOpenAddModal" style="background: var(--accent-primary); border: none; color: #fff; padding: 0.55rem 1rem; border-radius: 12px; font-weight: 700; font-size: 0.82rem; cursor: pointer; box-shadow: 0 4px 14px var(--accent-glow);">
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
              <button type="button" id="btnCloseModal" style="background: none; border: none; color: var(--text-muted); font-size: 1.4rem; cursor: pointer; padding: 0.2rem 0.5rem;">✕</button>
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
                <button type="button" id="btnBackToAppList" style="flex: 1; background: rgba(255,255,255,0.06); border: 1px solid var(--border-card); color: var(--text-secondary); padding: 0.8rem; border-radius: 12px; font-weight: 700; cursor: pointer;">
                  Geri
                </button>
                <button type="button" id="btnConfirmSaveLimit" style="flex: 2; background: var(--accent-primary); border: none; color: #fff; padding: 0.8rem; border-radius: 12px; font-weight: 800; font-size: 0.95rem; cursor: pointer; box-shadow: 0 4px 14px var(--accent-glow);">
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
          try { window.AndroidBridge.openAccessibilitySettings(); } catch (e) {}
        }
      };

      this.bindEvents(container, context);
      this.renderLimitsList(container, context);
    },

    renderLimitsList(container, context) {
      const listEl = container.querySelector('#limitsListContainer');
      if (!listEl) return;
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
        const pkgId = (item.id || item.packageName || '').trim();
        const appName = item.name || item.appName || pkgId;
        const maxMins = item.maxMinutes || item.dailyLimitMinutes || 30;
        const usedSecs = item.usedSeconds || 0;
        const totalSecs = maxMins * 60;
        const usedMin = Math.floor(usedSecs / 60);
        const percent = Math.min(100, Math.round((usedSecs / totalSecs) * 100));
        const isReached = usedSecs >= totalSecs;
        const secDetail = (usedSecs < 60 && usedSecs > 0) ? ` (${usedSecs} sn)` : '';

        return `
          <div id="limit-card-${pkgId}" class="card-panel" style="display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 0;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div style="display: flex; align-items: center; gap: 0.75rem;">
                ${renderAppIcon(item)}
                <div>
                  <div style="font-weight: 700; font-size: 0.95rem; color: #ffffff;">${appName}</div>
                  <div class="limit-time-text" style="font-size: 0.75rem; color: ${isReached ? 'var(--accent-danger)' : 'var(--text-muted)'}; font-weight: 600;">
                    ${usedMin} dk / ${maxMins} dk${secDetail}${isReached ? ' • Sınır Doldu' : ''}
                  </div>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 0.4rem;">
                <button type="button" onclick="window.__sinirlayiciDelete('${pkgId}')" title="Sınırı Sil" style="background: none; border: none; color: var(--text-muted); font-size: 1.15rem; cursor: pointer; padding: 0.4rem;">
                  🗑️
                </button>
              </div>
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

        // 0ms gecikme için ilk 40 uygulamayı çiz
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
        const existing = context.storage.get('limits', []).map(l => (l.id || l.packageName || '').trim());
        availableAppsList = all.filter(a => !existing.includes(a.id.trim()));

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
        const found = all.find(a => (a.id || a.packageName || '').trim() === String(appId).trim());
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
        const pkgId = (currentSelectedApp.id || currentSelectedApp.packageName || '').trim();
        if (!pkgId) return;

        let limits = context.storage.get('limits', []);
        const existingIdx = limits.findIndex(l => {
          const lId = (l.id || l.packageName || '').trim();
          return lId === pkgId;
        });

        const limitObj = {
          id: pkgId,
          packageName: pkgId,
          name: currentSelectedApp.name || pkgId,
          icon: currentSelectedApp.icon || '',
          maxMinutes: mins,
          usedSeconds: 0
        };

        if (existingIdx !== -1) {
          limitObj.usedSeconds = limits[existingIdx].usedSeconds || 0;
          limits[existingIdx] = limitObj;
        } else {
          limits.push(limitObj);
        }
        context.storage.set('limits', limits);

        // Native Android senkronizasyonu
        if (window.AndroidBridge && typeof window.AndroidBridge.saveLimit === 'function') {
          try {
            window.AndroidBridge.saveLimit(JSON.stringify({
              packageName: pkgId,
              appName: currentSelectedApp.name || pkgId,
              mode: 'daily',
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
        if (!id) return;
        const targetId = String(id).trim();

        // 1. Storage'dan hedefi kesin olarak temizle
        let limits = context.storage.get('limits', []);
        const toDelete = limits.find(l => {
          const lId = String(l.id || l.packageName || '').trim();
          const lPkg = String(l.packageName || l.id || '').trim();
          return lId === targetId || lPkg === targetId;
        });

        limits = limits.filter(l => {
          const lId = String(l.id || l.packageName || '').trim();
          const lPkg = String(l.packageName || l.id || '').trim();
          return lId !== targetId && lPkg !== targetId;
        });
        context.storage.set('limits', limits);

        // 2. Native Android Bridge'den sil
        const nativePkg = toDelete ? (toDelete.packageName || toDelete.id || targetId) : targetId;
        if (window.AndroidBridge && typeof window.AndroidBridge.deleteLimit === 'function') {
          try {
            window.AndroidBridge.deleteLimit(nativePkg.trim());
          } catch (e) {
            console.warn('Native deleteLimit hatası:', e);
          }
        }

        // 3. Kullanıcıya bildirim ver
        const appName = toDelete ? (toDelete.name || toDelete.appName || nativePkg) : 'Uygulama';
        if (window.AndroidBridge && typeof window.AndroidBridge.showToast === 'function') {
          try {
            window.AndroidBridge.showToast(`🗑️ ${appName} sınırlayıcısı kaldırıldı.`);
          } catch (e) {}
        }

        // 4. Listeyi yeniden çiz
        this.renderLimitsList(container, context);
      };
    },

    startMonitor(context) {
      if (this.checkInterval) clearInterval(this.checkInterval);

      // Performans Odaklı Canlı İzleme (getLimits + getTodayUsageSeconds çift yönlü senkronizasyonu)
      this.checkInterval = setInterval(() => {
        let limits = context.storage.get('limits', []);
        if (limits.length === 0) return;

        let changed = false;

        // Native depodan aktif tick ve kullanım sürelerini çek
        let nativeMap = {};
        if (window.AndroidBridge && typeof window.AndroidBridge.getLimits === 'function') {
          try {
            const raw = window.AndroidBridge.getLimits();
            if (raw) {
              const list = JSON.parse(raw);
              if (Array.isArray(list)) {
                list.forEach(nItem => {
                  const pkg = (nItem.packageName || '').trim();
                  if (pkg) {
                    nativeMap[pkg] = nItem;
                  }
                });
              }
            }
          } catch (e) {}
        }

        limits = limits.map(item => {
          const pkg = (item.id || item.packageName || '').trim();
          let realSecs = item.usedSeconds || 0;
          const nativeItem = nativeMap[pkg];
          if (nativeItem && typeof nativeItem.usedTodaySeconds === 'number') {
            realSecs = Math.max(realSecs, nativeItem.usedTodaySeconds);
          } else if (window.AndroidBridge && typeof window.AndroidBridge.getTodayUsageSeconds === 'function') {
            try {
              const s = window.AndroidBridge.getTodayUsageSeconds(pkg);
              if (s >= 0) realSecs = Math.max(realSecs, s);
            } catch (e) {}
          }

          const maxMins = item.maxMinutes || item.dailyLimitMinutes || 30;
          const totalSecs = maxMins * 60;
          const usedMin = Math.floor(realSecs / 60);
          const percent = Math.min(100, Math.round((realSecs / totalSecs) * 100));
          const isReached = realSecs >= totalSecs;

          // Canlı Repaint-free DOM Güncellemesi
          const card = document.getElementById(`limit-card-${pkg}`);
          if (card) {
            const pBar = card.querySelector('.limit-progress-bar');
            const txt = card.querySelector('.limit-time-text');
            if (pBar) {
              pBar.style.width = percent + '%';
              pBar.style.background = isReached ? 'var(--accent-danger)' : 'var(--accent-primary)';
            }
            if (txt) {
              const secDetail = (realSecs < 60 && realSecs > 0) ? ` (${realSecs} sn)` : '';
              txt.textContent = `${usedMin} dk / ${maxMins} dk${secDetail}` + (isReached ? ' • Sınır Doldu' : '');
              txt.style.color = isReached ? 'var(--accent-danger)' : 'var(--text-muted)';
            }
          }

          if (realSecs !== item.usedSeconds) {
            changed = true;
            if (isReached && Math.floor((item.usedSeconds || 0) / 60) < maxMins) {
              this.triggerEnforcement(item);
            }
            return { ...item, id: pkg, packageName: pkg, usedSeconds: realSecs };
          }
          return { ...item, id: pkg, packageName: pkg };
        });

        if (changed) {
          context.storage.set('limits', limits);
        }
      }, 1000);
    },

    triggerEnforcement(app) {
      const toast = document.getElementById('floatingToast');
      if (toast) {
        toast.textContent = `🛑 ${app.name} sınırına ulaştınız!`;
        toast.style.display = 'block';
        setTimeout(() => { toast.style.display = 'none'; }, 3500);
      }
      if (window.AndroidBridge && typeof window.AndroidBridge.showToast === 'function') {
        try {
          window.AndroidBridge.showToast(`🛑 ${app.name} günlük kullanım sınırına ulaşıldı!`);
        } catch (e) {}
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
