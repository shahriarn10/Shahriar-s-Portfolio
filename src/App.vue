<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import TimelineSection from './components/TimelineSection.vue';
import CertificationsSection from './components/CertificationsSection.vue';
import ContactSection from './components/ContactSection.vue';
import { profile, projects, skills, certifications, contact, stats, timeline } from './data/portfolio.js';

// Scroll-to-top
const showButton = ref(false);
const handleScroll = () => { showButton.value = window.scrollY > 500; };

// Scroll reveal
let revealObserver = null;
const initReveal = () => {
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => revealObserver.observe(el));
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.scrollTo(0, 0);
  // Delay reveal init so elements are rendered
  setTimeout(initReveal, 100);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  revealObserver?.disconnect();
});

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
</script>

<template>
  <div class="min-h-screen bg-[#050810] text-gray-100 w-full overflow-x-hidden relative">

    <!-- Global radial glow backdrop -->
    <div class="fixed inset-0 pointer-events-none z-0">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[120px]"></div>
    </div>

    <Navbar />

    <!-- ── Hero ─────────────────────────────────────── -->
    <section id="about" class="relative z-10">
      <HeroSection :roles="profile.roles" />
    </section>

    <!-- ── Stats bar ──────────────────────────────────── -->
    <section class="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 py-6">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="(stat, i) in stats" :key="stat.label"
             :class="`reveal reveal-delay-${i+1} gradient-border p-6 text-center hover:-translate-y-1 transition-all duration-300`">
          <div class="text-3xl md:text-4xl font-black gradient-text mb-1">{{ stat.value }}</div>
          <div class="text-xs text-gray-500 uppercase tracking-wider font-medium">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <!-- ── About Me ─────────────────────────────────── -->
    <section id="about-me" class="relative z-10 w-full max-w-7xl mx-auto py-32 px-6 md:px-12">
      <div class="text-center mb-20 reveal">
        <div class="section-tag mx-auto w-fit">👋 Who Am I</div>
        <h2 class="text-4xl md:text-5xl font-black text-white mt-4 mb-4">About Me</h2>
      </div>

      <div class="flex flex-col lg:flex-row items-center gap-16">
        <!-- Photo -->
        <div class="w-full lg:w-1/3 flex justify-center reveal reveal-left">
          <div class="relative group">
            <div class="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-700"></div>
            <div class="relative float-anim">
              <img :src="profile.image" alt="Shahriar Najim"
                   class="relative rounded-2xl object-cover w-64 h-64 md:w-80 md:h-80 border border-white/[0.08] shadow-2xl z-10 glow-blue" />
              <!-- Online indicator -->
              <div class="absolute -bottom-3 -right-3 z-20 flex items-center gap-2 bg-gray-900 border border-gray-700 rounded-full px-3 py-1.5 shadow-lg">
                <span class="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
                <span class="text-xs font-semibold text-gray-300">Available</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Text -->
        <div class="w-full lg:w-2/3 reveal reveal-right">
          <div class="space-y-5 text-gray-400 text-lg leading-relaxed mb-8">
            <p>{{ profile.aboutParagraph1 }}</p>
            <p>{{ profile.aboutParagraph2 }}</p>
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 mb-8">
            <span v-for="role in profile.roles" :key="role"
                  class="px-3 py-1.5 text-sm font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              {{ role }}
            </span>
          </div>

          <!-- Resume button -->
          <a href="/cv.pdf" download="Shahriar_Najim_Resume.pdf" target="_blank"
             class="group inline-flex items-center gap-3 px-7 py-4 bg-gray-900 border border-gray-700 hover:border-blue-500/60 hover:text-blue-400 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5">
            <svg class="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>

    <!-- ── Skills ───────────────────────────────────── -->
    <div class="relative z-10">
      <SkillsSection :skills="skills" />
    </div>

    <!-- ── Projects ─────────────────────────────────── -->
    <div class="relative z-10">
      <ProjectsSection :projects="projects" />
    </div>

    <!-- ── Timeline ─────────────────────────────────── -->
    <div class="relative z-10">
      <TimelineSection :timeline="timeline" />
    </div>

    <!-- ── Certifications ────────────────────────────── -->
    <div class="relative z-10">
      <CertificationsSection :certifications="certifications" />
    </div>

    <!-- ── Contact ───────────────────────────────────── -->
    <div class="relative z-10">
      <ContactSection :contact="contact" :profile="profile" />
    </div>

    <!-- ── Footer ────────────────────────────────────── -->
    <footer class="relative z-10 border-t border-white/[0.06] py-10 px-6 text-center">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-gray-500 text-sm">
          © 2026 <span class="text-white font-semibold">{{ profile.name }}</span>. All rights reserved.
        </p>
        <p class="text-gray-600 text-xs flex items-center gap-2">
          <span>Built with</span>
          <span class="text-green-400">Vue 3</span>
          <span>+</span>
          <span class="text-blue-400">Tailwind CSS</span>
          <span>+</span>
          <span class="text-purple-400">Vite</span>
        </p>
      </div>
    </footer>

    <!-- Scroll to top -->
    <Transition name="bounce-up">
      <button v-show="showButton" @click="scrollToTop"
              class="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-xl shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center z-50">
        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
        </svg>
      </button>
    </Transition>
  </div>
</template>

<style scoped>
.bounce-up-enter-active { transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1); }
.bounce-up-leave-active { transition: all 0.2s ease; }
.bounce-up-enter-from, .bounce-up-leave-to { opacity: 0; transform: translateY(20px) scale(0.85); }
</style>