
<template>
  <AppHeader />
  <div class="isolate px-6 py-24 sm:py-32 lg:px-8">
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      aria-hidden="true">
      <div
        class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3A261E] to-[#D8B58C] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>

    <div class="mx-auto mt-16 max-w-xl sm:mt-20">
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Auto Candidatura</h2>
      <p class="mt-2 text-lg leading-8 text-gray-400">Compila il form e applica per una posizione lavorativa. Valuteremo
        il tuo cv e ti ricontatteremo.</p>
    </div>
    <form @submit.prevent="submitForm" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="first-name" class="block text-sm font-semibold leading-6 text-white">Nome</label>
          <div class="mt-2.5">
            <input type="text" name="first-name" id="first-name" autocomplete="given-name"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label for="last-name" class="block text-sm font-semibold leading-6 text-white">Cognome</label>
          <div class="mt-2.5">
            <input type="text" name="last-name" id="last-name" autocomplete="family-name"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="cv" class="block text-sm font-semibold leading-6 text-white">Curriculum</label>
          <div class="mt-2.5">
            <input type="file" name="cv" id="cv" autocomplete="organization"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm font-semibold leading-6 text-white">Email</label>
          <div class="mt-2.5">
            <input type="email" name="email" id="email" autocomplete="email"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="phone-number" class="block text-sm font-semibold leading-6 text-white">Numero Telefonico</label>
          <div class="mt-2.5">
            <input type="tel" name="phone-number" id="phone-number" autocomplete="tel"
              class="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-white">Lettera di presentazione</label>
          <div class="mt-2.5">
            <textarea name="message" id="message" rows="4"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
        </div>
        <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-2">
          <div class="flex h-6 items-center">
            <Switch v-model="agreed"
              :class="[agreed ? 'bg-[#734E3B]' : 'bg-gray-200', 'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#734E3B]']">
              <span class="sr-only">Agree to policies</span>
              <span aria-hidden="true"
                :class="[agreed ? 'translate-x-3.5' : 'translate-x-0', 'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out']" />
            </Switch>
          </div>
          <SwitchLabel class="text-sm leading-6 text-gray-600">
            Selezionando questo, accetti la nostra
            {{ ' ' }}
            <a href="#" class="font-semibold text-[#734E3B]">privacy&nbsp;policy</a>.
          </SwitchLabel>
        </SwitchGroup>
      </div>
      <div class="mt-10">
        <button type="submit"
          class="block w-full text-lg rounded-full bg-gradient-to-r from-[#3A261E] via-[#734E3B] to-[#D8B58C] px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Candidati!</button>
      </div>
    </form>
  </div>
  <AppFooter />
</template>



<script setup>

import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const agreed = ref(false)

const submitForm = async () => {
  if (!agreed.value) {
    alert("Per favore accetta la nostra privacy policy.");
    return;
  }

  const formData = new FormData();
  formData.append('first-name', document.getElementById('first-name').value);
  formData.append('last-name', document.getElementById('last-name').value);
  formData.append('cv', document.getElementById('cv').files[0]);
  formData.append('email', document.getElementById('email').value);
  formData.append('phone-number', document.getElementById('phone-number').value);
  formData.append('message', document.getElementById('message').value);

  // Retrieving CSRF token from meta tag
  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;


  try {
    const response = await axios.post('http://localhost:8000/api/contact-message', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-CSRF-TOKEN': csrfToken
      }
    });
    if (response.status === 200) {
      console.log(response.data);
      alert('Il tuo messaggio è stato inviato con successo!');
    } else {
      alert('Si è verificato un errore durante l\'invio del tuo messaggio. Riprova più tardi.');
    }
  } catch (error) {
    console.error(error);
    alert('Si è verificato un errore durante l\'invio del tuo messaggio. Assicurati che tutti i campi siano compilati correttamente e riprova.');
  }
}
</script>