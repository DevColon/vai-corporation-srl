<script setup>
const navLinkItems = ref([
  { text: 'Inicio', href: 'javascript:void(0)' },
  { text: 'Nosotros', href: 'javascript:void(0)' },
  { text: 'Servicios', href: 'javascript:void(0)' },
  { text: 'Galeria', href: 'javascript:void(0)' },
  { text: 'Contacto', href: 'javascript:void(0)' }
])
</script>
<template>
  <footer class="bg-white dark:bg-gray-900 block">
    <div class="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
      <div class="sm:flex-row flex justify-between flex-col">
        <h2 class="font-bold text-3xl md:text-5xl w-full max-w-xl">VAI CORPORATION SRL.</h2>
        <address class="mt-8 md:mt-0">
          <NuxtLink to="https://maps.app.goo.gl/32NvbkdmjSPBWfdWA"
            class="mb-4 text-gray-500 dark:text-white flex items-center justify-start gap-2">
            <UIcon name="i-material-symbols-location-on" class="text-3xl" />
            <p class="text-sm sm:text-base">Calle Heriberto Núñez, Santo Domingo</p>
          </NuxtLink>
          <div class="mb-4 text-gray-500 dark:text-white flex items-center justify-start gap-2">
            <UIcon name="i-material-symbols-alternate-email" class="text-3xl" />
            <p class="text-sm sm:text-base">correo@gmail.com</p>
          </div>
          <div class="mb-4 text-gray-500 dark:text-white flex items-center justify-start gap-2">
            <UIcon name="i-mdi-phone" class="text-3xl" />
            <p class="text-sm sm:text-base">+1 809 473 6000</p>
          </div>
          <div class="mb-4 text-gray-500 dark:text-white flex items-center justify-start gap-2">
            <UIcon name="i-mdi-phone" class="text-3xl" />
            <p class="text-sm sm:text-base">+1 809 507 4000</p>
          </div>
        </address>
      </div>
      <div class="my-8 w-full border-b border-black dark:border-white"></div>
      <div class="md:flex-row flex justify-between sm:items-center sm:flex-col items-start flex-col-reverse">
        <div class="font-semibold mb-4 sm:mb-0 py-1 text-center sm:text-center">
          <NuxtLink v-for="link in navLinkItems" :to="link.href"
            class="inline-block font-normal text-gray-500 dark:text-white transition hover:text-blue-600 sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6">
            {{ link.text }}
          </NuxtLink>
        </div>
        <p class="text-gray-500 dark:text-white text-sm sm:text-base">
          © Copyright {{ new Date().getFullYear() }}. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>