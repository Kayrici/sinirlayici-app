/**
 * Hatırlatıcı Mobil Uygulama Çekirdeği (AppKernel)
 * 
 * Özellikler:
 * 1. Katı Modüler İzolasyon: Her modül kendi dosyasında ve kapsayıcısında yaşar.
 * 2. Hata Kalkanı (Error Boundary): Modül çökse bile ana uygulama ve diğer modüller etkilenmez.
 * 3. Bağımsız Yaşam Döngüsü: Modül ekleme, çıkarma veya değiştirme çekirdeği bozmaz.
 * 4. İzole Veri Alanı: Her modül yalnızca kendi isim alanındaki (namespace) verilere erişir.
 */

class AppKernel {
  constructor() {
    this.modules = new Map();
    this.activeModuleId = null;
    this.events = new Map();
    this.domContainer = null;
    this.navContainer = null;
    this.isInitialized = false;
  }

  init() {
    this.domContainer = document.getElementById('moduleContainer');
    this.navContainer = document.getElementById('navItemsContainer');
    this.isInitialized = true;

    // Genel hata yakalayıcı (Modül dışı sızıntıları engellemek için)
    window.addEventListener('error', (e) => {
      console.warn('[Kernel Uyarı]', e.message);
    });

    this.renderNavigation();

    // Kayıtlı modüller varsa ilkini başlat
    if (!this.activeModuleId && this.modules.size > 0) {
      const firstId = this.modules.keys().next().value;
      this.switchModule(firstId);
    }

    this.checkServiceStatus();
    setInterval(() => this.checkServiceStatus(), 2000);

    // Global ayar köprüsü bağlantıları (Her zaman ve her modülde erişilebilir)
    window.__openAccessibilitySettings = () => {
      if (window.AndroidBridge && typeof window.AndroidBridge.openAccessibilitySettings === 'function') {
        try { window.AndroidBridge.openAccessibilitySettings(); } catch (e) {}
      }
    };
    window.__openAppDetailSettings = () => {
      if (window.AndroidBridge && typeof window.AndroidBridge.openAppDetailSettings === 'function') {
        try { window.AndroidBridge.openAppDetailSettings(); } catch (e) {}
      }
    };
    window.__openBatterySettings = () => {
      if (window.AndroidBridge && typeof window.AndroidBridge.openBatterySettings === 'function') {
        try { window.AndroidBridge.openBatterySettings(); } catch (e) {}
      }
    };

    console.log('🚀 Hatırlatıcı Çekirdeği Başlatıldı.');
  }

  checkServiceStatus() {
    if (!window.AndroidBridge || typeof window.AndroidBridge.isAccessibilityServiceEnabled !== 'function') return;
    try {
      const isEnabled = window.AndroidBridge.isAccessibilityServiceEnabled();
      const btnPerm = document.getElementById('btnHeaderPermAlert');
      if (btnPerm) {
        btnPerm.style.display = isEnabled ? 'none' : 'flex';
      }
      document.querySelectorAll('.accessibility-warning-banner').forEach(el => {
        el.style.display = isEnabled ? 'none' : 'block';
      });
    } catch (e) {}
  }

  /**
   * Yeni bir modülü sisteme kaydeder.
   * @param {Object} def Modül tanımı { id, title, icon, render, init, destroy }
   */
  registerModule(def) {
    if (!def || !def.id) {
      console.error('Geçersiz modül kaydı: id zorunludur.');
      return;
    }

    if (this.modules.has(def.id)) {
      console.warn(`[${def.id}] modülü zaten kayıtlı, güncelleniyor.`);
    }

    this.modules.set(def.id, def);

    // Yalnızca çekirdek DOM'a bağlandıysa render yap
    if (this.isInitialized) {
      this.renderNavigation();
      if (!this.activeModuleId) {
        this.switchModule(def.id);
      }
    }
  }

  /**
   * Modülü sistemden tamamen çıkarır (Uninstall / Remove)
   */
  unregisterModule(moduleId) {
    if (!this.modules.has(moduleId)) return;

    const mod = this.modules.get(moduleId);
    if (typeof mod.destroy === 'function') {
      try { mod.destroy(); } catch (e) { /* izole */ }
    }

    // DOM elemanını temizle
    const el = document.getElementById(`view-${moduleId}`);
    if (el) el.remove();

    this.modules.delete(moduleId);

    // Eğer aktif modül silindiyse ilk müsait modüle geç
    if (this.activeModuleId === moduleId) {
      const nextId = this.modules.keys().next().value || null;
      if (nextId) this.switchModule(nextId);
      else this.renderEmptyState();
    }

    this.renderNavigation();
  }

