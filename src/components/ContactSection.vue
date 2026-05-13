<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

defineProps({
  contact: { type: Object, default: () => ({}) },
  profile: { type: Object, default: () => ({}) },
});

// ─── EmailJS config ────────────────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com
// 2. Add an Email Service (Gmail recommended) → copy Service ID
// 3. Create an Email Template using these variables:
//      {{from_name}}, {{from_email}}, {{subject}}, {{message}}
//    Set "To Email" in the template to: shahriarn10@gmail.com
// 4. Copy your Public Key from Account → API Keys
// Then paste all three values below:
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // e.g. 'AbCdEfGhIjKlMnOp'
// ───────────────────────────────────────────────────────────────────────────

const form = ref({ name: '', email: '', subject: '', message: '' });
const status = ref('idle'); // idle | sending | success | error
const errors = ref({});
const errorMsg = ref('');

const validate = () => {
  errors.value = {};
  if (!form.value.name.trim()) errors.value.name = 'Name is required';
  if (!form.value.email.trim()) errors.value.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) errors.value.email = 'Invalid email';
  if (!form.value.message.trim()) errors.value.message = 'Message is required';
  return Object.keys(errors.value).length === 0;
};

const submit = async () => {
  if (!validate()) return;
  status.value = 'sending';
  errorMsg.value = '';

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name:  form.value.name,
        from_email: form.value.email,
        subject:    form.value.subject || '(No subject)',
        message:    form.value.message,
        reply_to:   form.value.email,
      },
      EMAILJS_PUBLIC_KEY
    );
    status.value = 'success';
    form.value = { name: '', email: '', subject: '', message: '' };
    setTimeout(() => { status.value = 'idle'; }, 6000);
  } catch (err) {
    console.error('EmailJS error:', err);
    errorMsg.value = 'Failed to send. Please email me directly at shahriarn10@gmail.com';
    status.value = 'error';
    setTimeout(() => { status.value = 'idle'; errorMsg.value = ''; }, 6000);
  }
};
</script>


