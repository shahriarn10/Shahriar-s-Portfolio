<script setup>
import Navbar from './components/Navbar.vue';
import ProjectCard from './components/ProjectCard.vue';
import { profile, projects, skills, certifications, contact } from './data/portfolio.js';
import { ref, onMounted, onUnmounted } from 'vue';

const showButton = ref(false);

const handleScroll = () => {
  showButton.value = window.scrollY > 500;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  if (window.location.hash) {
    window.history.replaceState(null, null, window.location.pathname);
  }
  window.scrollTo(0, 0);
});
onUnmounted(() => window.removeEventListener('scroll', handleScroll));

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<template>
  <div class="min-h-screen bg-[#050810] text-gray-100 selection:bg-blue-500/30 scroll-smooth w-full overflow-x-hidden">
    <Navbar />

    <header id="about" class="w-full max-w-350 mx-auto pt-40 pb-16 px-6 flex flex-col items-center justify-center text-center">
      <div class="inline-block px-3 py-1 mb-6 text-sm font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
        {{ profile.batch }} Student
      </div>
      <h1 class="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
  Hi, I'm <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
    {{ profile.name }}
  </span>
</h1>

<p class="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mt-6 mb-10">
  Final-year CS student at Metropolitan University. Blending competitive programming logic with modern web development and Artificial Intelligence.
</p>
      <p class="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
        {{ profile.about }}
      </p>
      <div class="mt-10 flex gap-4">
        <a href="#projects" class="border border-gray-700 hover:bg-gray-800 px-8 py-3 rounded-full font-bold transition-all">
          View Projects
        </a>
        <a href="#contact" class="border border-gray-700 hover:bg-gray-800 px-8 py-3 rounded-full font-bold transition-all">
          Contact Me
        </a>
      </div>
    </header>

    <section id="about-me" class="w-full max-w-350 mx-auto pt-12 pb-24 px-6 md:px-12">
  <div class="flex items-start gap-4 mb-16">
    <div class="w-1.5 h-10 bg-blue-600 rounded-full mt-1 shrink-0"></div>
    <div class="flex flex-col">
      <h2 class="text-4xl md:text-5xl font-bold text-white tracking-tight leading-none">
        About Me
      </h2>
    </div>
  </div>

  <div class="flex flex-col lg:flex-row items-center gap-16">
    <div class="w-full lg:w-1/3 flex justify-center">
      <div class="relative group">
        <div class="absolute -inset-2 bg-linear-to-r from-blue-600 to-cyan-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
        
        <img :src="profile.image" alt="Shahriar Najim" 
             class="relative rounded-2xl object-cover w-64 h-64 md:w-80 md:h-80 border border-gray-800 shadow-2xl z-10" />
      </div>
    </div>

    <div class="w-full lg:w-2/3 flex flex-col gap-6 text-gray-400 text-lg leading-relaxed">
      <p>
        {{ profile.aboutParagraph1 }}
      </p>
      <p>
        {{ profile.aboutParagraph2 }}
      </p>
      
      <div class="mt-4">
  <a href="/cv.pdf" 
     download="Shahriar_Najim_Resume.pdf" 
     target="_blank" 
     class="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 border border-gray-700 hover:border-blue-500 hover:text-blue-400 text-white rounded-xl font-semibold transition-all duration-300 w-fit shadow-lg hover:shadow-blue-500/20">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
    </svg>
    Download Resume
  </a>
</div>
    </div>
  </div>
