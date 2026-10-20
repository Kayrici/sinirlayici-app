// Sınırlayıcı - Ana Uygulama Mantığı (Süre Sınırı, Pomodoro ve Hatırlatıcılar)

let installedApps = [];
let activeLimits = [];
let reminders = [];
let currentEditingApp = null;
let currentMode = 'daily';
let selectedDailyMinutes = 30;
let selectedActiveMinutes = 5;
let selectedCooldownMinutes = 25;

// Whitelist (Asla Sınırlanmayacak Uygulamalar)
let whitelistedSet = new Set();
let tempWhitelistSet = new Set();

// Pomodoro Durumu
let pomodoroActive = false;
let pomodoroRemainingSec = 0;
let pomodoroDurationMins = 25;
let pomodoroAllowedSet = new Set();
let pomodoroSearchFilter = "";

// Hatırlatıcı Modal Durumu
let currentEditingReminderId = null;
let currentReminderType = 'daily';
let selectedReminderStopCondition = 'never';
let selectedWeeklyDays = new Set([1, 2, 3, 4, 5]);
let selectedReminderInterval = 30;
let selectedReminderAppUsage = 20;

const isAndroid = typeof window.AndroidBridge !== 'undefined';

// Mock veriler (Tarayıcı ortamında geliştirme için)
const mockApps = [
  { packageName: "com.android.settings", appName: "Ayarlar", todayUsageSeconds: 120, icon: "" },
  { packageName: "com.google.android.dialer", appName: "Telefon", todayUsageSeconds: 300, icon: "" },
  { packageName: "com.google.android.apps.messaging", appName: "Mesajlar", todayUsageSeconds: 240, icon: "" },
  { packageName: "com.instagram.android", appName: "Instagram", todayUsageSeconds: 1500, icon: "" },
  { packageName: "com.google.android.youtube", appName: "YouTube", todayUsageSeconds: 2700, icon: "" },
  { packageName: "com.zhiliaoapp.musically", appName: "TikTok", todayUsageSeconds: 900, icon: "" },
  { packageName: "com.whatsapp", appName: "WhatsApp", todayUsageSeconds: 420, icon: "" },
  { packageName: "com.twitter.android", appName: "X (Twitter)", todayUsageSeconds: 180, icon: "" }
];

let mockLimits = [
  {
    packageName: "com.instagram.android",
    appName: "Instagram",
    mode: "interval",
    dailyLimitMinutes: 30,
    intervalActiveMinutes: 5,
    intervalCooldownMinutes: 25,
    enabled: true,
    usedTodaySeconds: 1500,
    sessionSeconds: 0,
    cooldownUntil: 0,
    isBlocked: false,
    remainingSessionSeconds: 300,
    remainingCooldownSeconds: 0
  }
];

let mockReminders = [
  {
    id: "1",
    type: "daily",
    message: "Güne dinç başla ve 2 bardak su iç! 💧",
    icon: "bell",
    timeOfDay: "09:00",
    stopCondition: "never",
    enabled: true,
    completed: false,
    enableTracking: true,
    doneCount: 6,
    notDoneCount: 1,
    lastActionDate: "2026-10-12",
    lastActionStatus: "done",
    trackingHistoryJson: '{"2026-10-06":"done","2026-10-07":"done","2026-10-08":"done","2026-10-09":"not_done","2026-10-10":"done","2026-10-11":"done","2026-10-12":"done"}'
  }
];

// Sayfa Başlatma
document.addEventListener("DOMContentLoaded", () => {
  loadData();
  checkPermissionStatus();
  updateExplanationBox();

  // İlk kurulum kontrolü (Asla sınırlanmayacak uygulamalar önerisi)
  checkFirstLaunchWhitelist();

  // 5 saniye basılı tutma dinleyicisi ve zamanlanmış kilit banner'ı
  setupHoldToOpenScheduledLock();
  setupBrandClockSecretHold();
  applyTabVisibility();
  updateScheduledLockBanner();
  renderHafizaScoreBanner();

  // Canlı saniye döngüsü
  setInterval(() => {
    tickLiveUpdates();
  }, 1000);
});

// ==========================================
// ANA SEKME GEÇİŞLERİ (SADECE 3 SEKME)
// ==========================================
let currentReminderScope = 'self';
let verifiedTargetUser = null;