  /**
   * Aktif modülü değiştirir
   */
  switchModule(moduleId) {
    if (!this.modules.has(moduleId)) return;
    if (!this.domContainer) {
      this.domContainer = document.getElementById('moduleContainer');
    }
    if (!this.domContainer) return;

    this.activeModuleId = moduleId;
    const mod = this.modules.get(moduleId);

    // Başlık güncelle
    const subtitle = document.getElementById('activeModuleSubtitle');
    if (subtitle) subtitle.textContent = mod.title;

    // Tüm görünümleri gizle
    document.querySelectorAll('.module-view').forEach(v => v.classList.remove('active'));

    // Modülün kendi DOM konteynerını bul veya oluştur
    let viewEl = document.getElementById(`view-${moduleId}`);
    if (!viewEl) {
      viewEl = document.createElement('section');
      viewEl.id = `view-${moduleId}`;
      viewEl.className = 'module-view';
      this.domContainer.appendChild(viewEl);

      // İzole Çalıştırma (Hata Kalkanı)
      this.safeRunModule(mod, viewEl);
    }

    viewEl.classList.add('active');
    if (this.domContainer) {
      this.domContainer.scrollTop = 0;
    }
    this.updateNavActiveState();
  }

  /**
   * Modülü Hata Kalkanı (Error Boundary) içinde çalıştırır.
   * Hata çıkarsa diğer modüllere ve ana uygulamaya sıçramaz!
   */
  safeRunModule(mod, containerEl) {
    containerEl.innerHTML = ''; // temizle

    const context = this.createModuleContext(mod.id);

    try {
      if (typeof mod.init === 'function') {
        mod.init(context);
      }
      if (typeof mod.render === 'function') {
        mod.render(containerEl, context);
      } else {
        containerEl.innerHTML = `<div class="card-panel"><p>${mod.title} içeriği hazır.</p></div>`;
      }
    } catch (err) {
      // HATA İZOLASYONU: Sadece bu modülün içine hata ekranı bas, ana uygulama çalışmaya devam etsin.
      this.renderModuleError(mod, containerEl, err);
    }
  }

  /**
   * Çöken modül için izole uyarı kartı
   */
  renderModuleError(mod, containerEl, err) {
    containerEl.innerHTML = `
      <div class="module-error-boundary">
        <div class="error-icon">⚠️</div>
        <div class="error-title">"${mod.title}" Modülünde Hata Oluştu</div>
        <div class="error-desc">
          Bu özellik çalışırken izole bir hata yakalandı. Ana uygulama ve diğer özellikleriniz sorunsuz çalışmaya devam etmektedir.
        </div>
        <div class="error-details">${err.message || err}</div>
        <button class="btn-retry" onclick="window.kernel.retryModule('${mod.id}')">🔄 Özelliği Yeniden Başlat</button>
      </div>
    `;
  }

  retryModule(moduleId) {
    const mod = this.modules.get(moduleId);
    const viewEl = document.getElementById(`view-${moduleId}`);
    if (mod && viewEl) {
      this.safeRunModule(mod, viewEl);
    }
  }

  /**
   * Her modüle özel güvenli, izole bağlam (Context)
   */
  createModuleContext(moduleId) {
    return {
      moduleId,
      // İzole Veri Deposu (Diğer modüllerin verisini ezemez)
      storage: {
        get: (key, defVal = null) => {
          try {
            const raw = localStorage.getItem(`mod_${moduleId}_${key}`);
            return raw ? JSON.parse(raw) : defVal;
          } catch { return defVal; }
        },
        set: (key, val) => {
          try {
            localStorage.setItem(`mod_${moduleId}_${key}`, JSON.stringify(val));
          } catch (e) { console.error('Depolama hatası', e); }
        },
        remove: (key) => {
          localStorage.removeItem(`mod_${moduleId}_${key}`);
        }
      },
      // Modüller arası güvenli haberleşme (Event Bus)
      events: {
        emit: (eventName, data) => this.emitEvent(eventName, data, moduleId),
        on: (eventName, cb) => this.onEvent(eventName, cb, moduleId)
      }
    };
  }

