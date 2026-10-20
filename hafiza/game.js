/**
 * 3D HAFIZA OYUNU (Memory Matrix 3D) - Oyun Mantığı
 * Neon Mor & Macenta Teması
 * Uygulama İçi Kutucuk (Widget) Aç/Kapa Desteği ve Multi-Touch
 */

class MemoryGame {
    constructor() {
        this.level = 1; // Bölüm numarası
        this.score = 0;
        this.streak = 0;
        this.maxStreak = 0;
        this.lives = 3;
        this.maxLives = 3;
        this.highScore = parseInt(localStorage.getItem('hafiza_high_score') || '0', 10);
        
        // 6x6 ve 7x7'ye ilk geçildiğinde canların 3'e tamamlanması için bayraklar
        this.refilled6x6 = false;
        this.refilled7x7 = false;

        // Oyun Durumları: 'IDLE', 'MEMORIZING', 'PLAYING', 'ROUND_END', 'GAME_OVER'
        this.state = 'IDLE';
        
        this.gridSize = 3;          // 3x3, 4x4, 5x5, 6x6, 7x7
        this.targetCount = 3;       // Dönmesi gereken kare sayısı
        this.memorizeTime = 1800;   // Gösterim süresi (ms)
        
        this.targetIndices = new Set();
        this.foundIndices = new Set();
        this.wrongIndices = new Set();
        
        this.timerTimeout = null;
        this.isPhoneMode = true;

        this.initDOMElements();
        this.bindEvents();
        this.updateStatsUI();
        this.initIdleBoard();
    }

    initDOMElements() {
        this.board = document.getElementById('matrixGrid');
        this.levelEl = document.getElementById('levelDisplay');
        this.scoreEl = document.getElementById('scoreDisplay');
        this.highScoreEl = document.getElementById('highScoreDisplay');
        this.livesContainer = document.getElementById('livesDisplay');
        this.statusBadge = document.getElementById('statusBadge');
        this.statusText = document.getElementById('statusText');
        this.timerBarFill = document.getElementById('timerBarFill');
        this.appContainer = document.getElementById('appContainer');
        this.gameLayer = document.getElementById('gameScreenLayer');

        // Modal Öğeleri
        this.startGameModal = document.getElementById('startGameModal');
        this.startGameBtn = document.getElementById('startGameBtn');
        this.gameOverModal = document.getElementById('gameOverModal');
        this.finalScoreEl = document.getElementById('finalScore');
        this.finalLevelEl = document.getElementById('finalLevel');
        this.finalStreakEl = document.getElementById('finalStreak');
        this.restartBtn = document.getElementById('restartBtn');
        this.backBtn = document.getElementById('btnBackToApp');
        
        this.soundBtn = document.getElementById('soundBtn');
        this.screenModeBtn = document.getElementById('screenModeBtn');
    }