function switchTab(tabId) {
  document.querySelectorAll(".nav-tabs .tab-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

  if (tabId === 'limits') {
    const btn = document.getElementById("tabBtnLimits") || document.querySelectorAll(".nav-tabs .tab-btn")[0];
    if (btn) btn.classList.add("active");
    const content = document.getElementById("tabLimits");
    if (content) content.classList.add("active");
    renderLimitsList();
    updateScheduledLockBanner();
    setupHoldToOpenScheduledLock();
  } else if (tabId === 'pomodoro') {
    const btn = document.getElementById("tabBtnPomodoro") || document.querySelector(".nav-tabs .pomodoro-tab");
    if (btn) btn.classList.add("active");
    const content = document.getElementById("tabPomodoro");
    if (content) content.classList.add("active");
    renderPomodoroUI();
  } else if (tabId === 'reminders') {
    const btn = document.getElementById("tabBtnReminders") || document.querySelectorAll(".nav-tabs .tab-btn")[2];
    if (btn) btn.classList.add("active");
    const content = document.getElementById("tabReminders");
    if (content) content.classList.add("active");
    switchReminderScope('self');
  }
}

// Tüm Verileri Yükle
function loadData() {
  loadWhitelistSet();
  installedApps = getInstalledAppsNative();
  activeLimits = getLimitsNative();
  reminders = getRemindersNative();

  const pomoStatus = getPomodoroStatusNative();
  pomodoroActive = pomoStatus.active;
  pomodoroRemainingSec = pomoStatus.remainingSeconds || 0;
  pomodoroDurationMins = pomoStatus.durationMinutes || 25;
  if (pomoStatus.allowedPackages) {
    pomodoroAllowedSet = new Set(pomoStatus.allowedPackages);
  }

  renderLimitsList();
  renderPomodoroUI();
  renderRemindersList();
  updateLimitsBadge();
  updateRemindersBadge();
  loadIncomingNotice();
  populateReminderAppSelect();
  populateReminderMonthlyDays();
}

function loadWhitelistSet() {
  if (isAndroid && window.AndroidBridge.getWhitelistedPackages) {
    try {
      const raw = window.AndroidBridge.getWhitelistedPackages();
      const arr = JSON.parse(raw);
      whitelistedSet = new Set(arr);
    } catch (e) {
      whitelistedSet = new Set();
    }
  }
}

function checkPermissionStatus() {
  const enabled = isAccessibilityEnabledNative();
  const badge = document.getElementById("serviceStatusBadge");
  const text = document.getElementById("serviceStatusText");
  const banner = document.getElementById("permissionBanner");

  if (enabled) {
    badge.className = "status-badge active";
    text.textContent = "Koruma Aktif";
    if (banner) banner.style.display = "none";
  } else {
    badge.className = "status-badge warning";
    text.textContent = "İzin Gerekli";
    if (banner) banner.style.display = "flex";
  }
}

function handleServiceBadgeClick() {
  if (!isAccessibilityEnabledNative()) {
    openAccessibilitySettings();
  } else {
    showToast("Sınırlayıcı koruma servisi şu anda aktif çalışıyor.");
  }
}

let liveTickCounter = 0;
function tickLiveUpdates() {
  liveTickCounter++;
  activeLimits = getLimitsNative();
  updateLimitsBadge();
  updateRemindersBadge();
  checkPermissionStatus();
  renderHafizaScoreBanner();

  // Pomodoro sayacı
  const pomoStatus = getPomodoroStatusNative();
  pomodoroActive = pomoStatus.active;
  pomodoroRemainingSec = pomoStatus.remainingSeconds || 0;
  updatePomodoroDisplay();

  // Sınırlar sekmesi açıksa sayaçları tazele
  if (document.getElementById("tabLimits") && document.getElementById("tabLimits").classList.contains("active")) {
    renderLimitsList(false);
    updateScheduledLockBanner();
  }

  // Hatırlatıcılar sekmesinde 'Kendim' açıkken yeni gelen hatırlatıcı isteklerini canlı tara
  if (liveTickCounter % 5 === 0) {
    const tabReminders = document.getElementById("tabReminders");
    if (tabReminders && tabReminders.classList.contains("active") && currentReminderScope === 'self') {
      loadIncomingNotice();
    }
  }
}

// ==========================================
// 1. SINIRLAR LİSTESİ (PAKET ADLARI GİZLİ)
// ==========================================

function getLockBadgeIcon(isBlocked) {
  if (isBlocked) {
    // 3D Kırmızı Kilit (Kilitli / Engelli)
    return `<svg class="lock-3d-svg locked" viewBox="0 0 32 32" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shackleMetalLocked" x1="9" y1="2" x2="23" y2="15" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="20%" stop-color="#e2e8f0"/>
          <stop offset="55%" stop-color="#94a3b8"/>
          <stop offset="85%" stop-color="#475569"/>
          <stop offset="100%" stop-color="#1e293b"/>
        </linearGradient>
        <linearGradient id="shackleSheenLocked" x1="16" y1="2" x2="16" y2="14" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="rgba(255,255,255,0.85)"/>
          <stop offset="50%" stop-color="rgba(255,255,255,0.2)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
        </linearGradient>
        <linearGradient id="body3dRed" x1="16" y1="12" x2="16" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#f87171"/>
          <stop offset="25%" stop-color="#ef4444"/>
          <stop offset="70%" stop-color="#dc2626"/>
          <stop offset="100%" stop-color="#991b1b"/>
        </linearGradient>
        <linearGradient id="bodyBevelRed" x1="16" y1="12" x2="16" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="rgba(255,255,255,0.75)"/>
          <stop offset="15%" stop-color="rgba(255,255,255,0.12)"/>
          <stop offset="85%" stop-color="rgba(0,0,0,0.2)"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0.65)"/>
        </linearGradient>
        <filter id="castShadowLocked" x="-25%" y="-15%" width="150%" height="150%">
          <feDropShadow dx="-0.8" dy="1.8" stdDeviation="1" flood-color="rgba(0,0,0,0.6)"/>
        </filter>
      </defs>
      <g filter="url(#castShadowLocked)">
        <path d="M10.5 14V8.5C10.5 5.5 13 3 16 3C19 3 21.5 5.5 21.5 8.5V14" stroke="url(#shackleMetalLocked)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.2 13V8.5C11.2 5.8 13.4 3.7 16 3.7C18.6 3.7 20.8 5.8 20.8 8.5V13" stroke="url(#shackleSheenLocked)" stroke-width="0.9" stroke-linecap="round" fill="none"/>
      </g>
      <g>
        <rect x="7.5" y="12.5" width="17" height="14" rx="3.5" fill="url(#body3dRed)"/>
        <rect x="8" y="13" width="16" height="13" rx="3" stroke="url(#bodyBevelRed)" stroke-width="1" fill="none"/>
        <path d="M9 13.5C9 13.5 12 13.2 14 14.2C12.5 15.8 9 16 9 16V13.5Z" fill="white" opacity="0.32"/>
        <circle cx="16" cy="18" r="2.2" fill="#450a0a"/>
        <polygon points="14.9,18.5 14.5,22.2 17.5,22.2 17.1,18.5" fill="#450a0a"/>
        <circle cx="16" cy="18" r="1.4" fill="#1c0505"/>
        <polygon points="15.2,18.8 14.9,21.8 17.1,21.8 16.8,18.8" fill="#1c0505"/>
        <path d="M14.8 22.4C15.5 22.8 16.5 22.8 17.2 22.4" stroke="rgba(255,255,255,0.45)" stroke-width="0.6" stroke-linecap="round"/>
      </g>
    </svg>`;
  } else {
    // 3D Yeşil Kilit (Aktif / Açık Kilit - Demiri Sol Tarafta Açık)
    return `<svg class="lock-3d-svg unlocked" viewBox="0 0 32 32" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shackleMetalUnlocked" x1="5" y1="2" x2="16" y2="15" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="20%" stop-color="#e2e8f0"/>
          <stop offset="55%" stop-color="#94a3b8"/>
          <stop offset="85%" stop-color="#475569"/>
          <stop offset="100%" stop-color="#1e293b"/>
        </linearGradient>
        <linearGradient id="shackleSheenUnlocked" x1="11" y1="2" x2="11" y2="14" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="rgba(255,255,255,0.85)"/>
          <stop offset="50%" stop-color="rgba(255,255,255,0.2)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
        </linearGradient>
        <linearGradient id="body3dGreen" x1="18" y1="12" x2="18" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#34d399"/>
          <stop offset="25%" stop-color="#10b981"/>
          <stop offset="70%" stop-color="#059669"/>
          <stop offset="100%" stop-color="#047857"/>
        </linearGradient>
        <linearGradient id="bodyBevelGreen" x1="18" y1="12" x2="18" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="rgba(255,255,255,0.75)"/>
          <stop offset="15%" stop-color="rgba(255,255,255,0.12)"/>
          <stop offset="85%" stop-color="rgba(0,0,0,0.15)"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0.6)"/>
        </linearGradient>
        <filter id="castShadowUnlocked" x="-25%" y="-15%" width="150%" height="150%">
          <feDropShadow dx="-0.8" dy="1.8" stdDeviation="1" flood-color="rgba(0,0,0,0.6)"/>
        </filter>
      </defs>
      <g filter="url(#castShadowUnlocked)">
        <path d="M17 14.5V8.2C17 5.3 14.6 3 11.7 3C8.8 3 6.4 5.3 6.4 8.2V15.5" stroke="url(#shackleMetalUnlocked)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16.5 13.5V8.2C16.5 5.6 14.3 3.6 11.7 3.6C9.1 3.6 7 5.6 7 8.2V13.5" stroke="url(#shackleSheenUnlocked)" stroke-width="0.9" stroke-linecap="round" fill="none"/>
      </g>
      <g>
        <rect x="9.5" y="12.5" width="17" height="14" rx="3.5" fill="url(#body3dGreen)"/>
        <rect x="10" y="13" width="16" height="13" rx="3" stroke="url(#bodyBevelGreen)" stroke-width="1" fill="none"/>
        <path d="M11 13.5C11 13.5 14 13.2 16 14.2C14.5 15.8 11 16 11 16V13.5Z" fill="white" opacity="0.32"/>
        <circle cx="18" cy="18" r="2.2" fill="#022c22"/>
        <polygon points="16.9,18.5 16.5,22.2 19.5,22.2 19.1,18.5" fill="#022c22"/>
        <circle cx="18" cy="18" r="1.4" fill="#011711"/>
        <polygon points="17.2,18.8 16.9,21.8 19.1,21.8 18.8,18.8" fill="#011711"/>
        <path d="M16.8 22.4C17.5 22.8 18.5 22.8 19.2 22.4" stroke="rgba(255,255,255,0.45)" stroke-width="0.6" stroke-linecap="round"/>
      </g>
    </svg>`;
  }
}

function renderLimitsList(fullRebuild = true) {
  const container = document.getElementById("limitsList");
  const emptyState = document.getElementById("emptyLimitsState");

  if (!activeLimits || activeLimits.length === 0) {
    container.innerHTML = "";
    emptyState.style.display = "block";
    return;
  }
  emptyState.style.display = "none";

  if (!fullRebuild && container.children.length === activeLimits.length) {
    activeLimits.forEach((item, index) => {
      const card = container.children[index];
      if (card) updateCardMetrics(card, item);
    });
    return;
  }

  container.innerHTML = activeLimits.map(item => {
    const appInfo = installedApps.find(a => a.packageName === item.packageName);
    const iconHtml = (appInfo && appInfo.icon) 
      ? `<img src="${appInfo.icon}" class="app-avatar-img" alt="${escapeAttr(item.appName)}">`
      : `<div class="app-avatar" style="background: ${getAppGradient(item.appName)}">${escapeHtml(item.appName.substring(0, 1).toUpperCase())}</div>`;

    // KULLANICI İSTEĞİ:
    // 1. Bugün kaç dakika kullanıldığı gösterilmesin!
    // 2. Kilitli ya da aktif seçenekleri yerine kilit simgesi: kilitliyse kapalı, aktifse açık (demiri solda açık)
    return `
      <div class="limit-card ${item.isBlocked ? 'blocked' : ''}" data-pkg="${item.packageName}">
        <div class="card-top">
          <div class="app-meta">
            ${iconHtml}
            <div class="app-info">
              <h3>${escapeHtml(item.appName)}</h3>
            </div>
          </div>
          <div class="card-lock-badge ${item.isBlocked ? 'locked' : 'unlocked'}" title="${item.isBlocked ? 'Kilitli' : 'Aktif'}">
            ${getLockBadgeIcon(item.isBlocked)}
          </div>
        </div>

        <div class="card-details">
          <div class="detail-item">
            <span class="detail-label">Sınır Kuralı</span>
            <span class="detail-val">
              ${item.mode === 'daily' 
                ? `Günlük: ${item.dailyLimitMinutes} dk` 
                : `Aralık: ${item.intervalActiveMinutes} dk / ${item.intervalCooldownMinutes} dk Mola`}
            </span>
          </div>
          <div class="detail-item" style="text-align: right;">
            <span class="detail-label">Durum / Kalan</span>
            <span class="detail-val metric-text">
              ${formatCardMetric(item)}
            </span>
          </div>
        </div>

        <div class="card-actions">
          ${isStrictLockActive() ? `
            <button class="btn-icon-subtle" onclick="showStrictLockAlert()" style="opacity: 0.55; cursor: not-allowed; color: #94a3b8;" title="5 Günlük Kilit Devrede">
              🔒 Kilitli
            </button>
            <button class="btn-icon-danger" onclick="showStrictLockAlert()" style="opacity: 0.45; cursor: not-allowed; color: #ef4444;" title="5 Günlük Kilit Devrede">
              🗑️ Kaldırılamaz
            </button>
          ` : `
            <button class="btn-icon-subtle" onclick="editLimit('${escapeAttr(item.packageName)}')">
              ⚙️ Düzenle
            </button>
            <button class="btn-icon-danger" onclick="deleteLimit('${escapeAttr(item.packageName)}')">
              🗑️ Kaldır
            </button>
          `}
        </div>
      </div>
    `;
  }).join("");
}

function updateCardMetrics(card, item) {
  if (item.isBlocked) {
    card.classList.add("blocked");
  } else {
    card.classList.remove("blocked");
  }

  const lockBadge = card.querySelector(".card-lock-badge");
  if (lockBadge) {
    lockBadge.className = `card-lock-badge ${item.isBlocked ? 'locked' : 'unlocked'}`;
    lockBadge.innerHTML = getLockBadgeIcon(item.isBlocked);
    lockBadge.title = item.isBlocked ? 'Kilitli' : 'Aktif';
  }

  const metric = card.querySelector(".metric-text");
  if (metric) {
    metric.textContent = formatCardMetric(item);
  }
}

function formatCardMetric(item) {
  if (item.mode === 'daily') {
    if (item.isBlocked) {
      return "Süre Doldu (Kilitli)";
    }
    const remSec = item.remainingTodaySeconds !== undefined ? item.remainingTodaySeconds : Math.max(0, item.dailyLimitMinutes * 60 - item.usedTodaySeconds);
    return `${formatSeconds(remSec)} kaldı`;
  } else {
    if (item.isBlocked && item.remainingCooldownSeconds > 0) {
      return "Mola: " + formatSeconds(item.remainingCooldownSeconds) + " kaldı";
    }
    const actRem = item.remainingSessionSeconds !== undefined ? item.remainingSessionSeconds : Math.max(0, item.intervalActiveMinutes * 60 - item.sessionSeconds);
    return `Kalan: ${formatSeconds(actRem)}`;
  }
}

function formatSeconds(totalSec) {
  if (totalSec <= 0) return "0 sn";
  const hours = Math.floor(totalSec / 3600);
  const mins = Math.floor((totalSec % 3600) / 60);
  const secs = totalSec % 60;

  if (hours > 0) return `${hours} sa ${mins} dk`;
  if (mins > 0) return `${mins} dk ${secs} sn`;
  return `${secs} sn`;
}

function updateLimitsBadge() {
  const badge = document.getElementById("limitsCountBadge");
  if (badge) {
    badge.textContent = activeLimits.length;
  }
}

function updateRemindersBadge() {
  const badge = document.getElementById("remindersCountBadge");
  if (badge) {
    const activeCount = (reminders || []).filter(r => r.enabled && !r.completed).length;
    badge.textContent = activeCount;
  }
  const scopeBadge = document.getElementById("scopeOthersBadge");
  if (scopeBadge) {
    if (isAndroid) {
      try {
        const raw = window.AndroidBridge.getSentRequests();
        const sent = JSON.parse(raw);
        if (sent && sent.length > 0) {
          scopeBadge.style.display = "inline-block";
          scopeBadge.textContent = sent.length;
        } else {
          scopeBadge.style.display = "none";
        }
      } catch (e) {
        scopeBadge.style.display = "none";
      }
    }
  }
}

// ==========================================
// 2. POMODORO MODU İŞLEMLERİ (KİTAP SİMGELİ)
// ==========================================

function renderPomodoroUI() {
  updatePomodoroDisplay();
  renderPomodoroAppsList();
}

function updatePomodoroDisplay() {
  const circle = document.getElementById("pomodoroCircle");
  const display = document.getElementById("pomodoroTimeDisplay");
  const status = document.getElementById("pomodoroStatusText");
  const btn = document.getElementById("btnPomodoroToggle");
  const setupControls = document.getElementById("pomodoroSetupControls");

  if (pomodoroActive) {
    circle.classList.add("running");
    const m = Math.floor(pomodoroRemainingSec / 60);
    const s = pomodoroRemainingSec % 60;
    display.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    status.textContent = "Odaklanma Seansı Aktif 📖";
    btn.className = "btn-pomodoro-toggle stop";
    btn.innerHTML = "<span>⏹️ Pomodoro'yu Durdur</span>";
    setupControls.style.display = "none";
  } else {
    circle.classList.remove("running");
    display.textContent = `${String(pomodoroDurationMins).padStart(2, '0')}:00`;
    status.textContent = "Odaklanmaya Hazır";
    btn.className = "btn-pomodoro-toggle start";
    btn.innerHTML = "<span>▶️ Odaklanmayı Başlat</span>";
    setupControls.style.display = "block";
  }
}

function selectPomodoroDuration(mins) {
  if (pomodoroActive) return;
  pomodoroDurationMins = mins;
  document.querySelectorAll("#pomodoroSetupControls .time-chip").forEach(c => {
    const val = parseInt(c.textContent.trim());
    if (val === mins) c.classList.add("selected");
    else c.classList.remove("selected");
  });
  updatePomodoroDisplay();
}

function togglePomodoroState() {
  if (pomodoroActive) {
    stopPomodoroNative();
    pomodoroActive = false;
    showToast("Pomodoro sonlandırıldı.");
  } else {
    const wlSet = getAppWhitelistSet();
    const allowedList = Array.from(pomodoroAllowedSet);
    const blockedList = [];

    installedApps.forEach(app => {
      const pkg = app.packageName;
      if (!pkg || pkg === "com.sinirlayici.app") return;
      if (isEssentialApp(pkg) || wlSet.has(pkg) || pomodoroAllowedSet.has(pkg)) {
        if (!allowedList.includes(pkg)) allowedList.push(pkg);
      } else {
        blockedList.push(pkg);
      }
    });

    // İstisnaları (Whitelist), acil durumları ve kendi uygulamamızı kesinlikle izin verilen listeye dahil et
    const combinedAllowed = Array.from(new Set([...allowedList, ...Array.from(wlSet), "com.sinirlayici.app"]));
    startPomodoroNative(pomodoroDurationMins, blockedList, combinedAllowed);
    pomodoroActive = true;
    pomodoroRemainingSec = pomodoroDurationMins * 60;
    showToast(`Pomodoro başladı! İstisnalar ve izinli uygulamalar serbest, diğerleri kısıtlandı.`);
  }
  renderPomodoroUI();
}

function isEssentialApp(pkg) {
  if (!pkg) return false;
  const p = pkg.toLowerCase();
  if (p === "com.sinirlayici.app") return true;
  if (p.includes("dialer") || p.includes(".telecom") || p.includes("incallui") || p === "com.android.phone" || p.includes(".phone")) return true;
  if (p.includes("messaging") || p.includes(".mms") || p.includes("contacts")) return true;
  return false;
}

function getAppWhitelistSet() {
  const set = new Set();
  try {
    if (isAndroid && window.AndroidBridge.getWhitelistedPackages) {
      const raw = window.AndroidBridge.getWhitelistedPackages();
      if (raw) {
        const arr = JSON.parse(raw);
        arr.forEach(p => set.add(p));
      }
    }
  } catch (e) {}
  return set;
}

function renderPomodoroAppsList() {
  const blockedContainer = document.getElementById("pomodoroBlockedAppsList");
  const allowedContainer = document.getElementById("pomodoroAllowedAppsList");
  const blockedBadge = document.getElementById("pomodoroBlockedCountBadge");
  const allowedBadge = document.getElementById("pomodoroAllowedCountBadge");
  if (!blockedContainer || !allowedContainer) return;

  const wlSet = getAppWhitelistSet();
  const query = (pomodoroSearchFilter || "").toLowerCase().trim();

  const blockedApps = [];
  const allowedApps = [];

  installedApps.forEach(app => {
    if (query && !app.appName.toLowerCase().includes(query)) {
      return;
    }
    const isEssential = isEssentialApp(app.packageName);
    const isWl = wlSet.has(app.packageName);
    const isPomodoroAllowed = pomodoroAllowedSet.has(app.packageName);

    if (isEssential || isWl || isPomodoroAllowed) {
      allowedApps.push({ app, isEssential, isWl, isPomodoroAllowed });
    } else {
      blockedApps.push(app);
    }
  });

  if (blockedBadge) blockedBadge.textContent = blockedApps.length;
  if (allowedBadge) allowedBadge.textContent = allowedApps.length;

  // 1. İZİN VERİLMEYEN (KİLİTLENECEK) UYGULAMALAR
  if (blockedApps.length === 0) {
    blockedContainer.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 14px; font-size: 0.78rem;">Kilitlenecek uygulama yok (Tüm uygulamalara izin verildi).</div>`;
  } else {
    blockedContainer.innerHTML = blockedApps.map(app => {
      const iconHtml = app.icon 
        ? `<img src="${app.icon}" class="app-avatar-img" style="width: 34px; height: 34px; margin-right: 10px;" alt="${escapeAttr(app.appName)}">`
        : `<div class="app-avatar" style="width: 34px; height: 34px; font-size: 0.85rem; margin-right: 10px; background: ${getAppGradient(app.appName)}">${escapeHtml(app.appName.substring(0, 1))}</div>`;

      return `
        <div class="pomodoro-app-row" style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: rgba(255, 255, 255, 0.04); border-radius: 10px;">
          <div style="display: flex; align-items: center; min-width: 0;">
            ${iconHtml}
            <div style="font-size: 0.84rem; font-weight: 600; color: #fff; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
              ${escapeHtml(app.appName)}
            </div>
          </div>
          <button class="btn-pomodoro-action allow" onclick="allowPomodoroApp('${escapeAttr(app.packageName)}')">
            + İzin Ver
          </button>
        </div>
      `;
    }).join("");
  }

  // 2. İZİN VERİLEN UYGULAMALAR (İSTİSNALAR DAHİL)
  if (allowedApps.length === 0) {
    allowedContainer.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 14px; font-size: 0.78rem;">Henüz izin verilmiş uygulama yok.</div>`;
  } else {
    allowedContainer.innerHTML = allowedApps.map(item => {
      const app = item.app;
      const iconHtml = app.icon 
        ? `<img src="${app.icon}" class="app-avatar-img" style="width: 34px; height: 34px; margin-right: 10px;" alt="${escapeAttr(app.appName)}">`
        : `<div class="app-avatar" style="width: 34px; height: 34px; font-size: 0.85rem; margin-right: 10px; background: ${getAppGradient(app.appName)}">${escapeHtml(app.appName.substring(0, 1))}</div>`;

      let actionHtml = "";
      if (item.isEssential) {
        actionHtml = `<span style="font-size: 0.7rem; color: #38bdf8; background: rgba(56, 189, 248, 0.15); padding: 4px 8px; border-radius: 6px; font-weight: 600; white-space: nowrap;">Acil İletişim</span>`;
      } else {
        const badgeLabel = item.isWl ? 'İstisna' : 'İzinli';
        actionHtml = `
          <div style="display: flex; align-items: center; gap: 6px;">
            <span style="font-size: 0.68rem; color: #34d399; background: rgba(16, 185, 129, 0.15); padding: 3px 6px; border-radius: 5px; font-weight: 600;">${badgeLabel}</span>
            <button class="btn-pomodoro-action block" onclick="blockPomodoroApp('${escapeAttr(app.packageName)}')">
              ✕ Kilitle
            </button>
          </div>
        `;
      }

      return `
        <div class="pomodoro-app-row" style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: rgba(255, 255, 255, 0.04); border-radius: 10px;">
          <div style="display: flex; align-items: center; min-width: 0;">
            ${iconHtml}
            <div style="font-size: 0.84rem; font-weight: 600; color: #fff; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
              ${escapeHtml(app.appName)}
            </div>
          </div>
          ${actionHtml}
        </div>
      `;
    }).join("");
  }
}

function filterPomodoroApps() {
  pomodoroSearchFilter = document.getElementById("pomodoroSearchInput")?.value || "";
  renderPomodoroAppsList();
}

function allowPomodoroApp(pkg) {
  pomodoroAllowedSet.add(pkg);
  if (pomodoroActive) {
    const combinedAllowed = Array.from(new Set([...pomodoroAllowedSet, ...getAppWhitelistSet(), "com.sinirlayici.app"]));
    startPomodoroNative(Math.ceil(pomodoroRemainingSec / 60), combinedAllowed);
  }
  renderPomodoroAppsList();
  const app = installedApps.find(a => a.packageName === pkg);
  showToast(`${app ? app.appName : 'Uygulama'} için Pomodoro'da izin verildi ✅`);
}

function blockPomodoroApp(pkg) {
  pomodoroAllowedSet.delete(pkg);
  try {
    if (isAndroid && window.AndroidBridge.getWhitelistedPackages) {
      const raw = window.AndroidBridge.getWhitelistedPackages();
      if (raw) {
        let arr = JSON.parse(raw);
        arr = arr.filter(p => p !== pkg);
        window.AndroidBridge.saveWhitelistedPackages(JSON.stringify(arr));
      }
    }
  } catch (e) {}

  if (pomodoroActive) {
    const combinedAllowed = Array.from(new Set([...pomodoroAllowedSet, ...getAppWhitelistSet(), "com.sinirlayici.app"]));
    startPomodoroNative(Math.ceil(pomodoroRemainingSec / 60), combinedAllowed);
  }
  renderPomodoroAppsList();
  const app = installedApps.find(a => a.packageName === pkg);
  showToast(`${app ? app.appName : 'Uygulama'} kilitlenecek uygulamalara eklendi ⛔`);
}

function resetPomodoroExceptions() {
  pomodoroAllowedSet.clear();
  if (pomodoroActive) {
    const combinedAllowed = Array.from(new Set([...getAppWhitelistSet(), "com.sinirlayici.app"]));
    startPomodoroNative(Math.ceil(pomodoroRemainingSec / 60), combinedAllowed);
  }
  renderPomodoroAppsList();
  showToast("İzin verilen ek uygulamalar sıfırlandı.");
}

// ==========================================
// 3. HATIRLATICI İŞLEMLERİ
// ==========================================

function openAddReminderModal() {
  currentEditingReminderId = null;
  document.getElementById("reminderModalTitle").textContent = "Yeni Hatırlatıcı Ekle";
  document.getElementById("remInputId").value = "";
  document.getElementById("remInputMessage").value = "";

  const targetInput = document.getElementById("remTargetUsername");
  if (targetInput) targetInput.value = "";
  const targetNotice = document.getElementById("remTargetUserNotice");
  if (targetNotice) targetNotice.style.display = "none";
  const saveBtn = document.getElementById("btnSaveReminder");
  if (saveBtn) saveBtn.textContent = "Kaydet";

  setReminderType('daily');
  selectReminderInterval(30);

  document.getElementById("remDailyTime").value = "09:00";
  setDailyTimePreset('09:00');
  document.getElementById("remWeeklyTime").value = "10:00";
  document.getElementById("remMonthlyTime").value = "12:00";

  setWeeklyPreset('weekdays');
  populateReminderMonthlyDays();
  populateReminderAppSelect();

  setReminderStopCondition('never');

  const d = new Date();
  d.setDate(d.getDate() + 30);
  const defDateStr = d.toISOString().split("T")[0];
  const stopDateInput = document.getElementById("remStopDate");
  if (stopDateInput) {
    stopDateInput.value = defDateStr;
    stopDateInput.min = new Date().toISOString().split("T")[0];
  }
  setStopCountPreset(5);

  const askLaterCb = document.getElementById("remAskLater");
  if (askLaterCb) {
    askLaterCb.checked = false;
    toggleAskLaterSection(false);
  }
  document.getElementById("remAskTimeOfDay").value = "18:00";

  const trackCbAdd = document.getElementById("remEnableTracking");
  if (trackCbAdd) trackCbAdd.checked = true;

  document.getElementById("reminderModal").classList.add("open");
}

function openAddReminderModalForTarget(username) {
  openAddReminderModal();
  const targetClean = (username || "").trim().toLowerCase().replace(/^@/, '');
  const targetInput = document.getElementById("remTargetUsername");
  if (targetInput) targetInput.value = targetClean;
  const targetSpan = document.getElementById("remTargetUserSpan");
  if (targetSpan) targetSpan.textContent = "@" + targetClean;
  const targetNotice = document.getElementById("remTargetUserNotice");
  if (targetNotice) targetNotice.style.display = "flex";
  const title = document.getElementById("reminderModalTitle");
  if (title) title.textContent = "Başkası İçin Hatırlatıcı (@" + targetClean + ")";
  const saveBtn = document.getElementById("btnSaveReminder");
  if (saveBtn) saveBtn.textContent = "🚀 Gönder (@" + targetClean + ")";
}

function openEditReminderModal(id) {
  const r = reminders.find(x => x.id === id);
  if (!r) return;
  currentEditingReminderId = id;
  document.getElementById("reminderModalTitle").textContent = "Hatırlatıcıyı Düzenle";
  document.getElementById("remInputId").value = id;
  document.getElementById("remInputMessage").value = r.message || "";

  setReminderType(r.type || 'daily');
  populateReminderMonthlyDays();
  populateReminderAppSelect();

  if (r.type === 'periodic') {
    selectReminderInterval(r.intervalMinutes || 30);
  } else if (r.type === 'daily') {
    const t = r.timeOfDay || "09:00";
    document.getElementById("remDailyTime").value = t;
    setDailyTimePreset(t);
  } else if (r.type === 'weekly') {
    document.getElementById("remWeeklyTime").value = r.timeOfDay || "10:00";
    selectedWeeklyDays.clear();
    const days = (r.daysOfWeek || "1,2,3,4,5").split(",");
    days.forEach(d => {
      const n = parseInt(d.trim());
      if (n >= 1 && n <= 7) selectedWeeklyDays.add(n);
    });
    updateWeeklyDaysUI();
  } else if (r.type === 'monthly') {
    document.getElementById("remMonthlyTime").value = r.timeOfDay || "12:00";
    if (r.dayOfMonth) document.getElementById("remMonthlyDay").value = String(r.dayOfMonth);
  } else if (r.type === 'app_usage') {
    if (r.appPackage) document.getElementById("remAppSelect").value = r.appPackage;
    selectReminderAppUsage(r.appUsageMinutes || 20);
  }

  setReminderStopCondition(r.stopCondition || 'never');
  if (r.endDate) document.getElementById("remStopDate").value = r.endDate;
  if (r.maxRepeats) setStopCountPreset(r.maxRepeats);

  const askLaterCb = document.getElementById("remAskLater");
  if (askLaterCb) {
    askLaterCb.checked = !!r.askLater;
    toggleAskLaterSection(!!r.askLater);
  }
  document.getElementById("remAskTimeOfDay").value = r.askTimeOfDay || "18:00";

  const trackCbEdit = document.getElementById("remEnableTracking");
  if (trackCbEdit) trackCbEdit.checked = (r.enableTracking !== false);

  document.getElementById("reminderModal").classList.add("open");
}

function toggleAskLaterSection(checked) {
  const panel = document.getElementById("askLaterTimePanel");
  if (panel) panel.style.display = checked ? "block" : "none";
  if (checked) {
    const trackingToggle = document.getElementById("remEnableTracking");
    if (trackingToggle) trackingToggle.checked = true;
  }
}

function closeReminderModal() {
  document.getElementById("reminderModal").classList.remove("open");
}

function handleReminderModalOverlayClick(e) {
  if (e.target.id === "reminderModal") closeReminderModal();
}

function saveReminderFromModal() {
  const msg = (document.getElementById("remInputMessage").value || "").trim();
  if (!msg) {
    showToast("Lütfen bir hatırlatıcı mesajı yazın.");
    return;
  }

  const existing = currentEditingReminderId ? reminders.find(x => x.id === currentEditingReminderId) : null;

  const item = {
    id: currentEditingReminderId || String(Date.now()),
    type: currentReminderType,
    message: msg,
    icon: "bell", // Daima sarı çan simgesi
    enabled: true,
    completed: false,
    stopCondition: selectedReminderStopCondition || 'never',
    repeatCount: existing ? (existing.repeatCount || 0) : 0,
    lastTriggeredTime: existing ? (existing.lastTriggeredTime || 0) : 0,
    lastTriggeredDate: existing ? (existing.lastTriggeredDate || "") : "",
    askLater: document.getElementById("remAskLater") ? document.getElementById("remAskLater").checked : false,
    askTimeOfDay: document.getElementById("remAskTimeOfDay") ? document.getElementById("remAskTimeOfDay").value : "18:00",
    lastAskDate: existing ? (existing.lastAskDate || "") : ""
  };

  if (selectedReminderStopCondition === 'date') {
    item.endDate = document.getElementById("remStopDate").value || "";
    item.maxRepeats = 0;
  } else if (selectedReminderStopCondition === 'count') {
    item.maxRepeats = parseInt(document.getElementById("remStopCount").value) || 5;
    item.endDate = "";
  } else {
    item.endDate = "";
    item.maxRepeats = 0;
  }

  if (currentReminderType === 'periodic') {
    const val = parseInt(document.getElementById("remInputIntervalCustom").value) || 30;
    item.intervalMinutes = Math.max(1, val);
  } else if (currentReminderType === 'daily') {
    item.timeOfDay = document.getElementById("remDailyTime").value || "09:00";
  } else if (currentReminderType === 'weekly') {
    item.timeOfDay = document.getElementById("remWeeklyTime").value || "10:00";
    const daysArr = Array.from(selectedWeeklyDays).sort();
    if (daysArr.length === 0) daysArr.push(1);
    item.daysOfWeek = daysArr.join(",");
  } else if (currentReminderType === 'monthly') {
    item.timeOfDay = document.getElementById("remMonthlyTime").value || "12:00";
    item.dayOfMonth = parseInt(document.getElementById("remMonthlyDay").value) || 1;
  } else if (currentReminderType === 'app_usage') {
    const appSelect = document.getElementById("remAppSelect");
    const pkg = appSelect ? appSelect.value : "";
    const selectedApp = installedApps.find(a => a.packageName === pkg);
    item.appPackage = pkg;
    item.appName = selectedApp ? selectedApp.appName : pkg;
    const val = parseInt(document.getElementById("remInputAppUsageCustom").value) || 20;
    item.appUsageMinutes = Math.max(1, val);
  }

  const trackingCb = document.getElementById("remEnableTracking");
  item.enableTracking = item.askLater ? true : (trackingCb ? trackingCb.checked : true);
  if (existing) {
    item.doneCount = existing.doneCount || 0;
    item.notDoneCount = existing.notDoneCount || 0;
    item.lastActionDate = existing.lastActionDate || "";
    item.lastActionStatus = existing.lastActionStatus || "";
    item.remoteRequestId = existing.remoteRequestId || "";
    item.fromUsername = existing.fromUsername || "";
    item.trackingHistoryJson = existing.trackingHistoryJson || "{}";
  } else {
    item.doneCount = 0;
    item.notDoneCount = 0;
    item.lastActionDate = "";
    item.lastActionStatus = "";
    item.remoteRequestId = "";
    item.fromUsername = "";
    item.trackingHistoryJson = "{}";
  }

  // Kullanıcı İsteği: Başkası için hatırlatıcı ayarlandıysa karşı tarafa gönder
  const targetUser = (document.getElementById("remTargetUsername")?.value || "").trim().toLowerCase().replace(/^@/, '');
  if (targetUser) {
    item.title = item.message ? item.message.substring(0, 30) : "Hatırlatıcı";
    const jsonStr = JSON.stringify(item);
    if (isAndroid) {
      const res = window.AndroidBridge.sendReminderRequest(targetUser, jsonStr);
      if (res === 'ok') {
        showToast("@" + targetUser + " kullanıcısına hatırlatıcı isteği iletildi! 🚀");
      } else {
        showToast("Gönderim: " + res);
      }
    } else {
      showToast("@" + targetUser + " kullanıcısına hatırlatıcı isteği iletildi (Mock)! 🚀");
    }
    closeReminderModal();
    closeSettingsView();
    switchTab('reminders');
    switchReminderScope('others');
    return;
  }

  saveReminderNative(item);
  closeReminderModal();
  reminders = getRemindersNative();
  renderRemindersList();
  updateRemindersBadge();
  showToast(currentEditingReminderId ? "Hatırlatıcı güncellendi!" : "Hatırlatıcı başarıyla kaydedildi!");
}

function setReminderType(type) {
  currentReminderType = type;
  const types = ['periodic', 'daily', 'weekly', 'monthly'];
  types.forEach(t => {
    const btn = document.getElementById("remType" + t.charAt(0).toUpperCase() + t.slice(1));
    if (btn) {
      if (t === type) btn.classList.add("active");
      else btn.classList.remove("active");
    }
  });

  const pSet = document.getElementById("remPeriodicSettings");
  const dSet = document.getElementById("remDailySettings");
  const wSet = document.getElementById("remWeeklySettings");
  const mSet = document.getElementById("remMonthlySettings");
  const aSet = document.getElementById("remAppUsageSettings");

  if (pSet) pSet.style.display = (type === 'periodic') ? 'block' : 'none';
  if (dSet) dSet.style.display = (type === 'daily') ? 'block' : 'none';
  if (wSet) wSet.style.display = (type === 'weekly') ? 'block' : 'none';
  if (mSet) mSet.style.display = (type === 'monthly') ? 'block' : 'none';
  if (aSet) aSet.style.display = 'none';
}

function selectReminderInterval(mins) {
  selectedReminderInterval = mins;
  const customInput = document.getElementById("remInputIntervalCustom");
  if (customInput) customInput.value = mins;
  document.querySelectorAll("#remPeriodicSettings .time-chip").forEach(c => {
    const val = parseInt(c.textContent);
    if (val === mins) c.classList.add("selected");
    else c.classList.remove("selected");
  });
}

function setDailyTimePreset(timeStr) {
  const input = document.getElementById("remDailyTime");
  if (input) input.value = timeStr;
  document.querySelectorAll("#remDailySettings .time-chip").forEach(c => {
    if (c.textContent.startsWith(timeStr)) c.classList.add("selected");
    else c.classList.remove("selected");
  });
}

function toggleWeeklyDay(dayNum) {
  if (selectedWeeklyDays.has(dayNum)) {
    if (selectedWeeklyDays.size > 1) {
      selectedWeeklyDays.delete(dayNum);
    } else {
      showToast("En az bir gün seçili kalmalıdır.");
      return;
    }
  } else {
    selectedWeeklyDays.add(dayNum);
  }
  updateWeeklyDaysUI();
}

function setWeeklyPreset(preset) {
  if (preset === 'weekdays') selectedWeeklyDays = new Set([1, 2, 3, 4, 5]);
  else if (preset === 'weekend') selectedWeeklyDays = new Set([6, 7]);
  else if (preset === 'all') selectedWeeklyDays = new Set([1, 2, 3, 4, 5, 6, 7]);
  updateWeeklyDaysUI();
}

function updateWeeklyDaysUI() {
  document.querySelectorAll(".weekday-btn").forEach(btn => {
    const day = parseInt(btn.getAttribute("data-day"));
    if (selectedWeeklyDays.has(day)) btn.classList.add("selected");
    else btn.classList.remove("selected");
  });
}

function populateReminderMonthlyDays() {
  const select = document.getElementById("remMonthlyDay");
  if (!select || select.children.length > 0) return;
  let html = "";
  for (let i = 1; i <= 31; i++) {
    html += `<option value="${i}">Her ayın ${i}. günü</option>`;
  }
  select.innerHTML = html;
}

function selectReminderAppUsage(mins) {
  selectedReminderAppUsage = mins;
  const input = document.getElementById("remInputAppUsageCustom");
  if (input) input.value = mins;
  document.querySelectorAll("#remAppUsageSettings .time-chip").forEach(c => {
    const val = parseInt(c.textContent);
    if (val === mins) c.classList.add("selected");
    else c.classList.remove("selected");
  });
}

function populateReminderAppSelect() {
  const select = document.getElementById("remAppSelect");
  if (!select) return;
  select.innerHTML = installedApps.map(a => `
    <option value="${escapeAttr(a.packageName)}">${escapeHtml(a.appName)}</option>
  `).join("");
}

function setReminderStopCondition(cond) {
  selectedReminderStopCondition = cond;
  const conds = ['never', 'date', 'count'];
  conds.forEach(c => {
    const btn = document.getElementById("remStopCond" + c.charAt(0).toUpperCase() + c.slice(1));
    if (btn) {
      if (c === cond) btn.classList.add("active");
      else btn.classList.remove("active");
    }
  });

  const datePanel = document.getElementById("remStopDatePanel");
  const countPanel = document.getElementById("remStopCountPanel");
  if (datePanel) datePanel.style.display = (cond === 'date') ? 'block' : 'none';
  if (countPanel) countPanel.style.display = (cond === 'count') ? 'block' : 'none';
}

function setStopCountPreset(count) {
  const input = document.getElementById("remStopCount");
  if (input) input.value = count;
  document.querySelectorAll("#remStopCountPanel .time-chip").forEach(c => {
    const val = parseInt(c.textContent);
    if (val === count) c.classList.add("selected");
    else c.classList.remove("selected");
  });
}

function toggleReminderState(id, enabled) {
  toggleReminderNative(id, enabled);
  reminders = getRemindersNative();
  renderRemindersList();
  updateRemindersBadge();
}

function testReminderItem(id) {
  triggerReminderNative(id);
  showToast("🔔 Test bildirimi gönderildi (Sessiz)!");
}

// KULLANICI İSTEĞİ: file:// uyarısız özel silme dialogu
function deleteReminderItem(id) {
  showCustomConfirm("Bu hatırlatıcı silinecek", () => {
    deleteReminderNative(id);
    reminders = getRemindersNative();
    renderRemindersList();
    updateRemindersBadge();
    showToast("Hatırlatıcı silindi.");
  });
}

// ==========================================
// 4. DETAYLI İSTATİSTİK & SVG ÇİZGİ GRAFİĞİ
// ==========================================

function openStatsGraphModal(reminderId) {
  const r = reminders.find(x => x.id === reminderId);
  if (!r) return;

  document.getElementById("graphModalReminderTitle").textContent = r.message || "Hatırlatıcı Başarı Grafiği";

  let history = {};
  try {
    history = JSON.parse(r.trackingHistoryJson || "{}");
  } catch (e) {
    history = {};
  }

  // Son 7 veya 14 günün tarihlerini hazırla
  const daysList = [];
  const now = new Date();
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split("T")[0];
    const status = history[dateStr] || null; // 'done', 'not_done' veya null
    const dayName = d.toLocaleDateString("tr-TR", { weekday: 'short', day: 'numeric', month: 'short' });
    daysList.push({ date: dateStr, label: dayName, status: status });
  }

  const doneCount = r.doneCount || 0;
  const notDoneCount = r.notDoneCount || 0;
  const total = doneCount + notDoneCount;
  const pct = (total > 0) ? Math.round((doneCount / total) * 100) : 0;

  document.getElementById("graphTotalPercentageText").textContent = `%${pct}`;
  document.getElementById("graphDoneText").textContent = `${doneCount} Gün Yapıldı`;
  document.getElementById("graphNotDoneText").textContent = `${notDoneCount} Gün Yapılmadı (Düşüş Spike)`;
  document.getElementById("graphTotalDaysText").textContent = `Toplam ${total} gün işaretlendi`;

  // SVG Çizimi: Y ekseni: Seviye (Yukarıda Yapıldı, Aşağıda Yapılmadı)
  // X ekseni boyunca günler sıralı
  renderSvgLineChart(daysList);

  // Ayrıntılı gün gün liste
  const listContainer = document.getElementById("graphRecentDaysList");
  if (listContainer) {
    listContainer.innerHTML = daysList.map(item => {
      let badge = `<span style="color: var(--text-muted);">İşlem Yok</span>`;
      if (item.status === 'done') badge = `<span style="color: #34d399; font-weight:700;">✅ Yapıldı</span>`;
      else if (item.status === 'not_done') badge = `<span style="color: #f87171; font-weight:700;">❌ Yapılmadı (Düşüş)</span>`;

      return `
        <div class="graph-day-item">
          <span style="font-weight: 600; color: #e2e8f0;">${item.label}</span>
          ${badge}
        </div>
      `;
    }).reverse().join("");
  }

  document.getElementById("statsGraphModal").classList.add("open");
}

