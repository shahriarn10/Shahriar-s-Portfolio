<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  skills: { type: Array, default: () => [] }
});

const barsVisible = ref(false);
const sectionRef = ref(null);

onMounted(() => {
  const obs = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) { barsVisible.value = true; obs.disconnect(); } },
    { threshold: 0.2 }
  );
  if (sectionRef.value) obs.observe(sectionRef.value);
});
</script>

<template>
  <section id="skills" ref="sectionRef" class="w-full max-w-7xl mx-auto py-32 px-6 md:px-12">
    <!-- Header -->
    <div class="text-center mb-20 reveal">
      <div class="section-tag mx-auto w-fit">⚡ Technical Arsenal</div>
      <h2 class="text-4xl md:text-5xl font-black text-white mt-4 mb-4">Skills & Expertise</h2>
      <p class="text-gray-400 max-w-xl mx-auto">Technologies I work with daily to build scalable and intelligent systems.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="(group, gi) in skills"
        :key="group.category"
        :class="`gradient-border p-8 reveal reveal-delay-${gi + 1} hover:-translate-y-2 transition-all duration-300`"
      >
        <!-- Category header -->
        <div class="flex items-center gap-3 mb-8">
          <span class="text-3xl">{{ group.icon }}</span>
          <div>
            <h3 class="text-white font-bold text-lg">{{ group.category }}</h3>
            <p class="text-xs text-gray-500 uppercase tracking-wider">{{ group.items.length }} skills</p>
          </div>
        </div>

        <!-- Skill bars -->
        <div class="space-y-5">
          <div v-for="skill in group.items" :key="skill.name">
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm font-medium text-gray-300">{{ skill.name }}</span>
              <span class="text-xs font-bold text-blue-400">{{ skill.level }}%</span>
            </div>
            <div class="h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div
                class="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-1000 ease-out"
                :style="{ width: barsVisible ? skill.level + '%' : '0%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