    bindEvents() {
        // Ses aç/kapat
        this.soundBtn.addEventListener('click', () => {
            const enabled = soundManager.toggle();
            this.soundBtn.textContent = enabled ? '🔊' : '🔇';
        });
        this.soundBtn.textContent = soundManager.enabled ? '🔊' : '🔇';

        // PC Ekran Modu (Telefon Çerçevesi vs Geniş Ekran)
        this.screenModeBtn.addEventListener('click', () => {
            this.isPhoneMode = !this.isPhoneMode;
            if (this.isPhoneMode) {
                this.appContainer.classList.remove('fullscreen-mode');
                this.screenModeBtn.textContent = '📱';
            } else {
                this.appContainer.classList.add('fullscreen-mode');
                this.screenModeBtn.textContent = '🖥️';
            }
        });

        // Başla Butonu
        if (this.startGameBtn) {
            this.startGameBtn.addEventListener('click', () => {
                if (this.startGameModal) {
                    this.startGameModal.classList.remove('active');
                }
                this.resetGame();
                this.startRound();
            });
        }

        // Ortalanmış Tekrar Oyna Butonu ("Başla" modalı çıksın, basılmadıkça başlamasın)
        this.restartBtn.addEventListener('click', () => {
            this.gameOverModal.classList.remove('active');
            this.resetGame();
            this.initIdleBoard();
            if (this.startGameModal) {
                this.startGameModal.classList.add('active');
            }
        });

        // Geri Dön Butonu (Donmayı engelleyici ve akıcı geri dönüş)
        if (this.backBtn) {
            this.backBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                closeHafizaOyunu();
            });
        }
    }

    /**
     * DENGELİ BÖLÜM VE MATRİS HESAPLAMASI
     */
    calculateLevelParameters(lvl) {
        let size = 3;
        let count = 3;
        let time = 1900;

        // 3x3 Matris (8 Bölüm: Seviye 1 - 8)
        if (lvl === 1) {
            size = 3; count = 3; time = 1900;
        } else if (lvl === 2) {
            size = 3; count = 3; time = 1750;
        } else if (lvl === 3) {
            size = 3; count = 4; time = 1650;
        } else if (lvl === 4) {
            size = 3; count = 4; time = 1500;
        } else if (lvl === 5) {
            size = 3; count = 4; time = 1400;
        } else if (lvl === 6) {
            size = 3; count = 5; time = 1350;
        } else if (lvl === 7) {
            size = 3; count = 5; time = 1250;
        } else if (lvl === 8) {
            size = 3; count = 5; time = 1150;
        }
        // 4x4 Matris (8 Bölüm: Seviye 9 - 16)
        else if (lvl === 9) {
            size = 4; count = 4; time = 1750;
        } else if (lvl === 10) {
            size = 4; count = 5; time = 1650;
        } else if (lvl === 11) {
            size = 4; count = 5; time = 1550;
        } else if (lvl === 12) {
            size = 4; count = 6; time = 1450;
        } else if (lvl === 13) {
            size = 4; count = 6; time = 1350;
        } else if (lvl === 14) {
            size = 4; count = 7; time = 1300;
        } else if (lvl === 15) {
            size = 4; count = 7; time = 1200;
        } else if (lvl === 16) {
            size = 4; count = 8; time = 1150;
        }
        // 5x5 Matris (8 Bölüm: Seviye 17 - 24)
        else if (lvl === 17) {
            size = 5; count = 6; time = 1700;
        } else if (lvl === 18) {
            size = 5; count = 7; time = 1600;
        } else if (lvl === 19) {
            size = 5; count = 7; time = 1500;
        } else if (lvl === 20) {
            size = 5; count = 8; time = 1400;
        } else if (lvl === 21) {
            size = 5; count = 8; time = 1300;
        } else if (lvl === 22) {
            size = 5; count = 9; time = 1250;
        } else if (lvl === 23) {
            size = 5; count = 9; time = 1200;
        } else if (lvl === 24) {
            size = 5; count = 10; time = 1100;
        }
        // 6x6 Matris (8 Bölüm: Seviye 25 - 32)
        else if (lvl === 25) {
            size = 6; count = 8; time = 1700;
        } else if (lvl === 26) {
            size = 6; count = 9; time = 1600;
        } else if (lvl === 27) {
            size = 6; count = 9; time = 1500;
        } else if (lvl === 28) {
            size = 6; count = 10; time = 1400;
        } else if (lvl === 29) {
            size = 6; count = 10; time = 1300;
        } else if (lvl === 30) {
            size = 6; count = 11; time = 1250;
        } else if (lvl === 31) {
            size = 6; count = 11; time = 1200;
        } else if (lvl === 32) {
            size = 6; count = 12; time = 1100;
        }
        // 7x7 Matris (Seviye 33+)
        else if (lvl === 33) {
            size = 7; count = 12; time = 1600;
        } else if (lvl === 34) {
            size = 7; count = 13; time = 1500;
        } else if (lvl === 35) {
            size = 7; count = 14; time = 1400;
        } else {
            size = 7;
            count = Math.min(22, 14 + Math.floor((lvl - 35) * 0.5));
            time = Math.max(900, 1400 - ((lvl - 35) * 30));
        }

        return { size, count, time };
    }

    resetGame() {
        this.level = 1;
        this.score = 0;
        this.streak = 0;
        this.lives = this.maxLives;
        this.refilled6x6 = false;
        this.refilled7x7 = false;
        this.state = 'IDLE';
        this.updateStatsUI();
    }

    initIdleBoard() {
        this.gridSize = 3;
        this.renderGrid();
        this.state = 'IDLE';
        this.statusBadge.className = 'status-badge';
        this.statusText.textContent = '🎮 Başlamak için "Başla"ya dokun';
    }

    sendScoreToParent(score) {
        try {
            if (window.parent && typeof window.parent.onHafizaGameScore === 'function') {
                window.parent.onHafizaGameScore(score);
            }
        } catch(e) {}
        try {
            if (window.top && typeof window.top.onHafizaGameScore === 'function') {
                window.top.onHafizaGameScore(score);
            }
        } catch(e) {}
        try {
            if (window.parent && window.parent !== window) {
                window.parent.postMessage({ type: 'HAFIZA_GAME_SCORE', score: score }, '*');
            }
        } catch(e) {}
    }

    startRound() {
        const { size, count, time } = this.calculateLevelParameters(this.level);
        this.gridSize = size;
        this.targetCount = count;
        this.memorizeTime = time;

        this.targetIndices.clear();
        this.foundIndices.clear();
        this.wrongIndices.clear();

        // 6x6 VEYA 7x7'YE İLK GEÇİŞTE CANLARI 3'E TAMAMLAMA
        if (this.gridSize === 6 && !this.refilled6x6) {
            this.refilled6x6 = true;
            this.lives = this.maxLives;
            this.updateStatsUI(true);
        } else if (this.gridSize === 7 && !this.refilled7x7) {
            this.refilled7x7 = true;
            this.lives = this.maxLives;
            this.updateStatsUI(true);
        }

        const totalCards = this.gridSize * this.gridSize;
        while (this.targetIndices.size < this.targetCount) {
            const randIdx = Math.floor(Math.random() * totalCards);
            this.targetIndices.add(randIdx);
        }

        this.renderGrid();
        this.startMemorizationPhase();
    }

    renderGrid() {
        this.board.innerHTML = '';
        this.board.setAttribute('data-size', this.gridSize);
        const totalCards = this.gridSize * this.gridSize;

        for (let i = 0; i < totalCards; i++) {
            const card = document.createElement('div');
            card.className = 'matrix-card';
            card.dataset.index = i;

            const inner = document.createElement('div');
            inner.className = 'card-inner';

            const front = document.createElement('div');
            front.className = 'card-front';

            const back = document.createElement('div');
            back.className = 'card-back';

            const glyph = document.createElement('div');
            glyph.className = 'card-glyph';
            back.appendChild(glyph);

            inner.appendChild(front);
            inner.appendChild(back);
            card.appendChild(inner);

            // ÇOKLU DOKUNMA (MULTİ-TOUCH) VE EŞZAMANLI TIKLAMA
            const handleTouchAction = (e) => {
                if (e.type === 'touchstart') {
                    e.preventDefault();
                }
                this.handleCardClick(i, card, e);
            };

            card.addEventListener('pointerdown', handleTouchAction);
            card.addEventListener('touchstart', handleTouchAction, { passive: false });

            this.board.appendChild(card);
        }
    }

    startMemorizationPhase() {
        this.state = 'MEMORIZING';
        
        this.statusBadge.className = 'status-badge memorize';
        this.statusText.textContent = `👀 ${this.targetCount} Kare Dönüyor...`;

        const cards = this.board.querySelectorAll('.matrix-card');
        soundManager.playFlip();

        this.targetIndices.forEach((idx) => {
            const card = cards[idx];
            setTimeout(() => {
                card.classList.add('flipped');
            }, Math.random() * 80);
        });

        this.animateTimerBar(this.memorizeTime, () => {
            this.finishMemorizationPhase();
        });
    }

    animateTimerBar(duration, callback) {
        this.timerBarFill.style.transition = 'none';
        this.timerBarFill.style.width = '100%';
        
        void this.timerBarFill.offsetWidth;

        this.timerBarFill.style.transition = `width ${duration}ms linear`;
        this.timerBarFill.style.width = '0%';

        if (this.timerTimeout) clearTimeout(this.timerTimeout);
        this.timerTimeout = setTimeout(() => {
            callback();
        }, duration);
    }

    finishMemorizationPhase() {
        const cards = this.board.querySelectorAll('.matrix-card');
        soundManager.playFlip();

        cards.forEach((card) => {
            card.classList.remove('flipped');
        });

        // Kareler arkasını döner dönmez gecikmesiz anında işaretleme moduna geç!
        this.state = 'PLAYING';
        this.statusBadge.className = 'status-badge play';
        this.statusText.textContent = `👆 İşaretle (${this.foundIndices.size}/${this.targetCount})`;
    }

    handleCardClick(index, cardEl, event) {
        if (this.state !== 'PLAYING') return;

        if (this.foundIndices.has(index) || this.wrongIndices.has(index)) {
            return;
        }

        if (navigator.vibrate) {
            navigator.vibrate(30);
        }

        if (this.targetIndices.has(index)) {
            this.foundIndices.add(index);
            soundManager.playCorrect();
            
            cardEl.classList.add('flipped', 'correct');
            this.statusText.textContent = `👆 İşaretle (${this.foundIndices.size}/${this.targetCount})`;

            if (this.foundIndices.size === this.targetCount) {
                this.handleRoundSuccess();
            }
        } else {
            this.wrongIndices.add(index);
            soundManager.playWrong();
            cardEl.classList.add('wrong');

            if (navigator.vibrate) {
                navigator.vibrate([60, 40, 60]);
            }

            this.lives--;
            this.streak = 0;
            this.updateStatsUI();

            if (this.lives <= 0) {
                this.handleGameOver();
            } else {
                this.statusText.textContent = `⚠️ Kalan Can: ${this.lives}`;
            }
        }
    }

    handleRoundSuccess() {
        this.state = 'ROUND_END';
        this.streak++;
        if (this.streak > this.maxStreak) this.maxStreak = this.streak;

        const roundBase = this.level * 100;
        const streakBonus = (this.streak - 1) * 35;
        this.score += roundBase + streakBonus;

        // 22.000 Puanı Geçtiğinde Ana Uygulamaya Bildir (10 dk serbest izin)
        if (this.score >= 22000 && !this.rewardSentToParent) {
            this.rewardSentToParent = true;
            this.sendScoreToParent(this.score);
        }

        // 80.000 Puan veya Üzeri Yapıldığında Ana Uygulamaya Bildir (15 dk skor bannerı)
        if (this.score >= 80000) {
            this.sendScoreToParent(this.score);
        }

        if (this.score > this.highScore) {
            this.highScore = this.score;
            localStorage.setItem('hafiza_high_score', this.highScore);
        }

        soundManager.playRoundSuccess();
        this.statusBadge.className = 'status-badge';
        this.statusText.textContent = `🎉 Bölüm ${this.level} Tamamlandı!`;
        this.updateStatsUI();

        this.level++;

        setTimeout(() => {
            if (this.state === 'ROUND_END') {
                this.startRound();
            }
        }, 1000);
    }

    handleGameOver() {
        this.state = 'GAME_OVER';
        soundManager.playGameOver();

        const cards = this.board.querySelectorAll('.matrix-card');
        this.targetIndices.forEach((idx) => {
            if (!this.foundIndices.has(idx)) {
                cards[idx].classList.add('missed', 'flipped');
            }
        });

        // 80.000 veya üzeri yaptıysa ana uygulamaya son skoru da ilet
        if (this.score >= 80000) {
            this.sendScoreToParent(this.score);
        }

        this.statusBadge.className = 'status-badge';
        this.statusText.textContent = `💀 Oyun Bitti!`;

        setTimeout(() => {
            this.finalScoreEl.textContent = this.score;
            this.finalLevelEl.textContent = this.level;
            this.finalStreakEl.textContent = this.maxStreak;
            this.gameOverModal.classList.add('active');
        }, 1000);
    }

    updateStatsUI(triggerRefillAnimation = false) {
        this.levelEl.textContent = this.level;
        this.scoreEl.textContent = this.score;
        this.highScoreEl.textContent = this.highScore;

        this.livesContainer.innerHTML = '';
        for (let i = 0; i < this.maxLives; i++) {
            const heart = document.createElement('span');
            heart.className = `heart ${i < this.lives ? '' : 'lost'} ${triggerRefillAnimation ? 'refilled' : ''}`;
            heart.textContent = '❤️';
            this.livesContainer.appendChild(heart);
        }

        if (triggerRefillAnimation) {
            this.statusBadge.className = 'status-badge bonus';
            this.statusText.textContent = `✨ Yeni Matris! Canlar 3'e Tamamlandı! ✨`;
        }
    }
}

