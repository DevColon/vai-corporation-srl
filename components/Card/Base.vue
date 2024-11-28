<script setup>
defineProps({
  inverted: {
    type: Boolean
  },
  content: {
    type: Object,
    default: () => ({})
  }
})
</script>
<template>
  <section class="p-8 mx-auto lg:py-16 lg:px-6">
    <!-- Titulo de la seccion -->
    <h2 class="mb-10 text-center text-3xl font-bold sm:text-[40px]/[48px]">
      {{ content.title }}
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div v-for="cont in content.content" class="w-full">
        <div
          class="h-full overflow-hidden duration-300 bg-white rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3">
          <!-- Imagen -->
          <img :src="cont.img" alt="image" class="w-full" style="height: 250px;">
          <div
            class="p-8 bg-white dark:bg-gray-900 text-center sm:p-9 md:p-7 xl:p-9 flex flex-col items-center justify-center"
            style="height: calc(50% - 2.5rem);">
            <!-- Titulo -->
            <h3 class="break-words mb-4 text-xl font-semibold text-body-color dark:text-dark-6">
              {{ cont.title }}
            </h3>
            <!-- Detalle -->
            <p class="text-base leading-relaxed text-body-color dark:text-dark-6">
              {{ cont.details }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>