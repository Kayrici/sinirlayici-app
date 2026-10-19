// Web Audio API Sentezleyici - Harici ses dosyasına ihtiyaç duymaz, %100 çevrimdışı ve WebView uyumludur.
class SoundManager {
    constructor() {
        this.ctx = null;
        this.enabled = localStorage.getItem('hafiza_oyunu_sound') !== 'false';
    }

    init() {
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) {
                this.ctx = new AudioCtx();
            }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    toggle() {
        this.enabled = !this.enabled;
        localStorage.setItem('hafiza_oyunu_sound', this.enabled ? 'true' : 'false');
        return this.enabled;
    }

    playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.2, attack = 0.01, decay = 0.1) {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;

        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = type;
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

            gain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(gainVal, this.ctx.currentTime + attack);
            gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start();
            osc.stop(this.ctx.currentTime + duration);
        } catch (e) {
            console.warn('Audio error:', e);
        }
    }

    playFlip() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;

        try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(220, now);
            osc.frequency.exponentialRampToValueAtTime(440, now + 0.1);

            gain.gain.setValueAtTime(0.08, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start();
            osc.stop(now + 0.1);
        } catch (e) {}
    }

    playCorrect() {
        this.playTone(587.33, 'sine', 0.12, 0.22, 0.01, 0.08); // D5
        setTimeout(() => {
            this.playTone(880, 'sine', 0.18, 0.22, 0.01, 0.12); // A5
        }, 70);
    }

    playWrong() {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;

        try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(160, now);
            osc.frequency.exponentialRampToValueAtTime(90, now + 0.25);

            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start();
            osc.stop(now + 0.25);
        } catch (e) {}
    }

    playRoundSuccess() {
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
            setTimeout(() => {
                this.playTone(freq, 'sine', 0.22, 0.2, 0.01, 0.18);
            }, idx * 70);
        });
    }

    playLevelUp() {
        const notes = [440, 554.37, 659.25, 880, 1108.73];
        notes.forEach((freq, idx) => {
            setTimeout(() => {
                this.playTone(freq, 'triangle', 0.3, 0.22, 0.01, 0.25);
            }, idx * 80);
        });
    }

    playGameOver() {
        const notes = [392.00, 349.23, 311.13, 246.94];
        notes.forEach((freq, idx) => {
            setTimeout(() => {
                this.playTone(freq, 'sawtooth', 0.35, 0.18, 0.01, 0.3);
            }, idx * 110);
        });
    }

    playCountdown(final = false) {
        if (final) {
            this.playTone(880, 'sine', 0.2, 0.25, 0.01, 0.15);
        } else {
            this.playTone(440, 'sine', 0.1, 0.15, 0.01, 0.08);
        }
    }
}

const soundManager = new SoundManager();
