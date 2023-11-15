<template>
  <header class="bg-black sticky top-0 z-50 glass-navbar backdrop-blur-sm bg-opacity-60">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-12 w-auto rounded-full" src="public/img/ai_murazzi.png" alt="" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">

        <!-- routes -->
        <RouterLink class="text-md font-bold leading-6 text-white" :to="{ name: 'home' }">
          Home
        </RouterLink>
        <RouterLink class="text-md font-bold leading-6 text-white" :to="{ name: 'menu' }">
          Menù
        </RouterLink>
        <RouterLink class="text-md font-bold leading-6 text-white" :to="{ name: 'restaurant' }">
          Il Ristorante
        </RouterLink>

        <a target="_blank" id="primary_cta" class="text-md font-bold leading-6 text-white" tabindex="0"
          data-tracking-element-type="12" data-field="primary-cta"
          href="https://booking-widget.quandoo.com/iframe.html?agentId=2&amp;merchantId=35091&amp;origin=https%3A%2F%2Fadmin.quandoo.com&amp;path=https%3A%2F%2Fbooking-widget.quandoo.com%2F"
          jslog="// LINT.IfChange(PostCTAType)56036; track:impression,click" data-enable-ga="true"
          data-ga-prefix="primary"><span id="primary_cta_6">Prenota un tavolo</span></a>


        <RouterLink class="text-md font-bold leading-6 text-white" :to="{ name: 'about-us' }">
          Su di noi
        </RouterLink>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="http://127.0.0.1:8000/" class="text-sm font-semibold leading-6 text-gray-500">Log in <span
            aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black glass-navbar backdrop-blur-sm bg-opacity-60 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-12 w-auto rounded-full" src="public/img/ai_murazzi.png" alt="" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-20 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-10 grid grid-cols-1 gap-y-7">
              <RouterLink class="text-2xl font-bold leading-6 text-white" :to="{ name: 'home' }">
                Home
              </RouterLink>
              <RouterLink class="text-2xl font-bold leading-6 text-white" :to="{ name: 'menu' }">
                Menù
              </RouterLink>
              <RouterLink class="text-2xl font-bold leading-6 text-white" :to="{ name: 'restaurant' }">
                Il Ristorante
              </RouterLink>

              <a target="_blank" id="primary_cta" class="text-2xl font-bold leading-6 text-white" tabindex="0"
                data-tracking-element-type="12" data-field="primary-cta"
                href="https://booking-widget.quandoo.com/iframe.html?agentId=2&amp;merchantId=35091&amp;origin=https%3A%2F%2Fadmin.quandoo.com&amp;path=https%3A%2F%2Fbooking-widget.quandoo.com%2F"
                jslog="// LINT.IfChange(PostCTAType)56036; track:impression,click" data-enable-ga="true"
                data-ga-prefix="primary"><span id="primary_cta_6">Prenota un tavolo</span></a>


              <RouterLink class="text-2xl font-bold leading-6 text-white" :to="{ name: 'about-us' }">
                Su di noi
              </RouterLink>

            </div>
            <div class="py-6">
              <a href="http://127.0.0.1:8000/"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-500 hover:bg-gray-50">Log
                in</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'


const mobileMenuOpen = ref(false)
</script>