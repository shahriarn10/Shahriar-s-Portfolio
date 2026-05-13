<script setup>
defineProps({
  certifications: { type: Array, default: () => [] }
});
</script>

<template>
  <section id="certifications" class="w-full max-w-7xl mx-auto py-32 px-6 md:px-12">
    <!-- Header -->
    <div class="text-center mb-20 reveal">
      <div class="section-tag mx-auto w-fit">🏆 Achievements</div>
      <h2 class="text-4xl md:text-5xl font-black text-white mt-4 mb-4">Certifications</h2>
      <p class="text-gray-400 max-w-xl mx-auto">Credentials and licenses from recognized institutions.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(cert, i) in certifications"
        :key="cert.title"
        :class="`group gradient-border p-7 flex flex-col h-full hover:-translate-y-2 transition-all duration-300 reveal reveal-delay-${i + 1}`"
      >
        <!-- Issuer + date -->
        <div class="flex items-center justify-between mb-6">
          <span class="px-3 py-1 text-xs font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full uppercase tracking-wider">
            {{ cert.issuer }}
          </span>
          <span class="text-xs text-gray-500 shrink-0">{{ cert.date }}</span>
        </div>

        <!-- Title -->
        <h3 class="text-white font-bold text-lg mb-3 group-hover:text-blue-400 transition-colors leading-snug">
          {{ cert.title }}
        </h3>

        <!-- Description -->
        <p class="text-gray-400 text-sm leading-relaxed grow mb-6">{{ cert.description }}</p>

        <!-- Link -->
        <a :href="cert.link" target="_blank"
           class="inline-flex items-center gap-2 text-xs font-bold text-blue-500 hover:text-blue-300 transition-colors mt-auto group/link">
          View Credential
          <svg class="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
