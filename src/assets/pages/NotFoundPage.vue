<template>
  <AppHeader />
  <main class="grid min-h-full place-items-center bg-black px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-base font-semibold text-white">404</p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-200 sm:text-5xl">Pagina non trovata</h1>
      <p class="mt-6 text-base leading-7 text-gray-600">Ci dispiace, ma questa pagina non esiste.</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <RouterLink
          class="text-lg rounded-full bg-gradient-to-r from-[#3A261E] via-[#734E3B] to-[#D8B58C] px-3.5 py-2.5 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          :to="{ name: 'home' }">
          Torna alla Home
        </RouterLink>
      </div>
    </div>
  </main>
  <AppFooter />
</template>


<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
</script>