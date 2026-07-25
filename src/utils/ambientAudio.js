// Web Audio API ambient synth for luxury studio background atmosphere

class AmbientAudioController {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.oscillators = [];
    this.gainNode = null;
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioContext();
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  start() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.gainNode.gain.exponentialRampToValueAtTime(0.12, this.ctx.currentTime + 3);

    // Warm oriental ambient frequencies (D, A, F#, A)
    const freqs = [73.42, 110.00, 146.83, 220.00, 293.66];
    this.oscillators = [];

    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();
      
      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Subtle detune for lush spatial depth
      osc.detune.setValueAtTime((idx - 2) * 4, this.ctx.currentTime);

      oscGain.gain.value = 0.2 / (idx + 1);

      osc.connect(oscGain);
      oscGain.connect(this.gainNode);

      osc.start();
      this.oscillators.push(osc);
    });

    // Lowpass filter for smooth warm atmosphere
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, this.ctx.currentTime);

    this.gainNode.connect(filter);
    filter.connect(this.ctx.destination);

    this.isPlaying = true;
  }

  stop() {
    if (!this.gainNode || !this.ctx) return;
    this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.5);
    setTimeout(() => {
      this.oscillators.forEach(osc => {
        try { osc.stop(); } catch(e) {}
      });
      this.oscillators = [];
      this.isPlaying = false;
    }, 1500);
  }
}

export const ambientAudio = new AmbientAudioController();
