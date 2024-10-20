<script setup>
defineProps({
  inverted: {
    type: Boolean
  },
  content: {
    type: Array,
    default: () => []
  }
})
</script>
<template>
  <div class="mx-4 grid grid-cols-1 md:grid-cols-3 gap-10">
    <div v-for="item in content" class="w-full">
      <div
        class="h-full overflow-hidden duration-300 bg-transparent rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3">
        <!-- Imagen -->
        <img :src="item.img" alt="image" class="w-full" style="height: 250px;">
        <div
          class="p-8 rounded-b-lg bg-gray-100 dark:bg-gray-700 text-center sm:p-9 md:p-7 xl:p-9 flex flex-col items-center justify-center"
          style="height: calc(50% - 2.5rem);">
          <!-- Titulo -->
          <h3 class="break-words mb-4 text-xl font-semibold text-body-color dark:text-dark-6">
            {{ item.title }}
          </h3>
          <!-- Detalle -->
          <p class="text-base leading-relaxed text-body-color dark:text-dark-6">
            {{ item.details }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>