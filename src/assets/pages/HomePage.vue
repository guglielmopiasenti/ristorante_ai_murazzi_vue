<script>
import AppHeader from '../components/AppHeader.vue';
import { ref } from 'vue'


</script>
<template>
  <div class="flex justify-center w-full py-32 sm:py-48 lg:py-56">
    <!-- Your title and content -->
    <div class="text-center">
      <div class="lg:text-9xl font-edmund text-white sm:text-6xl">Ristorante ai Murazzi</div>
      <p class="mt-6 text-3xl leading-8 text-white">Effettua il login ed accedi alla tua Dashboard.</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a href="{{ route('login') }}"
          class="rounded-full bg-indigo-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Accedi</a>
      </div>
    </div>
  </div>
</template>