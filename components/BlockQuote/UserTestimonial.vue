<script setup>
defineProps({
  content: {
    type: Object,
    default: () => ({
      title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam aspernatur necessitatibus dolore explicabo nulla repellat, accusantium mollitia, excepturi distinctio quo tempore! Hic eos omnis voluptates ducimus, nam corporis. Eaque, asperiores?',
      author: 'Author',
      position: 'Position'
    })
  }
})
</script>
<template>
  <figure class="p-8 mx-auto lg:py-16 lg:px-6 max-w-screen-md text-center">
    <UIcon name="i-material-symbols-format-quote" class="text-gray-700 dark:text-white text-[50px]" />
    <blockquote>
      <!-- Cita -->
      <p class="text-2xl italic font-medium text-gray-900 dark:text-white">
        "{{ content.quote }}"
      </p>
    </blockquote>
    <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
      <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500">
        <cite class="pe-3 font-medium text-gray-900 dark:text-white">{{ content.author }}</cite>
        <cite class="ps-3 text-sm text-gray-500 dark:text-gray-400">{{ content.position }}</cite>
      </div>
    </figcaption>
  </figure>
</template>