/**
 * Modül: Gelişmiş Hatırlatıcı ve Alışkanlık Takipçisi
 * Tamamen bağımsız, izole veri alanına sahip ve diğer modüllerle çatışmayan mimari.
 */
(function() {
  const DEFAULT_GROUPS = ['Genel', 'İş', 'Ev', 'Sağlık', 'Kişisel'];
  const DAYS_OF_WEEK = [
    { id: 1, name: 'Pzt', javaDay: 2 },
    { id: 2, name: 'Sal', javaDay: 3 },
    { id: 3, name: 'Çar', javaDay: 4 },
    { id: 4, name: 'Per', javaDay: 5 },
    { id: 5, name: 'Cum', javaDay: 6 },
    { id: 6, name: 'Cmt', javaDay: 7 },
    { id: 0, name: 'Paz', javaDay: 1 }
  ];

  function getStoredReminders(context) {
    let list = context.storage.get('reminders', null);
    if (!list || !Array.isArray(list)) {
      list = [
        {
          id: 'rem_default_1',
          title: 'Kitap Oku',
          desc: 'Her gün en az 20 sayfa kitap oku.',
          group: 'Kişisel',
          time: '21:00',
          scheduleType: 'daily',
          weekDays: [1, 2, 3, 4, 5, 6, 0],
          monthDay: 1,
          endCondition: 'never',
          maxRepeatCount: 0,
          currentRepeatCount: 0,
          endDate: '',
          askCompletion: true,
          history: {
            '2026-10-25': true,
            '2026-10-26': true
          }
        }
      ];
      context.storage.set('reminders', list);
    }
    return list;
  }

  let editingReminderId = null;
  let formSelectedDays = [1, 2, 3, 4, 5];

  function syncReminderToNative(r) {
    if (!r || !window.AndroidBridge || typeof window.AndroidBridge.saveReminder !== 'function') return;
    try {
      const javaDaysList = (r.weekDays || [1, 2, 3, 4, 5, 6, 0]).map(dId => {
        const found = DAYS_OF_WEEK.find(d => d.id === dId);
        return found && found.javaDay ? found.javaDay : (dId === 0 ? 1 : dId + 1);
      });
      const daysStr = javaDaysList.join(',');
      const nativeStopCondition = (r.endCondition === 'forever') ? 'never' : (r.endCondition || 'never');
      const nativeMessage = r.desc || r.title || 'Hatırlatıcı vakti geldi!';

      window.AndroidBridge.saveReminder(JSON.stringify({
        id: r.id,
        title: r.title,
        message: nativeMessage,
        icon: 'bell',
        timeOfDay: r.time || '09:00',
        type: r.scheduleType || 'daily',
        daysOfWeek: daysStr,
        dayOfMonth: r.monthDay || 1,
        stopCondition: nativeStopCondition,
        maxRepeats: r.maxRepeatCount || 0,
        endDate: r.endDate || '',
        enableTracking: r.askCompletion !== false,
        askLater: r.askCompletion !== false,
        askTimeOfDay: r.time || '09:00',
        enabled: true
      }));
    } catch (e) {
      console.warn('Native reminder sync hatası:', e);
    }
  }

  function syncAllRemindersToNative(context) {
    const list = getStoredReminders(context);
    list.forEach(r => syncReminderToNative(r));
  }

  const moduleDef = {
    id: 'hatirlatici',
    title: 'Hatırlatıcı',
    icon: '🔔',

    init(context) {
      this.context = context;
      this.checkInterval = null;
      getStoredReminders(context);
      syncAllRemindersToNative(context);
      this.startScheduler(context);
    },

    render(container, context) {
      this.context = context;

      const isAccessEnabled = typeof window.__isAccessibilityActive === 'function'
        ? window.__isAccessibilityActive()
        : (localStorage.getItem('accessibility_permission_confirmed') === 'true');

      container.innerHTML = `
        <div id="hatirlaticiModuleRoot" style="padding-top: 0.25rem; padding-bottom: 3rem;">
          
          <!-- Erişilebilirlik Servis Uyarısı -->
          <div class="accessibility-warning-banner" style="display: ${isAccessEnabled ? 'none' : 'block'}; background: linear-gradient(135deg, rgba(239, 68, 68, 0.16), rgba(245, 158, 11, 0.16)); border: 1px solid rgba(239, 68, 68, 0.35); border-radius: 16px; padding: 0.9rem 1rem; margin-bottom: 1rem; position: relative;">
            <button type="button" onclick="window.__dismissAccessibilityBanner()" style="position: absolute; top: 0.6rem; right: 0.6rem; background: rgba(255,255,255,0.12); border: none; color: #fff; width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 0.85rem;" title="Kapat">✕</button>
            <div style="display: flex; align-items: flex-start; gap: 0.75rem; padding-right: 1.5rem;">
              <span style="font-size: 1.4rem; line-height: 1;">🛡️</span>
              <div style="flex: 1;">
                <div style="font-size: 0.9rem; font-weight: 800; color: #fff;">Hatırlatıcı ve Takip Servisi</div>
                <div style="font-size: 0.75rem; color: #cbd5e1; margin-top: 0.2rem; line-height: 1.35;">
                  Zamanı geldiğinde bildirim alabilmek ve sınırlayıcının çalışabilmesi için <b>Erişilebilirlik İznini</b> açmanız gerekmektedir.
                </div>
                <div style="font-size: 0.7rem; color: #fcd34d; margin-top: 0.35rem; line-height: 1.3; background: rgba(0,0,0,0.25); padding: 0.4rem 0.6rem; border-radius: 8px;">
                  💡 <b>İpucu:</b> İzni açtığınız halde uyarı kalkmadıysa <b>"✓ İzni Verdim"</b> butonuna basın. (Android 13+ cihazlarda 'Kısıtlanmış ayarlara izin ver' gerekebilir).
                </div>
                <div style="display: flex; gap: 0.5rem; margin-top: 0.6rem; flex-wrap: wrap;">
                  <button type="button" onclick="window.__confirmAccessibilityPermission(false)" style="background: #10b981; border: none; color: #fff; padding: 0.45rem 0.85rem; border-radius: 10px; font-weight: 800; font-size: 0.78rem; cursor: pointer;">
                    ✓ İzni Verdim
                  </button>
                  <button type="button" onclick="window.__openAccessibilitySettings()" style="background: #ef4444; border: none; color: #fff; padding: 0.45rem 0.85rem; border-radius: 10px; font-weight: 800; font-size: 0.78rem; cursor: pointer;">
                    ⚙️ Erişilebilirlik Ayarları
                  </button>
                  <button type="button" onclick="window.__openAppDetailSettings()" style="background: rgba(255,255,255,0.08); border: 1px solid var(--border-card); color: #fff; padding: 0.45rem 0.75rem; border-radius: 10px; font-weight: 700; font-size: 0.78rem; cursor: pointer;">
                    📋 Uygulama Bilgisi
                  </button>
                </div>
              </div>
            </div>
          </div>


          <!-- ================= GÖRÜNÜM 1: HATIRLATICI LİSTESİ ================= -->
          <div id="remListViewArea" style="display: block;">
            <!-- Üst Başlık ve Yeni Ekle -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
              <div>
                <h2 style="font-size: 1.15rem; font-weight: 800; color: #fff;">Hatırlatıcılarım</h2>
                <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.1rem;">Planlanan görev ve hatırlatmalar</div>
              </div>
              <button id="btnOpenNewReminder" style="background: var(--accent-primary); border: none; color: #fff; padding: 0.6rem 1rem; border-radius: 12px; font-weight: 800; font-size: 0.82rem; cursor: pointer; box-shadow: 0 4px 14px var(--accent-glow); display: flex; align-items: center; gap: 0.4rem;">
                <span>+</span> Yeni Ekle
              </button>
            </div>

            <!-- Grup Filtre Çipleri -->
            <div id="remGroupChips" style="display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 0.75rem; margin-bottom: 0.75rem; scrollbar-width: none;"></div>

            <!-- Hatırlatıcı Kartları -->
            <div id="remCardsContainer" style="display: flex; flex-direction: column; gap: 0.85rem;"></div>
          </div>

          <!-- ================= GÖRÜNÜM 2: EKLE / DÜZENLE FORMU ================= -->
          <div id="remFormViewArea" style="display: none; flex-direction: column; gap: 1.25rem;">
            
            <!-- Form Üst Barı -->
            <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 0.8rem; border-bottom: 1px solid var(--border-card);">
              <button id="btnFormCancelTop" style="background: rgba(255,255,255,0.06); border: 1px solid var(--border-card); color: var(--text-secondary); padding: 0.45rem 0.85rem; border-radius: 10px; font-size: 0.82rem; font-weight: 700; cursor: pointer;">
                ← Vazgeç
              </button>
              <h3 id="formTitleHeader" style="font-size: 1.1rem; font-weight: 800; color: #fff;">Yeni Hatırlatıcı</h3>
              <button id="btnFormSaveTop" style="background: var(--accent-primary); border: none; color: #fff; padding: 0.5rem 1rem; border-radius: 10px; font-size: 0.85rem; font-weight: 800; cursor: pointer; box-shadow: 0 2px 10px var(--accent-glow);">
                ✓ Kaydet
              </button>
            </div>

            <!-- Uyarı / Bilgi Mesaj Alanı -->
            <div id="formStatusBox" style="display: none; padding: 0.75rem 1rem; border-radius: 12px; font-size: 0.85rem; font-weight: 700; text-align: center;"></div>

            <!-- 1. BAŞLIK -->
            <div class="card-panel" style="margin-bottom: 0;">
              <label style="font-size: 0.85rem; font-weight: 800; color: #fff; margin-bottom: 0.4rem; display: flex; align-items: center; gap: 0.4rem;">
                <span>📌</span> Hatırlatıcı Başlığı
              </label>
              <input type="text" id="inputFormTitle" placeholder="Örn: Kitap Oku, Fatura Öde, İlaç Al..." 
                style="width: 100%; padding: 0.85rem 1rem; border-radius: 12px; background: rgba(0,0,0,0.3); border: 1px solid var(--border-card); color: #fff; font-size: 1rem; font-weight: 700; outline: none;">
              <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.35rem;">
                (İsteğe bağlı - Boş bırakırsanız açıklamadan otomatik oluşturulur)
              </div>
            </div>

            <!-- 2. AÇIKLAMA (GÖZDEN KAÇMASI İMKANSIZ GENİŞ METİN ALANI) -->
            <div class="card-panel" style="margin-bottom: 0; border: 1px solid rgba(249, 115, 22, 0.25); background: rgba(249, 115, 22, 0.04);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.3rem;">
                <label style="font-size: 0.88rem; font-weight: 800; color: #fff; display: flex; align-items: center; gap: 0.4rem;">
                  <span>📝</span> Açıklama ve Notlar
                </label>
                <span style="font-size: 0.72rem; color: var(--accent-primary); font-weight: 700;">Geniş Açıklama Alanı</span>
              </div>
              <div style="font-size: 0.76rem; color: var(--text-secondary); margin-bottom: 0.6rem;">
                Hatırlatıcıyla ilgili açıklama, yapılacak işlerin detaylarını veya notlarınızı buraya yazın.
              </div>
              <textarea id="inputFormDesc" rows="4" placeholder="Açıklama veya detayları buraya yazabilirsiniz. Örn: 20 sayfa oku, yatmadan önce oku veya talimatları unutma..." 
                style="width: 100%; padding: 0.85rem 1rem; border-radius: 12px; background: rgba(0,0,0,0.35); border: 1px solid var(--border-card); color: #fff; font-size: 0.92rem; font-family: inherit; line-height: 1.5; resize: vertical; outline: none;"></textarea>
            </div>

            <!-- 3. KATEGORİ VE SAAT -->
            <div class="card-panel" style="margin-bottom: 0;">
              <label style="font-size: 0.82rem; font-weight: 700; color: var(--text-secondary); margin-bottom: 0.4rem; display: block;">
                Kategori / Grup Seçimi
              </label>
              <div id="formPresetGroups" style="display: flex; flex-wrap: wrap; gap: 0.45rem; margin-bottom: 0.75rem;">
                ${DEFAULT_GROUPS.map(grp => `
                  <button type="button" class="preset-grp-pill" data-grp="${grp}"
                    style="padding: 0.4rem 0.85rem; border-radius: 999px; font-size: 0.78rem; font-weight: 700; border: 1px solid var(--border-card); background: rgba(255,255,255,0.06); color: var(--text-primary); cursor: pointer;">
                    ${grp}
                  </button>
                `).join('')}
              </div>
              <input type="text" id="inputFormGroup" value="Genel" placeholder="Veya özel bir kategori adı yazın..." 
                style="width: 100%; padding: 0.75rem 1rem; border-radius: 12px; background: rgba(0,0,0,0.3); border: 1px solid var(--border-card); color: #fff; font-size: 0.9rem; outline: none; margin-bottom: 1rem;">

              <label style="font-size: 0.82rem; font-weight: 700; color: var(--text-secondary); margin-bottom: 0.4rem; display: block;">
                Hatırlatma Saati
              </label>
              <input type="time" id="inputFormTime" value="09:00" 
                style="width: 100%; padding: 0.8rem 1rem; border-radius: 12px; background: rgba(0,0,0,0.3); border: 1px solid var(--border-focus); color: #fff; font-size: 1.15rem; font-weight: 800; outline: none;">
            </div>

            <!-- 4. TEKRARLAMA PERİYODU -->
            <div class="card-panel" style="margin-bottom: 0;">
              <label style="font-size: 0.82rem; font-weight: 700; color: var(--text-secondary); margin-bottom: 0.4rem; display: block;">
                Tekrarlama Periyodu
              </label>
              <select id="selectFormSchedule" style="width: 100%; padding: 0.8rem 1rem; border-radius: 12px; background: var(--bg-input); border: 1px solid var(--border-card); color: #fff; font-size: 0.95rem; font-weight: 700; outline: none; margin-bottom: 0.75rem;">
                <option value="daily">Her Gün</option>
                <option value="weekly">Haftanın Belirli Günleri</option>
                <option value="monthly">Ayın Belirli Günleri</option>
              </select>

              <!-- Haftalık Gün Seçimi -->
              <div id="boxWeeklyDays" style="display: none; flex-direction: column; gap: 0.4rem; margin-top: 0.5rem;">
                <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600;">Hatırlatılacak Günleri Seçin:</span>
                <div style="display: flex; gap: 0.35rem; justify-content: space-between;">
                  ${DAYS_OF_WEEK.map(d => `
                    <button type="button" class="btn-weekday-pill ${formSelectedDays.includes(d.id) ? 'active' : ''}" data-day="${d.id}"
                      style="flex: 1; padding: 0.5rem 0.2rem; border-radius: 8px; font-size: 0.78rem; font-weight: 700; border: 1px solid var(--border-card); background: ${formSelectedDays.includes(d.id) ? 'var(--accent-primary)' : 'rgba(255,255,255,0.06)'}; color: ${formSelectedDays.includes(d.id) ? '#fff' : 'var(--text-secondary)'}; cursor: pointer;">
                      ${d.name}
                    </button>
                  `).join('')}
                </div>
              </div>

              <!-- Aylık Gün Seçimi -->
              <div id="boxMonthlyDays" style="display: none; align-items: center; gap: 0.75rem; margin-top: 0.5rem;">
                <span style="font-size: 0.82rem; color: var(--text-secondary);">Ayın</span>
                <input type="number" id="inputFormMonthDay" min="1" max="31" value="1" 
                  style="width: 70px; padding: 0.6rem; border-radius: 10px; background: rgba(0,0,0,0.3); border: 1px solid var(--border-card); color: #fff; font-size: 1rem; font-weight: 800; text-align: center; outline: none;">
                <span style="font-size: 0.82rem; color: var(--text-secondary);">. günü hatırlat</span>
              </div>
            </div>

            <!-- 5. BİTİŞ KURALI -->
            <div class="card-panel" style="margin-bottom: 0;">
              <label style="font-size: 0.82rem; font-weight: 700; color: var(--text-secondary); margin-bottom: 0.4rem; display: block;">
                Bitiş / Kaldırılma Kuralı
              </label>
              <select id="selectFormEndCondition" style="width: 100%; padding: 0.8rem 1rem; border-radius: 12px; background: var(--bg-input); border: 1px solid var(--border-card); color: #fff; font-size: 0.95rem; font-weight: 700; outline: none;">
                <option value="never">Süresiz (Her Zaman Çalışsın)</option>
                <option value="count">Belirli Tekrar Sayısından Sonra Kaldır</option>
                <option value="date">Belirli Tarihten Sonra Kaldır</option>
              </select>

              <div id="boxEndConfig" style="margin-top: 0.75rem; display: none;">
                <div id="boxCountSub" style="display: none;">
                  <label style="font-size: 0.75rem; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">Kaç tekrar sonra otomatik kaldırılsın?</label>
                  <input type="number" id="inputFormMaxCount" min="1" placeholder="Örn: 5 tekrar" 
                    style="width: 100%; padding: 0.75rem 1rem; border-radius: 12px; background: rgba(0,0,0,0.3); border: 1px solid var(--border-card); color: #fff; font-size: 0.95rem; font-weight: 700; outline: none;">
                </div>
                <div id="boxDateSub" style="display: none;">
                  <label style="font-size: 0.75rem; color: var(--text-muted); display: block; margin-bottom: 0.3rem;">Hangi tarihe kadar çalışsın?</label>
                  <input type="date" id="inputFormEndDate" 
                    style="width: 100%; padding: 0.75rem 1rem; border-radius: 12px; background: rgba(0,0,0,0.3); border: 1px solid var(--border-card); color: #fff; font-size: 0.95rem; font-weight: 700; outline: none;">
                </div>
              </div>
            </div>

            <!-- 6. GÖREVİ YAPTIN MI TAKİBİ -->
            <div class="card-panel" style="margin-bottom: 0; display: flex; align-items: center; justify-content: space-between;">
              <div>
                <div style="font-size: 0.9rem; font-weight: 800; color: #fff;">"Görevi Yaptın mı?" Diye Sor</div>
                <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.15rem;">Vakti geldiğinde bildirimle tamamlama onayı ister</div>
              </div>
              <input type="checkbox" id="chkFormAskCompletion" checked style="width: 24px; height: 24px; accent-color: var(--accent-primary); cursor: pointer;">
            </div>

            <!-- BÜYÜK KAYDET BUTONU -->
            <button id="btnFormSaveBottom" style="background: var(--accent-primary); border: none; color: #fff; padding: 1.1rem; border-radius: 16px; font-weight: 800; font-size: 1.05rem; cursor: pointer; box-shadow: 0 4px 18px var(--accent-glow); margin-top: 0.25rem;">
              💾 Hatırlatıcıyı Kaydet
            </button>
          </div>

          <!-- ================= GÖRÜNÜM 3: 14 GÜNLÜK ANALİZ ================= -->
          <div id="remAnalyticsViewArea" style="display: none; flex-direction: column; gap: 1.25rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 0.8rem; border-bottom: 1px solid var(--border-card);">
              <button id="btnAnalyticsBack" style="background: rgba(255,255,255,0.06); border: 1px solid var(--border-card); color: var(--text-secondary); padding: 0.45rem 0.85rem; border-radius: 10px; font-size: 0.82rem; font-weight: 700; cursor: pointer;">
                ← Hatırlatıcılara Dön
              </button>
              <h3 style="font-size: 1.05rem; font-weight: 800; color: #fff;">14 Günlük Analiz</h3>
              <div style="width: 40px;"></div>
            </div>

            <div class="card-panel" style="margin-bottom: 0;">
              <div id="analyticsNameDisplay" style="font-size: 1.15rem; font-weight: 800; color: #fff;">Kitap Oku</div>
              <div id="analyticsGroupDisplay" style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 0.2rem;">Kişisel • Son 14 Günlük Performans Özeti</div>
            </div>

            <div id="analyticsStatsGrid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;"></div>

            <div class="card-panel" style="margin-bottom: 0;">
              <div style="font-size: 0.85rem; font-weight: 800; color: #fff; margin-bottom: 0.8rem;">Günlük Durum Çizelgesi</div>
              <div id="analyticsDaysGrid" style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 0.45rem;"></div>
            </div>
          </div>

          <!-- Kayan Toast Bildirimi -->
          <div id="hatirlaticiToast" style="display: none; position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%); background: #10b981; color: #fff; padding: 0.8rem 1.4rem; border-radius: 999px; font-size: 0.85rem; font-weight: 800; box-shadow: 0 10px 25px rgba(0,0,0,0.5); z-index: 300;"></div>

          <!-- İnteraktif Görev Soru Bildirimi -->
          <div id="hatirlaticiInteractiveNotif" style="display: none; position: fixed; top: 1.25rem; left: 50%; transform: translateX(-50%); width: 92%; max-width: 440px; background: var(--bg-card); border: 2px solid var(--accent-primary); border-radius: 20px; padding: 1.1rem 1.25rem; box-shadow: 0 16px 40px rgba(0,0,0,0.8); z-index: 200;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.6rem;">
              <div>
                <div id="notifTaskMainTitle" style="font-weight: 800; font-size: 1rem; color: #fff;">Görevi Tamamladın mı?</div>
                <div id="notifTaskMainDesc" style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 0.2rem;">Hatırlatıcı vakti geldi.</div>
              </div>
              <span style="font-size: 1.3rem;">🔔</span>
            </div>
            <div style="display: flex; gap: 0.6rem; margin-top: 0.9rem;">
              <button id="btnNotifActionNo" style="flex: 1; background: rgba(239, 68, 68, 0.2); border: 1px solid rgba(239, 68, 68, 0.4); color: #fca5a5; padding: 0.65rem; border-radius: 12px; font-weight: 800; font-size: 0.85rem; cursor: pointer;">
                ✕ Yapmadım
              </button>
              <button id="btnNotifActionYes" style="flex: 1; background: rgba(16, 185, 129, 0.25); border: 1px solid rgba(16, 185, 129, 0.4); color: #34d399; padding: 0.65rem; border-radius: 12px; font-weight: 800; font-size: 0.85rem; cursor: pointer;">
                ✓ Yaptım
              </button>
            </div>
          </div>

        </div>
      `;

      this.initViewLogic(container, context);
    },

    initViewLogic(container, context) {
      const listView = container.querySelector('#remListViewArea');
      const formView = container.querySelector('#remFormViewArea');
      const analyticsView = container.querySelector('#remAnalyticsViewArea');
      const toastEl = container.querySelector('#hatirlaticiToast');

      const showToast = (msg, isError = false) => {
        toastEl.textContent = msg;
        toastEl.style.background = isError ? '#ef4444' : '#10b981';
        toastEl.style.display = 'block';
        setTimeout(() => { toastEl.style.display = 'none'; }, 2600);

        if (window.AndroidBridge && typeof window.AndroidBridge.showToast === 'function') {
          try { window.AndroidBridge.showToast(msg); } catch (e) {}
        }
      };

      const switchSubView = (target) => {
        listView.style.display = (target === 'list') ? 'block' : 'none';
        formView.style.display = (target === 'form') ? 'flex' : 'none';
        analyticsView.style.display = (target === 'analytics') ? 'flex' : 'none';
        const parentScroll = document.getElementById('moduleContainer');
        if (parentScroll) parentScroll.scrollTop = 0;
      };

      // 1. Liste Render Fonksiyonu
      const renderRemindersList = () => {
        const reminders = getStoredReminders(context);
        const selectedGroup = context.storage.get('selected_group', 'Tümü');
        const allGroups = ['Tümü', ...new Set([...DEFAULT_GROUPS, ...reminders.map(r => r.group).filter(Boolean)])];

        // Grup çipleri
        const chipsContainer = container.querySelector('#remGroupChips');
        chipsContainer.innerHTML = allGroups.map(g => `
          <button class="grp-chip-btn ${g === selectedGroup ? 'active' : ''}" data-group="${g}"
            style="padding: 0.4rem 0.9rem; border-radius: 999px; font-size: 0.78rem; font-weight: 700; border: 1px solid var(--border-card); background: ${g === selectedGroup ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)'}; color: ${g === selectedGroup ? '#fff' : 'var(--text-secondary)'}; cursor: pointer; white-space: nowrap;">
            ${g}
          </button>
        `).join('');

        chipsContainer.querySelectorAll('.grp-chip-btn').forEach(btn => {
          btn.onclick = () => {
            context.storage.set('selected_group', btn.dataset.group);
            renderRemindersList();
          };
        });

        // Kartlar listesi
        let filtered = reminders;
        if (selectedGroup !== 'Tümü') {
          filtered = filtered.filter(r => r.group === selectedGroup);
        }

        const cardsArea = container.querySelector('#remCardsContainer');
        if (filtered.length === 0) {
          cardsArea.innerHTML = `
            <div class="card-panel" style="text-align: center; padding: 2.5rem 1rem;">
              <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🔔</div>
              <p style="color: var(--text-muted); font-size: 0.9rem;">Bu grupta henüz bir hatırlatıcı bulunmuyor.</p>
              <button id="btnEmptyCreateRem" style="margin-top: 1rem; background: var(--accent-subtle); border: 1px solid rgba(249,115,22,0.3); color: var(--accent-primary); padding: 0.55rem 1.1rem; border-radius: 10px; font-weight: 700; font-size: 0.82rem; cursor: pointer;">
                + Hatırlatıcı Oluştur
              </button>
            </div>
          `;
          const btnEmpty = cardsArea.querySelector('#btnEmptyCreateRem');
          if (btnEmpty) btnEmpty.onclick = () => openFormForAdd();
          return;
        }

        const todayKey = new Date().toISOString().split('T')[0];

        cardsArea.innerHTML = filtered.map(item => {
          const todayStatus = item.history ? item.history[todayKey] : null;
          let statusBadge = '<span style="color: var(--text-muted); font-size: 0.75rem;">Bugün Bekleniyor</span>';
          if (todayStatus === true) {
            statusBadge = '<span style="color: var(--accent-success); font-size: 0.75rem; font-weight: 700;">✓ Yapıldı</span>';
          } else if (todayStatus === false) {
            statusBadge = '<span style="color: var(--accent-danger); font-size: 0.75rem; font-weight: 700;">✕ Yapılmadı</span>';
          }

          let scheduleText = '🔁 Her Gün';
          if (item.scheduleType === 'weekly') {
            const dayNames = Array.isArray(item.weekDays) 
              ? item.weekDays.map(id => (DAYS_OF_WEEK.find(d => d.id === id) || {}).name).filter(Boolean).join(', ')
              : 'Haftalık';
            scheduleText = `📅 ${dayNames}`;
          } else if (item.scheduleType === 'monthly') {
            scheduleText = `🗓️ Ayın ${item.monthDay || 1}. günü`;
          }

          return `
            <div class="card-panel" style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 0;">
              <!-- Başlık, Kategori ve Saat -->
              <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div>
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
                    <span style="font-weight: 800; font-size: 1.05rem; color: #fff;">${item.title}</span>
                    <span style="background: rgba(255,255,255,0.06); padding: 0.15rem 0.55rem; border-radius: 6px; font-size: 0.72rem; color: var(--text-secondary); font-weight: 700;">
                      ${item.group || 'Genel'}
                    </span>
                  </div>
                </div>
                <div style="text-align: right;">
                  <div style="font-size: 1.15rem; font-weight: 800; color: var(--accent-primary); line-height: 1.1;">${item.time}</div>
                  ${statusBadge}
                </div>
              </div>

              <!-- GÖZDEN KAÇMASI İMKANSIZ BELİRGİN AÇIKLAMA NOT ALANI -->
              ${item.desc ? `
                <div style="padding: 0.65rem 0.85rem; background: var(--accent-subtle); border-left: 3px solid var(--accent-primary); border-radius: 8px; font-size: 0.85rem; color: #cbd5e1; line-height: 1.45;">
                  <span style="font-weight: 800; color: var(--accent-primary); display: block; font-size: 0.7rem; margin-bottom: 0.2rem; letter-spacing: 0.5px;">AÇIKLAMA / NOT:</span>
                  ${item.desc}
                </div>
              ` : `
                <div style="font-size: 0.75rem; color: var(--text-muted); font-style: italic;">(Açıklama eklenmedi)</div>
              `}

              <!-- Alt Kontroller -->
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-card); padding-top: 0.65rem; font-size: 0.75rem; color: var(--text-secondary);">
                <span>${scheduleText}</span>
                <div style="display: flex; gap: 0.45rem; align-items: center;">
                  <button class="btn-item-edit" data-id="${item.id}" style="background: rgba(255,255,255,0.06); border: 1px solid var(--border-card); color: var(--text-primary); padding: 0.35rem 0.65rem; border-radius: 8px; font-weight: 700; cursor: pointer; font-size: 0.75rem;">
                    ✏️ Düzenle
                  </button>
                  <button class="btn-item-anlz" data-id="${item.id}" style="background: var(--accent-subtle); border: 1px solid rgba(249,115,22,0.3); color: var(--accent-primary); padding: 0.35rem 0.65rem; border-radius: 8px; font-weight: 700; cursor: pointer; font-size: 0.75rem;">
                    📊 Analiz
                  </button>
                  <button class="btn-item-del" data-id="${item.id}" style="background: none; border: none; color: var(--text-muted); cursor: pointer; padding: 0.35rem 0.45rem; font-size: 0.95rem;">
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          `;
        }).join('');


        // Düzenle
        cardsArea.querySelectorAll('.btn-item-edit').forEach(btn => {
          btn.onclick = () => openFormForEdit(btn.dataset.id);
        });

        // Analiz
        cardsArea.querySelectorAll('.btn-item-anlz').forEach(btn => {
          btn.onclick = () => openAnalytics(btn.dataset.id);
        });

        // Sil
        cardsArea.querySelectorAll('.btn-item-del').forEach(btn => {
          btn.onclick = () => {
            const id = btn.dataset.id;
            let list = getStoredReminders(context);
            list = list.filter(r => r.id !== id);
            context.storage.set('reminders', list);

            if (window.AndroidBridge && typeof window.AndroidBridge.deleteReminder === 'function') {
              try { window.AndroidBridge.deleteReminder(id); } catch (e) {}
            }

            renderRemindersList();
            showToast('🗑️ Hatırlatıcı silindi.');
          };
        });
      };

      // 2. Form Açma Mantığı (Yeni Ekle)
      const openFormForAdd = () => {
        editingReminderId = null;
        formSelectedDays = [1, 2, 3, 4, 5];

        container.querySelector('#formTitleHeader').textContent = 'Yeni Hatırlatıcı';
        container.querySelector('#inputFormTitle').value = '';
        container.querySelector('#inputFormDesc').value = '';
        container.querySelector('#inputFormGroup').value = 'Genel';
        container.querySelector('#inputFormTime').value = '09:00';
        container.querySelector('#selectFormSchedule').value = 'daily';
        container.querySelector('#boxWeeklyDays').style.display = 'none';
        container.querySelector('#boxMonthlyDays').style.display = 'none';
        container.querySelector('#selectFormEndCondition').value = 'never';
        container.querySelector('#boxEndConfig').style.display = 'none';
        container.querySelector('#inputFormMaxCount').value = '';
        container.querySelector('#inputFormEndDate').value = '';
        container.querySelector('#chkFormAskCompletion').checked = true;

        const statusBox = container.querySelector('#formStatusBox');
        statusBox.style.display = 'none';

        // Hazır butonları sıfırla
        container.querySelectorAll('.preset-grp-pill').forEach(b => {
          const match = b.dataset.grp === 'Genel';
          b.style.background = match ? 'var(--accent-primary)' : 'rgba(255,255,255,0.06)';
          b.style.color = match ? '#fff' : 'var(--text-primary)';
        });

        switchSubView('form');
        container.querySelector('#inputFormTitle').focus();
      };

      // 3. Form Açma Mantığı (Düzenle)
      const openFormForEdit = (id) => {
        const list = getStoredReminders(context);
        const item = list.find(r => r.id === id);
        if (!item) return;

        editingReminderId = id;
        formSelectedDays = Array.isArray(item.weekDays) ? [...item.weekDays] : [1, 2, 3, 4, 5];

        container.querySelector('#formTitleHeader').textContent = 'Hatırlatıcıyı Düzenle';
        container.querySelector('#inputFormTitle').value = item.title || '';
        container.querySelector('#inputFormDesc').value = item.desc || '';
        container.querySelector('#inputFormGroup').value = item.group || 'Genel';
        container.querySelector('#inputFormTime').value = item.time || '09:00';
        container.querySelector('#selectFormSchedule').value = item.scheduleType || 'daily';

        container.querySelector('#boxWeeklyDays').style.display = (item.scheduleType === 'weekly') ? 'flex' : 'none';
        container.querySelector('#boxMonthlyDays').style.display = (item.scheduleType === 'monthly') ? 'flex' : 'none';
        container.querySelector('#inputFormMonthDay').value = item.monthDay || 1;

        // Hafta butonları güncelle
        container.querySelectorAll('.btn-weekday-pill').forEach(btn => {
          const dId = parseInt(btn.dataset.day, 10);
          const isActive = formSelectedDays.includes(dId);
          btn.style.background = isActive ? 'var(--accent-primary)' : 'rgba(255,255,255,0.06)';
          btn.style.color = isActive ? '#fff' : 'var(--text-secondary)';
        });

        container.querySelector('#selectFormEndCondition').value = (item.endCondition === 'forever') ? 'never' : (item.endCondition || 'never');
        const boxEnd = container.querySelector('#boxEndConfig');
        const boxCount = container.querySelector('#boxCountSub');
        const boxDate = container.querySelector('#boxDateSub');

        if (item.endCondition === 'count') {
          boxEnd.style.display = 'block';
          boxCount.style.display = 'block';
          boxDate.style.display = 'none';
          container.querySelector('#inputFormMaxCount').value = item.maxRepeatCount || '';
        } else if (item.endCondition === 'date') {
          boxEnd.style.display = 'block';
          boxCount.style.display = 'none';
          boxDate.style.display = 'block';
          container.querySelector('#inputFormEndDate').value = item.endDate || '';
        } else {
          boxEnd.style.display = 'none';
          boxCount.style.display = 'none';
          boxDate.style.display = 'none';
        }

        container.querySelector('#chkFormAskCompletion').checked = item.askCompletion !== false;

        container.querySelectorAll('.preset-grp-pill').forEach(b => {
          const match = b.dataset.grp === item.group;
          b.style.background = match ? 'var(--accent-primary)' : 'rgba(255,255,255,0.06)';
          b.style.color = match ? '#fff' : 'var(--text-primary)';
        });

        const statusBox = container.querySelector('#formStatusBox');
        statusBox.style.display = 'none';

        switchSubView('form');
      };

      // 4. Analiz Açma Mantığı
      const openAnalytics = (id) => {
        const list = getStoredReminders(context);
        const item = list.find(r => r.id === id);
        if (!item) return;

        container.querySelector('#analyticsNameDisplay').textContent = item.title;
        container.querySelector('#analyticsGroupDisplay').textContent = `${item.group || 'Genel'} • Son 14 Günlük Alışkanlık Takibi`;

        const history = item.history || {};
        let doneCount = 0;
        let missedCount = 0;
        const days = [];

        for (let i = 13; i >= 0; i--) {
          const d = new Date();
          d.setDate(d.getDate() - i);
          const key = d.toISOString().split('T')[0];
          const val = history[key];
          if (val === true) doneCount++;
          if (val === false) missedCount++;
          days.push({ key, val, label: `${d.getDate()}.${d.getMonth() + 1}` });
        }

        const totalMarked = doneCount + missedCount;
        const successRate = totalMarked > 0 ? Math.round((doneCount / totalMarked) * 100) : 0;

        container.querySelector('#analyticsStatsGrid').innerHTML = `
          <div class="card-panel" style="padding: 1rem; text-align: center; margin-bottom: 0;">
            <div style="font-size: 1.6rem; font-weight: 800; color: var(--accent-success);">${successRate}%</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.2rem;">Başarı Oranı</div>
          </div>
          <div class="card-panel" style="padding: 1rem; text-align: center; margin-bottom: 0;">
            <div style="font-size: 1.6rem; font-weight: 800; color: #fff;">${doneCount}/${totalMarked}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.2rem;">Yapılan / Toplam</div>
          </div>
        `;

        container.querySelector('#analyticsDaysGrid').innerHTML = days.map(day => {
          let bg = 'rgba(255,255,255,0.05)';
          let color = 'var(--text-muted)';
          let icon = '-';
          if (day.val === true) {
            bg = 'rgba(16, 185, 129, 0.25)';
            color = '#34d399';
            icon = '✓';
          } else if (day.val === false) {
            bg = 'rgba(239, 68, 68, 0.25)';
            color = '#f87171';
            icon = '✕';
          }
          return `
            <div style="background: ${bg}; border: 1px solid var(--border-card); border-radius: 8px; padding: 0.45rem 0.15rem; text-align: center;">
              <div style="font-size: 0.65rem; color: var(--text-muted);">${day.label}</div>
              <div style="font-size: 0.9rem; font-weight: 800; color: ${color}; margin-top: 0.1rem;">${icon}</div>
            </div>
          `;
        }).join('');

        switchSubView('analytics');
      };

      // 5. Kaydetme Fonksiyonu (HATA KORUMALI VE KESİN KAYDEDER)
      const executeSave = () => {
        const rawTitle = container.querySelector('#inputFormTitle').value.trim();
        const rawDesc = container.querySelector('#inputFormDesc').value.trim();
        const statusBox = container.querySelector('#formStatusBox');

        // Hem başlık hem açıklama boşsa uyar
        if (!rawTitle && !rawDesc) {
          statusBox.textContent = '⚠️ Lütfen hatırlatıcı başlığı veya açıklama giriniz.';
          statusBox.style.background = 'rgba(239, 68, 68, 0.15)';
          statusBox.style.border = '1px solid rgba(239, 68, 68, 0.3)';
          statusBox.style.color = '#fca5a5';
          statusBox.style.display = 'block';
          container.querySelector('#inputFormTitle').focus();
          return;
        }

        // Eğer başlık boş bırakılıp sadece açıklama yazıldıysa, açıklamadan otomatik başlık üret
        const finalTitle = rawTitle || (rawDesc.length > 30 ? rawDesc.substring(0, 30) + '...' : rawDesc);
        const finalDesc = rawDesc;
        const group = container.querySelector('#inputFormGroup').value.trim() || 'Genel';
        const time = container.querySelector('#inputFormTime').value || '09:00';
        const scheduleType = container.querySelector('#selectFormSchedule').value;
        const monthDay = parseInt(container.querySelector('#inputFormMonthDay').value, 10) || 1;
        const endCondition = container.querySelector('#selectFormEndCondition').value;
        const maxRepeatCount = parseInt(container.querySelector('#inputFormMaxCount').value, 10) || 0;
        const endDate = container.querySelector('#inputFormEndDate').value || '';
        const askCompletion = container.querySelector('#chkFormAskCompletion').checked;

        let list = getStoredReminders(context);

        if (editingReminderId) {
          // Güncelleme
          list = list.map(item => {
            if (item.id === editingReminderId) {
              return {
                ...item,
                title: finalTitle,
                desc: finalDesc,
                group,
                time,
                scheduleType,
                weekDays: [...formSelectedDays],
                monthDay,
                endCondition,
                maxRepeatCount,
                endDate,
                askCompletion
              };
            }
            return item;
          });
        } else {
          // Yeni Hatırlatıcıyı En Başa Ekle
          const newRem = {
            id: 'rem_' + Date.now(),
            title: finalTitle,
            desc: finalDesc,
            group,
            time,
            scheduleType,
            weekDays: [...formSelectedDays],
            monthDay,
            endCondition,
            maxRepeatCount,
            currentRepeatCount: 0,
            endDate,
            askCompletion,
            history: {}
          };
          list.unshift(newRem);
        }

        // Kesin Saklama
        context.storage.set('reminders', list);
        context.storage.set('selected_group', 'Tümü'); // Yeni eklenen görünsün diye filtreyi Tümü yap

        // Native Android senkronizasyonu
        const savedItem = list.find(r => r.id === (editingReminderId || (list[0] ? list[0].id : ''))) || list[0];
        if (savedItem) {
          syncReminderToNative(savedItem);
        }

        // Listeye dön ve güncelle
        switchSubView('list');
        renderRemindersList();
        showToast(editingReminderId ? '✅ Hatırlatıcı güncellendi!' : '✅ Hatırlatıcı başarıyla kaydedildi!');
      };

      // 6. Olay Dinleyicileri Bağlama
      container.querySelector('#btnOpenNewReminder').onclick = () => openFormForAdd();
      container.querySelector('#btnFormCancelTop').onclick = () => switchSubView('list');
      container.querySelector('#btnAnalyticsBack').onclick = () => switchSubView('list');

      container.querySelector('#btnFormSaveTop').onclick = executeSave;
      container.querySelector('#btnFormSaveBottom').onclick = executeSave;

      // Kategori hazır butonları
      container.querySelectorAll('.preset-grp-pill').forEach(btn => {
        btn.onclick = () => {
          container.querySelector('#inputFormGroup').value = btn.dataset.grp;
          container.querySelectorAll('.preset-grp-pill').forEach(b => {
            const match = b === btn;
            b.style.background = match ? 'var(--accent-primary)' : 'rgba(255,255,255,0.06)';
            b.style.color = match ? '#fff' : 'var(--text-primary)';
          });
        };
      });

      // Tekrarlama tipi
      const schedSelect = container.querySelector('#selectFormSchedule');
      const boxWeekly = container.querySelector('#boxWeeklyDays');
      const boxMonthly = container.querySelector('#boxMonthlyDays');

      schedSelect.onchange = () => {
        boxWeekly.style.display = (schedSelect.value === 'weekly') ? 'flex' : 'none';
        boxMonthly.style.display = (schedSelect.value === 'monthly') ? 'flex' : 'none';
      };

      // Hafta günleri butonları
      container.querySelectorAll('.btn-weekday-pill').forEach(btn => {
        btn.onclick = () => {
          const dId = parseInt(btn.dataset.day, 10);
          if (formSelectedDays.includes(dId)) {
            if (formSelectedDays.length > 1) {
              formSelectedDays = formSelectedDays.filter(d => d !== dId);
              btn.style.background = 'rgba(255,255,255,0.06)';
              btn.style.color = 'var(--text-secondary)';
            }
          } else {
            formSelectedDays.push(dId);
            btn.style.background = 'var(--accent-primary)';
            btn.style.color = '#fff';
          }
        };
      });

      // Bitiş kuralı
      const endSelect = container.querySelector('#selectFormEndCondition');
      const boxEnd = container.querySelector('#boxEndConfig');
      const boxCount = container.querySelector('#boxCountSub');
      const boxDate = container.querySelector('#boxDateSub');

      endSelect.onchange = () => {
        const val = endSelect.value;
        if (val === 'never' || val === 'forever') {
          boxEnd.style.display = 'none';
          boxCount.style.display = 'none';
          boxDate.style.display = 'none';
        } else if (val === 'count') {
          boxEnd.style.display = 'block';
          boxCount.style.display = 'block';
          boxDate.style.display = 'none';
        } else if (val === 'date') {
          boxEnd.style.display = 'block';
          boxCount.style.display = 'none';
          boxDate.style.display = 'block';
        }
      };

      // İlk listeyi oluştur
      renderRemindersList();
    },

    startScheduler(context) {
      if (this.checkInterval) clearInterval(this.checkInterval);

      // Her 30 saniyede bir zaman kontrolü
      this.checkInterval = setInterval(() => {
        const now = new Date();
        const currentHours = String(now.getHours()).padStart(2, '0');
        const currentMins = String(now.getMinutes()).padStart(2, '0');
        const currentTimeStr = `${currentHours}:${currentMins}`;
        const todayKey = now.toISOString().split('T')[0];
        const dayOfWeek = now.getDay();
        const dayOfMonth = now.getDate();

        let reminders = getStoredReminders(context);
        let changed = false;

        reminders.forEach(item => {
          if (item.endCondition === 'date' && item.endDate && todayKey > item.endDate) return;
          if (item.endCondition === 'count' && item.maxRepeatCount > 0 && item.currentRepeatCount >= item.maxRepeatCount) return;

          if (item.scheduleType === 'weekly' && Array.isArray(item.weekDays) && !item.weekDays.includes(dayOfWeek)) {
            return;
          }
          if (item.scheduleType === 'monthly' && item.monthDay && item.monthDay !== dayOfMonth) {
            return;
          }

          if (item.time === currentTimeStr) {
            if (item.history && item.history[todayKey] !== undefined) return;

            item.currentRepeatCount = (item.currentRepeatCount || 0) + 1;
            changed = true;

            // Native bildirim ve toast tetikleyici
            if (window.AndroidBridge && typeof window.AndroidBridge.triggerReminderNow === 'function') {
              try { window.AndroidBridge.triggerReminderNow(item.id); } catch (e) {}
            }
            if (window.AndroidBridge && typeof window.AndroidBridge.showToast === 'function') {
              try { window.AndroidBridge.showToast(`🔔 ${item.title}: Vakti geldi!`); } catch (e) {}
            }

            if (item.askCompletion !== false) {
              this.triggerInteractiveNotification(item, context);
            }
          }
        });

        if (changed) {
          context.storage.set('reminders', reminders);
        }
      }, 30000);
    },

    triggerInteractiveNotification(item, context) {
      const notif = document.getElementById('hatirlaticiInteractiveNotif');
      if (!notif) return;

      document.getElementById('notifTaskMainTitle').textContent = `Görevi Tamamladın mı? [${item.title}]`;
      document.getElementById('notifTaskMainDesc').textContent = item.desc || `${item.time} vakti geldi.`;

      const todayKey = new Date().toISOString().split('T')[0];

      document.getElementById('btnNotifActionYes').onclick = () => {
        this.recordHistory(item.id, todayKey, true, context);
        notif.style.display = 'none';
      };

      document.getElementById('btnNotifActionNo').onclick = () => {
        this.recordHistory(item.id, todayKey, false, context);
        notif.style.display = 'none';
      };

      notif.style.display = 'block';
    },

    recordHistory(id, dateKey, status, context) {
      let list = getStoredReminders(context);
      list = list.map(r => {
        if (r.id === id) {
          const h = r.history || {};
          h[dateKey] = status;
          return { ...r, history: h };
        }
        return r;
      });
      context.storage.set('reminders', list);

      if (window.AndroidBridge && typeof window.AndroidBridge.markReminderAction === 'function') {
        try { window.AndroidBridge.markReminderAction(id, status); } catch (e) {}
      }

      const container = document.getElementById('view-hatirlatici');
      if (container) this.render(container, context);
    },

    destroy() {
      if (this.checkInterval) clearInterval(this.checkInterval);
    }
  };

  if (window.kernel) {
    window.kernel.registerModule(moduleDef);
  }
})();