function openRemoteStatsGraphModal(requestId) {
  let req = null;
  if (isAndroid) {
    try {
      const raw = window.AndroidBridge.getSentRequests();
      const sent = JSON.parse(raw);
      req = sent.find(s => s.requestId === requestId);
    } catch(e) {}
  }
  if (!req) {
    showToast("Görev detayları bulunamadı.");
    return;
  }

  const titleEl = document.getElementById("graphModalReminderTitle");
  if (titleEl) titleEl.textContent = `@${req.toUsername}: ${req.title || req.message || "Görev Başarı Grafiği"}`;

  const history = req.statusLog || {};
  const daysList = [];
  const now = new Date();
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split("T")[0];
    const status = history[dateStr] || null;
    const dayName = d.toLocaleDateString("tr-TR", { weekday: 'short', day: 'numeric', month: 'short' });
    daysList.push({ date: dateStr, label: dayName, status: status });
  }

  const doneCount = req.doneCount || 0;
  const notDoneCount = req.notDoneCount || 0;
  const total = doneCount + notDoneCount;
  const pct = req.percentage || (total > 0 ? Math.round((doneCount / total) * 100) : 0);

  document.getElementById("graphTotalPercentageText").textContent = `%${pct}`;
  document.getElementById("graphDoneText").textContent = `${doneCount} Gün Yapıldı`;
  document.getElementById("graphNotDoneText").textContent = `${notDoneCount} Gün Yapılmadı (Düşüş Spike)`;
  document.getElementById("graphTotalDaysText").textContent = `Hedef: @${req.toUsername} (Toplam ${total} gün işaretlendi)`;

  renderSvgLineChart(daysList);

  const listContainer = document.getElementById("graphRecentDaysList");
  if (listContainer) {
    listContainer.innerHTML = daysList.map(item => {
      let badge = `<span style="color: var(--text-muted);">İşlem Yok</span>`;
      if (item.status === 'done') badge = `<span style="color: #34d399; font-weight:700;">✅ Yapıldı</span>`;
      else if (item.status === 'not_done') badge = `<span style="color: #f87171; font-weight:700;">❌ Yapılmadı (Düşüş)</span>`;

      return `
        <div class="graph-day-item">
          <span style="font-weight: 600; color: #e2e8f0;">${item.label}</span>
          ${badge}
        </div>
      `;
    }).reverse().join("");
  }

  document.getElementById("statsGraphModal").classList.add("open");
}

function renderSvgLineChart(daysList) {
  const svgBox = document.getElementById("graphSvgContainer");
  if (!svgBox) return;

  const width = 320;
  const height = 150;
  const paddingX = 25;
  const topY = 30; // Yapıldı seviyesi
  const bottomY = 115; // Yapılmadı seviyesi

  const stepX = (width - 2 * paddingX) / (daysList.length - 1);
  const points = [];

  daysList.forEach((d, i) => {
    const x = paddingX + i * stepX;
    let y = (topY + bottomY) / 2; // Nötr
    if (d.status === 'done') y = topY;
    else if (d.status === 'not_done') y = bottomY; // Aşağı doğru spike (çöküş)
    points.push({ x, y, status: d.status, label: d.label });
  });

  // Çizgi polyline koordinatları
  const polylineCoords = points.map(p => `${p.x},${p.y}`).join(" ");

  // Nokta ve etiket SVG'leri
  let elementsSvg = "";
  // Kılavuz çizgiler
  elementsSvg += `<line x1="${paddingX}" y1="${topY}" x2="${width - paddingX}" y2="${topY}" stroke="rgba(52, 211, 153, 0.25)" stroke-dasharray="3,3" stroke-width="1"/>`;
  elementsSvg += `<line x1="${paddingX}" y1="${bottomY}" x2="${width - paddingX}" y2="${bottomY}" stroke="rgba(248, 113, 113, 0.25)" stroke-dasharray="3,3" stroke-width="1"/>`;

  // Ana birleştirici çizgi (Gradient ile)
  elementsSvg += `
    <polyline fill="none" stroke="url(#lineGradient)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" points="${polylineCoords}"/>
  `;

  // Her gün için nokta
  points.forEach((p, idx) => {
    let dotColor = "#94a3b8";
    let r = 4;
    if (p.status === 'done') {
      dotColor = "#10b981";
      r = 6;
    } else if (p.status === 'not_done') {
      dotColor = "#ef4444";
      r = 6.5; // Düşüş spike noktasını belirgin yap
    }

    elementsSvg += `<circle cx="${p.x}" cy="${p.y}" r="${r}" fill="${dotColor}" stroke="#0f172a" stroke-width="2"/>`;
    // Tarih etiketi
    const shortLabel = p.label.split(" ")[0];
    elementsSvg += `<text x="${p.x}" y="${height - 6}" font-size="9" fill="#94a3b8" text-anchor="middle" font-weight="600">${shortLabel}</text>`;
  });

  svgBox.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" style="width:100%; height:100%;">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#6366f1" />
          <stop offset="50%" stop-color="#38bdf8" />
          <stop offset="100%" stop-color="#10b981" />
        </linearGradient>
      </defs>
      ${elementsSvg}
    </svg>
  `;
}

function closeStatsGraphModal() {
  document.getElementById("statsGraphModal").classList.remove("open");
}

function handleGraphModalOverlayClick(e) {
  if (e.target.id === "statsGraphModal") closeStatsGraphModal();
}

// ==========================================
// 5. YENİ UYGULAMA SINIRLA MODALI (PAKET ADLARI GİZLİ)
// ==========================================

function openAppPickerModal() {
  renderAppPickerList();
  document.getElementById("appPickerModal").classList.add("open");
}

function closeAppPickerModal() {
  document.getElementById("appPickerModal").classList.remove("open");
}

function handleAppPickerOverlayClick(e) {
  if (e.target.id === "appPickerModal") closeAppPickerModal();
}

function renderAppPickerList() {
  const container = document.getElementById("installedAppsList");
  const query = (document.getElementById("appSearchInput")?.value || "").toLowerCase().trim();

  // Asla sınırlanmayacak uygulamalar (Whitelist) listede görünmez
  const filtered = installedApps.filter(app => {
    if (whitelistedSet.has(app.packageName)) return false;
    return app.appName.toLowerCase().includes(query);
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: var(--text-sub); padding: 30px;">Uygun uygulama bulunamadı veya tümü istisna listesinde.</div>`;
    return;
  }

  container.innerHTML = filtered.map(app => {
    const existing = activeLimits.find(x => x.packageName === app.packageName);
    const isConfigured = !!existing;
    const usedTodayText = formatSeconds(app.todayUsageSeconds || 0);

    const iconHtml = app.icon 
      ? `<img src="${app.icon}" class="app-avatar-img" alt="${escapeAttr(app.appName)}">`
      : `<div class="app-avatar" style="background: ${getAppGradient(app.appName)}">${escapeHtml(app.appName.substring(0, 1).toUpperCase())}</div>`;

    // PAKET İSMİ GİZLİ (com.google.android...)
    return `
      <div class="app-select-item" onclick="selectAppForLimit('${escapeAttr(app.packageName)}', '${escapeAttr(app.appName)}')">
        <div class="app-meta">
          ${iconHtml}
          <div class="app-info">
            <h3>${escapeHtml(app.appName)}</h3>
            <span class="badge-today-used">Bugün Kullanılan: ${usedTodayText}</span>
          </div>
        </div>
        <button class="app-select-btn ${isConfigured ? 'is-set' : 'not-set'}">
          ${isConfigured ? '✓ Düzenle' : '+ Sınırla'}
        </button>
      </div>
    `;
  }).join("");
}

function filterApps() {
  renderAppPickerList();
}

function selectAppForLimit(pkg, name) {
  closeAppPickerModal();
  openConfigModal(pkg, name);
}

// ==========================================
// 6. SINIRLAMA MODAL YÖNETİMİ
// ==========================================

function openConfigModal(packageName, appName) {
  const app = installedApps.find(x => x.packageName === packageName) || { packageName, appName, todayUsageSeconds: 0 };
  currentEditingApp = app;

  document.getElementById("modalAppName").textContent = appName;

  const usedTodaySec = app.todayUsageSeconds || 0;
  document.getElementById("modalTodayUsedBadge").textContent = `Bugün Kullanılan: ${formatSeconds(usedTodaySec)}`;

  const avatarContainer = document.getElementById("modalAppAvatarContainer");
  if (app.icon) {
    avatarContainer.innerHTML = `<img src="${app.icon}" class="app-avatar-img" style="width: 48px; height: 48px;">`;
  } else {
    avatarContainer.innerHTML = `<div class="app-avatar" style="width: 48px; height: 48px; background: ${getAppGradient(appName)}">${escapeHtml(appName.substring(0, 1).toUpperCase())}</div>`;
  }

  const existing = activeLimits.find(x => x.packageName === packageName);
  const deleteBtn = document.getElementById("btnDeleteLimitInModal");
  const saveBtn = document.getElementById("btnSaveConfig");

  if (existing) {
    if (deleteBtn) deleteBtn.style.display = "inline-flex";
    if (saveBtn) saveBtn.textContent = "✓ Sınırı Güncelle";
    currentMode = existing.mode || 'daily';
    selectedDailyMinutes = existing.dailyLimitMinutes || 30;
    selectedActiveMinutes = existing.intervalActiveMinutes || 5;
    selectedCooldownMinutes = existing.intervalCooldownMinutes || 25;
  } else {
    if (deleteBtn) deleteBtn.style.display = "none";
    if (saveBtn) saveBtn.textContent = "Sınırlamayı Başlat";
    currentMode = 'daily';
    selectedDailyMinutes = 30;
    selectedActiveMinutes = 5;
    selectedCooldownMinutes = 25;
  }

  setModalMode(currentMode);
  syncInputsWithValues();
  document.getElementById("configModal").classList.add("open");
}

