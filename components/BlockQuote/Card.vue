<script setup>
defineProps({
  content: {
    type: Array,
    default: () => []
  }
})
</script>
<template>
  <div class="grid gap-8 grid-cols-1 lg:grid-cols-2 [&>*:nth-child(odd):last-child]:col-span-2">
    <div v-for="item in content"
      class="flex flex-col bg-clip-border bg-white dark:bg-gray-900 text-gray-700 dark:text-white rounded-2xl p-6">
      <div class="bg-clip-border !mt-4 mx-4 rounded-xl overflow-hidden bg-transparent shadow-none">
        <p class="block antialiased font-sans leading-relaxed lg:mb-20 mb-4 text-2xl font-bold">
          {{ item.value }}
        </p>
      </div>
      <div class="p-6 px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
        <div>
          <h6 class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed">
            {{ item.author }}
          </h6>
          <p class="block antialiased font-sans text-base leading-relaxed text-inherit font-normal">
            {{ item.position }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>