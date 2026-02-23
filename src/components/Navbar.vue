<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
</script>

<template>
  <nav class="bg-gray-900 text-white p-4 sticky top-0 z-50 border-b border-gray-800">
    <div class="container mx-auto flex justify-between items-center">
      <h2 class="text-2xl font-bold text-white">Shahriar's Portfolio</h2>
      
      <div class="hidden md:flex items-center gap-8">
        <a href="#about-me" class="hover:text-blue-400 transition">About</a>
        <a href="#projects" class="hover:text-blue-400 transition">Projects</a>
        <a href="#contact" class="hover:text-blue-400 transition">Contact</a>
      </div>

      <button @click="isOpen = !isOpen" class="md:hidden p-2 bg-gray-800 rounded">
        <span>{{ isOpen ? '✕' : '☰' }}</span>
      </button>
    </div>

    <div v-show="isOpen" class="md:hidden flex flex-col gap-4 pt-4 mt-4 border-t border-gray-800">
      <a href="#about-me" @click="isOpen = false" class="block hover:text-blue-400 transition">About</a>
      <a href="#projects" @click="isOpen = false" class="block hover:text-blue-400 transition">Projects</a>
      <a href="#contact" @click="isOpen = false" class="block hover:text-blue-400 transition">Contact</a>
    </div>

  </nav>
</template>