function closeConfigModal() {
  document.getElementById("configModal").classList.remove("open");
  currentEditingApp = null;
}

function handleModalOverlayClick(e) {
  if (e.target.id === "configModal") closeConfigModal();
}

function setModalMode(mode) {
  currentMode = mode;
  const btnDaily = document.getElementById("modeTabDaily");
  const btnInterval = document.getElementById("modeTabInterval");
  const secDaily = document.getElementById("modeDailySettings");
  const secInterval = document.getElementById("modeIntervalSettings");

  if (mode === 'daily') {
    btnDaily.classList.add("active");
    btnInterval.classList.remove("active");
    secDaily.style.display = "block";
    secInterval.style.display = "none";
  } else {
    btnDaily.classList.remove("active");
    btnInterval.classList.add("active");
    secDaily.style.display = "none";
    secInterval.style.display = "block";
  }
  updateExplanationBox();
}

function selectDailyMinutes(mins) {
  selectedDailyMinutes = mins;
  document.getElementById("inputDailyCustom").value = mins;
  highlightChip("#modeDailySettings .time-chip", mins);
  updateExplanationBox();
}

function onCustomDailyInput() {
  const val = parseInt(document.getElementById("inputDailyCustom").value) || 1;
  selectedDailyMinutes = Math.max(1, Math.min(1440, val));
  highlightChip("#modeDailySettings .time-chip", selectedDailyMinutes);
  updateExplanationBox();
}

function selectIntervalActive(mins) {
  selectedActiveMinutes = mins;
  document.getElementById("inputActiveCustom").value = mins;
  highlightChip("#modeIntervalSettings .config-group:first-child .time-chip", mins);
  updateExplanationBox();
}

function onCustomActiveInput() {
  const val = parseInt(document.getElementById("inputActiveCustom").value) || 1;
  selectedActiveMinutes = Math.max(1, Math.min(180, val));
  highlightChip("#modeIntervalSettings .config-group:first-child .time-chip", selectedActiveMinutes);
  updateExplanationBox();
}

function selectIntervalCooldown(mins) {
  selectedCooldownMinutes = mins;
  document.getElementById("inputCooldownCustom").value = mins;
  highlightChip("#modeIntervalSettings .config-group:last-child .time-chip", mins);
  updateExplanationBox();
}

function onCustomCooldownInput() {
  const val = parseInt(document.getElementById("inputCooldownCustom").value) || 1;
  selectedCooldownMinutes = Math.max(1, Math.min(1440, val));
  highlightChip("#modeIntervalSettings .config-group:last-child .time-chip", selectedCooldownMinutes);
  updateExplanationBox();
}

function syncInputsWithValues() {
  document.getElementById("inputDailyCustom").value = selectedDailyMinutes;
  document.getElementById("inputActiveCustom").value = selectedActiveMinutes;
  document.getElementById("inputCooldownCustom").value = selectedCooldownMinutes;

  highlightChip("#modeDailySettings .time-chip", selectedDailyMinutes);
  highlightChip("#modeIntervalSettings .config-group:first-child .time-chip", selectedActiveMinutes);
  highlightChip("#modeIntervalSettings .config-group:last-child .time-chip", selectedCooldownMinutes);
  updateExplanationBox();
}

function highlightChip(selector, val) {
  document.querySelectorAll(selector).forEach(btn => {
    const text = btn.textContent.trim();
    const btnMins = text.includes("saat") ? parseInt(text) * 60 : parseInt(text);
    if (btnMins === val) btn.classList.add("selected");
    else btn.classList.remove("selected");
  });
}

function updateExplanationBox() {
  const box = document.getElementById("dynamicExplanation");
  const appName = currentEditingApp ? currentEditingApp.appName : "Bu uygulama";
  const usedTodaySec = (currentEditingApp && currentEditingApp.todayUsageSeconds) ? currentEditingApp.todayUsageSeconds : 0;
  const usedMins = Math.floor(usedTodaySec / 60);

  if (currentMode === 'daily') {
    let pastUsageNote = "";
    if (usedMins > 0) {
      const remainingForSelected = Math.max(0, selectedDailyMinutes - usedMins);
      pastUsageNote = `<br><span style="color: #38bdf8;">📌 <strong>Bugünkü Durum:</strong> Bugün zaten <strong>${usedMins} dakika</strong> kullandınız. Kalan hakkınız: <strong>${remainingForSelected} dakika</strong>.</span>`;
    }

    box.innerHTML = `
      💡 <strong>Günlük Kural:</strong> <strong>${escapeHtml(appName)}</strong> gün boyunca toplamda en fazla <strong>${selectedDailyMinutes} dakika</strong> kullanılabilecektir. Süre dolduğunda derhal ana ekrana fırlatılır ve kilitlenir.
      ${pastUsageNote}
    `;
  } else {
    box.innerHTML = `
      💡 <strong>Aralık & Mola Döngüsü:</strong> <strong>${escapeHtml(appName)}</strong> uygulamasını <strong>${selectedActiveMinutes} dakika</strong> kullandıktan sonra uygulama sizi ana ekrana atar ve <strong>${selectedCooldownMinutes} dakika</strong> boyunca mola verir. Mola bitince tekrar ${selectedActiveMinutes} dk kullanım hakkı tanınır.
    `;
  }
}

function saveCurrentConfig() {
  if (!currentEditingApp) return;

  const item = {
    packageName: currentEditingApp.packageName,
    appName: currentEditingApp.appName,
    mode: currentMode,
    dailyLimitMinutes: selectedDailyMinutes,
    intervalActiveMinutes: selectedActiveMinutes,
    intervalCooldownMinutes: selectedCooldownMinutes,
    enabled: true
  };

  saveLimitNative(item);
  closeConfigModal();
  loadData();
  switchTab('limits');
  showToast(`${item.appName} için sınır aktif edildi!`);
}

function editLimit(pkg) {
  if (isStrictLockActive()) {
    showStrictLockAlert();
    return;
  }
  const item = activeLimits.find(x => x.packageName === pkg);
  if (item) {
    openConfigModal(item.packageName, item.appName);
  }
}

// ==========================================
// ÖZEL ONAY MODALI (SİLME / KALDIRMA ONAYI)
// ==========================================
let customConfirmCallback = null;

function showCustomConfirm(message, onConfirm) {
  const modal = document.getElementById("customConfirmModal");
  const msgEl = document.getElementById("customConfirmMessage");
  if (!modal) {
    if (onConfirm) onConfirm();
    return;
  }
  if (msgEl) msgEl.textContent = message || "Bu işlem geri alınamaz.";
  customConfirmCallback = onConfirm;
  modal.classList.add("open");
}

function closeCustomConfirm(confirmed) {
  const modal = document.getElementById("customConfirmModal");
  if (modal) modal.classList.remove("open");
  if (confirmed && typeof customConfirmCallback === 'function') {
    const cb = customConfirmCallback;
    customConfirmCallback = null;
    cb();
  } else {
    customConfirmCallback = null;
  }
}

function deleteCurrentEditingLimit() {
  if (isStrictLockActive()) {
    showStrictLockAlert();
    return;
  }
  if (!currentEditingApp) return;
  const pkg = currentEditingApp.packageName;
  const name = currentEditingApp.appName || "Bu uygulamanın";
  closeConfigModal();
  deleteLimit(pkg);
}

// Sınırlamayı Kaldır / Sil
function deleteLimit(pkg) {
  if (isStrictLockActive()) {
    showStrictLockAlert();
    return;
  }
  const item = activeLimits.find(x => x.packageName === pkg);
  const name = item ? item.appName : "Bu uygulamanın";
  showCustomConfirm(`${name} sınırlayıcısı kaldırılacak`, () => {
    deleteLimitNative(pkg);
    loadData();
    switchTab('limits');
    showToast(`${name} sınırlayıcısı kaldırıldı.`);
  });
}

// ==========================================
// 7. ASLA SINIRLANMAYACAKLAR (KOMPAKT BEYAZ LİSTE)
// ==========================================

// ==========================================
// 7. ASLA SINIRLANMAYACAKLAR (BEYAZ LİSTE SAYFASI)
// ==========================================

function checkFirstLaunchWhitelist() {
  if (isAndroid && window.AndroidBridge.isFirstLaunchDone) {
    const done = window.AndroidBridge.isFirstLaunchDone();
    if (!done) {
      setTimeout(() => {
        openWhitelistPage();
        applyDefaultEssentialWhitelist();
      }, 500);
    }
  }
}

function openWhitelistPage() {
  loadWhitelistSet();
  tempWhitelistSet = new Set(whitelistedSet);
  renderWhitelistPage();
  const v = document.getElementById("whitelistView");
  if (v) v.classList.add("open");
}

function closeWhitelistPage() {
  const v = document.getElementById("whitelistView");
  if (v) v.classList.remove("open");
  updateWhitelistBadges();
}

function renderWhitelistPage() {
  const container = document.getElementById("whitelistPageAppsList");
  if (!container) return;

  const search = (document.getElementById("whitelistSearchInput")?.value || "").toLowerCase().trim();

  let apps = [...installedApps];
  if (search) {
    apps = apps.filter(a => (a.appName || "").toLowerCase().includes(search));
  }

  // KULLANICI İSTEĞİ:
  // "orada ilk başta işaretlediğimiz uygulamalar sonra da işaretlemediğimiz uygulamalar gözüksün."
  apps.sort((a, b) => {
    const aChecked = tempWhitelistSet.has(a.packageName) ? 1 : 0;
    const bChecked = tempWhitelistSet.has(b.packageName) ? 1 : 0;
    if (aChecked !== bChecked) {
      return bChecked - aChecked; // İşaretliler en başta (1 önce, 0 sonra)
    }
    return (a.appName || "").localeCompare(b.appName || "", "tr");
  });

  if (apps.length === 0) {
    container.innerHTML = `<div style="text-align: center; padding: 30px; color: var(--text-muted);">Uygulama bulunamadı.</div>`;
    return;
  }

  container.innerHTML = apps.map(app => {
    const isChecked = tempWhitelistSet.has(app.packageName);
    const iconHtml = app.icon 
      ? `<img src="${app.icon}" class="app-icon-circular" alt="${escapeAttr(app.appName)}">`
      : `<div class="app-icon-circular" style="background:${getAppGradient(app.appName)}; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:700; font-size:0.85rem;">${escapeHtml(app.appName.substring(0, 1))}</div>`;

    return `
      <div class="whitelist-app-row ${isChecked ? 'checked' : ''}" onclick="toggleWhitelistPageItem('${escapeAttr(app.packageName)}')">
        <div class="whitelist-app-info">
          ${iconHtml}
          <div class="whitelist-app-details">
            <span class="whitelist-app-title">${escapeHtml(app.appName)}</span>
            <span class="whitelist-app-status">${isChecked ? '✅ Asla Kapatılmaz / İstisna' : 'Kısıtlanabilir'}</span>
          </div>
        </div>
        <label class="switch" onclick="event.stopPropagation();">
          <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="toggleWhitelistPageItem('${escapeAttr(app.packageName)}')">
          <span class="slider"></span>
        </label>
      </div>
    `;
  }).join("");
}

function toggleWhitelistPageItem(pkg) {
  if (tempWhitelistSet.has(pkg)) {
    tempWhitelistSet.delete(pkg);
  } else {
    tempWhitelistSet.add(pkg);
  }
  saveWhitelistData();
  renderWhitelistPage();
}

function applyDefaultEssentialWhitelist() {
  const essentialKeywords = [
    "ayar", "settings", "telefon", "dialer", "phone", "mesaj", "message", "sms", "mms",
    "dosya", "file", "galeri", "gallery", "foto", "photo", "gmail", "mail", "güvenlik", "security",
    "harita", "maps", "not", "notes", "keep", "bank", "ziraat", "garanti", "isbank", "akbank",
    "yapikredi", "vakif", "halk", "finans", "enpara", "papara", "paycell", "tosla", "fast"
  ];

  installedApps.forEach(app => {
    const nameLow = (app.appName || "").toLowerCase();
    const pkgLow = (app.packageName || "").toLowerCase();
    const isEssential = essentialKeywords.some(k => nameLow.includes(k) || pkgLow.includes(k));
    if (isEssential) {
      tempWhitelistSet.add(app.packageName);
    }
  });

  saveWhitelistData();
  renderWhitelistPage();
  showToast("Temel sistem, güvenlik ve bankacılık uygulamaları listenin başına alındı.");
}

function clearWhitelistSelection() {
  tempWhitelistSet.clear();
  saveWhitelistData();
  renderWhitelistPage();
}

function saveWhitelistData() {
  whitelistedSet = new Set(tempWhitelistSet);
  const arr = Array.from(whitelistedSet);
  if (isAndroid && window.AndroidBridge.saveWhitelistedPackages) {
    window.AndroidBridge.saveWhitelistedPackages(JSON.stringify(arr));
    window.AndroidBridge.setFirstLaunchDone();
  }

  activeLimits = activeLimits.filter(item => !whitelistedSet.has(item.packageName));
  updateWhitelistBadges();
}

function updateWhitelistBadges() {
  const cnt = whitelistedSet.size;
  const badge = document.getElementById("settingsWhitelistCount");
  if (badge) badge.textContent = `${cnt} İstisna`;
}

// ==========================================
// 8. AYARLAR SAYFASI & UYGULAMA HAKKINDA & PROFİL
// ==========================================

function openSettingsView() {
  const v = document.getElementById("settingsView");
  if (v) v.classList.add("open");
  updateWhitelistBadges();
  // Arka plan kontrollerini geciktirerek sayfa açılışını anında 0 ms yap
  setTimeout(() => {
    loadGroups();
    checkFirebaseRemoteStatus();
  }, 10);
}

function closeSettingsView() {
  const v = document.getElementById("settingsView");
  if (v) v.classList.remove("open");
}

function openSettingsViewAndFocusTarget() {
  openSettingsView();
  setTimeout(() => {
    const input = document.getElementById("targetUserInput");
    if (input) input.focus();
  }, 150);
}

function checkFirebaseRemoteStatus() {
  const badge = document.getElementById("remoteSystemStatusBadge");
  if (!badge) return;

  if (!isAndroid) {
    badge.textContent = "Aktif";
    badge.className = "badge-status-pill active";
    return;
  }

  // Varsayılan Firebase URL'sini otomatik olarak ata (Kullanıcıya gösterilmez)
  try {
    const curCfg = window.AndroidBridge.getFirebaseConfig();
    let url = "";
    if (curCfg) {
      const cfg = JSON.parse(curCfg);
      url = cfg.databaseUrl || "";
    }
    if (!url || url.indexOf("hatirlaticiv1") === -1) {
      window.AndroidBridge.setFirebaseDatabaseUrl("https://hatirlaticiv1-default-rtdb.firebaseio.com");
    }
  } catch (e) {}

  badge.textContent = "Aktif";
  badge.className = "badge-status-pill active";

  setTimeout(() => {
    try {
      const res = window.AndroidBridge.testFirebaseConnection();
      if (res === 'ok') {
        badge.textContent = "Aktif";
        badge.className = "badge-status-pill active";
      } else {
        badge.textContent = "Pasif";
        badge.className = "badge-status-pill inactive";
      }
    } catch (e) {
      badge.textContent = "Aktif";
      badge.className = "badge-status-pill active";
    }
  }, 20);
}

// UYGULAMA HAKKINDA SAYFASI
function openAboutPage() {
  const v = document.getElementById("aboutView");
  if (v) v.classList.add("open");
}

function closeAboutPage() {
  const v = document.getElementById("aboutView");
  if (v) v.classList.remove("open");
}

// PROFİL MODALI
let cachedProfileUsername = null;
let cachedProfileAllowIncoming = null;

function renderProfileUsernameUI(username, userBadge, userInput) {
  if (username && username.trim().length > 0) {
    if (userBadge) {
      userBadge.textContent = "@" + username;
      userBadge.style.background = "rgba(16, 185, 129, 0.2)";
      userBadge.style.borderColor = "rgba(16, 185, 129, 0.4)";
      userBadge.style.color = "#34d399";
    }
    if (userInput && !userInput.value) userInput.value = username;
  } else {
    if (userBadge) {
      userBadge.textContent = "Tanımsız";
      userBadge.style.background = "rgba(245, 158, 11, 0.2)";
      userBadge.style.borderColor = "rgba(245, 158, 11, 0.4)";
      userBadge.style.color = "#fbbf24";
    }
  }
}

function openProfileModal() {
  const m = document.getElementById("profileModal");
  if (m) m.classList.add("open");
  loadProfileUI();
}

function closeProfileModal() {
  const m = document.getElementById("profileModal");
  if (m) m.classList.remove("open");
}

function handleProfileOverlayClick(e) {
  if (e.target.id === "profileModal") closeProfileModal();
}

function loadProfileUI() {
  const userBadge = document.getElementById("currentUsernameBadge");
  const userInput = document.getElementById("inputUsername");
  const toggle = document.getElementById("allowIncomingToggle");

  if (!isAndroid) {
    renderProfileUsernameUI("", userBadge, userInput);
    return;
  }

  // Önbellek varsa 0 ms anında bas
  if (cachedProfileUsername !== null) {
    renderProfileUsernameUI(cachedProfileUsername, userBadge, userInput);
  }
  if (cachedProfileAllowIncoming !== null) {
    if (toggle) toggle.checked = cachedProfileAllowIncoming;
    updateAllowIncomingNotice(cachedProfileAllowIncoming);
  }

  // Köprüden değerleri gecikme olmadan arkaplanda çek
  setTimeout(() => {
    try {
      const myUser = window.AndroidBridge.getMyUsername();
      cachedProfileUsername = myUser || "";
      renderProfileUsernameUI(cachedProfileUsername, userBadge, userInput);

      const allowIncoming = window.AndroidBridge.getAllowIncomingReminders();
      cachedProfileAllowIncoming = allowIncoming;
      if (toggle) toggle.checked = allowIncoming;
      updateAllowIncomingNotice(allowIncoming);
    } catch (e) {
      console.error("loadProfileUI error:", e);
    }
  }, 10);
}

function saveUsernameClick() {
  const input = document.getElementById("inputUsername");
  const fb = document.getElementById("usernameFeedback");
  if (!input) return;
  const val = input.value.trim().toLowerCase().replace(/^@/, '');
  if (val.length < 3) {
    if (fb) {
      fb.style.display = "block";
      fb.style.color = "#f87171";
      fb.textContent = "Kullanıcı adı en az 3 karakter olmalıdır.";
    }
    return;
  }
  if (!isAndroid) {
    cachedProfileUsername = val;
    loadProfileUI();
    showToast("Kullanıcı adı kaydedildi (Mock): @" + val);
    return;
  }
  const res = window.AndroidBridge.registerUsername(val);
  if (res === 'ok') {
    cachedProfileUsername = val;
    if (fb) {
      fb.style.display = "block";
      fb.style.color = "#34d399";
      fb.textContent = "✅ Kullanıcı adı kaydedildi: @" + val;
    }
    loadProfileUI();
    showToast("Kullanıcı adınız belirlendi!");
  } else if (res === 'taken') {
    if (fb) {
      fb.style.display = "block";
      fb.style.color = "#f87171";
      fb.textContent = "❌ Bu kullanıcı adı zaten başka biri tarafından alınmış!";
    }
  } else {
    if (fb) {
      fb.style.display = "block";
      fb.style.color = "#f87171";
      fb.textContent = "Kayıt durumu: " + res;
    }
  }
}

