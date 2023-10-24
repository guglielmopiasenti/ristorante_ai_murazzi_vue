<template>
  <body class="antialiased">
    <div class="relative">
      <AppHeader />
      <div class="relative pb-10">
        <div class="bg-[url('/public/img/murazzi_12.png')] h-full w-full bg-cover py-32">
          <div class="absolute inset-0 bg-black opacity-60 z-0"></div>

          <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto lg:mx-0 text-center py-20">
              <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Questa è la nostra location</h2>
              <p class="mt-6 text-lg leading-8 text-white max-w-2xl mx-auto">Scopri la magia di mangiare in un ristorante
                dove
                ogni
                dettaglio evoca la natura circostante. Lasciati incantare dalla vista mozzafiato sul mare mentre
                assaporiamo piatti che celebrano la freschezza e la ricchezza dei sapori locali.</p>
            </div>
            <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none text-center">
              <a href="#"
                class="transition-colors rounded-full bg-gradient-to-r from-[#3A261E] via-[#734E3B] to-[#D8B58C] px-4 py-3 font-semibold text-lg text-white shadow-sm hover:from-[#D8B58C] hover:via-[#734E3B] hover:to-[#3A261E] duration-300">Galleria
                Foto</a>
            </div>
          </div>
        </div>
      </div>

    </div>
    <AppFooter />
  </body>
</template>


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
}
</script>