<script setup>
defineProps(['project']);
</script>

<template>
  <div class="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition-all flex flex-col h-full">
    <h3 class="text-xl font-bold text-blue-400 mb-2">{{ project.title }}</h3>
    <p class="text-gray-400 text-sm mb-4 grow">{{ project.desc }}</p>
    
    <div class="flex flex-wrap gap-2 mt-auto">
      <span v-for="tag in project.tech" :key="tag" 
            class="bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded border border-blue-500/20">
        {{ tag }}
      </span>
    </div>
  </div>
</template>