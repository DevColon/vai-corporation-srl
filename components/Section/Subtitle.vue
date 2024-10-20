<script setup>
defineProps({
  content: {
    type: Object,
    default: () => ({
      title: 'Misión, visión y valores',
      segments: [
        {
          title: 'Misión',
          paragraphs: ['Ser la organización líder en comercialización de insumos de calidad para empresas públicas y privadas para satisfacer las necesidades de los dominicanos.']
        },
        {
          title: 'Visión',
          paragraphs: ['Elevar el crecimiento de las empresas asociadas, para que logren los objetivos propuestos y seguir avanzando en el mercado internacional.']
        },
        {
          title: 'Valores',
          list: [
            'Innovación',
            'Integridad',
            'Responsabilidad',
            'Trabajo en equipo',
            'Creatividad'
          ]
        }
      ]
    })
  }
})
</script>
<template>
  <section>
    <div class="p-8 mx-auto lg:py-16 lg:px-6">
      <div class="sm:text-lg text-gray-600 dark:text-white">
        <!-- Titulo -->
        <h2 class="mb-5 text-3xl font-bold sm:text-[40px]/[48px]">
          {{ content.title }}
        </h2>
        <!-- Cargar varios subtitulos -->
        <div v-for="segment in content.segments" class="mx-4">
          <!-- Subtitulo -->
          <h2 class="mb-3 text-2xl font-bold">
            {{ segment.title }}
          </h2>
          <!-- Parrafos -->
          <p v-if="segment.paragraphs != []" v-for="paragraph in segment.paragraphs"
            class="mb-4 text-base text-body-color dark:text-dark-6">
            {{ paragraph }}
          </p>
          <!-- Listado -->
          <ol v-if="segment.list != []" class="space-y-5 pl-1 pt-1">
            <li v-for="(item, index) in segment.list" :key="index"
              class="flex text-base text-body-color dark:text-dark-6">
              <span
                class="relative z-10 mr-2.5 flex h-[26px] w-full max-w-[26px] items-center justify-center rounded text-base text-white">
                <span class="bg-primary absolute top-0 left-0 z-[-1] h-full w-full -rotate-45 rounded"></span>
                {{ index + 1 }}
              </span>
              {{ item }}
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>