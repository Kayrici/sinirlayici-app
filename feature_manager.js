/**
 * =========================================================================
 * EVRENSEL MODÜL YÖNETİCİSİ (FEATURE MANAGER)
 * =========================================================================
 * İstediğiniz herhangi bir web sayfasına veya mobil WebView uygulamasına
 * ekleyip butonlarla özellikleri açıp kapatabilirsiniz.
 * 
 * KULLANIM:
 *   FeatureManager.open('hafiza');           // Hafıza Oyunu
 *   FeatureManager.open('dil_oyunu');        // Arapça Soruları / Emsile & Kelime Oyunu
 *   FeatureManager.open('admin');            // Arapça Admin Yönetim Sayfası
 *   FeatureManager.open('hikaye');           // Arapça Hikaye Okuyucu
 *   FeatureManager.open('hikaye_kelimeler'); // Arapça Hikaye Kelimeleri Testi
 * 
 *   FeatureManager.close();                  // Açık olan özelliği kapatır
 *   FeatureManager.toggle('hafiza');         // Açıksa kapatır, kapalıysa açar
 * =========================================================================
 */
(function(window) {
  'use strict';

  // Modül tanımları ve dosya yolları
  const MODULES = {
    hafiza: {
      id: 'hafiza',
      title: 'Hafıza Oyunu',
      file: 'hafiza.html',
      badge: 'Zihin & Görsel Egzersiz'
    },
    dil_oyunu: {
      id: 'dil_oyunu',
      title: 'Arapça Dil & Soru Oyunu',
      file: 'dil_oyunu.html',
      badge: 'Emsile, Zamir & 778 Kelime'
    },
    admin: {
      id: 'admin',
      title: 'Arapça Admin Yönetim Paneli',
      file: 'dil_oyunu_admin.html',
      badge: 'Tüm Kilitler Açık & Kelime Düzenleme'
    },
    hikaye: {
      id: 'hikaye',
      title: 'Arapça Hikaye Okuyucu',
      file: 'hikaye.html',
      badge: '40 Sayfa & Kök Tahlili'
    },
    hikaye_kelimeler: {
      id: 'hikaye_kelimeler',
      title: 'Arapça Hikaye Kelimeleri Testi',
      file: 'hikaye_kelimeler.html',
      badge: 'Adaptif Kelime Pekiştirme'
    }
  };

  let basePath = '';
  let activeModuleId = null;

  // feature_manager.js'nin bulunduğu dizini otomatik tespit et
  try {
    const scripts = document.getElementsByTagName('script');
    for (let i = scripts.length - 1; i >= 0; i--) {
      const src = scripts[i].src || '';
      if (src.includes('feature_manager.js')) {
        basePath = src.substring(0, src.lastIndexOf('/') + 1);
        break;
      }
    }
  } catch (_) {}

  // CSS stillerini dinamik ekle
  function injectStyles() {
    if (document.getElementById('fm-injected-styles')) return;
    const style = document.createElement('style');
    style.id = 'fm-injected-styles';
    style.textContent = `
      #fm-overlay-container {
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 9999999;
        background: #0f172a;
        display: none;
        flex-direction: column;
        overflow: hidden;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      }
      #fm-overlay-container.open {
        display: flex;
        animation: fmFadeIn 0.22s ease-out forwards;
      }
      @keyframes fmFadeIn {
        from { opacity: 0; transform: scale(0.985); }
        to { opacity: 1; transform: scale(1); }
      }
      #fm-navbar {
        height: 56px;
        background: rgba(15, 23, 42, 0.94);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
        flex-shrink: 0;
        color: #f8fafc;
      }
      #fm-nav-title-group {
        display: flex;
        align-items: center;
        gap: 10px;
        min-width: 0;
      }
      #fm-nav-title {
        font-weight: 700;
        font-size: 1.05rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      #fm-nav-badge {
        font-size: 0.72rem;
        font-weight: 600;
        padding: 3px 8px;
        border-radius: 999px;
        background: rgba(99, 102, 241, 0.2);
        color: #a5b4fc;
        border: 1px solid rgba(99, 102, 241, 0.35);
        white-space: nowrap;
      }
      #fm-btn-close {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 8px 16px;
        background: rgba(239, 68, 68, 0.15);
        color: #fca5a5;
        border: 1px solid rgba(239, 68, 68, 0.3);
        border-radius: 10px;
        font-size: 0.88rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      #fm-btn-close:active {
        background: rgba(239, 68, 68, 0.35);
        transform: scale(0.96);
      }
      #fm-frame-wrapper {
        flex: 1;
        width: 100%;
        height: 100%;
        position: relative;
        background: #0f172a;
      }
      #fm-active-iframe {
        width: 100%;
        height: 100%;
        border: none;
        display: block;
      }
      @media (max-width: 500px) {
        #fm-nav-badge { display: none; }
        #fm-nav-title { font-size: 0.95rem; }
        #fm-btn-close { padding: 6px 12px; font-size: 0.82rem; }
      }
    `;
    document.head.appendChild(style);
  }

  // DOM Container'ı hazırla
  function ensureContainer() {
    injectStyles();
    let container = document.getElementById('fm-overlay-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'fm-overlay-container';
      container.innerHTML = `
        <header id="fm-navbar">
          <div id="fm-nav-title-group">
            <span id="fm-nav-title">Modül</span>
            <span id="fm-nav-badge">Ekstra Özellik</span>
          </div>
          <button id="fm-btn-close" type="button" onclick="FeatureManager.close()">
            <span>⬅</span> Ana Menüye Dön
          </button>
        </header>
        <div id="fm-frame-wrapper">
          <iframe id="fm-active-iframe" src="about:blank"></iframe>
        </div>
      `;
      document.body.appendChild(container);

      // İframe içerisinden gelen kapatma mesajlarını yakala
      window.addEventListener('message', function(event) {
        if (!event || !event.data) return;
        const msg = String(event.data);
        if (msg === 'close_game' || msg === 'exit_to_main' || msg === 'close_modal' || msg === 'go_home') {
          closeModule();
        }
      });
    }
    return container;
  }

  // Özelliği aç
  function openModule(featureKey) {
    const mod = MODULES[featureKey];
    if (!mod) {
      console.warn('[FeatureManager] Bilinmeyen özellik anahtarı:', featureKey, 'Kullanılabilir olanlar:', Object.keys(MODULES));
      return false;
    }

    const container = ensureContainer();
    const titleEl = document.getElementById('fm-nav-title');
    const badgeEl = document.getElementById('fm-nav-badge');
    const iframe = document.getElementById('fm-active-iframe');

    if (titleEl) titleEl.textContent = mod.title;
    if (badgeEl) badgeEl.textContent = mod.badge;

    // Hedef dosya yolunu belirle
    const targetUrl = (basePath ? basePath : '') + mod.file + '?t=' + Date.now();
    if (iframe) iframe.src = targetUrl;

    container.classList.add('open');
    activeModuleId = featureKey;
    return true;
  }

  // Açık olan özelliği kapat ve hafızayı temizle
  function closeModule() {
    const container = document.getElementById('fm-overlay-container');
    const iframe = document.getElementById('fm-active-iframe');

    if (iframe) {
      // Hafıza sızıntısını ve arka plan seslerini önlemek için boşalt
      iframe.src = 'about:blank';
    }

    if (container) {
      container.classList.remove('open');
    }

    activeModuleId = null;
  }

  // Toggle (açıksa kapat, kapalıysa aç)
  function toggleModule(featureKey) {
    if (activeModuleId === featureKey) {
      closeModule();
    } else {
      openModule(featureKey);
    }
  }

  // Global Dışa Aktarım
  const FeatureManager = {
    open: openModule,
    close: closeModule,
    toggle: toggleModule,
    isOpen: function() { return !!activeModuleId; },
    getActive: function() { return activeModuleId; },
    setBasePath: function(path) { basePath = path.endsWith('/') ? path : path + '/'; },
    getAvailableModules: function() { return Object.keys(MODULES); }
  };

  window.FeatureManager = FeatureManager;

})(window);
