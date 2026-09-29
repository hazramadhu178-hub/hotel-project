// Web Audio API based ambient sound generator for serene journaling

let audioCtx = null;
let gainNode = null;
let whiteNoiseNode = null;
let isPlaying = false;

export function toggleAmbientSound(volume = 0.15, onStateChange) {
  try {
    if (isPlaying) {
      stopAmbientSound();
      if (onStateChange) onStateChange(false);
      return false;
    } else {
      startAmbientSound(volume);
      if (onStateChange) onStateChange(true);
      return true;
    }
  } catch {
    return false;
  }
}

export function startAmbientSound(volume = 0.15) {
  if (typeof window === 'undefined') return;

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  if (!audioCtx) {
    audioCtx = new AudioContextClass();
  }

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  // Create Pink/Warm Noise for gentle breeze
  const bufferSize = audioCtx.sampleRate * 2;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.96900 * b2 + white * 0.1538520;
    b3 = 0.86650 * b3 + white * 0.3104856;
    b4 = 0.55000 * b4 + white * 0.5329522;
    b5 = -0.7616 * b5 - white * 0.0168980;
    data[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
    data[i] *= 0.11;
    b6 = white * 0.115926;
  }

  const noise = audioCtx.createBufferSource();
  noise.buffer = buffer;
  noise.loop = true;

  // Filter for soft wind sound
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(450, audioCtx.currentTime);

  // Soft slow LFO for wave modulation
  const lfo = audioCtx.createOscillator();
  const lfoGain = audioCtx.createGain();
  lfo.frequency.setValueAtTime(0.15, audioCtx.currentTime);
  lfoGain.gain.setValueAtTime(150, audioCtx.currentTime);
  lfo.connect(lfoGain);
  lfoGain.connect(filter.frequency);
  lfo.start();

  gainNode = audioCtx.createGain();
  gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
  gainNode.gain.linearRampToValueAtTime(volume, audioCtx.currentTime + 1.2);

  noise.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  noise.start();
  whiteNoiseNode = noise;
  isPlaying = true;
}

export function stopAmbientSound() {
  if (!audioCtx || !gainNode || !isPlaying) return;

  gainNode.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);
  setTimeout(() => {
    try {
      if (whiteNoiseNode && 'stop' in whiteNoiseNode) {
        whiteNoiseNode.stop();
      }
      isPlaying = false;
    } catch {
      isPlaying = false;
    }
  }, 650);
}

export function playChime() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(528, ctx.currentTime); // Solfeggio frequency for calm
    osc.frequency.exponentialRampToValueAtTime(1056, ctx.currentTime + 0.8);

    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 1.2);
  } catch {
    // Audio context fallback
  }
}