function handleAllowIncomingToggle(checked) {
  cachedProfileAllowIncoming = checked;
  if (isAndroid) window.AndroidBridge.setAllowIncomingReminders(checked);
  updateAllowIncomingNotice(checked);
  showToast(checked ? "Dışarıdan hatırlatıcı kabulüne izin verildi." : "Dışarıdan hatırlatıcı kabulü kapatıldı.");
}

function updateAllowIncomingNotice(allow) {
  const notice = document.getElementById("allowIncomingNotice");
  if (!notice) return;
  if (allow) {
    notice.className = "allow-incoming-notice allowed";
    notice.innerHTML = "✅ <strong>İzin Açık:</strong> Kullanıcı adınızı bilen kişiler size hatırlatıcı gönderebilir.";
  } else {
    notice.className = "allow-incoming-notice";
    notice.innerHTML = "⚠️ <strong>İzin Kapalı (Varsayılan):</strong> Kimse size hatırlatıcı isteği gönderemez.";
  }
}

// ==========================================
// HEDEF KULLANICI DOĞRULAMA & OLUŞTURMA GEÇİŞİ
// ==========================================

function onTargetUserInputChanged() {
  verifiedTargetUser = null;
  const btn = document.getElementById("btnTargetAction");
  if (btn) {
    btn.textContent = "Doğrula";
    btn.classList.remove("create-ready");
  }
  const fb = document.getElementById("targetUserFeedback");
  if (fb) fb.style.display = "none";
}

function handleTargetUserAction() {
  const input = document.getElementById("targetUserInput");
  const fb = document.getElementById("targetUserFeedback");
  const btn = document.getElementById("btnTargetAction");
  if (!input) return;
  const username = input.value.trim().toLowerCase().replace(/^@/, '');

  if (!username) {
    if (fb) {
      fb.style.display = "block";
      fb.style.color = "#f87171";
      fb.textContent = "Lütfen bir kullanıcı adı girin.";
    }
    return;
  }

  // KULLANICI İSTEĞİ: Doğrulandıktan sonra 'Oluştur' seçeneğine geçsin, ona basıldığında tam modal açılsın
  if (verifiedTargetUser === username) {
    openAddReminderModalForTarget(username);
    return;
  }

  if (!isAndroid) {
    // Mock geliştirme modu
    verifiedTargetUser = username;
    if (btn) {
      btn.textContent = "Oluştur";
      btn.classList.add("create-ready");
    }
    if (fb) {
      fb.style.display = "block";
      fb.style.color = "#34d399";
      fb.textContent = "✅ @" + username + " doğrulandı. Hatırlatıcı oluşturabilirsiniz!";
    }
    return;
  }

  const myUser = window.AndroidBridge.getMyUsername();
  if (!myUser || myUser.trim().length === 0) {
    showToast("Önce sağ üstteki Profil seçeneğinden kendinize bir kullanıcı adı belirleyin!");
    openProfileModal();
    return;
  }

  if (username === myUser) {
    if (fb) {
      fb.style.display = "block";
      fb.style.color = "#f87171";
      fb.textContent = "Kendinize uzaktan hatırlatıcı belirleyemezsiniz.";
    }
    return;
  }

  try {
    const infoRaw = window.AndroidBridge.checkUserExists(username);
    const info = JSON.parse(infoRaw);

    // KULLANICI İSTEĞİ: Eğer böyle bir kullanıcı adı yoksa "Böyle bir kullanıcı adı yoktur" uyarısı versin
    if (info.status === 'not_found') {
      verifiedTargetUser = null;
      if (fb) {
        fb.style.display = "block";
        fb.style.color = "#f87171";
        fb.textContent = "Böyle bir kullanıcı adı yoktur.";
      }
      if (btn) {
        btn.textContent = "Doğrula";
        btn.classList.remove("create-ready");
      }
      return;
    }

    if (info.status === 'ok') {
      if (!info.allowIncoming) {
        verifiedTargetUser = null;
        if (fb) {
          fb.style.display = "block";
          fb.style.color = "#fbbf24";
          fb.textContent = "⚠️ @" + username + " kullanıcısı dışarıdan hatırlatıcı kabulünü kapatmış.";
        }
        if (btn) {
          btn.textContent = "Doğrula";
          btn.classList.remove("create-ready");
        }
        return;
      }

      // KULLANICI İSTEĞİ: Eğer böyle bir kullanıcı adı varsa 'Oluştur' seçeneğine geçsin
      verifiedTargetUser = username;
      if (fb) {
        fb.style.display = "block";
        fb.style.color = "#34d399";
        fb.textContent = "✅ @" + username + " doğrulandı. 'Oluştur' butonuna dokunun.";
      }
      if (btn) {
        btn.textContent = "Oluştur";
        btn.classList.add("create-ready");
      }
    } else {
      if (fb) {
        fb.style.display = "block";
        fb.style.color = "#f87171";
        fb.textContent = "Hata: " + (info.message || "Bağlantı hatası");
      }
    }
  } catch (e) {
    showToast("Kullanıcı kontrol hatası: " + e.message);
  }
}

// HATIRLATICI KAPSAM GEÇİŞİ (KENDİM / BAŞKASI İÇİN)
function switchReminderScope(scope) {
  currentReminderScope = scope;
  const btnSelf = document.getElementById("scopeBtnSelf");
  const btnOthers = document.getElementById("scopeBtnOthers");
  const secSelf = document.getElementById("selfRemindersSection");
  const secOthers = document.getElementById("othersRemindersSection");

  if (scope === 'others') {
    if (btnSelf) btnSelf.classList.remove("active");
    if (btnOthers) btnOthers.classList.add("active");
    if (secSelf) secSelf.style.display = "none";
    if (secOthers) secOthers.style.display = "block";
    loadSentRequests(false);
  } else {
    if (btnSelf) btnSelf.classList.add("active");
    if (btnOthers) btnOthers.classList.remove("active");
    if (secSelf) secSelf.style.display = "block";
    if (secOthers) secOthers.style.display = "none";
    loadIncomingNotice();
    renderRemindersList();
  }
}

let cachedPendingRequests = [];

function loadIncomingNotice() {
  const card = document.getElementById("incomingNoticeCard");
  const list = document.getElementById("incomingNoticeList");
  const countBadge = document.getElementById("incomingNoticeCount");
  const selfBadge = document.getElementById("scopeSelfBadge");
  const mainBadge = document.getElementById("incomingBadge");
  if (!card || !list) return;

  if (!isAndroid) {
    card.style.display = "none";
    if (selfBadge) selfBadge.style.display = "none";
    if (mainBadge) mainBadge.style.display = "none";
    return;
  }

  try {
    const raw = window.AndroidBridge.getIncomingRequests();
    const all = JSON.parse(raw);
    const pending = all.filter(r => {
      if (r.status !== 'pending') return false;
      try {
        if (localStorage.getItem("dismissed_req_" + r.requestId)) return false;
      } catch (e) {}
      return true;
    });

    cachedPendingRequests = pending;
    const pendingCount = pending.length;

    if (selfBadge) {
      if (pendingCount > 0) {
        selfBadge.style.display = "inline-block";
        selfBadge.textContent = pendingCount;
      } else {
        selfBadge.style.display = "none";
      }
    }

    if (mainBadge) {
      if (pendingCount > 0) {
        mainBadge.style.display = "inline-block";
        mainBadge.textContent = pendingCount;
      } else {
        mainBadge.style.display = "none";
      }
    }

    if (pendingCount === 0) {
      card.style.display = "none";
      return;
    }

    card.style.display = "block";
    if (countBadge) countBadge.textContent = pendingCount;

    list.innerHTML = pending.map(req => {
      let scheduleText = "";
      if (req.type === 'daily') scheduleText = `Her gün ${req.timeOfDay || '09:00'}`;
      else if (req.type === 'weekly') {
        const dayNames = { 1: 'Pzt', 2: 'Sal', 3: 'Çar', 4: 'Per', 5: 'Cum', 6: 'Cmt', 7: 'Paz' };
        const days = (req.daysOfWeek || '1,2,3,4,5').split(',').map(d => dayNames[d.trim()] || d).join(', ');
        scheduleText = `${days} saat ${req.timeOfDay || '10:00'}`;
      } else if (req.type === 'monthly') scheduleText = `Her ayın ${req.dayOfMonth || 1}'i saat ${req.timeOfDay || '12:00'}`;
      else if (req.type === 'periodic') scheduleText = `Her ${req.intervalMinutes || 30} dakikada bir`;
      else scheduleText = `${req.timeOfDay || ''}`;

      let stopText = "";
      if (req.stopCondition === 'date' && req.endDate) stopText = ` | Bitiş: ${req.endDate}`;
      else if (req.stopCondition === 'count' && req.maxRepeats) stopText = ` | ${req.maxRepeats} tekrar`;

      return `
        <div class="incoming-item-card" id="inc-card-${req.requestId}">
          <div class="incoming-item-top">
            <span class="incoming-sender-pill">
              <span>👤</span>
              <strong>@${escapeHtml(req.fromUsername || 'Kullanıcı')}</strong> tarafından gönderildi
            </span>
            <span class="incoming-time-tag">${escapeHtml(req.timeOfDay || '')}</span>
          </div>

          <h4 class="incoming-item-title">${escapeHtml(req.title || req.message || 'Hatırlatıcı')}</h4>
          ${req.message && req.title && req.message !== req.title ? `
            <p class="incoming-item-msg">${escapeHtml(req.message)}</p>
          ` : ''}

          <div class="incoming-item-meta">
            <span>⏰ ${escapeHtml(scheduleText)}${escapeHtml(stopText)}</span>
            ${req.enableTracking ? '<span class="incoming-tracking-pill">📊 Canlı Başarı Takibi</span>' : ''}
            ${req.askLater ? `<span class="incoming-tracking-pill">🕒 Sorma: ${escapeHtml(req.askTimeOfDay || '18:00')}</span>` : ''}
          </div>

          <div class="incoming-item-actions">
            <button type="button" class="btn-incoming-accept" onclick="respondRequestClick('${req.requestId}', true)">
              ✅ Kabul Et
            </button>
            <button type="button" class="btn-incoming-reject" onclick="respondRequestClick('${req.requestId}', false)">
              ❌ Kabul Etme
            </button>
          </div>
        </div>
      `;
    }).join("");
  } catch (e) {
    card.style.display = "none";
  }
}

function openRemoteSendModal(targetType, targetIdentifier, title) {
  document.getElementById("remoteTargetType").value = targetType;
  document.getElementById("remoteTargetIdentifier").value = targetIdentifier;
  document.getElementById("remoteSendModalTitle").textContent = targetType === 'group' ? "Gruba Hatırlatıcı Gönder" : "Kullanıcıya Hatırlatıcı Gönder";
  document.getElementById("remoteSendTargetSubtitle").textContent = "Hedef: " + title;
  document.getElementById("remoteInputTitle").value = "";
  document.getElementById("remoteInputMessage").value = "";
  document.getElementById("remoteInputTime").value = "20:00";
  document.getElementById("remoteInputType").value = "daily";
  document.getElementById("remoteEnableTracking").checked = true;
  document.getElementById("remoteSendModal").classList.add("open");
}

function closeRemoteSendModal() {
  document.getElementById("remoteSendModal").classList.remove("open");
}

function handleRemoteModalOverlayClick(e) {
  if (e.target.id === "remoteSendModal") closeRemoteSendModal();
}

function submitRemoteSend() {
  const targetType = document.getElementById("remoteTargetType").value;
  const targetId = document.getElementById("remoteTargetIdentifier").value;
  const title = (document.getElementById("remoteInputTitle").value || "").trim();
  const msg = (document.getElementById("remoteInputMessage").value || "").trim();
  const time = document.getElementById("remoteInputTime").value || "20:00";
  const type = document.getElementById("remoteInputType").value || "daily";
  const tracking = document.getElementById("remoteEnableTracking").checked;

  if (!title) {
    showToast("Lütfen bir hatırlatıcı başlığı yazın.");
    return;
  }

  const reminderObj = {
    title: title,
    message: msg,
    icon: "bell",
    timeOfDay: time,
    type: type,
    daysOfWeek: "1,2,3,4,5",
    enableTracking: tracking,
    stopCondition: "never"
  };

  if (!isAndroid) {
    showToast("Hatırlatıcı isteği iletildi (Mock)!");
    closeRemoteSendModal();
    return;
  }

  const jsonStr = JSON.stringify(reminderObj);
  if (targetType === 'group') {
    window.AndroidBridge.sendGroupReminder(targetId, jsonStr);
    showToast("Gruptaki üyelere onay isteği iletildi! 🚀");
  } else {
    const res = window.AndroidBridge.sendReminderRequest(targetId, jsonStr);
    if (res === 'ok') showToast("@" + targetId + " kullanıcısına istek iletildi! 🚀");
    else showToast("Gönderim: " + res);
  }

  closeRemoteSendModal();
  loadSentRequests(true);
}

function openCreateGroupModal() {
  document.getElementById("groupNameInput").value = "";
  document.getElementById("groupMembersInput").value = "";
  document.getElementById("createGroupModal").classList.add("open");
}

function closeCreateGroupModal() {
  document.getElementById("createGroupModal").classList.remove("open");
}

function handleGroupModalOverlayClick(e) {
  if (e.target.id === "createGroupModal") closeCreateGroupModal();
}

function submitCreateGroup() {
  const name = (document.getElementById("groupNameInput").value || "").trim();
  const membersRaw = (document.getElementById("groupMembersInput").value || "").trim();
  if (!name) {
    showToast("Lütfen bir grup ismi belirleyin.");
    return;
  }
  const members = membersRaw.split(/[,;\n]+/).map(s => s.trim().replace(/^@/, '').toLowerCase()).filter(s => s.length > 0);
  if (members.length === 0) {
    showToast("En az bir kullanıcı adı eklemelisiniz.");
    return;
  }
  if (isAndroid) {
    window.AndroidBridge.createGroup(name, JSON.stringify(members));
  }
  showToast("Grup başarıyla oluşturuldu!");
  closeCreateGroupModal();
  loadGroups();
}

function loadGroups() {
  const container = document.getElementById("groupsListContainer");
  if (!container) return;
  if (!isAndroid) {
    container.innerHTML = "<p style='font-size:0.74rem; color:var(--text-muted);'>Grup bulunamadı.</p>";
    return;
  }
  try {
    const raw = window.AndroidBridge.getGroups();
    const groups = JSON.parse(raw);
    if (!groups || groups.length === 0) {
      container.innerHTML = "<p style='font-size:0.74rem; color:var(--text-muted); margin: 4px 0;'>Henüz bir grup oluşturmadınız.</p>";
      return;
    }
    container.innerHTML = groups.map(g => {
      const members = g.members || [];
      const tags = members.map(m => `<span class="group-member-tag">@${escapeHtml(m)}</span>`).join("");
      return `
        <div class="group-card">
          <div style="flex: 1;">
            <div style="font-size: 0.88rem; font-weight: 700; color: #fff;">${escapeHtml(g.name)}</div>
            <div class="group-members-tags">${tags}</div>
          </div>
          <div style="display: flex; gap: 6px; align-items: center;">
            <button class="btn-primary" style="padding: 6px 10px; font-size: 0.72rem;" onclick="openRemoteSendModal('group', '${g.groupId}', '${escapeAttr(g.name)}')">
              🔔 Gönder
            </button>
            <button class="btn-icon-subtle" style="color: #f87171;" onclick="deleteGroupClick('${g.groupId}')">
              🗑️
            </button>
          </div>
        </div>
      `;
    }).join("");
  } catch (e) {
    container.innerHTML = "";
  }
}

function deleteGroupClick(groupId) {
  showCustomConfirm("Bu grup silinecek", () => {
    if (isAndroid) window.AndroidBridge.deleteGroup(groupId);
    loadGroups();
    showToast("Grup silindi.");
  });
}

function loadIncomingRequests(manual) {
  const container = document.getElementById("incomingRequestsList");
  const emptyState = document.getElementById("emptyIncomingState");
  const badge = document.getElementById("incomingBadge");
  if (!container) return;

  if (!isAndroid) {
    if (emptyState) emptyState.style.display = "block";
    return;
  }

  try {
    const raw = window.AndroidBridge.getIncomingRequests();
    const all = JSON.parse(raw);
    const pending = all.filter(r => r.status === 'pending');

    if (badge) {
      if (pending.length > 0) {
        badge.style.display = "inline-block";
        badge.textContent = pending.length;
      } else {
        badge.style.display = "none";
      }
    }

    if (pending.length === 0) {
      container.innerHTML = "";
      if (emptyState) emptyState.style.display = "block";
      if (manual) showToast("Bekleyen gelen istek yok.");
      return;
    }

    if (emptyState) emptyState.style.display = "none";
    container.innerHTML = pending.map(req => {
      return `
        <div class="request-card">
          <div class="request-card-header">
            <div>
              <span class="request-user-pill">📬 Gönderen: @${escapeHtml(req.fromUsername || 'Bilinmeyen')}</span>
              <h4 style="margin: 4px 0 2px; font-size: 0.92rem; font-weight: 700; color: #fff;">
                🔔 ${escapeHtml(req.title || 'Hatırlatıcı')}
              </h4>
              <p style="margin: 0; font-size: 0.78rem; color: var(--text-muted);">${escapeHtml(req.message || '')}</p>
              <div style="font-size: 0.72rem; color: var(--text-sub); margin-top: 4px;">
                Saat: ${req.timeOfDay || '09:00'} | Tür: ${req.type || 'Günlük'}
              </div>
            </div>
            <span class="request-status-badge pending">Beklemede</span>
          </div>
          <div style="display: flex; gap: 8px; margin-top: 12px;">
            <button class="btn-primary" style="flex: 1; padding: 8px; font-size: 0.78rem; background: #10b981;" onclick="respondRequestClick('${req.requestId}', true)">
              ✅ Kabul Et
            </button>
            <button class="btn-secondary" style="flex: 1; padding: 8px; font-size: 0.78rem; color: #f87171;" onclick="respondRequestClick('${req.requestId}', false)">
              ❌ Reddet
            </button>
          </div>
        </div>
      `;
    }).join("");

    if (manual) showToast("Gelen istekler güncellendi.");
  } catch (e) {
    console.error("loadIncomingRequests error:", e);
  }
}

function respondRequestClick(requestId, accepted) {
  try {
    localStorage.setItem("dismissed_req_" + requestId, accepted ? "accepted" : "rejected");
  } catch (e) {}

  if (accepted && cachedPendingRequests) {
    const req = cachedPendingRequests.find(r => r.requestId === requestId);
    if (req) {
      const localRem = {
        id: "remote_" + req.requestId,
        type: req.type || "daily",
        title: req.title || req.message || "Hatırlatıcı",
        message: req.message || req.title || "Hatırlatıcı",
        icon: "bell",
        timeOfDay: req.timeOfDay || "09:00",
        daysOfWeek: req.daysOfWeek || "1,2,3,4,5,6,7",
        dayOfMonth: req.dayOfMonth || 1,
        intervalMinutes: req.intervalMinutes || 30,
        stopCondition: req.stopCondition || "never",
        endDate: req.endDate || "",
        maxRepeats: req.maxRepeats || 0,
        repeatCount: 0,
        lastTriggeredTime: 0,
        lastTriggeredDate: "",
        enabled: true,
        completed: false,
        enableTracking: req.enableTracking !== false,
        askLater: req.askLater || false,
        askTimeOfDay: req.askTimeOfDay || "18:00",
        lastAskDate: "",
        doneCount: 0,
        notDoneCount: 0,
        lastActionDate: "",
        lastActionStatus: "",
        remoteRequestId: req.requestId,
        fromUsername: req.fromUsername || "",
        trackingHistoryJson: "{}"
      };
      if (isAndroid && window.AndroidBridge.saveReminder) {
        window.AndroidBridge.saveReminder(JSON.stringify(localRem));
      }
    }
  }

  if (isAndroid) {
    window.AndroidBridge.respondToRequest(requestId, accepted);
  }

  showToast(accepted ? "Hatırlatıcı kabul edildi ve Hatırlatıcılarım'a eklendi! ✅" : "Hatırlatıcı reddedildi (bir daha gösterilmeyecek). ❌");
  reminders = getRemindersNative();
  renderRemindersList();
  updateRemindersBadge();
  loadIncomingNotice();
}

