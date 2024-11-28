<script setup>
defineProps({
  inverted: {
    type: Boolean
  },
  content: {
    type: Object,
    default: () => ({
      title: 'Texto de ejemplo',
      paragraphs: [],
      list: [],
      button: {
        label: '',
        outside: false,
        url: 'https://volta.net'
      }
    })
  }
})
</script>
<template>
  <section>
    <div class="p-8 mx-auto lg:py-16 lg:px-6">
      <div class="sm:text-lg"
        :class="inverted ? 'dark:text-gray-600 text-gray-300' : 'text-gray-600 dark:text-gray-300'">
        <!-- Titulo -->
        <h2 class="mb-5 text-3xl font-bold sm:text-[40px]/[48px]">
          {{ content.title }}
        </h2>
        <div class="mx-4">
          <!-- Parrafos -->
          <p v-if="content.paragraphs != []" v-for="paragraph in content.paragraphs"
            class="mb-4 text-base text-body-color dark:text-dark-6">
            {{ paragraph }}
          </p>
          <!-- Listado -->
          <ol v-if="content.list != []" class="space-y-5 pl-1 pt-1">
            <li v-for="(item, index) in content.list" :key="index"
              class="flex text-base text-body-color dark:text-dark-6">
              <span
                class="relative z-10 mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded text-base text-white">
                <span class="bg-primary absolute top-0 left-0 z-[-1] h-full w-full -rotate-45 rounded"></span>
                {{ index + 1 }}
              </span>
              {{ item }}
            </li>
          </ol>
          <!-- Boton para redirigir -->
          <UButton v-if="content.button?.label.length > 0" :target="content.button?.outside ? '_blank' : ''"
            :to="content.button?.url" :label="content.button?.label" />
        </div>
      </div>
    </div>
  </section>
</template>