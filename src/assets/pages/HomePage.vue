<script>
import AppHeader from '../components/AppHeader.vue';
import { ref } from 'vue'

export default {
  name: 'HomePage',
  components: {
    AppHeader,
  },
}

</script>
<template>
  <body class="antialiased ">
    <div class="relative">

      <div class="min-h-screen bg-[url('/public/img/Ristorante_ai_Murazzi.png')] bg-cover selection:text-white">
        <div class="absolute inset-0 bg-gradient-to-t from-black from-0% to-transparent to-35%"></div>
        <!-- Background Overlay -->
        <div class="absolute inset-0 bg-black opacity-50 z-0"></div>


        <!-- Content -->
        <div class="relative z-10">
          <AppHeader />
          <div class="flex justify-center w-full py-32 sm:py-48 lg:py-56">
            <!-- Your title and content -->
            <div class="text-center">
              <div class="lg:text-9xl font-edmund text-white sm:text-6xl">Ristorante ai Murazzi</div>
              <p class="mt-6 text-2xl leading-8 text-white">Scopri il Sapore del Mare: Immergiti nell'Esclusività della
                Nostra Cucina a Base di Pesce!</p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <a href="{{ route('login') }}"
                  class="rounded-full bg-gradient-to-r from-[#3A261E] via-[#734E3B] to-[#D8B58C] px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Prenota
                  un posto ora!</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="bg-black">
      <div class="mx-auto py-24 sm:py-32">
        <div
          class="relative isolate overflow-hidden bg-black px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">

          <svg viewBox="0 0 1024 1024"
            class="absolute left-1/2 top-20 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true">
            <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stop-color="#734E3B" />
                <stop offset="1" stop-color="#D8B58C" />
              </radialGradient>
            </defs>
          </svg>
          <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Scopri il nostro Menù.<br />Puoi dargli
              un'occhiata da qui.</h2>
            <p class="mt-6 text-lg leading-8 text-gray-300">Immergiti in un viaggio gastronomico dove ogni piatto racconta
              una storia unica.</p>
            <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a href="#"
                class="rounded-full bg-gradient-to-r from-[#3A261E] via-[#734E3B] to-[#D8B58C] px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Vai
                al Menù</a>
              <a href="#" class="text-sm font-semibold leading-6 text-white">Scopri di più su di noi <span
                  aria-hidden="true">→</span></a>
            </div>
          </div>
          <div class="relative mt-16 h-80 lg:mt-8">
            <img class="absolute rounded-3xl left-0 -top-8 w-[57rem] max-w-none  bg-white/5 ring-1 ring-white/10"
              src="public/img/murazzi_16.png" alt="App screenshot" />
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-black -from-10% to-transparent to-15% z-20"></div>
        </div>
      </div>
      <div class="mx-auto pb-24 sm:pb-32">
        <div
          class="relative isolate overflow-hidden bg-black px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg viewBox="0 0 1024 1024"
            class="absolute left-1/2 top-40 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true">
            <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stop-color="#734E3B" />
                <stop offset="1" stop-color="#D8B58C" />
              </radialGradient>
            </defs>
          </svg>
          <iframe class="lg:mt-10 rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.836209889679!2d12.352638376160549!3d45.392474738221765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eaf8ef65db7ff%3A0x8986bd5e11f475f5!2sRistorante%20Ai%20Murazzi!5e0!3m2!1sit!2snl!4v1698065472586!5m2!1sit!2snl"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-right justify-self-end lg:mt-10">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Puoi trovarci qui.<br />Semplice.</h2>
            <p class="mt-6 text-lg leading-8 text-gray-300">Clicca sul pulsante 'indicazioni stradali' e fatti portare
              direttamente dalle mappe.</p>
            <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-end">
              <a href="#"
                class="rounded-full bg-gradient-to-r from-[#3A261E] via-[#734E3B] to-[#D8B58C] px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Vai
                al Menù</a>
              <a href="#" class="text-sm font-semibold leading-6 text-white">Scopri di più su di noi <span
                  aria-hidden="true">→</span></a>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black -from-10% to-transparent to-15% z-20"></div>
          </div>

        </div>
      </div>
    </div>

  </body>
</template>