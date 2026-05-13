<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  roles: { type: Array, default: () => [] }
});

// Typewriter
const displayed = ref('');
const roleIndex = ref(0);
const charIndex = ref(0);
const isDeleting = ref(false);
let timer = null;

const tick = () => {
  const current = props.roles[roleIndex.value];
  if (!isDeleting.value) {
    displayed.value = current.slice(0, charIndex.value + 1);
    charIndex.value++;
    if (charIndex.value === current.length) {
      isDeleting.value = true;
      timer = setTimeout(tick, 1800);
      return;
    }
  } else {
    displayed.value = current.slice(0, charIndex.value - 1);
    charIndex.value--;
    if (charIndex.value === 0) {
      isDeleting.value = false;
      roleIndex.value = (roleIndex.value + 1) % props.roles.length;
    }
  }
  timer = setTimeout(tick, isDeleting.value ? 60 : 95);
};

// Particle canvas
const canvas = ref(null);
let animId = null;
let particles = [];

const initParticles = () => {
  const c = canvas.value;
  if (!c) return;
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * c.width,
    y: Math.random() * c.height,
    r: Math.random() * 1.5 + 0.3,
    dx: (Math.random() - 0.5) * 0.4,
    dy: (Math.random() - 0.5) * 0.4,
    alpha: Math.random() * 0.5 + 0.1,
  }));
};

const drawParticles = () => {
  const c = canvas.value;
  if (!c) return;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, c.width, c.height);
  for (const p of particles) {
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > c.width) p.dx *= -1;
    if (p.y < 0 || p.y > c.height) p.dy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(96, 165, 250, ${p.alpha})`;
    ctx.fill();
  }
  // draw connections
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(96, 165, 250, ${0.08 * (1 - dist / 120)})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
  animId = requestAnimationFrame(drawParticles);
};

const onResize = () => {
  if (canvas.value) {
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;
    initParticles();
  }
};

onMounted(() => {
  timer = setTimeout(tick, 400);
  initParticles();
  drawParticles();
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  clearTimeout(timer);
  cancelAnimationFrame(animId);
  window.removeEventListener('resize', onResize);
});
</script>

<template>
  <div class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Particle canvas -->
    <canvas ref="canvas" class="absolute inset-0 w-full h-full pointer-events-none"></canvas>

    <!-- Ambient glow blobs -->
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/8 rounded-full blur-[100px] pointer-events-none"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none"></div>

    <!-- Content -->
    <div class="relative z-10 text-center px-6 max-w-5xl mx-auto">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20 reveal visible">
        <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
        MU CSE-58 • Open to Opportunities
      </div>

      <!-- Headline -->
      <h1 class="text-5xl sm:text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tight reveal visible reveal-delay-1">
        Hi, I'm
        <span class="block gradient-text">Shahriar Najim</span>
      </h1>

      <!-- Typewriter -->
      <div class="h-14 flex items-center justify-center mb-8 reveal visible reveal-delay-2">
        <p class="text-2xl md:text-3xl text-gray-300 font-light">
          <span class="text-white font-semibold typewriter-cursor">{{ displayed }}</span>
        </p>
      </div>

      <!-- Description -->
      <p class="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-12 reveal visible reveal-delay-3">
        Final-year CS student at Metropolitan University Bangladesh. Building systems at the intersection of
        <span class="text-blue-400">AI/ML</span>, <span class="text-cyan-400">competitive programming</span>, and
        <span class="text-purple-400">full-stack development</span>.
      </p>

      <!-- CTA buttons -->
      <div class="flex flex-wrap gap-4 justify-center mb-20 reveal visible reveal-delay-4">
        <a href="#projects"
           class="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 overflow-hidden">
          <span class="relative z-10 flex items-center gap-2">
            View Projects
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </span>
          <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </a>
        <a href="mailto:shahriarn10@gmail.com"
           class="px-8 py-4 border border-gray-700 hover:border-blue-500/60 text-gray-300 hover:text-white font-bold rounded-xl transition-all duration-300 hover:bg-blue-500/5 hover:-translate-y-1">
          Contact Me
        </a>
      </div>

      <!-- Scroll indicator -->
      <div class="flex flex-col items-center gap-2 animate-bounce opacity-50">
        <span class="text-xs text-gray-500 font-medium tracking-widest uppercase">Scroll</span>
        <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </div>
  </div>
</template>
