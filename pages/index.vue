<script setup>
// Quienes somos?
const whoWeAre = ref({
  title: '¿Quiénes somos?',
  paragraphs: [
    'Somos una empresa experta en construcción, edificación de estructura, servicio de ferretería y plomería en general.',
    'Instalación y mantenimiento de aires acondicionados, servicios de desinfección, fumigación y control de plagas, compra y venta de materiales eléctricos y baterías, luminarias, importación, exportación, ventas y distribución de ropas, calzado y todo lo relacionado a tejidos textiles.',
    'Gestión de mantenimiento y suministros de sistemas de incendio y protección, instalaciones en general.',
    'Grupo Vaicorporation fue fundada  26 de mayo del año 2020 el bajo el concepto de ser el consorcio de empresas proveedoras al estado dominicano y a las empresas privadas en general.'
  ],
  button: {
    label: 'Conozca más sobre nosotros',
    outside: true,
    url: 'https://volta.net'
  }
})

// Listado de servicios
const services = ref({
  title: 'Nuestros Servicios',
  description: '¿Tienes un proyecto en mente? Nosotros lo hacemos realidad. Ofrecemos una amplia gama de servicios de construcción, desde la cimentación hasta los acabados finales.',
  content: [
    {
      title: 'Construccion',
      img: '/img/construccion.jpg',
    },
    {
      title: 'Edificación de estructura',
      img: '/img/edificacion.jpg',
    },
    {
      title: 'Servicios de ferretería y plomería',
      img: '/img/ferreteria.jpg',
    },
    {
      title: 'Servicio de desinfección, fumigación y control de plagas',
      img: '/img/fumigacion.jpg',
    },
    {
      title: 'Instalación y mantenimiento de aires acondicionados',
      img: '/img/aire_acondicionado.jpg',
    },
    {
      title: 'Compra y venta de materiales eléctricos y baterías',
      img: '/img/electricidad.jpg',
    },
    {
      title: 'Luminarias',
      img: '/img/luminarias.jpg',
    }
  ]
})

// Invertir colores de secciones
const testimonial = ref({
  title: 'Lo que dicen nuestros clientes',
  description: 'Déjanos mostrarte por qué nuestros clientes nos eligen una y otra vez. Descubre cómo hemos superado sus expectativas en cada proyecto.',
  content: [
    {
      value: '"The team went above and beyond to ensure my issue was resolved quickly and efficiently. Truly outstanding!"',
      author: 'Jessica Devis',
      position: ' Full Stack Developer @Netflix'
    },
    {
      value: '"The team went above and beyond to ensure my issue was resolved quickly and efficiently. Truly outstanding!"',
      author: 'Jessica Devis',
      position: ' Full Stack Developer @Netflix'
    },
    {
      value: '"The team went above and beyond to ensure my issue was resolved quickly and efficiently. Truly outstanding!"',
      author: 'Jessica Devis',
      position: ' Full Stack Developer @Netflix'
    }
  ]
})

// Invertir colores de secciones
const gallery = ref({
  title: 'Nuestra Galería'
})

// Bloque de cita del author
const blockquote = ref({
  quote: 'Las Oportunidades Grandes Nacen De Haber Sabido Aprovechar Las Pequeñas',
  author: 'Bill Gates',
  position: 'Ex director ejecutivo de Microsoft'
})
</script>
<template>
  <!-- Seccion de enganche -->
  <div id="inicio" class="bg-gradient-to-t from-white to-gray-100 dark:from-gray-900">
    <UContainer>
      <div class="relative isolate px-6 pt-14 lg:px-8 flex items-center" style="min-height: calc(100vh - 4rem)">
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true">
          <div
            class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#078ef0] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
          </div>
        </div>
        <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div class="text-center">
            <h1 class="text-balance text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Construimos tus sueños, ladrillo a ladrillo
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
              Con años de experiencia en la industria de la construcción, nuestro equipo de expertos te brindará las
              mejores soluciones para tus necesidades. <br />
              ¡Confía en nosotros para hacer realidad tus ideas!
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <UButton label="Get started" color="white" />
              <UButton label="Learn more" />
            </div>
          </div>
        </div>
        <div
          class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-45rem)]"
          aria-hidden="true">
          <div
            class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#078ef0] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
          </div>
        </div>
      </div>
    </UContainer>
  </div>

  <section id="nosotros" class="bg-white dark:bg-gray-900">
    <div class="max-w-screen-xl mx-auto p-8 lg:py-16 lg:px-6">
      <div class="flex flex-col gap-14 lg:gap-20">
        <img src=/img/gallery/item91.jpg alt="" class="w-full rounded-2xl" />
        <div class="flex flex-col gap-8 lg:gap-14">
          <div class="flex flex-col md:flex-row gap-5">
            <h2 class="text-3xl md:text-5xl font-bold flex-1 text-gray-500 dark:text-white dark:text-wihte">
              ¿Quiénes somos?
            </h2>
            <div class="flex-1 flex flex-col gap-y-2">
              <p>
                Somos una empresa experta en construcción, edificación de estructura, servicio de ferretería y plomería
                en general.
              </p>
              <p>
                Instalación y mantenimiento de aires acondicionados, servicios de desinfección, fumigación y control de
                plagas, compra y venta de materiales eléctricos y baterías, luminarias, importación, exportación, ventas
                y distribución de ropas, calzado y todo lo relacionado a tejidos textiles.
              </p>
              <p>
                Gestión de mantenimiento y suministros de sistemas de incendio y protección, instalaciones en general.
              </p>
              <p>
                Grupo Vaicorporation fue fundada 26 de mayo del año 2020 el bajo el concepto de ser el consorcio de
                empresas proveedoras al estado dominicano y a las empresas privadas en general.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Mision, vision y valores -->
  <section>
    <div class="max-w-screen-xl mx-auto">
      <SectionSubtitle />
    </div>
  </section>

  <!-- Servicios -->
  <section id="servicios" class="bg-white dark:bg-gray-900">
    <div class="max-w-screen-xl mx-auto">
      <SectionBase :content="services">
        <template #content>
          <CardBase :content="services.content" />
        </template>
      </SectionBase>
    </div>
  </section>

  <!-- TODO: ver que el cliente quiere -->
  <!-- Gallery -->
  <section id="galeria">
    <div class="max-w-screen-xl mx-auto">
      <SectionBase :content="gallery">
        <template #content>
          <GalleryMasonry />
        </template>
      </SectionBase>
    </div>
  </section>

  <!-- <section id="testimonios">
    <div class="max-w-screen-xl mx-auto">
      <SectionBase :content="testimonial">
        <template #content>
          <BlockQuoteCard :content="testimonial.content" />
        </template>
      </SectionBase>
    </div>
  </section> -->

  <!-- Bloque de cita -->
  <section>
    <div class=" max-w-screen-xl mx-auto">
      <BlockQuoteUserTestimonial :content="blockquote" />
    </div>
  </section>

  <!-- TODO: hacer que el formulario envie -->
  <!-- Formulario de contacto -->
  <!-- <div class="bg-white dark:bg-gray-900">
    <div class="max-w-screen-xl mx-auto">
      <FormContact />
    </div>
  </div> -->
</template>