<template>
  <section id="contact" class="w-full max-w-7xl mx-auto py-32 px-6 md:px-12">
    <!-- Header -->
    <div class="text-center mb-20 reveal">
      <div class="section-tag mx-auto w-fit">📬 Get In Touch</div>
      <h2 class="text-4xl md:text-5xl font-black text-white mt-4 mb-4">Let's Connect</h2>
      <p class="text-gray-400 max-w-xl mx-auto">I'm currently open to new opportunities. Whether you have a question or just want to say hi — I'll get back to you!</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
      <!-- Left: info panel -->
      <div class="lg:col-span-2 space-y-6 reveal reveal-left">
        <!-- Contact cards -->
        <a :href="'mailto:' + contact.email"
           class="group gradient-border p-5 flex items-center gap-4 hover:-translate-y-1 transition-all duration-300 block">
          <div class="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
            ✉️
          </div>
          <div>
            <p class="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
            <p class="text-white font-semibold text-sm">{{ contact.email }}</p>
          </div>
          <svg class="w-4 h-4 text-gray-600 ml-auto group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>

        <a :href="contact.github" target="_blank"
           class="group gradient-border p-5 flex items-center gap-4 hover:-translate-y-1 transition-all duration-300 block">
          <div class="w-12 h-12 rounded-xl bg-gray-700/30 border border-gray-600/30 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </div>
          <div>
            <p class="text-xs text-gray-500 uppercase tracking-wider mb-1">GitHub</p>
            <p class="text-white font-semibold text-sm">@shahriarn10</p>
          </div>
          <svg class="w-4 h-4 text-gray-600 ml-auto group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>

        <a :href="contact.linkedin" target="_blank"
           class="group gradient-border p-5 flex items-center gap-4 hover:-translate-y-1 transition-all duration-300 block">
          <div class="w-12 h-12 rounded-xl bg-blue-700/20 border border-blue-700/30 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
          <div>
            <p class="text-xs text-gray-500 uppercase tracking-wider mb-1">LinkedIn</p>
            <p class="text-white font-semibold text-sm">Shahriar Najim</p>
          </div>
          <svg class="w-4 h-4 text-gray-600 ml-auto group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>

        <!-- Location -->
        <div class="gradient-border p-5 flex items-center gap-4">
          <div class="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-xl shrink-0">🌍</div>
          <div>
            <p class="text-xs text-gray-500 uppercase tracking-wider mb-1">Location</p>
            <p class="text-white font-semibold text-sm">{{ contact.location }}</p>
          </div>
        </div>
      </div>

      <!-- Right: form -->
      <div class="lg:col-span-3 reveal reveal-right">
        <div class="gradient-border p-8">
          <!-- Success state -->
          <Transition name="fade">
            <div v-if="status === 'success'" class="text-center py-12">
              <div class="text-6xl mb-4">🎉</div>
              <h3 class="text-xl font-bold text-white mb-2">Message Sent!</h3>
              <p class="text-gray-400">Thanks for reaching out. I'll get back to you shortly.</p>
            </div>
          </Transition>

          <!-- Error state -->
          <Transition name="fade">
            <div v-if="status === 'error'" class="text-center py-12">
              <div class="text-6xl mb-4">😟</div>
              <h3 class="text-xl font-bold text-white mb-2">Something went wrong</h3>
              <p class="text-gray-400">{{ errorMsg }}</p>
            </div>
          </Transition>

          <form v-if="status !== 'success' && status !== 'error'" @submit.prevent="submit" class="space-y-5">
            <!-- Name + Email row -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-sm font-medium text-gray-400 mb-2">Name *</label>
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="John Doe"
                  :class="[
                    'w-full px-4 py-3 bg-gray-900/80 border rounded-xl text-white placeholder-gray-600 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/50',
                    errors.name ? 'border-red-500/60' : 'border-gray-700 focus:border-blue-500/60'
                  ]"
                />
                <p v-if="errors.name" class="text-red-400 text-xs mt-1">{{ errors.name }}</p>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-400 mb-2">Email *</label>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="john@example.com"
                  :class="[
                    'w-full px-4 py-3 bg-gray-900/80 border rounded-xl text-white placeholder-gray-600 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/50',
                    errors.email ? 'border-red-500/60' : 'border-gray-700 focus:border-blue-500/60'
                  ]"
                />
                <p v-if="errors.email" class="text-red-400 text-xs mt-1">{{ errors.email }}</p>
              </div>
            </div>

            <!-- Subject -->
            <div>
              <label class="block text-sm font-medium text-gray-400 mb-2">Subject</label>
              <input
                v-model="form.subject"
                type="text"
                placeholder="What's this about?"
                class="w-full px-4 py-3 bg-gray-900/80 border border-gray-700 focus:border-blue-500/60 rounded-xl text-white placeholder-gray-600 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/50"
              />
            </div>

            <!-- Message -->
            <div>
              <label class="block text-sm font-medium text-gray-400 mb-2">Message *</label>
              <textarea
                v-model="form.message"
                rows="5"
                placeholder="Tell me about your project or opportunity..."
                :class="[
                  'w-full px-4 py-3 bg-gray-900/80 border rounded-xl text-white placeholder-gray-600 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/50 resize-none',
                  errors.message ? 'border-red-500/60' : 'border-gray-700 focus:border-blue-500/60'
                ]"
              ></textarea>
              <p v-if="errors.message" class="text-red-400 text-xs mt-1">{{ errors.message }}</p>
            </div>

            <!-- Submit -->
            <button
              type="submit"
              :disabled="status === 'sending'"
              class="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-3 hover:-translate-y-0.5"
            >
              <svg v-if="status === 'sending'" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              <span>{{ status === 'sending' ? 'Sending...' : 'Send Message' }}</span>
              <svg v-if="status !== 'sending'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