function loadSentRequests(manual) {
  const container = document.getElementById("sentRemindersList") || document.getElementById("sentRequestsList");
  const emptyState = document.getElementById("emptySentRemindersState") || document.getElementById("emptySentState");
  if (!container) return;

  if (!isAndroid) {
    if (emptyState) emptyState.style.display = "block";
    return;
  }

  try {
    const raw = window.AndroidBridge.getSentRequests();
    const sent = JSON.parse(raw);
    if (!sent || sent.length === 0) {
      container.innerHTML = "";
      if (emptyState) emptyState.style.display = "block";
      if (manual) showToast("Gönderilen hatırlatıcı bulunamadı.");
      return;
    }

    if (emptyState) emptyState.style.display = "none";
    const todayStr = new Date().toISOString().split("T")[0];

    container.innerHTML = sent.map(req => {
      const st = req.status || 'pending';
      let stBadge = `<span class="request-status-badge pending">⏳ Beklemede</span>`;
      if (st === 'accepted') stBadge = `<span class="request-status-badge accepted">✅ Kabul Edildi</span>`;
      else if (st === 'rejected') stBadge = `<span class="request-status-badge rejected">❌ Reddedildi</span>`;

      let trackingDetailHtml = "";
      if (st === 'accepted') {
        const done = req.doneCount || 0;
        const notDone = req.notDoneCount || 0;
        const pct = req.percentage || (done + notDone > 0 ? Math.round((done / (done + notDone)) * 100) : 0);
        let todayStatus = "Henüz bugün işlem yok";
        if (req.statusLog && req.statusLog[todayStr]) {
          todayStatus = (req.statusLog[todayStr] === 'done') ? "Bugün 'Yaptım' işaretlendi ✅" : "Bugün 'Yapmadım' işaretlendi ❌";
        }

        trackingDetailHtml = `
          <div style="margin-top: 10px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.06);">
            <div class="stat-progress-container" onclick="openRemoteStatsGraphModal('${req.requestId}')" style="cursor: pointer;" title="Detaylı çizgi grafiğini gör">
              <div class="stat-progress-fill" style="width: ${pct}%;"></div>
            </div>
            <div class="stat-meta-row">
              <span style="font-weight: 700; color: #34d399;">Başarı: %${pct} (${done} Yaptı, ${notDone} Yapmadı)</span>
              <span>${todayStatus}</span>
            </div>
            <button type="button" class="btn-guide-action" style="margin-top: 8px; width: 100%; text-align: center;" onclick="openRemoteStatsGraphModal('${req.requestId}')">
              📈 Gün Gün Başarı Çizgi Grafiği & Spike Analizi
            </button>
          </div>
        `;
      }

      return `
        <div class="request-card">
          <div class="request-card-header">
            <div style="flex: 1;">
              <span class="request-user-pill">📤 Hedef: @${escapeHtml(req.toUsername || 'Kullanıcı')}</span>
              <h4 style="margin: 4px 0 2px; font-size: 0.92rem; font-weight: 700; color: #fff;">
                🔔 ${escapeHtml(req.title || 'Hatırlatıcı')}
              </h4>
              <p style="margin: 0; font-size: 0.78rem; color: var(--text-muted);">${escapeHtml(req.message || '')}</p>
              <div style="font-size: 0.72rem; color: var(--text-sub); margin-top: 4px;">
                Saat: ${req.timeOfDay || '09:00'}
              </div>
            </div>
            <div>${stBadge}</div>
          </div>
          ${trackingDetailHtml}
          <div style="display: flex; justify-content: flex-end; margin-top: 8px;">
            <button class="btn-icon-subtle" style="color: #f87171; font-size: 0.72rem;" onclick="deleteSentRequestClick('${req.requestId}')">
              🗑️ Kaydı Kaldır
            </button>
          </div>
        </div>
      `;
    }).join("");

    if (manual) showToast("Gönderilen istekler güncellendi.");
  } catch (e) {
    console.error("loadSentRequests error:", e);
  }
}

function deleteSentRequestClick(requestId) {
  showCustomConfirm("Bu gönderim kaydı silinecek", () => {
    if (isAndroid) window.AndroidBridge.deleteRequest(requestId);
    loadSentRequests(false);
    showToast("Kayıt silindi.");
  });
}

// ==========================================
// 11. YARDIMCILAR & ANDROID KÖPRÜLERİ
// ==========================================

function getAppGradient(name) {
  const gradients = [
    'linear-gradient(135deg, #6366f1, #a855f7)',
    'linear-gradient(135deg, #3b82f6, #06b6d4)',
    'linear-gradient(135deg, #10b981, #059669)',
    'linear-gradient(135deg, #f59e0b, #d97706)',
    'linear-gradient(135deg, #ec4899, #8b5cf6)',
    'linear-gradient(135deg, #f43f5e, #e11d48)'
  ];
  let sum = 0;
  for (let i = 0; i < (name || "").length; i++) sum += name.charCodeAt(i);
  return gradients[sum % gradients.length];
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function escapeAttr(str) {
  if (!str) return '';
  return str.replace(/'/g, "\\'").replace(/"/g, "&quot;");
}

window.refreshStatus = function() {
  loadData();
  checkPermissionStatus();
};

window.handleBack = function() {
  const gameModal = document.getElementById("hafizaGameContainerModal");
  if (gameModal && (gameModal.style.display !== "none" && gameModal.style.display !== "")) {
    closeHafizaGameModal();
    return true;
  }
  // Dil Öğrenme Planlama Modalı
  const langSchedModal = document.getElementById("languageScheduleModal");
  if (langSchedModal && langSchedModal.style.display !== "none") {
    if (typeof closeLanguageReminderModal === "function") {
      closeLanguageReminderModal();
    } else {
      langSchedModal.style.display = "none";
    }
    return true;
  }
  // Dil Öğrenme Oyunu Modalı
  const langGameModal = document.getElementById("languageGameModal");
  if (langGameModal && (langGameModal.style.display !== "none" && langGameModal.style.display !== "")) {
    if (window.languageGame) {
      const langTable = document.getElementById("langTableSection");
      if (langTable && langTable.style.display !== "none") {
        window.languageGame.showScreen("langQuizSection");
        return true;
      }
      const langQuiz = document.getElementById("langQuizSection");
      const langSiga = document.getElementById("langSigaSelectionSection");
      if ((langQuiz && langQuiz.style.display !== "none") || (langSiga && langSiga.style.display !== "none")) {
        window.languageGame.showMainMenu();
        return true;
      }
    }
    if (typeof closeLanguageGameModal === "function") {
      closeLanguageGameModal();
    } else {
      langGameModal.style.display = "none";
    }
    return true;
  }
  const grpNameModal = document.getElementById("groupNameModal");
  if (grpNameModal && grpNameModal.style.display === "flex") {
    cancelGroupCreation();
    return true;
  }
  const grpDetailModal = document.getElementById("groupDetailModal");
  if (grpDetailModal && grpDetailModal.style.display === "flex") {
    closeGroupDetailModal();
    return true;
  }
  const confirmModal = document.getElementById("customConfirmModal");
  if (confirmModal && confirmModal.classList.contains("open")) {
    closeCustomConfirm(false);
    return true;
  }
  const graphModal = document.getElementById("statsGraphModal");
  if (graphModal && graphModal.classList.contains("open")) {
    closeStatsGraphModal();
    return true;
  }
  const profModal = document.getElementById("profileModal");
  if (profModal && profModal.classList.contains("open")) {
    closeProfileModal();
    return true;
  }
  const abtView = document.getElementById("aboutView");
  if (abtView && abtView.classList.contains("open")) {
    closeAboutPage();
    return true;
  }
  const wlView = document.getElementById("whitelistView");
  if (wlView && wlView.classList.contains("open")) {
    closeWhitelistPage();
    return true;
  }
  const setView = document.getElementById("settingsView");
  if (setView && setView.classList.contains("open")) {
    closeSettingsView();
    return true;
  }
  const remModal = document.getElementById("reminderModal");
  if (remModal && remModal.classList.contains("open")) {
    closeReminderModal();
    return true;
  }
  const cfgModal = document.getElementById("configModal");
  if (cfgModal && cfgModal.classList.contains("open")) {
    closeConfigModal();
    return true;
  }
  const appModal = document.getElementById("appPickerModal");
  if (appModal && appModal.classList.contains("open")) {
    closeAppPickerModal();
    return true;
  }
  const grpModal = document.getElementById("createGroupModal");
  if (grpModal && grpModal.classList.contains("open")) {
    closeCreateGroupModal();
    return true;
  }
  const remoteModal = document.getElementById("remoteSendModal");
  if (remoteModal && remoteModal.classList.contains("open")) {
    closeRemoteSendModal();
    return true;
  }

  // Hatırlatıcılar sekmesinde 'Başkası İçin' seçiliyse 'Kendim'e dön
  const tabReminders = document.getElementById("tabReminders");
  if (tabReminders && tabReminders.classList.contains("active") && currentReminderScope === 'others') {
    switchReminderScope('self');
    return true;
  }

  const tabLimits = document.getElementById("tabLimits");
  if (tabLimits && !tabLimits.classList.contains("active")) {
    switchTab('limits');
    return true;
  }
  return "false";
};

// ==========================================
// 12. NATIVE KÖPRÜ ÇAĞRILARI (WRAPPER)
// ==========================================

function getInstalledAppsNative() {
  if (isAndroid && window.AndroidBridge.getInstalledApps) {
    try {
      const raw = window.AndroidBridge.getInstalledApps();
      return JSON.parse(raw);
    } catch (e) {
      return [];
    }
  }
  return mockApps;
}

function getLimitsNative() {
  if (isAndroid && window.AndroidBridge.getLimits) {
    try {
      const raw = window.AndroidBridge.getLimits();
      return JSON.parse(raw);
    } catch (e) {
      return [];
    }
  }
  return mockLimits;
}

function saveLimitNative(item) {
  if (isAndroid && window.AndroidBridge.saveLimit) {
    return window.AndroidBridge.saveLimit(JSON.stringify(item));
  }
  const idx = mockLimits.findIndex(x => x.packageName === item.packageName);
  if (idx >= 0) mockLimits[idx] = { ...mockLimits[idx], ...item };
  else mockLimits.push(item);
  return true;
}

function deleteLimitNative(pkg) {
  if (isAndroid && window.AndroidBridge.deleteLimit) {
    return window.AndroidBridge.deleteLimit(pkg);
  }
  mockLimits = mockLimits.filter(x => x.packageName !== pkg);
  return true;
}

function isAccessibilityEnabledNative() {
  if (isAndroid && window.AndroidBridge.isAccessibilityServiceEnabled) {
    return window.AndroidBridge.isAccessibilityServiceEnabled();
  }
  return true;
}

function isUsageAccessGrantedNative() {
  if (isAndroid && window.AndroidBridge && window.AndroidBridge.isUsageAccessGranted) {
    try {
      return window.AndroidBridge.isUsageAccessGranted();
    } catch (e) {
      return false;
    }
  }
  return true;
}

function openUsageAccessSettings() {
  if (isAndroid && window.AndroidBridge && window.AndroidBridge.openUsageAccessSettings) {
    window.AndroidBridge.openUsageAccessSettings();
  } else {
    showToast("Kullanım erişimi ayarları açılıyor...");
  }
}

function openAccessibilitySettings() {
  if (isAndroid && window.AndroidBridge.openAccessibilitySettings) {
    window.AndroidBridge.openAccessibilitySettings();
  } else {
    showToast("Erişilebilirlik ayarları açılıyor...");
  }
}

function getPomodoroStatusNative() {
  if (isAndroid && window.AndroidBridge.getPomodoroStatus) {
    try {
      const raw = window.AndroidBridge.getPomodoroStatus();
      return JSON.parse(raw);
    } catch (e) {
      return { active: false, remainingSeconds: 0 };
    }
  }
  return { active: pomodoroActive, remainingSeconds: pomodoroRemainingSec, durationMinutes: pomodoroDurationMins };
}

function startPomodoroNative(mins, blockedList, allowedList) {
  if (isAndroid && window.AndroidBridge.startPomodoro) {
    try {
      return window.AndroidBridge.startPomodoro(mins, JSON.stringify(blockedList || []), JSON.stringify(allowedList || []));
    } catch (e) {
      try {
        return window.AndroidBridge.startPomodoro(mins, JSON.stringify(allowedList || []));
      } catch (e2) {}
    }
  }
  return true;
}

function stopPomodoroNative() {
  if (isAndroid && window.AndroidBridge.stopPomodoro) {
    return window.AndroidBridge.stopPomodoro();
  }
  return true;
}

function sortRemindersBySavedOrder(list) {
  if (!Array.isArray(list) || list.length <= 1) return list;
  try {
    const rawOrder = localStorage.getItem("sinirlayici_reminders_order");
    if (!rawOrder) return list;
    const orderIds = JSON.parse(rawOrder);
    if (!Array.isArray(orderIds) || orderIds.length === 0) return list;
    const indexMap = new Map();
    orderIds.forEach((id, idx) => indexMap.set(id, idx));
    return list.slice().sort((a, b) => {
      const aIdx = indexMap.has(a.id) ? indexMap.get(a.id) : 999999;
      const bIdx = indexMap.has(b.id) ? indexMap.get(b.id) : 999999;
      return aIdx - bIdx;
    });
  } catch (e) {
    return list;
  }
}

function saveRemindersOrder() {
  try {
    const orderIds = reminders.map(r => r.id);
    localStorage.setItem("sinirlayici_reminders_order", JSON.stringify(orderIds));
  } catch (e) {}
}

function getRemindersNative() {
  let list = [];
  if (isAndroid && window.AndroidBridge.getReminders) {
    try {
      const raw = window.AndroidBridge.getReminders();
      list = JSON.parse(raw);
    } catch (e) {
      list = [];
    }
  } else {
    list = mockReminders;
  }
  return sortRemindersBySavedOrder(list);
}

function saveReminderNative(item) {
  if (isAndroid && window.AndroidBridge.saveReminder) {
    return window.AndroidBridge.saveReminder(JSON.stringify(item));
  }
  const idx = mockReminders.findIndex(x => x.id === item.id);
  if (idx >= 0) mockReminders[idx] = item;
  else mockReminders.push(item);
  return true;
}

function deleteReminderNative(id) {
  if (isAndroid && window.AndroidBridge.deleteReminder) {
    return window.AndroidBridge.deleteReminder(id);
  }
  mockReminders = mockReminders.filter(x => x.id !== id);
  return true;
}

function triggerReminderNative(id) {
  if (isAndroid && window.AndroidBridge.triggerReminderNow) {
    return window.AndroidBridge.triggerReminderNow(id);
  }
  return true;
}

function showToast(message) {
  if (isAndroid && window.AndroidBridge.showToast) {
    window.AndroidBridge.showToast(message);
  } else {
    console.log("[TOAST]", message);
  }
}

// ==========================================
// ZAMANLANMIŞ KİLİT & 5 SANİYE BASILI TUTMA MANTIĞI
// ==========================================

let scheduledHoldTimer = null;
let scheduledHoldTriggered = false;
let mockScheduledLock = { enabled: false, active: false, start: "23:00", end: "07:00" };

function setupHoldToOpenScheduledLock() {
  const buttons = document.querySelectorAll(".btn-add-limit-hold");
  buttons.forEach(btn => {
    if (btn._holdBound) return;
    btn._holdBound = true;

    let startX = 0;
    let startY = 0;
    let activePointerId = null;

    const startHold = (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      scheduledHoldTriggered = false;
      btn.classList.add("is-holding");

      if (e.pointerId !== undefined && btn.setPointerCapture) {
        try {
          btn.setPointerCapture(e.pointerId);
          activePointerId = e.pointerId;
        } catch (err) {}
      }

      startX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
      startY = e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : 0);

      clearTimeout(scheduledHoldTimer);
      scheduledHoldTimer = setTimeout(() => {
        scheduledHoldTriggered = true;
        btn.classList.remove("is-holding");
        try {
          if (navigator.vibrate) navigator.vibrate([120, 60, 120]);
        } catch (err) {}
        openScheduledLockModal();
      }, 4000);
    };

    const cancelHold = () => {
      btn.classList.remove("is-holding");
      clearTimeout(scheduledHoldTimer);
      if (activePointerId !== null && btn.releasePointerCapture) {
        try {
          btn.releasePointerCapture(activePointerId);
        } catch (err) {}
        activePointerId = null;
      }
    };

        const moveCheck = (e) => {
      // Kullanıcı isteği: Basılı tutarken parmak hareket ettirilse bile iptal edilmez
    };

    btn.addEventListener("pointerdown", startHold);
    btn.addEventListener("pointermove", moveCheck);
    btn.addEventListener("pointerup", cancelHold);
    btn.addEventListener("pointercancel", cancelHold);

    btn.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      return false;
    });

    btn.addEventListener("click", (e) => {
      if (scheduledHoldTriggered) {
        e.preventDefault();
        e.stopPropagation();
        scheduledHoldTriggered = false;
        return;
      }
      openAppPickerModal();
    });
  });
}

function openScheduledLockModal() {
  const status = getScheduledLockStatusNative();
  const toggle = document.getElementById("scheduledLockEnabledToggle");
  const startInput = document.getElementById("scheduledLockStartTime");
  const endInput = document.getElementById("scheduledLockEndTime");

  if (toggle) toggle.checked = !!status.enabled;
  if (startInput) startInput.value = status.start || "23:00";
  if (endInput) endInput.value = status.end || "07:00";

  const modal = document.getElementById("scheduledLockModal");
  if (modal) modal.classList.add("open");
}

function closeScheduledLockModal() {
  const modal = document.getElementById("scheduledLockModal");
  if (modal) modal.classList.remove("open");
}

function handleScheduledLockOverlayClick(e) {
  if (e.target.id === "scheduledLockModal") {
    closeScheduledLockModal();
  }
}

function onScheduledLockToggleChange() {
  // Görsel feedback veya ek kontroller
}

function setScheduledLockPreset(start, end) {
  const startInput = document.getElementById("scheduledLockStartTime");
  const endInput = document.getElementById("scheduledLockEndTime");
  if (startInput) startInput.value = start;
  if (endInput) endInput.value = end;
  const toggle = document.getElementById("scheduledLockEnabledToggle");
  if (toggle) toggle.checked = true;
}

