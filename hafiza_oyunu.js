// ==========================================
// HAFIZA_OYUNU.JS - 3D HAFIZA OYUNU & 10 DK ÖDÜL SİSTEMİ
// (Hem ana mekanizmalardan hem diğer ekstra modüllerden tamamen izole)
// ==========================================
(function(window) {
  'use strict';

  try {
    const isAndroid = typeof window.AndroidBridge !== 'undefined';
    window.isAndroid = isAndroid;

// ======================================================================
// 10 DAKİKALIK SERBEST İZİN VE SAYAÇ DONDURMA
// ==========================================
let gameRewardUntil = parseInt(localStorage.getItem("sinirlayici_game_reward_until") || "0", 10);

function isGameRewardActive() {
  return Date.now() < gameRewardUntil;
}

function triggerGameReward10Minutes(currentScore) {
  // 10 dakika (10 * 60 * 1000 ms)
  const durationMs = 10 * 60 * 1000;
  gameRewardUntil = Date.now() + durationMs;
  localStorage.setItem("sinirlayici_game_reward_until", gameRewardUntil.toString());

  // Kilitli tüm uygulamaları serbest bırak
  activeLimits.forEach(item => {
    item.isBlocked = false;
    item.remainingCooldownSeconds = 0;
  });

  // Android Native Köprüsüne Bildir (Geçici Muafiyet)
  if (isAndroid && window.AndroidBridge.saveWhitelistedPackages) {
    try {
      const allPkgs = installedApps.map(a => a.packageName);
      window.AndroidBridge.saveWhitelistedPackages(JSON.stringify(allPkgs));
    } catch (e) {}
  }

  // Tebrik Modalını Aç
  const victoryModal = document.getElementById("rewardVictoryModal");
  if (victoryModal) victoryModal.style.display = "flex";

  renderLimitsList(false);
  updateGameRewardBanner();
}

function closeRewardVictoryModal() {
  const victoryModal = document.getElementById("rewardVictoryModal");
  if (victoryModal) victoryModal.style.display = "none";
}

function updateGameRewardBanner() {
  const container = document.getElementById("tabLimits");
  if (!container) return;

  let banner = document.getElementById("gameRewardActiveBanner");
  if (isGameRewardActive()) {
    const remainingSec = Math.max(0, Math.floor((gameRewardUntil - Date.now()) / 1000));
    const mins = Math.floor(remainingSec / 60);
    const secs = remainingSec % 60;
    const timeStr = `${mins}:${secs < 10 ? '0' : ''}${secs}`;

    if (!banner) {
      banner = document.createElement("div");
      banner.id = "gameRewardActiveBanner";
      banner.style.cssText = "background: linear-gradient(135deg, rgba(245, 158, 11, 0.25), rgba(217, 119, 6, 0.15)); border: 1px solid rgba(245, 158, 11, 0.6); border-radius: 14px; padding: 12px 16px; margin: 0 16px 14px 16px; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 0 16px rgba(245, 158, 11, 0.25);";
      const titleSec = container.querySelector(".section-title");
      if (titleSec) titleSec.insertAdjacentElement("afterend", banner);
      else container.prepend(banner);
    }
    banner.innerHTML = `
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 1.3rem;">🎁</span>
        <div>
          <strong style="color: #fbbf24; font-size: 0.88rem; display: block;">10 Dk Serbest İzin Aktif!</strong>
          <span style="font-size: 0.72rem; color: #fef3c7;">Uygulamalar kilitlenmez, sayaçlar donduruldu.</span>
        </div>
      </div>
      <span style="font-size: 1.1rem; font-weight: 800; color: #fbbf24; background: rgba(0,0,0,0.3); padding: 4px 10px; border-radius: 8px;">${timeStr}</span>
    `;
    banner.style.display = "flex";
  } else {
    if (banner) banner.style.display = "none";
  }
}




// ==========================================
// 3D HAFIZA OYUNU İFRAME YÖNETİMİ & PUAN SİSTEMİ
// ==========================================
let hafizaPollInterval = null;

function openHafizaGameModal() {
  const container = document.getElementById("hafizaGameContainerModal");
  const iframe = document.getElementById("hafizaGameIframe");
  if (container && iframe) {
    try { localStorage.removeItem("sinirlayici_hafiza_trigger"); } catch (_) {}
    iframe.src = "hafiza_oyunu/index.html";
    container.style.display = "flex";
    document.body.style.overflow = "hidden";

    if (hafizaPollInterval) clearInterval(hafizaPollInterval);
    hafizaPollInterval = setInterval(() => {
      try {
        const val = localStorage.getItem("sinirlayici_hafiza_trigger");
        if (val && val.startsWith("close_")) {
          localStorage.removeItem("sinirlayici_hafiza_trigger");
          if (hafizaPollInterval) {
            clearInterval(hafizaPollInterval);
            hafizaPollInterval = null;
          }
          closeHafizaGameModal();
        }
      } catch (_) {}
    }, 150);
  }
}

function closeHafizaGameModal() {
  if (hafizaPollInterval) {
    clearInterval(hafizaPollInterval);
    hafizaPollInterval = null;
  }
  try { localStorage.removeItem("sinirlayici_hafiza_trigger"); } catch (_) {}
  const container = document.getElementById("hafizaGameContainerModal");
  const iframe = document.getElementById("hafizaGameIframe");
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
  showToast("🏠 Ana ekrana dönüldü.");
}
window.closeHafizaGameModal = closeHafizaGameModal;
window.openHafizaGameModal = openHafizaGameModal;



// ==========================================
// HAFIZA OYUNU 80K+ SKOR BANNERI (15 DAKİKA)
// ==========================================
function recordHafizaHighScoreBanner(score) {
  const numScore = parseInt(score, 10);
  if (isNaN(numScore) || numScore < 80000) return;

  const prevScore = parseInt(localStorage.getItem("sinirlayici_hafiza_80k_score") || "0", 10);
  const bestScore = Math.max(numScore, prevScore);

  // 15 dakika boyunca (15 * 60 * 1000 ms)
  const expiresAt = Date.now() + 15 * 60 * 1000;

  localStorage.setItem("sinirlayici_hafiza_80k_score", bestScore.toString());
  localStorage.setItem("sinirlayici_hafiza_80k_expires_at", expiresAt.toString());

  renderHafizaScoreBanner();
}

function renderHafizaScoreBanner() {
  const banner = document.getElementById("hafizaScoreBanner");
  if (!banner) return;

  const rawExpires = localStorage.getItem("sinirlayici_hafiza_80k_expires_at");
  const rawScore = localStorage.getItem("sinirlayici_hafiza_80k_score");

  if (!rawExpires || !rawScore) {
    banner.style.display = "none";
    return;
  }

  const expiresAt = parseInt(rawExpires, 10);
  const score = parseInt(rawScore, 10);
  const now = Date.now();

  if (now >= expiresAt || isNaN(score) || score < 80000) {
    banner.style.display = "none";
    localStorage.removeItem("sinirlayici_hafiza_80k_score");
    localStorage.removeItem("sinirlayici_hafiza_80k_expires_at");
    return;
  }

  const remainingSeconds = Math.max(0, Math.ceil((expiresAt - now) / 1000));
  const mins = Math.floor(remainingSeconds / 60);
  const secs = remainingSeconds % 60;
  const timeFormatted = `${mins}:${secs < 10 ? '0' : ''}${secs}`;

  const scoreText = document.getElementById("hafizaScoreBannerValue");
  const timerText = document.getElementById("hafizaScoreBannerTimer");

  if (scoreText) {
    scoreText.textContent = `${score.toLocaleString("tr-TR")} Puan Yapıldı! 🎉`;
  }
  if (timerText) {
    timerText.textContent = `⏱️ ${timeFormatted}`;
  }

  banner.style.display = "flex";
}

window.recordHafizaHighScoreBanner = recordHafizaHighScoreBanner;
window.renderHafizaScoreBanner = renderHafizaScoreBanner;

function onHafizaGameScore(score) {
  const numScore = parseInt(score, 10);
  if (isNaN(numScore)) return;

  if (numScore >= 22000) {
    triggerGameReward10Minutes(numScore);
  }
  if (numScore >= 80000) {
    recordHafizaHighScoreBanner(numScore);
  }
}
window.onHafizaGameScore = onHafizaGameScore;



// Oyundan gelen mesajları ve depolama tetikleyicilerini dinle
window.addEventListener("message", (e) => {
  if (!e.data) return;
  let data = e.data;
  if (typeof data === "string") {
    if (data === "CLOSE_HAFIZA_GAME") {
      closeHafizaGameModal();
      return;
    }
    try {
      data = JSON.parse(data);
    } catch (_) {}
  }
  if (data && (data.type === "CLOSE_HAFIZA_GAME" || data === "CLOSE_HAFIZA_GAME")) {
    closeHafizaGameModal();
  }
  if (data && data.type === "HAFIZA_GAME_SCORE") {
    onHafizaGameScore(data.score);
  }
});

window.addEventListener("storage", (e) => {
  if (e.key === "sinirlayici_hafiza_trigger" && e.newValue && e.newValue.startsWith("close_")) {
    try { localStorage.removeItem("sinirlayici_hafiza_trigger"); } catch (_) {}
    closeHafizaGameModal();
  }
});




    function tick() {
      try {
        renderHafizaScoreBanner();
        updateGameRewardBanner();
      } catch (err) {
        console.warn('[HafizaOyunuModule Tick Hatası]:', err);
      }
    }

    function init() {
      try {
        renderHafizaScoreBanner();
        updateGameRewardBanner();
      } catch (err) {
        console.error('[HafizaOyunuModule Init Hatası]:', err);
      }
    }

    const HafizaOyunuModule = {
      init,
      tick,
      isGameRewardActive,
      triggerGameReward10Minutes,
      closeRewardVictoryModal,
      updateGameRewardBanner,
      openHafizaGameModal,
      closeHafizaGameModal,
      recordHafizaHighScoreBanner,
      renderHafizaScoreBanner,
      onHafizaGameScore
    };

    window.HafizaOyunuModule = HafizaOyunuModule;

    for (const [key, fn] of Object.entries(HafizaOyunuModule)) {
      if (typeof fn === 'function' && key !== 'init' && key !== 'tick') {
        window[key] = function(...args) {
          try {
            return fn(...args);
          } catch (e) {
            console.error(`[HafizaOyunuModule ${key} Hatası]:`, e);
          }
        };
      }
    }

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      init();
    } else {
      document.addEventListener('DOMContentLoaded', init);
    }

  } catch (moduleCrash) {
    console.error('[HafizaOyunuModule Yükleme Hatası]:', moduleCrash);
  }
})(window);
