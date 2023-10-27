<template>
  <div class="bg-black text-white py-8 container mx-auto grid grid-cols-1 justify-center gap-y-12">

    <!-- Navigation links -->
    <div class="flex flex-wrap tracking-tight lg:space-x-8 justify-center gap-5">
      <RouterLink class=" hover:text-gray-400" :to="{ name: 'about-us' }">
        Su di noi
      </RouterLink>
      <RouterLink class=" hover:text-gray-400" :to="{ name: 'work' }">
        Lavoro
      </RouterLink>
      <RouterLink class=" hover:text-gray-400" :to="{ name: 'restaurant' }">
        Il Ristorante
      </RouterLink>
    </div>

    <!-- Social icons -->
    <div class="flex space-x-12 mt-4 md:mt-0 justify-center">
      <a href="https://www.facebook.com/RistoranteAiMurazzi/?locale=it_IT" class="text-xl hover:text-gray-400"><i
          class="fab fa-facebook-f"></i></a>
      <a href="#" class="text-xl hover:text-gray-400"><i class="fab fa-instagram"></i></a>
      <a href="#" class="text-xl hover:text-gray-400"><i class="fab fa-twitter"></i></a>
      <a href="#" class="text-xl hover:text-gray-400"><i class="fab fa-youtube"></i></a>
    </div>
    <div class="text-center text-gray-500">
      <p>&copy; 2023 Ai Murazzi, All rights reserved.</p>
    </div>
  </div>
</template>