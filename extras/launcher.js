/**
 * =========================================================================
 * İZOLE EKSTRA ÖZELLİKLER BAŞLATICISI (ISOLATED EXTRAS LAUNCHER)
 * =========================================================================
 * Ana uygulama çekirdeğine (app.js / style.css) hiçbir müdahalede bulunmaz.
 * Yalnızca gizli şifre ekranında aşağıdaki kodlar girildiğinde ilgili
 * modülü tamamen bağımsız kendi klasöründen izole bir iframe içinde açar;
 * kapatıldığında iframe ve belleğini tamamen temizler.
 *
 * Kodlar:
 *   4444 -> Hafıza Oyunu             (extras/hafiza_4444/index.html)
 *   5555 -> Arapça Oyunu             (extras/arapca_oyunu_5555/index.html)
 *   5556 -> Arapça Hikaye            (extras/arapca_hikaye_5556/index.html)
 *   5557 -> Arapça Hikaye Kelimeleri (extras/hikaye_kelimeler_5557/index.html)
 * =========================================================================
 */
(function(window, document) {
  'use strict';

  try {
    const SECRET_MODULES = Object.freeze({
      '4444': {
        code: '4444',
        id: 'hafiza_4444',
        title: 'Hafıza Oyunu',
        entry: 'extras/hafiza_4444/index.html',
        toast: '🧠 Hafıza Oyunu açıldı'
      },
      '5555': {
        code: '5555',
        id: 'arapca_oyunu_5555',
        title: 'Arapça Oyunu',
        entry: 'extras/arapca_oyunu_5555/index.html',
        toast: '📖 Arapça Oyunu açıldı'
      },
      '5556': {
        code: '5556',
        id: 'arapca_hikaye_5556',
        title: 'Arapça Hikaye',
        entry: 'extras/arapca_hikaye_5556/index.html',
        toast: '📜 Arapça Hikaye açıldı'
      },
      '5557': {
        code: '5557',
        id: 'hikaye_kelimeler_5557',
        title: 'Arapça Hikaye Kelimeleri',
        entry: 'extras/hikaye_kelimeler_5557/index.html',
        toast: '🎯 Arapça Hikaye Kelimeleri açıldı'
      }
    });

    const OVERLAY_ID = 'isolatedExtraModuleOverlay';
    const IFRAME_ID = 'isolatedExtraModuleFrame';

    let activeCode = null;
    let savedBodyOverflow = '';

    function hasModuleCode(code) {
      return typeof code === 'string' && Object.prototype.hasOwnProperty.call(SECRET_MODULES, code);
    }

    function safeToast(msg) {
      try {
        if (msg && typeof window.showToast === 'function') {
          window.showToast(msg);
        }
      } catch (_) {}
    }

    function hideSecretModalCleanly() {
      try {
        const input = document.getElementById('secretCodeInput');
        if (input) {
          input.value = '';
          try { input.blur(); } catch (_) {}
        }
        if (typeof window.closeSecretCodeModal === 'function') {
          window.closeSecretCodeModal();
        } else {
          const modal = document.getElementById('secretCodeModal');
          if (modal) modal.style.display = 'none';
        }
      } catch (_) {}
    }

    function isExtraOpen() {
      const el = document.getElementById(OVERLAY_ID);
      return !!(activeCode && el);
    }

    function closeIsolatedModule(silent) {
      try {
        if (window.speechSynthesis && typeof window.speechSynthesis.cancel === 'function') {
          window.speechSynthesis.cancel();
        }
      } catch (_) {}

      try {
        const frame = document.getElementById(IFRAME_ID);
        if (frame) {
          try {
            const cw = frame.contentWindow;
            if (cw) {
              if (cw.speechSynthesis && typeof cw.speechSynthesis.cancel === 'function') {
                cw.speechSynthesis.cancel();
              }
              if (cw.soundManager && typeof cw.soundManager.stopBgm === 'function') {
                cw.soundManager.stopBgm();
              }
            }
          } catch (_) {}
          try { frame.src = 'about:blank'; } catch (_) {}
          try { frame.remove(); } catch (_) {}
        }
      } catch (_) {}

      try {
        const overlay = document.getElementById(OVERLAY_ID);
        if (overlay) {
          overlay.remove();
        }
      } catch (_) {}

      try {
        if (document.body) {
          document.body.style.overflow = savedBodyOverflow || '';
        }
      } catch (_) {}

      const wasOpen = !!activeCode;
      activeCode = null;

      if (wasOpen && !silent) {
        safeToast('🏠 Ana ekrana dönüldü');
      }
    }

    function openIsolatedModule(code, options) {
      try {
        if (!hasModuleCode(code)) return false;
        const mod = SECRET_MODULES[code];

        // Varsa önceki açık modülü tamamen bellekten sil
        if (document.getElementById(OVERLAY_ID)) {
          closeIsolatedModule(true);
        }

        if (document.body) {
          savedBodyOverflow = document.body.style.overflow || '';
          document.body.style.overflow = 'hidden';
        }

        const overlay = document.createElement('div');
        overlay.id = OVERLAY_ID;
        overlay.setAttribute('data-module-code', mod.code);
        overlay.style.cssText = [
          'position:fixed',
          'inset:0',
          'top:0',
          'left:0',
          'right:0',
          'bottom:0',
          'width:100%',
          'height:100%',
          'z-index:100000',
          'background:#090d16',
          'display:flex',
          'flex-direction:column',
          'overflow:hidden'
        ].join(';');

        const iframe = document.createElement('iframe');
        iframe.id = IFRAME_ID;
        iframe.title = mod.title;
        iframe.setAttribute('allow', 'autoplay');
        iframe.style.cssText = 'width:100%;height:100%;border:0;margin:0;padding:0;display:block;flex:1;background:#090d16;';

        let targetSrc = mod.entry;
        if (options && options.page !== undefined && options.page !== null && options.page !== '') {
          targetSrc += '#page=' + encodeURIComponent(String(options.page));
        }

        overlay.appendChild(iframe);
        document.body.appendChild(overlay);
        iframe.src = targetSrc;

        activeCode = mod.code;
        if (!options || !options.silentToast) {
          safeToast(mod.toast);
        }
        return true;
      } catch (_) {
        closeIsolatedModule(true);
        return false;
      }
    }

    // -----------------------------------------------------------------------
    // 1. GİZLİ ŞİFRE GİRİŞİNİ YAKALA (ANA KOD GÖVDESİNE DOKUNMADAN)
    // -----------------------------------------------------------------------
    function tryConsumeSecretInput(inputEl, eventToStop) {
      try {
        if (!inputEl) return false;
        const val = String(inputEl.value || '').trim();
        if (!hasModuleCode(val)) return false;

        if (eventToStop) {
          try { eventToStop.preventDefault(); } catch (_) {}
          try { eventToStop.stopImmediatePropagation(); } catch (_) {}
          try { eventToStop.stopPropagation(); } catch (_) {}
        }

        inputEl.value = '';
        hideSecretModalCleanly();
        openIsolatedModule(val);
        return true;
      } catch (_) {
        return false;
      }
    }

    // Capture fazında 4. rakam girildiği anda yakala (app.js 120ms zamanlayıcısından önce)
    document.addEventListener('input', function(e) {
      try {
        const t = e && e.target;
        if (t && t.id === 'secretCodeInput') {
          const val = String(t.value || '').trim();
          if (val.length === 4 && hasModuleCode(val)) {
            if (e.stopImmediatePropagation) e.stopImmediatePropagation();
            if (e.stopPropagation) e.stopPropagation();
            t.value = '';
            setTimeout(function() {
              hideSecretModalCleanly();
              openIsolatedModule(val);
            }, 40);
          }
        }
      } catch (_) {}
    }, true);

    // Enter tuşu ile gönderimi yakala
    document.addEventListener('keydown', function(e) {
      try {
        const t = e && e.target;
        if (t && t.id === 'secretCodeInput' && e.key === 'Enter') {
          tryConsumeSecretInput(t, e);
        } else if (e && e.key === 'Escape' && isExtraOpen()) {
          handleModuleBackPress();
        }
      } catch (_) {}
    }, true);

    // Onayla butonuna tıklamayı yakala
    document.addEventListener('click', function(e) {
      try {
        const t = e && e.target;
        if (!t || !t.closest) return;
        const btn = t.closest('#secretCodeModal .btn-primary');
        if (btn) {
          const input = document.getElementById('secretCodeInput');
          tryConsumeSecretInput(input, e);
        }
      } catch (_) {}
    }, true);

    // window.submitSecretCode güvenlik sarmalayıcısı (programatik çağrılar için)
    function wrapSubmitSecretCode() {
      try {
        if (typeof window.submitSecretCode === 'function' && !window.submitSecretCode.__isolatedWrapped) {
          const origSubmit = window.submitSecretCode;
          const wrapped = function() {
            try {
              const input = document.getElementById('secretCodeInput');
              if (input && tryConsumeSecretInput(input, null)) {
                return;
              }
            } catch (_) {}
            return origSubmit.apply(this, arguments);
          };
          wrapped.__isolatedWrapped = true;
          window.submitSecretCode = wrapped;
        }
      } catch (_) {}
    }

    // -----------------------------------------------------------------------
    // 2. İFRAME MESAJ KÖPRÜSÜ (KAPATMA & HİKAYE <-> KELİMELER GEÇİŞİ)
    // -----------------------------------------------------------------------
    window.addEventListener('message', function(e) {
      try {
        if (!e || !e.data) return;
        let data = e.data;

        if (typeof data === 'string') {
          if (
            data === 'EXTRA_MODULE_CLOSE' ||
            data === 'CLOSE_HAFIZA_GAME' ||
            data === 'close_game' ||
            data === 'exit_to_main' ||
            data === 'close_modal' ||
            data === 'go_home'
          ) {
            closeIsolatedModule(false);
            return;
          }
          try { data = JSON.parse(data); } catch (_) { return; }
        }

        if (data && typeof data === 'object') {
          if (
            data.type === 'EXTRA_MODULE_CLOSE' ||
            data.type === 'CLOSE_HAFIZA_GAME' ||
            data.action === 'returnToMainMenu'
          ) {
            closeIsolatedModule(false);
            return;
          }
          if (data.type === 'EXTRA_MODULE_OPEN' && hasModuleCode(String(data.code || ''))) {
            openIsolatedModule(String(data.code), {
              page: data.page,
              silentToast: true
            });
          }
        }
      } catch (_) {}
    });

    // -----------------------------------------------------------------------
    // 3. ANDROID DONANIM GERİ TUŞU ENTEGRASYONU (HATA KORUMALI)
    // -----------------------------------------------------------------------
    function handleModuleBackPress() {
      try {
        if (!isExtraOpen()) return false;
        const frame = document.getElementById(IFRAME_ID);
        if (frame && frame.contentWindow) {
          try {
            if (typeof frame.contentWindow.__moduleHandleBack === 'function') {
              const handledInternally = frame.contentWindow.__moduleHandleBack();
              if (handledInternally === true) {
                return true;
              }
            }
          } catch (_) {}
        }
        closeIsolatedModule(false);
        return true;
      } catch (_) {
        closeIsolatedModule(true);
        return true;
      }
    }

    function wrapHandleBack() {
      try {
        const origHandleBack = window.handleBack;
        if (origHandleBack && origHandleBack.__isolatedWrapped) return;
        const wrappedBack = function() {
          try {
            if (isExtraOpen()) {
              return handleModuleBackPress();
            }
          } catch (_) {
            try { closeIsolatedModule(true); } catch (__) {}
            return true;
          }
          if (typeof origHandleBack === 'function') {
            return origHandleBack.apply(this, arguments);
          }
          return false;
        };
        wrappedBack.__isolatedWrapped = true;
        window.handleBack = wrappedBack;
      } catch (_) {}
    }

    wrapSubmitSecretCode();
    wrapHandleBack();
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        wrapSubmitSecretCode();
        wrapHandleBack();
      });
    }

    window.IsolatedExtras = Object.freeze({
      open: openIsolatedModule,
      close: closeIsolatedModule,
      isOpen: isExtraOpen,
      getActiveCode: function() { return activeCode; }
    });
  } catch (_) {
    // Başlatıcıda oluşabilecek herhangi bir beklenmedik hata yutulur, ana uygulama etkilenmez.
  }
})(window, document);

