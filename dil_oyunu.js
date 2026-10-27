// ==========================================
// DIL_OYUNU.JS - ARAPÇA DİL OYUNU & ADMİN MODÜLÜ
// (Hem ana mekanizmalardan hem diğer ekstra modüllerden tamamen izole)
// ==========================================
(function(window) {
  'use strict';

  try {
// ==========================================
// ARAPÇA OYUNU ADMİN SAYFASI (GİZLİ KOD: 0001)
// ==========================================
function openDilOyunuAdminModal() {
  const container = document.getElementById("dilOyunuAdminContainerModal");
  const iframe = document.getElementById("dilOyunuAdminIframe");
  if (container && iframe) {
    iframe.src = "dil_oyunu_admin.html";
    container.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

function closeDilOyunuAdminModal() {
  const container = document.getElementById("dilOyunuAdminContainerModal");
  const iframe = document.getElementById("dilOyunuAdminIframe");
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
window.openDilOyunuAdminModal = openDilOyunuAdminModal;
window.closeDilOyunuAdminModal = closeDilOyunuAdminModal;




    const DilOyunuModule = {
      openDilOyunuAdminModal,
      closeDilOyunuAdminModal
    };

    window.DilOyunuModule = DilOyunuModule;

    for (const [key, fn] of Object.entries(DilOyunuModule)) {
      if (typeof fn === 'function') {
        window[key] = function(...args) {
          try {
            return fn(...args);
          } catch (e) {
            console.error(`[DilOyunuModule ${key} Hatası]:`, e);
          }
        };
      }
    }

  } catch (moduleCrash) {
    console.error('[DilOyunuModule Yükleme Hatası]:', moduleCrash);
  }
})(window);
