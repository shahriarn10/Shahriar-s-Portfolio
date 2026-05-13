<script setup>
defineProps({
  projects: { type: Array, default: () => [] }
});

const typeColors = {
  'Full-Stack': 'text-blue-400 bg-blue-500/10 border-blue-500/25',
  'Systems': 'text-orange-400 bg-orange-500/10 border-orange-500/25',
  'AI/ML Research': 'text-purple-400 bg-purple-500/10 border-purple-500/25',
  'Web Dev': 'text-green-400 bg-green-500/10 border-green-500/25',
};
</script>

<template>
  <section id="projects" class="w-full max-w-7xl mx-auto py-32 px-6 md:px-12">
    <!-- Header -->
    <div class="text-center mb-20 reveal">
      <div class="section-tag mx-auto w-fit">🚀 Featured Work</div>
      <h2 class="text-4xl md:text-5xl font-black text-white mt-4 mb-4">Projects</h2>
      <p class="text-gray-400 max-w-xl mx-auto">A selection of things I've built — from systems programming to AI research.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(p, i) in projects"
        :key="p.id"
        :class="`group relative gradient-border p-7 flex flex-col h-full hover:-translate-y-2 transition-all duration-300 reveal reveal-delay-${i + 1}`"
      >
        <!-- Featured badge -->
        <div v-if="p.featured"
             class="absolute top-4 right-4 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 rounded-full">
          ★ Featured
        </div>

        <!-- Type badge -->
        <div class="mb-5">
          <span :class="`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${typeColors[p.type] || 'text-gray-400 bg-gray-800 border-gray-700'}`">
            {{ p.type }}
          </span>
        </div>

        <!-- Title -->
        <h3 class="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight pr-8">
          {{ p.title }}
        </h3>

        <!-- Description -->
        <p class="text-gray-400 text-sm leading-relaxed mb-6 grow">{{ p.desc }}</p>

        <!-- Tech stack -->
        <div class="flex flex-wrap gap-2 mb-6">
          <span v-for="tag in p.tech" :key="tag"
                class="px-2.5 py-1 text-[11px] font-medium text-gray-400 bg-gray-800/80 border border-gray-700/50 rounded-lg">
            {{ tag }}
          </span>
        </div>

        <!-- Links -->
        <div class="flex items-center gap-3 pt-4 border-t border-white/[0.06] mt-auto">
          <a v-if="p.github" :href="p.github" target="_blank"
             class="flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors group/link">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
            <svg class="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
          <a v-if="p.live" :href="p.live" target="_blank"
             class="flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors">
            Live Demo ↗
          </a>
          <span v-if="!p.github && !p.live" class="text-xs text-gray-600 italic">Private / In Progress</span>
        </div>
      </div>
    </div>
  </section>
</template>
