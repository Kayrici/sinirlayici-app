// ==========================================
// HIKAYE.JS - ARAPÇA HİKAYE VE KELİME DAĞARCIĞI MODÜLÜ
// (Hem ana mekanizmalardan hem diğer ekstra modüllerden tamamen izole)
// ==========================================
(function(window) {
  'use strict';

  try {
// ==========================================
// ARAPÇA HİKAYE VE KELİME ÇÖZÜMLEME MODALI (KOD: 6444)
// ==========================================
function openHikayeModal() {
  const container = document.getElementById("hikayeContainerModal");
  const iframe = document.getElementById("hikayeIframe");
  if (container && iframe) {
    iframe.src = "hikaye.html";
    container.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

function closeHikayeModal() {
  const container = document.getElementById("hikayeContainerModal");
  const iframe = document.getElementById("hikayeIframe");
  if (container) {
    container.style.display = "none";
  }
  if (iframe) {
    try {
      iframe.src = "about:blank";
    } catch (e) {}
  }
  document.body.style.overflow = "";
  if (typeof switchTab === 'function') {
    switchTab('limits');
  }
  if (typeof showToast === 'function') {
    showToast("🏠 Ana Menüye Dönüldü.");
  }
}
window.closeHikayeModal = closeHikayeModal;
window.openHikayeModal = openHikayeModal;



// ==========================================
// HİKAYE KELİMELERİ VE ALIŞTIRMA SAYFASI (GİZLİ KOD: 4445)
// ==========================================
function openHikayeKelimelerModal() {
  const container = document.getElementById("hikayeKelimelerContainerModal");
  const iframe = document.getElementById("hikayeKelimelerIframe");
  if (container && iframe) {
    iframe.src = "hikaye_kelimeler.html";
    container.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

function closeHikayeKelimelerModal() {
  const container = document.getElementById("hikayeKelimelerContainerModal");
  const iframe = document.getElementById("hikayeKelimelerIframe");
  if (container) {
    container.style.display = "none";
  }
  if (iframe) {
    try {
      iframe.src = "about:blank";
    } catch (e) {}
  }
  document.body.style.overflow = "";
  if (typeof switchTab === 'function') {
    switchTab('limits');
  }
  if (typeof showToast === 'function') {
    showToast("🏠 Ana Menüye Dönüldü.");
  }
}
window.openHikayeKelimelerModal = openHikayeKelimelerModal;
window.closeHikayeKelimelerModal = closeHikayeKelimelerModal;




    const HikayeModule = {
      openHikayeModal,
      closeHikayeModal,
      openHikayeKelimelerModal,
      closeHikayeKelimelerModal
    };

    window.HikayeModule = HikayeModule;

    for (const [key, fn] of Object.entries(HikayeModule)) {
      if (typeof fn === 'function') {
        window[key] = function(...args) {
          try {
            return fn(...args);
          } catch (e) {
            console.error(`[HikayeModule ${key} Hatası]:`, e);
          }
        };
      }
    }

  } catch (moduleCrash) {
    console.error('[HikayeModule Yükleme Hatası]:', moduleCrash);
  }
})(window);
