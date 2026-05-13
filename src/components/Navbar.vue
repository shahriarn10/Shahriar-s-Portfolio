<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrollProgress = ref(0);
const isScrolled = ref(false);
const activeSection = ref('about');
const mobileOpen = ref(false);

const navLinks = [
  { id: 'about', label: 'Home' },
  { id: 'about-me', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'timeline', label: 'Journey' },
  { id: 'certifications', label: 'Certs' },
  { id: 'contact', label: 'Contact' },
];

const onScroll = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.value = (scrollTop / docHeight) * 100;
  isScrolled.value = scrollTop > 60;

  // Active section detection
  const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean);
  let current = 'about';
  for (const sec of sections) {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  }
  activeSection.value = current;
};

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener('scroll', onScroll));

const scrollTo = (id) => {
  mobileOpen.value = false;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
  <!-- Scroll progress bar -->
  <div class="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 z-[100] transition-all duration-100"
       :style="{ width: scrollProgress + '%' }"></div>

  <nav :class="[
    'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
    isScrolled
      ? 'bg-[#050810]/80 backdrop-blur-xl border-b border-white/[0.07] py-3 shadow-2xl'
      : 'bg-transparent py-5'
  ]">
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <!-- Logo -->
      <button @click="scrollTo('about')" class="group flex items-center gap-2">
        <span class="font-bold text-white text-lg hidden sm:block">Shahriar's Portfolio</span>
      </button>

      <!-- Desktop nav -->
      <div class="hidden md:flex items-center gap-1">
        <button
          v-for="link in navLinks"
          :key="link.id"
          @click="scrollTo(link.id)"
          :class="[
            'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
            activeSection === link.id
              ? 'text-blue-400 bg-blue-500/10'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          ]"
        >
          {{ link.label }}
        </button>
      </div>

      <!-- CTA -->
      <a href="mailto:shahriarn10@gmail.com"
         class="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105">
        <span>✉</span> Hire Me
      </a>

      <!-- Mobile hamburger -->
      <button @click="mobileOpen = !mobileOpen"
              class="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition">
        <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide-down">
      <div v-if="mobileOpen"
           class="md:hidden bg-[#0d1117]/95 backdrop-blur-xl border-t border-white/[0.07] px-6 py-4 flex flex-col gap-1">
        <button
          v-for="link in navLinks"
          :key="link.id"
          @click="scrollTo(link.id)"
          :class="[
            'text-left px-4 py-3 rounded-lg text-sm font-medium transition-all',
            activeSection === link.id
              ? 'text-blue-400 bg-blue-500/10'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          ]"
        >
          {{ link.label }}
        </button>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>