// Global Kutucuk Aç/Kapa Fonksiyonları
window.openHafizaOyunu = function() {
    const layer = document.getElementById('gameScreenLayer');
    if (layer) {
        layer.classList.add('active');
    }
    if (!window.game) {
        window.game = new MemoryGame();
    } else {
        window.game.resetGame();
        window.game.initIdleBoard();
    }
    // Açıldığında hemen başlamasın, Başla seçeneği açık kalsın
    if (window.game.startGameModal) {
        window.game.startGameModal.classList.add('active');
    }
    if (window.game.gameOverModal) {
        window.game.gameOverModal.classList.remove('active');
    }
};

window.closeHafizaOyunu = function() {
    // 1. Müzik ve sesleri durdur
    try {
        if (window.soundManager && typeof window.soundManager.stopBgm === 'function') {
            window.soundManager.stopBgm();
        }
    } catch(e) {}

    // 2. AndroidBridge Native Köprüsü (Doğrudan, parent ve top pencerelerinde kontrol et)
    try {
        if (window.AndroidBridge && typeof window.AndroidBridge.closeHafizaGame === 'function') {
            window.AndroidBridge.closeHafizaGame();
        }
    } catch(e) {}
    try {
        if (window.parent && window.parent.AndroidBridge && typeof window.parent.AndroidBridge.closeHafizaGame === 'function') {
            window.parent.AndroidBridge.closeHafizaGame();
        }
    } catch(e) {}
    try {
        if (window.top && window.top.AndroidBridge && typeof window.top.AndroidBridge.closeHafizaGame === 'function') {
            window.top.AndroidBridge.closeHafizaGame();
        }
    } catch(e) {}

    // 3. Doğrudan parent ve top fonksiyon çağrısı
    try {
        if (window.parent && typeof window.parent.closeHafizaGameModal === 'function') {
            window.parent.closeHafizaGameModal();
        }
    } catch(e) {}
    try {
        if (window.top && typeof window.top.closeHafizaGameModal === 'function') {
            window.top.closeHafizaGameModal();
        }
    } catch(e) {}

    // 4. PostMessage Broadcast (hem string hem obje formatı)
    try {
        if (window.parent && window.parent !== window) {
            window.parent.postMessage('CLOSE_HAFIZA_GAME', '*');
            window.parent.postMessage({ type: 'CLOSE_HAFIZA_GAME' }, '*');
        }
    } catch(e) {}
    try {
        if (window.top && window.top !== window) {
            window.top.postMessage('CLOSE_HAFIZA_GAME', '*');
            window.top.postMessage({ type: 'CLOSE_HAFIZA_GAME' }, '*');
        }
    } catch(e) {}

    // 5. Shared LocalStorage Trigger (Çapraz iframe senkronizasyonu)
    try {
        localStorage.setItem("sinirlayici_hafiza_trigger", "close_" + Date.now());
    } catch(e) {}

    // 6. Yüksek skor varsa bildir
    if (window.game && window.game.score >= 80000) {
        try {
            window.game.sendScoreToParent(window.game.score);
        } catch(e) {}
    }

    // 7. Standalone Web / Doğrudan Açılma Durumunda (hafiza.html veya iframe dışı)
    // Eğer bir modal içinde değilse ana sayfaya yönlendir!
    try {
        if (window.parent === window || !window.parent || typeof window.parent.closeHafizaGameModal !== 'function') {
            const loc = window.location.pathname;
            if (loc.endsWith('hafiza.html') || loc.includes('/hafiza_oyunu/') || loc.includes('/hafiza/')) {
                if (window.history.length > 1) {
                    window.history.back();
                } else {
                    window.location.href = (loc.includes('/hafiza_oyunu/') || loc.includes('/hafiza/')) ? '../index.html' : 'index.html';
                }
            }
        }
    } catch(e) {}

    // 8. Oyun durumunu nazikçe sıfırla
    if (window.game) {
        if (window.game.timerTimeout) {
            clearTimeout(window.game.timerTimeout);
            window.game.timerTimeout = null;
        }
        window.game.resetGame();
        window.game.initIdleBoard();
        if (window.game.startGameModal) {
            window.game.startGameModal.classList.add('active');
        }
        if (window.game.gameOverModal) {
            window.game.gameOverModal.classList.remove('active');
        }
    }
};

// Donanım veya klavye geri tuşunu iframe içinde de yakala
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Backspace') {
        e.preventDefault();
        window.closeHafizaOyunu();
    }
});

// Sayfa yüklendiğinde hazırla (hemen başlatma!)
window.addEventListener('DOMContentLoaded', () => {
    window.game = new MemoryGame();
});