  emitEvent(eventName, data, senderId) {
    const list = this.events.get(eventName) || [];
    list.forEach(item => {
      try { item.cb(data, senderId); } catch (e) { console.warn('Event hatası:', e); }
    });
  }

  onEvent(eventName, cb, moduleId) {
    if (!this.events.has(eventName)) this.events.set(eventName, []);
    this.events.get(eventName).push({ cb, moduleId });
  }

  renderNavigation() {
    if (!this.navContainer) return;
    this.navContainer.innerHTML = '';

    this.modules.forEach(mod => {
      const btn = document.createElement('button');
      btn.className = `nav-item-btn ${this.activeModuleId === mod.id ? 'active' : ''}`;
      btn.setAttribute('data-id', mod.id);
      if (btn.dataset) btn.dataset.id = mod.id;
      btn.innerHTML = `
        <span class="nav-icon">${mod.icon || '📦'}</span>
        <span class="nav-title">${mod.title}</span>
      `;
      btn.onclick = () => this.switchModule(mod.id);
      this.navContainer.appendChild(btn);
    });
  }

  updateNavActiveState() {
    if (!this.navContainer) {
      this.navContainer = document.getElementById('navItemsContainer');
    }
    if (!this.navContainer) return;
    this.navContainer.querySelectorAll('.nav-item-btn').forEach(btn => {
      const bId = btn.getAttribute('data-id') || (btn.dataset ? btn.dataset.id : '');
      btn.classList.toggle('active', bId === this.activeModuleId);
    });
  }

  openSettings() {
    const s = document.getElementById('settingsView');
    if (s) {
      s.style.display = 'flex';
      this.closeProfile(); // ana ayarlar listesini göster
      this.loadProfile();
    }
  }

  closeSettings() {
    const s = document.getElementById('settingsView');
    if (s) s.style.display = 'none';
  }

  openProfile() {
    const list = document.getElementById('settingsMainList');
    const sub = document.getElementById('profileSubView');
    const inp = document.getElementById('usernameInput');
    const cur = localStorage.getItem('app_profile_username') || '';
    if (list) list.style.display = 'none';
    if (sub) sub.style.display = 'flex';
    if (inp) inp.value = cur;
  }

  closeProfile() {
    const list = document.getElementById('settingsMainList');
    const sub = document.getElementById('profileSubView');
    if (list) list.style.display = 'block';
    if (sub) sub.style.display = 'none';
  }

  saveUsername() {
    const inp = document.getElementById('usernameInput');
    const name = inp ? inp.value.trim() : '';
    if (name) {
      localStorage.setItem('app_profile_username', name);
      if (window.AndroidBridge && typeof window.AndroidBridge.registerUsername === 'function') {
        try { window.AndroidBridge.registerUsername(name); } catch (e) {}
      }
    } else {
      localStorage.removeItem('app_profile_username');
    }
    this.loadProfile();
    this.closeProfile();
  }

  loadProfile() {
    const disp = document.getElementById('profileUsernameDisplay');
    let name = localStorage.getItem('app_profile_username');
    if (!name && window.AndroidBridge && typeof window.AndroidBridge.getMyUsername === 'function') {
      try {
        const nativeName = window.AndroidBridge.getMyUsername();
        if (nativeName) {
          name = nativeName;
          localStorage.setItem('app_profile_username', name);
        }
      } catch (e) {}
    }
    if (disp) {
      disp.textContent = name ? `@${name}` : 'Kullanıcı adı belirlenmedi';
    }
  }

  renderEmptyState() {
    this.domContainer.innerHTML = `
      <div class="card-panel" style="text-align: center; margin-top: 2rem;">
        <p style="color: var(--text-secondary);">Henüz yüklü bir modül bulunmuyor. Yeni bir özellik ekleyebilirsiniz.</p>
      </div>
    `;
  }
}

// Global Köprü Yardımcıları (Her yerden güvenle çağrılabilir)
window.__openAccessibilitySettings = () => {
  if (window.AndroidBridge && typeof window.AndroidBridge.openAccessibilitySettings === 'function') {
    try { window.AndroidBridge.openAccessibilitySettings(); } catch (e) {}
  }
};
window.__openAppDetailSettings = () => {
  if (window.AndroidBridge && typeof window.AndroidBridge.openAppDetailSettings === 'function') {
    try { window.AndroidBridge.openAppDetailSettings(); } catch (e) {}
  }
};

// Global Çekirdek Örneği
window.kernel = new AppKernel();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.kernel.init();
  });
} else {
  window.kernel.init();
}

