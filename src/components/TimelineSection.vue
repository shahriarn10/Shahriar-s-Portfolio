<script setup>
defineProps({
  timeline: { type: Array, default: () => [] }
});

const typeStyle = {
  education: { dot: 'bg-blue-500 shadow-blue-500/50', label: 'text-blue-400 bg-blue-500/10 border-blue-500/25', icon: '🎓' },
  work: { dot: 'bg-green-500 shadow-green-500/50', label: 'text-green-400 bg-green-500/10 border-green-500/25', icon: '💼' },
  project: { dot: 'bg-orange-500 shadow-orange-500/50', label: 'text-orange-400 bg-orange-500/10 border-orange-500/25', icon: '🚀' },
  research: { dot: 'bg-purple-500 shadow-purple-500/50', label: 'text-purple-400 bg-purple-500/10 border-purple-500/25', icon: '🔬' },
};
</script>

<template>
  <section id="timeline" class="w-full max-w-5xl mx-auto py-32 px-6 md:px-12">
    <!-- Header -->
    <div class="text-center mb-20 reveal">
      <div class="section-tag mx-auto w-fit">📅 My Journey</div>
      <h2 class="text-4xl md:text-5xl font-black text-white mt-4 mb-4">Timeline</h2>
      <p class="text-gray-400 max-w-xl mx-auto">Key milestones that have shaped my career and skillset.</p>
    </div>

    <div class="relative">
      <!-- Vertical line -->
      <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/40 to-transparent md:-translate-x-px"></div>

      <div class="space-y-12">
        <div
          v-for="(item, i) in timeline"
          :key="i"
          :class="[
            'relative flex gap-8',
            i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
            'reveal', i % 2 === 0 ? 'reveal-left' : 'reveal-right',
            `reveal-delay-${(i % 4) + 1}`
          ]"
        >
          <!-- Dot (mobile: left, desktop: center) -->
          <div class="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 z-10">
            <div :class="`w-4 h-4 rounded-full shadow-lg ${typeStyle[item.type]?.dot || 'bg-gray-500'}`"></div>
          </div>

          <!-- Spacer for desktop centering -->
          <div class="hidden md:block w-1/2"></div>

          <!-- Card -->
          <div class="ml-12 md:ml-0 md:w-1/2 md:px-8">
            <div class="gradient-border p-6 hover:-translate-y-1 transition-all duration-300">
              <div class="flex items-start justify-between gap-4 mb-3">
                <div class="flex items-center gap-2">
                  <span class="text-xl">{{ typeStyle[item.type]?.icon }}</span>
                  <span :class="`px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest border rounded-full ${typeStyle[item.type]?.label}`">
                    {{ item.type }}
                  </span>
                </div>
                <span class="text-sm font-bold text-gray-500 shrink-0">{{ item.year }}</span>
              </div>
              <h3 class="text-white font-bold text-lg mb-1">{{ item.title }}</h3>
              <p class="text-blue-400 text-sm font-medium mb-3">{{ item.org }}</p>
              <p class="text-gray-400 text-sm leading-relaxed">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