</section>

    <section id="skills" class="w-full max-w-7xl mx-auto py-24 px-6 md:px-12">
      <h2 class="text-3xl font-bold mb-12 text-center">Technical Expertise</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="skillGroup in skills" :key="skillGroup.category" 
             class="p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/40 transition-all hover:-translate-y-1">
          <h3 class="text-blue-400 font-bold mb-6 uppercase tracking-widest text-xs">
            {{ skillGroup.category }}
          </h3>
          <div class="flex flex-wrap gap-3">
            <span v-for="skill in skillGroup.items" :key="skill" 
                  class="bg-gray-800/80 px-4 py-2 rounded-lg border border-gray-700 text-sm hover:border-blue-500/50 transition-colors">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="w-full max-w-7xl mx-auto py-24 px-6 md:px-12">
  <div class="flex items-center gap-4 mb-10">
    <div class="h-8 w-1 bg-blue-500"></div>
    <div>
      <h2 class="text-3xl font-bold">Featured Projects</h2>
      
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div v-for="p in projects" :key="p.id" 
         class="group p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full">
      
      <div class="flex justify-between items-start mb-4">
        <div class="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-tighter bg-blue-500/10 text-blue-400 border border-blue-500/20">
          {{ p.id === 3 ? 'Thesis' : 'Academic Project' }}
        </div>
      </div>

      <h3 class="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors leading-tight">
        {{ p.title }}
      </h3>
      <p class="text-gray-400 text-sm mb-6 grow">
        {{ p.desc }}
      </p>

      <div class="flex flex-wrap gap-2 mt-auto">
        <span v-for="tag in p.tech" :key="tag" 
              class="bg-gray-800/80 px-2 py-1 rounded border border-gray-700 text-[10px] text-gray-300">
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</section>

    <section id="certifications" class="w-full max-w-7xl mx-auto py-24 px-6 md:px-12">
  <div class="flex items-center gap-4 mb-10">
    <div class="h-8 w-1 bg-blue-500"></div>
    <h2 class="text-3xl font-bold">Licenses & Certifications</h2>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div v-for="cert in certifications" :key="cert.title" 
         class="group p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full">
      
      <div class="flex justify-between items-start mb-4">
        <div class="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-tighter bg-blue-500/10 text-blue-400 border border-blue-500/20">
          {{ cert.issuer }}
        </div>
        <span class="text-xs text-gray-500">{{ cert.date }}</span>
      </div>

      <h3 class="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors leading-tight">
        {{ cert.title }}
      </h3>
      
      <p class="text-gray-400 text-sm mb-6 grow">
        {{ cert.description }}
      </p>

      <a :href="cert.link" target="_blank" 
         class="inline-flex items-center gap-2 text-xs font-bold text-blue-500 hover:text-blue-300 transition-colors">
        Show Credential 
        <span class="text-[10px]">↗</span>
      </a>
    </div>
  </div>
</section>
    <section id="contact" class="w-full max-w-7xl mx-auto py-24 px-6 md:px-12">
  <div class="max-w-3xl mx-auto bg-linear-to-b from-gray-900 to-gray-950 p-12 rounded-3xl border border-gray-800 shadow-2xl">
    <h2 class="text-3xl font-bold mb-4">Let's Connect</h2>
    <p class="text-gray-400 mb-8 max-w-lg mx-auto">
      I'm currently focusing on my thesis in **Fake News Detection** and exploring opportunities in AI/ML and Systems. Let's build something together!
    </p>
    
    <div class="flex flex-wrap justify-center gap-4">
      <a :href="'mailto:' + contact.email" 
         class="flex items-center gap-2 bg-[#b6cdda] hover:bg-[#EA4335] text-white px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105">
        <span>✉️</span> Email Me
      </a>
      
      <a :href="contact.github" target="_blank"
         class="flex items-center gap-2 bg-[#b6cdda] hover:bg-[#000000] text-white px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105 border border-gray-700">
        <span>📂</span> GitHub
      </a>
      
      <a :href="contact.linkedin" target="_blank"
         class="flex items-center gap-2 bg-[#b6cdda] hover:bg-[#0072B1] text-white px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105">
        <span>🔗</span> LinkedIn
      </a>
    </div>
    
    <p class="mt-8 text-sm text-gray-500">Based in {{ contact.location }}</p>
  </div>
</section>

    <footer class="container mx-auto py-12 px-6 border-t border-gray-900 text-center">
      <p class="text-gray-500 text-sm italic">
        © 2026 {{ profile.name }} • Built with Vue 3 & Tailwind CSS
      </p>
    </footer>
  </div>
  <button v-show="showButton" @click="scrollToTop" 
        class="fixed bottom-8 right-8 bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-500 transition-all z-50">
  ↑
</button>
</template>