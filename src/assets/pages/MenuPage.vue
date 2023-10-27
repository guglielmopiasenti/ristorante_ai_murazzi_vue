<template>
  <body class="antialiased overflow-x-hidden">
    <div
      class="max-h-screen bg-[url('/public/img/Ristorante_ai_Murazzi.png')] bg-[center_right_35rem] sm:bg-center bg-cover selection:text-white">
      <div class="relative">
        <div class="absolute inset-0 bg-gradient-to-t from-black from-0% to-transparent to-35%"></div>
        <!-- Background Overlay -->
        <div class="absolute inset-0 bg-black opacity-50 z-0"></div>


        <!-- Content -->
        <div class="relative z-10">
          <AppHeader />
          <div class="flex justify-center w-full py-32 sm:py-48 lg:py-56">

            <div class="text-center">
              <div class="lg:text-9xl font-edmund text-white sm:text-6xl">Menù</div>
              <p class="mt-6 text-2xl leading-8 text-white">Questo è il nostro menù online. Ogni piatto è un capolavoro.
                Scopri le creazioni uniche che abbiamo preparato per te.</p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <a href="https://booking-widget.quandoo.com/iframe.html?agentId=2&amp;merchantId=35091&amp;origin=https%3A%2F%2Fadmin.quandoo.com&amp;path=https%3A%2F%2Fbooking-widget.quandoo.com%2F"
                  jslog="// LINT.IfChange(PostCTAType)56036; track:impression,click" data-enable-ga="true"
                  class="rounded-full bg-gradient-to-r from-[#3A261E] via-[#734E3B] to-[#D8B58C] px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Prenota
                  un posto ora!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-4xl font-bold tracking-tight text-center text-white py-6">Cosa vuoi mangiare oggi?</h2>
        <h2 class="text-lg font-bold tracking-tight text-center text-white pb-20">Scorri liberamente oppure scegli per
          categoria</h2>

        <div v-if="loading" class="flex justify-center items-center h-screen">
          <p class="text-2xl text-gray-600">Caricamento...</p>
        </div>

        <div v-else-if="error" class="flex justify-center items-center h-screen">
          <p class="text-2xl text-red-500">Ops! Non ci sono piatti!</p>
        </div>

        <div v-else>

          <h1 class="text-4xl font-bold tracking-tight text-center text-white py-6">Antipasti</h1>
          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

            <div v-for="dish in dishes" :key="dish.id" class="group relative">
              <div v-if="dish.category.name == 'Antipasti'">

                <div
                  class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img :src="dish.image" :alt="dish.name"
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-100">{{ dish.name }}</h3>
                    <p class="mt-1 text-sm text-gray-300">{{ dish.ingredients }}</p>
                  </div>
                  <p class="text-sm font-medium text-white">{{ dish.price }} €</p>
                </div>
              </div>
            </div>
          </div>

          <h1 class="text-4xl font-bold tracking-tight text-center text-white py-6">Primi</h1>
          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div v-for="dish in dishes" :key="dish.id" class="group relative">
              <div v-if="dish.category.name == 'Primi'">

                <div
                  class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img :src="dish.image" :alt="dish.name"
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-100">{{ dish.name }}</h3>
                    <p class="mt-1 text-sm text-gray-300">{{ dish.ingredients }}</p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">{{ dish.price }} €</p>
                </div>
              </div>
            </div>
          </div>

          <h1 class="text-4xl font-bold tracking-tight text-center text-white py-6">Secondi</h1>
          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div v-for="dish in dishes" :key="dish.id" class="group relative">
              <div v-if="dish.category.name == 'Secondi'">

                <div
                  class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img :src="dish.image" :alt="dish.name"
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-100">{{ dish.name }}</h3>
                    <p class="mt-1 text-sm text-gray-300">{{ dish.ingredients }}</p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">{{ dish.price }} €</p>
                </div>
              </div>
            </div>
          </div>

          <h1 class="text-4xl font-bold tracking-tight text-center text-white py-6">Dolci</h1>
          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div v-for="dish in dishes" :key="dish.id" class="group relative">
              <div v-if="dish.category.name == 'Dolci'">

                <div
                  class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img :src="dish.image" :alt="dish.name"
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-100">{{ dish.name }}</h3>
                    <p class="mt-1 text-sm text-gray-300">{{ dish.ingredients }}</p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">{{ dish.price }} €</p>
                </div>
              </div>
            </div>
          </div>

          <h1 class="text-4xl font-bold tracking-tight text-center text-white py-6">Bevande</h1>
          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div v-for="dish in dishes" :key="dish.id" class="group relative">
              <div v-if="dish.category.name == 'Bevande'">

                <div
                  class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img :src="dish.image" :alt="dish.name"
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-100">{{ dish.name }}</h3>
                    <p class="mt-1 text-sm text-gray-300">{{ dish.ingredients }}</p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">{{ dish.price }} €</p>
                </div>
              </div>
            </div>
          </div>

          <h1 class="text-4xl font-bold tracking-tight text-center text-white py-6">Vini bianchi</h1>
          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div v-for="dish in dishes" :key="dish.id" class="group relative">
              <div v-if="dish.category.name == 'Vini bianchi'">
                <div
                  class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img :src="dish.image" :alt="dish.name"
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-100">{{ dish.name }}</h3>
                    <p class="mt-1 text-sm text-gray-300">{{ dish.ingredients }}</p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">{{ dish.price }} €</p>
                </div>
              </div>
            </div>
          </div>

          <h1 class="text-4xl font-bold tracking-tight text-center text-white py-6">Vini rossi</h1>
          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div v-for="dish in dishes" :key="dish.id" class="group relative">
              <div v-if="dish.category.name == 'Vini rossi'">

                <div
                  class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img :src="dish.image" :alt="dish.name"
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-100">{{ dish.name }}</h3>
                    <p class="mt-1 text-sm text-gray-300">{{ dish.ingredients }}</p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">{{ dish.price }} €</p>
                </div>
              </div>
            </div>
          </div>



          <h1 class="text-4xl font-bold tracking-tight text-center text-white py-6">Birre</h1>
          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

            <div v-for="dish in dishes" :key="dish.id" class="group relative">
              <div v-if="dish.category.name == 'Birre'">

                <div
                  class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img :src="dish.image" :alt="dish.name"
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-100">{{ dish.name }}</h3>
                    <p class="mt-1 text-sm text-gray-300">{{ dish.ingredients }}</p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">{{ dish.price }} €</p>
                </div>
              </div>
            </div>
          </div>



          <h1 class="text-4xl font-bold tracking-tight text-center text-white py-6">Drink</h1>
          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

            <div v-for="dish in dishes" :key="dish.id" class="group relative">
              <div v-if="dish.category.name == 'Drink'">

                <div
                  class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img :src="dish.image" :alt="dish.name"
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-100">{{ dish.name }}</h3>
                    <p class="mt-1 text-sm text-gray-300">{{ dish.ingredients }}</p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">{{ dish.price }} €</p>
                </div>
              </div>
            </div>
          </div>


          <h1 class="text-4xl font-bold tracking-tight text-center text-white py-6">Caffetteria</h1>
          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

            <div v-for="dish in dishes" :key="dish.id" class="group relative">
              <div v-if="dish.category.name == 'Caffetteria'">

                <div
                  class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img :src="dish.image" :alt="dish.name"
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-100">{{ dish.name }}</h3>
                    <p class="mt-1 text-sm text-gray-300">{{ dish.ingredients }}</p>
                  </div>
                  <p class="text-sm font-medium text-gray-900">{{ dish.price }} €</p>
                </div>
              </div>
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
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'MenuPage',
  components: {
    AppHeader,
    AppFooter,
  },
  name: 'Menu',
  setup() {
    const dishes = ref([]);
    console.log(dishes);
    const loading = ref(true);
    const error = ref(false);


    const fetchDishes = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/dishes');
        dishes.value = response.data.dishes;
      } catch (err) {
        error.value = true;
      } finally {
        loading.value = false;
      }
    };

    onMounted(fetchDishes);

    return {
      dishes,
      loading,
      error,
    };
  },

};
</script>