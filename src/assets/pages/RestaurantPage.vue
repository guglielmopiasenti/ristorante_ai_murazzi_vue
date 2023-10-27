<template>
  <body class="antialiased overflow-x-hidden">
    <div class="relative">
      <AppHeader />
      <div class="relative pb-10">
        <div class="bg-[url('/public/img/murazzi_12.png')] h-full w-full bg-cover py-24 sm:py-32">
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
          </div>
        </div>
      </div>

      <div class="container max-w-md sm:max-w-4xl mx-auto">
        <h1 class="text-2xl sm:text-4xl md:text-6xl text-center font-bold tracking-tight text-white py-12">Dai un'occhiata
          alle nostre
          foto</h1>
        <div v-if="loading" class="flex justify-center items-center h-screen">
          <p class="text-2xl text-gray-600">Loading...</p>
        </div>

        <div v-else-if="error" class="flex justify-center items-center h-screen">
          <p class="text-2xl text-red-500">An error occurred!</p>
        </div>

        <div v-else class="relative" data-carousel="static">
          <div class="relative">

            <div class="overflow-hidden sm:rounded-lg relative h-64 sm:h-96 md:h-108 xl:h-120 2xl:h-144 w-full">
              <div v-for="(picture, index) in images" :key="picture.id"
                class="absolute transition-transform duration-700 ease-in-out w-full h-full"
                :style="{ transform: currentIndex === index ? 'translateX(0%)' : (index < currentIndex ? 'translateX(-100%)' : 'translateX(100%)') }">
                <img :src="picture.filename" alt="Carousel Image" class="w-full h-full object-cover" />
              </div>
            </div>

            <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
              <button v-for="(picture, index) in images" :key="picture.id" type="button"
                :class="{ 'bg-gray-200': currentIndex === index }" class="w-3 h-3 bg-gray-500 rounded-full"
                aria-current="false" :aria-label="'Slide ' + (index + 1)" @click="currentIndex = index"></button>
            </div>
          </div>

          <div class="grid grid-cols-2 py-5">
            <button @click="prev" type="button"
              class="flex lg:absolute lg:top-0 lg:-left-20 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none">
              <span
                class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/50 group-hover:bg-white/70 group-focus:ring-4 group-focus:ring-white/80 group-focus:outline-none">
                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                <span class="hidden">Previous</span>
              </span>
            </button>

            <button @click="next" type="button"
              class="flex lg:absolute lg:top-0 lg:-right-20 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none">
              <span
                class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/50 group-hover:bg-white/70 group-focus:ring-4 group-focus:ring-white/80 group-focus:outline-none">
                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span class="hidden">Next</span>
              </span>
            </button>
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
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'HomePage',
  components: {
    AppHeader,
    AppFooter,
  },
  name: 'Carousel',
  setup() {
    const images = ref([]);
    const loading = ref(true);
    const error = ref(false);
    const currentIndex = ref(0);

    const fetchImages = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/pictures');
        images.value = response.data.pictures;
      } catch (err) {
        error.value = true;
      } finally {
        loading.value = false;
      }
    };

    onMounted(fetchImages);

    const next = () => {
      if (currentIndex.value < images.value.length - 1) {
        currentIndex.value += 1;
      }
    };

    const prev = () => {
      if (currentIndex.value > 0) {
        currentIndex.value -= 1;
      }
    };

    return {
      images,
      loading,
      error,
      currentIndex,
      next,
      prev,
    };
  },

};
</script>