function saveScheduledLockSettings() {
  const toggle = document.getElementById("scheduledLockEnabledToggle");
  const startInput = document.getElementById("scheduledLockStartTime");
  const endInput = document.getElementById("scheduledLockEndTime");

  const enabled = toggle ? toggle.checked : false;
  const start = (startInput && startInput.value) ? startInput.value : "23:00";
  const end = (endInput && endInput.value) ? endInput.value : "07:00";

  const wlSet = getAppWhitelistSet();
  const blockedList = [];
  installedApps.forEach(app => {
    const pkg = app.packageName;
    if (!pkg || pkg === "com.sinirlayici.app") return;
    if (!isEssentialApp(pkg) && !wlSet.has(pkg) && !pomodoroAllowedSet.has(pkg)) {
      blockedList.push(pkg);
    }
  });

  if (isAndroid && window.AndroidBridge.setScheduledLock) {
    try {
      window.AndroidBridge.setScheduledLock(enabled, start, end, JSON.stringify(blockedList));
    } catch (e) {
      try {
        window.AndroidBridge.setScheduledLock(enabled, start, end);
      } catch (e2) {}
    }
  } else {
    mockScheduledLock = { enabled: enabled, active: enabled, start: start, end: end };
    try {
      localStorage.setItem("mock_scheduled_lock", JSON.stringify(mockScheduledLock));
    } catch (e) {}
  }

  closeScheduledLockModal();
  updateScheduledLockBanner();

  if (enabled) {
    showToast(`Zamanlanmış kilit kaydedildi (${start} - ${end}).`);
  } else {
    showToast("Zamanlanmış kilit kapatıldı.");
  }
}

function getScheduledLockStatusNative() {
  if (isAndroid && window.AndroidBridge.getScheduledLockStatus) {
    try {
      const raw = window.AndroidBridge.getScheduledLockStatus();
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.error("getScheduledLockStatus error:", e);
    }
  }
  try {
    const raw = localStorage.getItem("mock_scheduled_lock");
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return mockScheduledLock;
}

function updateScheduledLockBanner() {
  const banner = document.getElementById("scheduledLockBanner");
  const textEl = document.getElementById("scheduledLockBannerText");
  const subEl = document.getElementById("scheduledLockBannerSub");
  if (!banner || !textEl) return;

  const status = getScheduledLockStatusNative();
  if (status && status.enabled) {
    const endStr = status.end || "07:00";
    banner.style.display = "flex";
    textEl.textContent = `Tüm uygulamalar ${endStr} saatine kadar sınırlandırılmıştır`;
    if (subEl) {
      if (status.active) {
        subEl.textContent = "Kilit şu anda aktif. Pomodoro izinleri ve istisnalar serbesttir.";
      } else {
        subEl.textContent = `Otomatik devreye girme: ${status.start} - ${endStr}`;
      }
    }
  } else {
    banner.style.display = "none";
  }
}



// ==========================================
// GİZLİ ŞİFRE & MENÜ GÖRÜNÜRLÜK YÖNETİMİ
// 2488 -> Pomodoro Menüsü Aç/Kapat
// 6743 -> Sınırlayıcı Menüsü Aç/Kapat
// ==========================================
let isPomodoroHidden = localStorage.getItem("sinirlayici_hide_pomodoro") === null ? true : (localStorage.getItem("sinirlayici_hide_pomodoro") === "true");
let isLimitsHidden = localStorage.getItem("sinirlayici_hide_limits") === null ? true : (localStorage.getItem("sinirlayici_hide_limits") === "true");

function applyTabVisibility() {
  const btnPomodoro = document.getElementById("tabBtnPomodoro") || document.querySelector(".nav-tabs .pomodoro-tab");
  const tabPomodoro = document.getElementById("tabPomodoro");
  const btnLimits = document.getElementById("tabBtnLimits") || document.querySelectorAll(".nav-tabs .tab-btn")[0];
  const tabLimits = document.getElementById("tabLimits");

  if (btnPomodoro) btnPomodoro.style.display = isPomodoroHidden ? "none" : "";
  if (btnLimits) btnLimits.style.display = isLimitsHidden ? "none" : "";

  // Ayarlardaki Sınırlandırılmayacak Uygulamalar ve Uygulama Hakkında kutucuklarını gizle/göster
  const settingsGrid = document.getElementById("settingsTwoSquaresGrid");
  if (settingsGrid) {
    settingsGrid.style.display = isLimitsHidden ? "none" : "grid";
  }

  // Eğer açık olan sekme gizliyse görünür olan sekmeye geç (Öncelik: Hatırlatıcı eğer ilk açıksa)
  const activeBtn = document.querySelector(".nav-tabs .tab-btn.active");
  if (!activeBtn || activeBtn.style.display === "none") {
    if (!isLimitsHidden) {
      switchTab('limits');
    } else if (!isPomodoroHidden) {
      switchTab('pomodoro');
    } else {
      switchTab('reminders');
    }
  }
}

function setupBrandClockSecretHold() {
  const brandIcon = document.getElementById("brandClockIcon") || document.querySelector(".brand-icon");
  if (!brandIcon || brandIcon._secretHoldBound) return;
  brandIcon._secretHoldBound = true;

  let timer = null;
  let activePointerId = null;

  const startHold = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    brandIcon.classList.add("is-holding-secret");

    if (e.pointerId !== undefined && brandIcon.setPointerCapture) {
      try {
        brandIcon.setPointerCapture(e.pointerId);
        activePointerId = e.pointerId;
      } catch (err) {}
    }

    clearTimeout(timer);
    timer = setTimeout(() => {
      brandIcon.classList.remove("is-holding-secret");
      try {
        if (navigator.vibrate) navigator.vibrate([90]);
      } catch (err) {}
      openSecretCodeModal();
    }, 2000); // 2 saniye
  };

  const cancelHold = () => {
    brandIcon.classList.remove("is-holding-secret");
    clearTimeout(timer);
    if (activePointerId !== null && brandIcon.releasePointerCapture) {
      try {
        brandIcon.releasePointerCapture(activePointerId);
      } catch (err) {}
      activePointerId = null;
    }
  };

  brandIcon.addEventListener("pointerdown", startHold);
  // Parmak hareket ettirilse bile iptal edilmez
  brandIcon.addEventListener("pointerup", cancelHold);
  brandIcon.addEventListener("pointercancel", cancelHold);
  brandIcon.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    return false;
  });
}

function openSecretCodeModal() {
  const modal = document.getElementById("secretCodeModal");
  const input = document.getElementById("secretCodeInput");
  if (modal && input) {
    input.value = "";
    modal.style.display = "flex";
    setTimeout(() => input.focus(), 100);

    input.onkeydown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        submitSecretCode();
      }
    };
    input.oninput = () => {
      if (input.value.length === 4) {
        setTimeout(submitSecretCode, 150);
      }
    };
  }
}

function closeSecretCodeModal() {
  const modal = document.getElementById("secretCodeModal");
  if (modal) modal.style.display = "none";
}

function submitSecretCode() {
  const input = document.getElementById("secretCodeInput");
  if (!input) return;
  const val = input.value.trim();

  if (val === "8246") {
    // 8246 KODU: 5 Günlük Katı Kilit Modu (Değiştirilemez & Silinemez)
    const fiveDaysMs = 5 * 24 * 60 * 60 * 1000;
    const strictLockUntil = Date.now() + fiveDaysMs;
    localStorage.setItem("sinirlayici_strict_lock_until", strictLockUntil.toString());
    closeSecretCodeModal();
    renderLimitsList();
    updateStrictLockBanner();
    showToast("🔒 5 Günlük Katı Kilit Aktif! Sınırlar 5 gün boyunca değiştirilemez ve silinemez.");
    return;
  } else if (val === "6442") {
    // 6442 KODU: Arapça Oyunu Başlat
    closeSecretCodeModal();
    if (typeof openLanguageGameModal === 'function') {
      openLanguageGameModal();
    }
    showToast("📖 Arapça Oyunu Açıldı!");
    return;
  } else if (val === "6443") {
    // 6443 KODU: 3D Hafıza Oyunu Başlat
    closeSecretCodeModal();
    if (typeof openHafizaGameModal === 'function') {
      openHafizaGameModal();
    }
    showToast("🧠 3D Hafıza Oyunu Açıldı! 22.000 puanı geçerseniz 10 dk serbest izin kazanırsınız!");
    return;
  } else if (val === "2488") {
    // Pomodoro Modunu Gizle / Göster
    isPomodoroHidden = !isPomodoroHidden;
    localStorage.setItem("sinirlayici_hide_pomodoro", isPomodoroHidden ? "true" : "false");
    applyTabVisibility();
    closeSecretCodeModal();
    showToast(isPomodoroHidden ? "Pomodoro modu menülerden kaldırıldı." : "Pomodoro modu tekrar eklendi.");
  } else if (val === "6743") {
    // Sınırlayıcı Menüsünü Gizle / Göster
    isLimitsHidden = !isLimitsHidden;
    localStorage.setItem("sinirlayici_hide_limits", isLimitsHidden ? "true" : "false");
    applyTabVisibility();
    closeSecretCodeModal();
    showToast(isLimitsHidden ? "Sınırlayıcı menüsü kaldırıldı." : "Sınırlayıcı menüsü tekrar eklendi.");
  } else {
    showToast("Geçersiz şifre!");
    input.value = "";
    input.focus();
  }
}


// ==========================================
// EKRANDA AŞAĞI KAYAN BİLDİRİM & BUTONLAR
// ==========================================
let currentActiveNotifReminderId = null;

function triggerHeadsUpNotification(reminder) {
  currentActiveNotifReminderId = reminder.id;
  const banner = document.getElementById("headsUpNotificationBanner");
  const title = document.getElementById("headsUpTitle");
  const sub = document.getElementById("headsUpSub");
  if (!banner || !title) return;

  title.textContent = reminder.message || reminder.title || "Hatırlatıcı";
  if (sub) {
    sub.textContent = reminder.type === 'daily' ? `Her gün ${reminder.timeOfDay || '09:00'}` : "Planlanan zaman geldi";
  }

  banner.classList.remove("hide");
  banner.style.display = "flex";

  try {
    if (navigator.vibrate) navigator.vibrate([150, 80, 150]);
  } catch (e) {}

  // Web Notification desteği varsa sistem bildirimi de yolla
  if (typeof Notification !== "undefined" && Notification.permission === "granted") {
    try {
      new Notification("🔔 Sınırlayıcı: " + (reminder.message || "Hatırlatıcı"), {
        body: "Görevi tamamladınız mı? Seçiminizi işaretleyin.",
        icon: "res/drawable/ic_stat_reminder.png"
      });
    } catch (e) {}
  }
}

function closeHeadsUpBanner() {
  const banner = document.getElementById("headsUpNotificationBanner");
  if (!banner) return;
  banner.classList.add("hide");
  setTimeout(() => {
    banner.style.display = "none";
    banner.classList.remove("hide");
  }, 300);
}

function handleNotificationAction(isDone) {
  if (!currentActiveNotifReminderId) {
    closeHeadsUpBanner();
    return;
  }
  
  const remId = currentActiveNotifReminderId;
  const todayStr = new Date().toISOString().split("T")[0];

  // Hatırlatıcı verisini güncelle
  const idx = reminders.findIndex(x => x.id === remId);
  if (idx >= 0) {
    const rem = reminders[idx];
    rem.lastActionDate = todayStr;
    rem.lastActionStatus = isDone ? 'done' : 'not_done';
    
    if (isDone) {
      rem.doneCount = (rem.doneCount || 0) + 1;
    } else {
      rem.notDoneCount = (rem.notDoneCount || 0) + 1;
    }

    // Tarihsel kayıt ekle
    try {
      let hist = {};
      if (rem.trackingHistoryJson) hist = JSON.parse(rem.trackingHistoryJson);
      hist[todayStr] = isDone ? 'done' : 'not_done';
      rem.trackingHistoryJson = JSON.stringify(hist);
    } catch (e) {}

    saveReminderNative(rem);
    renderRemindersList();
  }

  // Android Native Köprüsüne Bildir
  if (isAndroid && window.AndroidBridge.markReminderAction) {
    try {
      window.AndroidBridge.markReminderAction(remId, isDone);
    } catch (e) {}
  }

  closeHeadsUpBanner();
  showToast(isDone ? "Harika! Görev yapıldı olarak kaydedildi. ✅" : "Kaydedildi: Görev yapılmadı. ❌");
}

// testReminderItem fonksiyonunu ekranda aşağı kayan bildirim gösterecek şekilde güncelle
function testReminderItem(id) {
  triggerReminderNative(id);
  const rem = reminders.find(x => x.id === id);
  if (rem) {
    triggerHeadsUpNotification(rem);
  } else {
    showToast("🔔 Test bildirimi tetiklendi!");
  }
}


// ==========================================
// HATIRLATICI GRUPLANDIRMA & SÜRÜKLE-BIRAK (HOLD & DRAG)
// ==========================================
let reminderGroups = [];
try {
  const savedGrps = localStorage.getItem("sinirlayici_reminder_groups");
  if (savedGrps) reminderGroups = JSON.parse(savedGrps);
} catch (e) {
  reminderGroups = [];
}

function saveReminderGroups() {
  localStorage.setItem("sinirlayici_reminder_groups", JSON.stringify(reminderGroups));
}

let pendingGroupCard1Id = null;
let pendingGroupCard2Id = null;
let currentActiveViewingGroupId = null;

// Grup Detay Modalı Aç
function openGroupDetailModal(groupId) {
  currentActiveViewingGroupId = groupId;
  const grp = reminderGroups.find(g => g.id === groupId);
  if (!grp) return;

  const modal = document.getElementById("groupDetailModal");
  const title = document.getElementById("groupDetailTitle");
  const list = document.getElementById("groupDetailList");
  if (!modal || !list) return;

  title.textContent = grp.name;
  const groupReminders = reminders.filter(r => r.groupId === groupId);

  if (groupReminders.length === 0) {
    list.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px;">Bu grupta henüz hatırlatıcı yok.</div>`;
  } else {
    list.innerHTML = renderRemindersCardsHtml(groupReminders, true);
  }

  modal.style.display = "flex";
}

function closeGroupDetailModal() {
  const modal = document.getElementById("groupDetailModal");
  if (modal) modal.style.display = "none";
  currentActiveViewingGroupId = null;
}

// Grubu Boz (Dissolve)
function dissolveCurrentGroup() {
  if (!currentActiveViewingGroupId) return;
  const grpId = currentActiveViewingGroupId;
  const grp = reminderGroups.find(g => g.id === grpId);
  const grpName = grp ? grp.name : "Grup";

  showCustomConfirm(`"${grpName}" grubu dağıtılsın mı?\nHatırlatıcılar ayrılacak ve ana listede tek tek görünecektir.`, () => {
    reminders.forEach(r => {
      if (r.groupId === grpId) {
        delete r.groupId;
        saveReminderNative(r);
      }
    });
    reminderGroups = reminderGroups.filter(g => g.id !== grpId);
    saveReminderGroups();

    closeGroupDetailModal();
    renderRemindersList();
    showToast(`"${grpName}" grubu bozuldu. Hatırlatıcılar ayrıldı.`);
  });
}

// Gruptan Tek Hatırlatıcı Çıkar
function removeReminderFromGroup(remId) {
  const rem = reminders.find(r => r.id === remId);
  if (rem) {
    delete rem.groupId;
    saveReminderNative(rem);
    if (currentActiveViewingGroupId) {
      openGroupDetailModal(currentActiveViewingGroupId);
    }
    renderRemindersList();
    showToast("Hatırlatıcı gruptan çıkarıldı.");
  }
}

// Grup Oluşturma Modalı
function openGroupNameModal(id1, id2) {
  pendingGroupCard1Id = id1;
  pendingGroupCard2Id = id2;
  const modal = document.getElementById("groupNameModal");
  const input = document.getElementById("groupNameInputModal");
  if (!modal || !input) return;

  input.value = "";
  modal.style.display = "flex";
  setTimeout(() => input.focus(), 100);

  input.onkeydown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      confirmGroupCreation();
    }
  };
}

function cancelGroupCreation() {
  const modal = document.getElementById("groupNameModal");
  if (modal) modal.style.display = "none";
  pendingGroupCard1Id = null;
  pendingGroupCard2Id = null;
  renderRemindersList();
  showToast("Grup oluşturma iptal edildi.");
}

function confirmGroupCreation() {
  const input = document.getElementById("groupNameInputModal");
  if (!input || !pendingGroupCard1Id || !pendingGroupCard2Id) return;

  const groupName = input.value.trim() || "Hatırlatıcı Grubu";
  const newGroupId = "grp_" + Date.now();

  reminderGroups.push({
    id: newGroupId,
    name: groupName,
    createdAt: new Date().toISOString()
  });
  saveReminderGroups();

  const r1 = reminders.find(r => r.id === pendingGroupCard1Id);
  const r2 = reminders.find(r => r.id === pendingGroupCard2Id);

  if (r1) { r1.groupId = newGroupId; saveReminderNative(r1); }
  if (r2) { r2.groupId = newGroupId; saveReminderNative(r2); }

  const modal = document.getElementById("groupNameModal");
  if (modal) modal.style.display = "none";
  pendingGroupCard1Id = null;
  pendingGroupCard2Id = null;

  renderRemindersList();
  showToast(`"${groupName}" grubu başarıyla oluşturuldu! 📁`);
}

