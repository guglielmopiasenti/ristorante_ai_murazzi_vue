<script>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import { ref } from 'vue'

export default {
  name: 'HomePage',
  components: {
    AppHeader,
    AppFooter,
  },
  methods: {
    callNumber() {
      window.location.href = 'tel:+39-041-302-0209';
    },
  },
}

</script>
<template>
  <body class="antialiased overflow-x-hidden">

    <div
      class="max-h-screen bg-[url('/public/img/Ristorante_ai_Murazzi.png')] bg-[center_right_35rem] sm:bg-[center_right_55rem] lg:bg-center bg-cover selection:text-white">
      <AppHeader />
      <div class="relative">
        <div class="absolute inset-0 bg-gradient-to-t from-black from-0% to-transparent to-35%"></div>
        <!-- Background Overlay -->
        <div class="absolute inset-0 bg-black opacity-50 z-0"></div>


        <!-- Content -->
        <div class="relative z-10">
          <div class="flex justify-center w-full py-32 sm:py-48 lg:py-56">

            <div class="text-center">
              <div class="lg:text-9xl font-edmund text-white sm:text-6xl">Ristorante ai Murazzi</div>
              <p class="mt-6 text-2xl leading-8 text-white py-7">Scopri il Sapore del Mare: Immergiti nell'Esclusività
                della
                Nostra Cucina a Base di Pesce!</p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <a href="https://booking-widget.quandoo.com/iframe.html?agentId=2&amp;merchantId=35091&amp;origin=https%3A%2F%2Fadmin.quandoo.com&amp;path=https%3A%2F%2Fbooking-widget.quandoo.com%2F"
                  jslog="// LINT.IfChange(PostCTAType)56036; track:impression,click" data-enable-ga="true"
                  class="text-lg rounded-full bg-gradient-to-r from-[#3A261E] via-[#734E3B] to-[#D8B58C] px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Prenota
                  un posto ora!</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="bg-black">
      <div class="mx-auto max-w-7xl pb-20 sm:py-32">
        <div
          class="relative isolate bg-black px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 lg:pb-32">

          <div
            class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true">
            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#3A261E] to-[#D8B58C] opacity-20"
              style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
            </div>
          </div>
          <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true">
            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#3A261E] to-[#D8B58C] opacity-20"
              style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
            </div>
          </div>

          <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Scopri il nostro Menù.<br />Puoi dargli
              un'occhiata da qui.</h2>
            <p class="mt-6 text-lg leading-8 text-gray-300 md:py-6">Immergiti in un viaggio gastronomico dove ogni piatto
              racconta
              una storia unica.</p>
            <div
              class="mt-10 flex flex-col sm:flex-row py-5 pb-10 sm:pb-0 sm:py-0 items-center justify-center gap-x-6 lg:justify-start">

              <RouterLink
                class="text-lg rounded-full bg-gradient-to-r from-[#3A261E] via-[#734E3B] to-[#D8B58C] px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-4 sm:mb-0"
                :to="{ name: 'menu' }">
                Vai al Menù
              </RouterLink>
              <RouterLink class="text-sm font-semibold leading-6 text-white" :to="{ name: 'about-us' }">
                Scopri di più su di noi <span aria-hidden="true">→</span>
              </RouterLink>
            </div>
          </div>
          <div class="md:pt-10 md:mt-16 lg:mt-20 flex justify-center">
            <img class="rounded-3xl w3/4 sm:w-[40rem]" src="public/img/murazzi_16.png" alt="App screenshot" />
          </div>
        </div>
      </div>

      <!-- Map section -->

      <div class="mx-auto max-w-7xl sm:pb-32">
        <div class="relative isolate px-6 sm:pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">

          <!-- First Shape -->
          <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true">
            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#734E3B] to-[#D8B58C] opacity-20"
              style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);">
            </div>
          </div>

          <!-- Second Shape -->
          <div
            class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true">
            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#734E3B] to-[#D8B58C] opacity-20"
              style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);">
            </div>
          </div>

          <div class="lg:hidden mx-auto max-w-md text-center pb-10">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Puoi trovarci qui.<br />Semplice.</h2>
            <p class="mt-6 text-lg leading-8 text-gray-300 md:py-7">Clicca sul pulsante 'indicazioni stradali' e fatti
              portare
              direttamente dalle mappe.</p>

          </div>
          <!-- Google Maps -->
          <div class="flex justify-center md:pt-10">
            <iframe class="rounded-3xl z-40 w-[22rem] sm:w-[40rem]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.836209889679!2d12.352638376160549!3d45.392474738221765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eaf8ef65db7ff%3A0x8986bd5e11f475f5!2sRistorante%20Ai%20Murazzi!5e0!3m2!1sit!2snl!4v1698065472586!5m2!1sit!2snl"
              width="700" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
          <div
            class="hidden lg:inline-block mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-right justify-self-end">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Puoi trovarci qui.<br />Semplice.</h2>
            <p class="mt-6 text-lg leading-8 text-gray-300">Clicca sul pulsante 'indicazioni stradali' e fatti portare
              direttamente dalle mappe.</p>
          </div>
        </div>
      </div>
      <div class="relative isolate py-40 sm:py-32">
        <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true">
          <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#3A261E] to-[#D8B58C] opacity-20"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
          </div>
        </div>
        <div
          class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true">
          <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#3A261E] to-[#D8B58C] opacity-20"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
          </div>
        </div>
        <div class="mx-auto max-w-7xl px-6 lg:px-8 md:pb-24">
          <div class="mx-auto text-center lg:mx-0">
            <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Vuoi prenotare?</h2>
            <p class="mt-6 text-lg leading-8 text-gray-300">Chiamaci cliccando il pulsante, oppure copia il numero.</p>
          </div>
          <div class="mx-auto mt-10 text-center lg:mx-0 lg:max-w-none">
            <div class="mt-16 flex justify-center gap-8 sm:mt-20">
              <div data-field="phone">
                <a href="tel:+39-041-302-0209"
                  class="rounded-full bg-gradient-to-r from-[#3A261E] via-[#734E3B] to-[#D8B58C] px-4 py-3 font-semibold text-lg text-white shadow-sm"
                  @click.prevent="callNumber">
                  Chiama ora
                </a>
              </div>
              <div class="text-white font-bold">
                041 302 0209
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative pb-10">
        <div class="bg-[url('/public/img/murazzi_12.png')] h-full w-full bg-center bg-cover py-24 sm:py-32">
          <div class="absolute inset-0 bg-black opacity-60 z-0"></div>

          <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto lg:mx-0 text-center py-20 flex flex-col gap-y-10">
              <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Questa è la nostra location</h2>
              <p class="mt-6 text-lg leading-8 text-white max-w-2xl mx-auto">Scopri la magia di mangiare in un ristorante
                dove
                ogni
                dettaglio evoca la natura circostante. Lasciati incantare dalla vista mozzafiato sul mare mentre
                assaporiamo piatti che celebrano la freschezza e la ricchezza dei sapori locali.</p>
            </div>
            <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none text-center">
              <RouterLink
                class="text-lg rounded-full bg-gradient-to-r from-[#3A261E] via-[#734E3B] to-[#D8B58C] px-3.5 py-2.5 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                :to="{ name: 'restaurant' }">
                Galleria Foto
              </RouterLink>
            </div>
          </div>
        </div>
      </div>

    </div>
    <AppFooter />
  </body>
</template>