// ==========================================
// KARTLARI RENDER ETME YARDIMCISI
// ==========================================
function renderSingleReminderCardHtml(r, isInsideGroup = false) {
  const todayStr = new Date().toISOString().split("T")[0];
  const iconEmoji = "🔔";

  let scheduleText = "";
  if (r.type === 'daily') scheduleText = `🌅 Her gün ${r.timeOfDay || '09:00'}`;
  else if (r.type === 'weekly') {
    const dayNames = { 1: 'Pzt', 2: 'Sal', 3: 'Çar', 4: 'Per', 5: 'Cum', 6: 'Cmt', 7: 'Paz' };
    const days = (r.daysOfWeek || '1,2,3,4,5').split(',').map(d => dayNames[d.trim()] || d).join(', ');
    scheduleText = `🗓️ ${days} saat ${r.timeOfDay || '10:00'}`;
  } else if (r.type === 'monthly') scheduleText = `📆 Her ayın ${r.dayOfMonth || 1}'i saat ${r.timeOfDay || '12:00'}`;
  else if (r.type === 'periodic') scheduleText = `⏱️ Her ${r.intervalMinutes || 30} dakikada bir`;
  else if (r.type === 'app_usage') scheduleText = `📱 ${escapeHtml(r.appName || 'Uygulama')} ${r.appUsageMinutes || 20} dk kullanımda`;

  let twoStageBadgeHtml = "";
  if (r.askLater) {
    twoStageBadgeHtml = `<span class="reminder-pill-badge" style="background: rgba(99,102,241,0.2); color: #818cf8;">🕒 Sorma: ${r.askTimeOfDay || '18:00'}</span>`;
  }

  let stopBadgeHtml = "";
  const isCompleted = r.completed === true;
  const isExpired = (r.stopCondition === 'date' || (r.endDate && r.stopCondition !== 'never')) && r.endDate && todayStr > r.endDate;

  if (isCompleted) stopBadgeHtml = `<span class="reminder-pill-badge completed">✅ Tamamlandı</span>`;
  else if (isExpired) stopBadgeHtml = `<span class="reminder-pill-badge expired">⌛ Süresi Doldu</span>`;
  else if ((r.stopCondition === 'count' || r.maxRepeats > 0) && r.stopCondition !== 'never' && r.maxRepeats > 0) {
    const remaining = Math.max(0, r.maxRepeats - (r.repeatCount || 0));
    stopBadgeHtml = `<span class="reminder-pill-badge repeat">🔁 Kalan: ${remaining} / ${r.maxRepeats} tekrar</span>`;
  } else if ((r.stopCondition === 'date' || r.endDate) && r.endDate && r.stopCondition !== 'never') {
    stopBadgeHtml = `<span class="reminder-pill-badge date">📅 Bitiş: ${escapeHtml(r.endDate)}</span>`;
  } else {
    stopBadgeHtml = `<span class="reminder-pill-badge schedule" style="margin-right: 2px;">♾️ Süresiz</span>`;
  }

  const isCardDisabled = !r.enabled || isCompleted || isExpired;

  return `
    <div class="reminder-card ${isCardDisabled ? 'disabled' : ''}" data-reminder-id="${r.id}">
      <div class="reminder-header">
        <div class="reminder-title-area">
          <div class="yellow-bell-badge">${iconEmoji}</div>
          <div class="reminder-content">
            <div class="reminder-msg">
              <span class="reminder-msg-text">${escapeHtml(r.message || r.title || 'Hatırlatıcı')}</span>
              ${r.fromUsername ? `
                <span class="reminder-creator-badge" title="${escapeHtml(r.fromUsername)} tarafından oluşturuldu">
                  <span class="creator-icon">👤</span>
                  <span class="creator-name">@${escapeHtml(r.fromUsername)}</span>
                </span>
              ` : ''}
            </div>
            <div class="reminder-sub" style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap; margin-top: 3px;">
              ${stopBadgeHtml}
              ${twoStageBadgeHtml}
              <span style="font-size: 0.8rem; color: var(--text-muted);">${scheduleText}</span>
            </div>
          </div>
        </div>
        <label class="switch">
          <input type="checkbox" ${r.enabled && !isCompleted && !isExpired ? 'checked' : ''} onchange="toggleReminderState('${r.id}', this.checked)">
          <span class="slider"></span>
        </label>
      </div>

      <div class="reminder-footer" style="display: flex; align-items: center; justify-content: space-between; margin-top: 14px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.06);">
        <div class="reminder-footer-left" style="display: flex; gap: 8px;">
          <button class="btn-reminder-action stats" onclick="openStatsGraphModal('${r.id}')" title="Detaylı Analiz Grafiği">
            📊 Analiz
          </button>
          ${isInsideGroup ? `
            <button class="btn-reminder-action" onclick="removeReminderFromGroup('${r.id}')" title="Gruptan Çıkar" style="font-size: 0.76rem; padding: 4px 8px; border-radius: 8px; background: rgba(255,255,255,0.08); color: #cbd5e1; border: 1px solid rgba(255,255,255,0.15);">
              Gruptan Çıkar
            </button>
          ` : ''}
        </div>
        <div class="reminder-footer-actions">
          <button class="btn-reminder-action test" onclick="testReminderItem('${r.id}')" title="Ekranda aşağı kayan bildirimi test et">
            🔔 Test
          </button>
          <button class="btn-reminder-action edit" onclick="openEditReminderModal('${r.id}')">
            ✏️ Düzenle
          </button>
          <button class="btn-reminder-action danger" onclick="deleteReminderItem('${r.id}')">
            🗑️ Sil
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderRemindersCardsHtml(list, isInsideGroup = false) {
  return list.map(r => renderSingleReminderCardHtml(r, isInsideGroup)).join("");
}

// ==========================================
// YENİ ANA renderRemindersList (Grup + Tek Kartlar + Drag & Drop)
// ==========================================
function renderRemindersList() {
  const container = document.getElementById("remindersList");
  const emptyState = document.getElementById("emptyRemindersState");
  const headerAddBtn = document.getElementById("btnHeaderAddReminder");
  if (!container) return;

  if (!reminders || reminders.length === 0) {
    container.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    if (headerAddBtn) headerAddBtn.style.display = "none";
    return;
  }
  if (emptyState) emptyState.style.display = "none";
  if (headerAddBtn) headerAddBtn.style.display = "inline-flex";

  // Grupları ve Tek Hatırlatıcıları Ayrıştır
  let htmlOutput = "";
  const renderedGroupIds = new Set();

  reminders.forEach(r => {
    if (r.groupId) {
      if (renderedGroupIds.has(r.groupId)) return;
      renderedGroupIds.add(r.groupId);

      const grp = reminderGroups.find(g => g.id === r.groupId);
      const grpName = grp ? grp.name : "Grup";
      const grpItems = reminders.filter(x => x.groupId === r.groupId);

      htmlOutput += `
        <div class="reminder-group-card" data-group-id="${r.groupId}" onclick="openGroupDetailModal('${r.groupId}')" title="Detaylar için tıklayın">
          <div class="group-card-header">
            <div class="group-card-title-wrap">
              <div class="group-card-icon">📁</div>
              <div class="group-card-name">${escapeHtml(grpName)}</div>
            </div>
            <span class="group-card-badge">${grpItems.length} Hatırlatıcı</span>
          </div>
          <!-- KULLANICI İSTEĞİ: Altta sadece hatırlatıcıların kendi isimleri, diğer detaylar gizli -->
          <div class="group-card-items-preview">
            ${grpItems.map(it => `
              <div class="group-preview-item">
                <span class="group-preview-dot"></span>
                <span>${escapeHtml(it.message || it.title || 'Hatırlatıcı')}</span>
              </div>
            `).join("")}
          </div>
          <div class="group-card-hint">
            <span>Detayları ve ayarları görmek için dokunun</span>
            <span>➔</span>
          </div>
        </div>
      `;
    } else {
      htmlOutput += renderSingleReminderCardHtml(r, false);
    }
  });

  container.innerHTML = htmlOutput;

  // Sürükle ve Bırak (Basılı Tutup Taşıma / Gruplama) Dinleyicilerini Kur
  setupRemindersDragAndDrop();
}

// ==========================================
// BASILI TUTUP TAŞIMA, SIRALAMA VE GRUPLANDIRMA (DRAG & DROP & REORDER)
// ==========================================
function setupRemindersDragAndDrop() {
  const container = document.getElementById("remindersList");
  if (!container) return;

  const cards = container.querySelectorAll(".reminder-card, .reminder-group-card");

  function clearAllIndicators() {
    container.querySelectorAll(".drop-indicator-above, .drop-indicator-below, .drop-group-target").forEach(el => {
      el.classList.remove("drop-indicator-above", "drop-indicator-below", "drop-group-target");
    });
  }

  function executeDrop(srcCard, dstCard, action) {
    const isSrcGroup = srcCard.classList.contains("reminder-group-card");
    const isDstGroup = dstCard.classList.contains("reminder-group-card");
    const srcRemId = srcCard.getAttribute("data-reminder-id");
    const srcGrpId = srcCard.getAttribute("data-group-id");
    const dstRemId = dstCard.getAttribute("data-reminder-id");
    const dstGrpId = dstCard.getAttribute("data-group-id");

    if (action === "group") {
      if (!isSrcGroup && !isDstGroup && srcRemId && dstRemId) {
        // İki tek hatırlatıcıyı birleştirip yeni grup oluştur
        openGroupNameModal(srcRemId, dstRemId);
        return;
      }
      if (!isSrcGroup && isDstGroup && srcRemId && dstGrpId) {
        // Tek hatırlatıcıyı var olan gruba ekle
        const rem = reminders.find(r => r.id === srcRemId);
        if (rem) {
          rem.groupId = dstGrpId;
          saveReminderNative(rem);
          saveRemindersOrder();
          renderRemindersList();
          showToast("Hatırlatıcı gruba eklendi! 📁");
        }
        return;
      }
    }

    // Sıralama (Reorder): 'above' veya 'below'
    // Ekranda görünen görsel varlık listesini (tekil veya grup) sırayla çıkar
    const entities = [];
    const seenGroupIds = new Set();
    reminders.forEach(r => {
      if (r.groupId) {
        if (!seenGroupIds.has(r.groupId)) {
          seenGroupIds.add(r.groupId);
          entities.push({
            type: "group",
            id: r.groupId,
            items: reminders.filter(x => x.groupId === r.groupId)
          });
        }
      } else {
        entities.push({
          type: "single",
          id: r.id,
          items: [r]
        });
      }
    });

    const srcEntityKey = isSrcGroup ? srcGrpId : srcRemId;
    const dstEntityKey = isDstGroup ? dstGrpId : dstRemId;

    const srcIdx = entities.findIndex(e => e.id === srcEntityKey);
    const dstIdx = entities.findIndex(e => e.id === dstEntityKey);

    if (srcIdx < 0 || dstIdx < 0 || srcIdx === dstIdx) return;

    const [movedEntity] = entities.splice(srcIdx, 1);
    let insertIdx = entities.findIndex(e => e.id === dstEntityKey);
    if (action === "below") {
      insertIdx += 1;
    }
    entities.splice(insertIdx, 0, movedEntity);

    // Düzleştirilmiş yeni hatırlatıcı listesini oluştur
    const newReminders = [];
    entities.forEach(ent => {
      ent.items.forEach(item => newReminders.push(item));
    });

    reminders = newReminders;
    saveRemindersOrder();
    renderRemindersList();

    try {
      if (navigator.vibrate) navigator.vibrate([35, 30, 35]);
    } catch (e) {}
    showToast("Sıralama güncellendi! ↕️");
  }

  cards.forEach(card => {
    let holdTimer = null;
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let ghostEl = null;
    let currentTargetCard = null;
    let currentDropAction = null;

    const startHold = (clientX, clientY) => {
      startX = clientX;
      startY = clientY;
      isDragging = false;
      currentTargetCard = null;
      currentDropAction = null;

      card.classList.add("is-preparing-drag");

      holdTimer = setTimeout(() => {
        isDragging = true;
        card.classList.remove("is-preparing-drag");
        card.classList.add("is-dragging");
        document.body.classList.add("drag-scrolling-locked");

        try {
          if (navigator.vibrate) navigator.vibrate([50]);
        } catch (err) {}

        const titleText = card.querySelector(".reminder-msg-text, .group-card-name");
        const isGrp = card.classList.contains("reminder-group-card");
        const label = titleText ? titleText.textContent.trim() : (isGrp ? "Grup" : "Hatırlatıcı");

        ghostEl = document.createElement("div");
        ghostEl.className = "drag-ghost-avatar";
        ghostEl.innerHTML = `<span>${isGrp ? "📁" : "🔔"}</span><span>${escapeHtml(label)}</span>`;
        document.body.appendChild(ghostEl);
        ghostEl.style.left = `${clientX}px`;
        ghostEl.style.top = `${clientY}px`;
      }, 200); // 200ms hızlı ve tepkisel basılı tutma
    };

    const handleMove = (clientX, clientY, cancelableEvent) => {
      if (!isDragging) {
        // Parmağın 10px'den fazla kayması durumunda sürükleme iptal, normal kaydırmaya izin ver
        if (Math.hypot(clientX - startX, clientY - startY) > 10) {
          clearTimeout(holdTimer);
          card.classList.remove("is-preparing-drag");
        }
        return;
      }

      if (cancelableEvent && cancelableEvent.cancelable) {
        cancelableEvent.preventDefault();
      }

      if (ghostEl) {
        ghostEl.style.left = `${clientX}px`;
        ghostEl.style.top = `${clientY}px`;
      }

      clearAllIndicators();

      const elUnder = document.elementFromPoint(clientX, clientY);
      const targetCard = elUnder ? elUnder.closest(".reminder-card, .reminder-group-card") : null;

      if (targetCard && targetCard !== card) {
        currentTargetCard = targetCard;
        const rect = targetCard.getBoundingClientRect();
        const relY = clientY - rect.top;
        const h = rect.height;

        const isDraggedGroup = card.classList.contains("reminder-group-card");

        if (isDraggedGroup) {
          // Gruplar sadece yukarı veya aşağı sıralanabilir
          if (relY < h * 0.5) {
            currentDropAction = "above";
            targetCard.classList.add("drop-indicator-above");
          } else {
            currentDropAction = "below";
            targetCard.classList.add("drop-indicator-below");
          }
        } else {
          // Tek hatırlatıcı: Üst %32 yukarı sıralar, Alt %32 aşağı sıralar, Orta %36 gruplar
          if (relY < h * 0.32) {
            currentDropAction = "above";
            targetCard.classList.add("drop-indicator-above");
          } else if (relY > h * 0.68) {
            currentDropAction = "below";
            targetCard.classList.add("drop-indicator-below");
          } else {
            currentDropAction = "group";
            targetCard.classList.add("drop-group-target");
          }
        }
      } else {
        currentTargetCard = null;
        currentDropAction = null;
      }
    };

    const endDrag = () => {
      clearTimeout(holdTimer);
      card.classList.remove("is-preparing-drag");
      document.body.classList.remove("drag-scrolling-locked");

      if (isDragging) {
        isDragging = false;
        card.classList.remove("is-dragging");
        if (ghostEl && ghostEl.parentNode) ghostEl.parentNode.removeChild(ghostEl);
        ghostEl = null;

        // Tıklamanın detay modalını veya ayarları tetiklemesini engelle
        card.addEventListener("click", (ev) => {
          ev.stopPropagation();
          ev.preventDefault();
        }, { capture: true, once: true });

        const target = currentTargetCard;
        const action = currentDropAction;
        clearAllIndicators();

        if (target && action) {
          executeDrop(card, target, action);
        }
      }
    };

    // TOUCH OLAYLARI (Android WebView için { passive: false })
    const onTouchStart = (e) => {
      if (e.target.closest("button, input, .switch, .slider, .action-btn, a")) return;
      if (e.touches.length !== 1) return;
      startHold(e.touches[0].clientX, e.touches[0].clientY);
    };

    const onTouchMove = (e) => {
      if (e.touches.length !== 1) return;
      handleMove(e.touches[0].clientX, e.touches[0].clientY, e);
    };

    const onTouchEnd = (e) => {
      endDrag();
    };

    card.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("touchcancel", onTouchEnd);

    // MOUSE / POINTER FALLBACK (Masaüstü ve Pointer cihazlar için)
    const onMouseDown = (e) => {
      if (e.button !== 0) return;
      if (e.target.closest("button, input, .switch, .slider, .action-btn, a")) return;
      startHold(e.clientX, e.clientY);

      const onMouseMove = (ev) => {
        handleMove(ev.clientX, ev.clientY, ev);
      };

      const onMouseUp = () => {
        endDrag();
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
      };

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    };

    card.addEventListener("mousedown", onMouseDown);
  });
}


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

// Android donanım geri tuşu için merkezi yönetim
window.handleBack = function() {
  // 1. Hafıza Oyunu Modalı
  const hafizaModal = document.getElementById("hafizaGameContainerModal");
  if (hafizaModal && (hafizaModal.style.display !== "none" && hafizaModal.style.display !== "")) {
    closeHafizaGameModal();
    return true;
  }
  // 2. Dil Öğrenme Oyunu Modalı
  const langGameModal = document.getElementById("languageGameModal");
  if (langGameModal && (langGameModal.style.display !== "none" && langGameModal.style.display !== "")) {
    if (window.languageGame) {
      const langTable = document.getElementById("langTableSection");
      if (langTable && langTable.style.display !== "none") {
        window.languageGame.showScreen("langQuizSection");
        return true;
      }
      const langQuiz = document.getElementById("langQuizSection");
      const langSiga = document.getElementById("langSigaSelectionSection");
      if ((langQuiz && langQuiz.style.display !== "none") || (langSiga && langSiga.style.display !== "none")) {
        window.languageGame.showMainMenu();
        return true;
      }
    }
    if (typeof closeLanguageGameModal === "function") {
      closeLanguageGameModal();
    } else {
      langGameModal.style.display = "none";
    }
    return true;
  }
  // 3. Gizli Kod Modalı
  const secretModal = document.getElementById("secretCodeModal");
  if (secretModal && secretModal.style.display !== "none" && secretModal.style.display !== "") {
    closeSecretCodeModal();
    return true;
  }
  // 4. Diğer Uygulama Modalları
  const appSelectModal = document.getElementById("appSelectModal");
  if (appSelectModal && appSelectModal.style.display !== "none" && appSelectModal.style.display !== "") {
    if (typeof closeAppSelectModal === "function") closeAppSelectModal();
    else appSelectModal.style.display = "none";
    return true;
  }
  const addLimitModal = document.getElementById("addLimitModal");
  if (addLimitModal && addLimitModal.style.display !== "none" && addLimitModal.style.display !== "") {
    if (typeof closeAddLimitModal === "function") closeAddLimitModal();
    else addLimitModal.style.display = "none";
    return true;
  }
  const detailsModal = document.getElementById("detailsModal");
  if (detailsModal && detailsModal.style.display !== "none" && detailsModal.style.display !== "") {
    if (typeof closeDetailsModal === "function") closeDetailsModal();
    else detailsModal.style.display = "none";
    return true;
  }
  const editScheduleModal = document.getElementById("editScheduleModal");
  if (editScheduleModal && editScheduleModal.style.display !== "none" && editScheduleModal.style.display !== "") {
    if (typeof closeEditScheduleModal === "function") closeEditScheduleModal();
    else editScheduleModal.style.display = "none";
    return true;
  }
  const schedExceptions = document.getElementById("scheduledExceptionsView");
  if (schedExceptions && schedExceptions.style.display !== "none" && schedExceptions.style.display !== "") {
    if (typeof closeScheduledExceptionsView === "function") closeScheduledExceptionsView();
    else schedExceptions.style.display = "none";
    return true;
  }
  return false;
};


// ==========================================
// 8246 KODU - 5 GÜNLÜK KATI KİLİT SİSTEMİ
// Sınırlar 5 gün boyunca değiştirilemez & silinemez
// ==========================================
function isStrictLockActive() {
  const saved = localStorage.getItem("sinirlayici_strict_lock_until");
  if (!saved) return false;
  return Date.now() < parseInt(saved, 10);
}

function showStrictLockAlert() {
  const saved = localStorage.getItem("sinirlayici_strict_lock_until");
  const until = saved ? parseInt(saved, 10) : 0;
  const remainingMs = Math.max(0, until - Date.now());
  const days = Math.floor(remainingMs / (24 * 60 * 60 * 1000));
  const hours = Math.floor((remainingMs % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  showToast(`🔒 5 Günlük Katı Kilit Devrede! (${days}g ${hours}s kaldı) Sınırlar değiştirilemez veya silinemez.`);
}

function updateStrictLockBanner() {
  const container = document.getElementById("tabLimits");
  if (!container) return;

  let banner = document.getElementById("strictLockActiveBanner");
  if (isStrictLockActive()) {
    const saved = parseInt(localStorage.getItem("sinirlayici_strict_lock_until"), 10);
    const remainingMs = Math.max(0, saved - Date.now());
    const days = Math.floor(remainingMs / (24 * 60 * 60 * 1000));
    const hours = Math.floor((remainingMs % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const mins = Math.floor((remainingMs % (60 * 60 * 1000)) / (60 * 1000));
    const timeStr = `${days}g ${hours}s ${mins}dk`;

    if (!banner) {
      banner = document.createElement("div");
      banner.id = "strictLockActiveBanner";
      banner.style.cssText = "background: linear-gradient(135deg, rgba(239, 68, 68, 0.22), rgba(153, 27, 27, 0.16)); border: 1px solid rgba(239, 68, 68, 0.6); border-radius: 14px; padding: 12px 16px; margin: 0 16px 14px 16px; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 0 18px rgba(239, 68, 68, 0.25);";
      const titleSec = container.querySelector(".section-title");
      if (titleSec) titleSec.insertAdjacentElement("afterend", banner);
      else container.prepend(banner);
    }
    banner.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <span style="font-size: 1.4rem;">🔒</span>
        <div>
          <strong style="color: #f87171; font-size: 0.88rem; display: block;">5 Günlük Katı Kilit Aktif!</strong>
          <span style="font-size: 0.72rem; color: #fca5a5;">Sınırlar değiştirilemez, silinemez veya gevşetilemez.</span>
        </div>
      </div>
      <span style="font-size: 0.95rem; font-weight: 800; color: #f87171; background: rgba(0,0,0,0.35); padding: 4px 10px; border-radius: 8px;">${timeStr}</span>
    `;
    banner.style.display = "flex";
  } else {
    if (banner) banner.style.display = "none";
  }
}
