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
  title: 'Servicios',
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
const inverted = ref(true)

// Bloque de cita del author
const blockquote = ref({
  quote: 'Las Oportunidades Grandes Nacen De Haber Sabido Aprovechar Las Pequeñas',
  author: 'Bill Gates',
  position: 'Ex director ejecutivo de Microsoft'
})
</script>
<template>
  <!-- Seccion de enganche -->
  <UContainer>
    <section class="overflow-hidden flex items-center" style="min-height: calc(100vh - 4rem)">
      <div class="flex flex-wrap items-center justify-between -mx-4">
        <div class="w-full px-4 lg:w-6/12">
          <div class="flex items-center -mx-3 sm:-mx-4">
            <div class="w-full px-3 sm:px-4 xl:w-1/2">
              <div class="py-3 sm:py-4">
                <img src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-1.jpg" alt=""
                  class="w-full rounded-2xl">
              </div>
              <div class="py-3 sm:py-4">
                <img src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-2.jpg" alt=""
                  class="w-full rounded-2xl">
              </div>
            </div>
            <div class="w-full px-3 sm:px-4 xl:w-1/2">
              <div class="relative z-10 my-4">
                <img src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-3.jpg" alt=""
                  class="w-full rounded-2xl">
                <span class="absolute -right-7 -bottom-7 z-[-1]">
                  <svg width="134" height="106" viewBox="0 0 134 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="1.66667" cy="104" r="1.66667" transform="rotate(-90 1.66667 104)" fill="#3056D3">
                    </circle>
                    <circle cx="16.3333" cy="104" r="1.66667" transform="rotate(-90 16.3333 104)" fill="#3056D3">
                    </circle>
                    <circle cx="31" cy="104" r="1.66667" transform="rotate(-90 31 104)" fill="#3056D3"></circle>
                    <circle cx="45.6667" cy="104" r="1.66667" transform="rotate(-90 45.6667 104)" fill="#3056D3">
                    </circle>
                    <circle cx="60.3334" cy="104" r="1.66667" transform="rotate(-90 60.3334 104)" fill="#3056D3">
                    </circle>
                    <circle cx="88.6667" cy="104" r="1.66667" transform="rotate(-90 88.6667 104)" fill="#3056D3">
                    </circle>
                    <circle cx="117.667" cy="104" r="1.66667" transform="rotate(-90 117.667 104)" fill="#3056D3">
                    </circle>
                    <circle cx="74.6667" cy="104" r="1.66667" transform="rotate(-90 74.6667 104)" fill="#3056D3">
                    </circle>
                    <circle cx="103" cy="104" r="1.66667" transform="rotate(-90 103 104)" fill="#3056D3"></circle>
                    <circle cx="132" cy="104" r="1.66667" transform="rotate(-90 132 104)" fill="#3056D3"></circle>
                    <circle cx="1.66667" cy="89.3333" r="1.66667" transform="rotate(-90 1.66667 89.3333)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="16.3333" cy="89.3333" r="1.66667" transform="rotate(-90 16.3333 89.3333)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="31" cy="89.3333" r="1.66667" transform="rotate(-90 31 89.3333)" fill="#3056D3">
                    </circle>
                    <circle cx="45.6667" cy="89.3333" r="1.66667" transform="rotate(-90 45.6667 89.3333)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="60.3333" cy="89.3338" r="1.66667" transform="rotate(-90 60.3333 89.3338)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="88.6667" cy="89.3338" r="1.66667" transform="rotate(-90 88.6667 89.3338)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="117.667" cy="89.3338" r="1.66667" transform="rotate(-90 117.667 89.3338)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="74.6667" cy="89.3338" r="1.66667" transform="rotate(-90 74.6667 89.3338)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="103" cy="89.3338" r="1.66667" transform="rotate(-90 103 89.3338)" fill="#3056D3">
                    </circle>
                    <circle cx="132" cy="89.3338" r="1.66667" transform="rotate(-90 132 89.3338)" fill="#3056D3">
                    </circle>
                    <circle cx="1.66667" cy="74.6673" r="1.66667" transform="rotate(-90 1.66667 74.6673)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="1.66667" cy="31.0003" r="1.66667" transform="rotate(-90 1.66667 31.0003)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="16.3333" cy="74.6668" r="1.66667" transform="rotate(-90 16.3333 74.6668)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="16.3333" cy="31.0003" r="1.66667" transform="rotate(-90 16.3333 31.0003)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="31" cy="74.6668" r="1.66667" transform="rotate(-90 31 74.6668)" fill="#3056D3">
                    </circle>
                    <circle cx="31" cy="31.0003" r="1.66667" transform="rotate(-90 31 31.0003)" fill="#3056D3">
                    </circle>
                    <circle cx="45.6667" cy="74.6668" r="1.66667" transform="rotate(-90 45.6667 74.6668)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="45.6667" cy="31.0003" r="1.66667" transform="rotate(-90 45.6667 31.0003)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="60.3333" cy="74.6668" r="1.66667" transform="rotate(-90 60.3333 74.6668)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="60.3333" cy="30.9998" r="1.66667" transform="rotate(-90 60.3333 30.9998)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="88.6667" cy="74.6668" r="1.66667" transform="rotate(-90 88.6667 74.6668)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="88.6667" cy="30.9998" r="1.66667" transform="rotate(-90 88.6667 30.9998)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="117.667" cy="74.6668" r="1.66667" transform="rotate(-90 117.667 74.6668)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="117.667" cy="30.9998" r="1.66667" transform="rotate(-90 117.667 30.9998)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="74.6667" cy="74.6668" r="1.66667" transform="rotate(-90 74.6667 74.6668)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="74.6667" cy="30.9998" r="1.66667" transform="rotate(-90 74.6667 30.9998)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="103" cy="74.6668" r="1.66667" transform="rotate(-90 103 74.6668)" fill="#3056D3">
                    </circle>
                    <circle cx="103" cy="30.9998" r="1.66667" transform="rotate(-90 103 30.9998)" fill="#3056D3">
                    </circle>
                    <circle cx="132" cy="74.6668" r="1.66667" transform="rotate(-90 132 74.6668)" fill="#3056D3">
                    </circle>
                    <circle cx="132" cy="30.9998" r="1.66667" transform="rotate(-90 132 30.9998)" fill="#3056D3">
                    </circle>
                    <circle cx="1.66667" cy="60.0003" r="1.66667" transform="rotate(-90 1.66667 60.0003)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="1.66667" cy="16.3333" r="1.66667" transform="rotate(-90 1.66667 16.3333)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="16.3333" cy="60.0003" r="1.66667" transform="rotate(-90 16.3333 60.0003)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="16.3333" cy="16.3333" r="1.66667" transform="rotate(-90 16.3333 16.3333)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="31" cy="60.0003" r="1.66667" transform="rotate(-90 31 60.0003)" fill="#3056D3">
                    </circle>
                    <circle cx="31" cy="16.3333" r="1.66667" transform="rotate(-90 31 16.3333)" fill="#3056D3">
                    </circle>
                    <circle cx="45.6667" cy="60.0003" r="1.66667" transform="rotate(-90 45.6667 60.0003)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="45.6667" cy="16.3333" r="1.66667" transform="rotate(-90 45.6667 16.3333)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="60.3333" cy="60.0003" r="1.66667" transform="rotate(-90 60.3333 60.0003)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="60.3333" cy="16.3333" r="1.66667" transform="rotate(-90 60.3333 16.3333)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="88.6667" cy="60.0003" r="1.66667" transform="rotate(-90 88.6667 60.0003)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="88.6667" cy="16.3333" r="1.66667" transform="rotate(-90 88.6667 16.3333)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="117.667" cy="60.0003" r="1.66667" transform="rotate(-90 117.667 60.0003)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="117.667" cy="16.3333" r="1.66667" transform="rotate(-90 117.667 16.3333)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="74.6667" cy="60.0003" r="1.66667" transform="rotate(-90 74.6667 60.0003)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="74.6667" cy="16.3333" r="1.66667" transform="rotate(-90 74.6667 16.3333)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="103" cy="60.0003" r="1.66667" transform="rotate(-90 103 60.0003)" fill="#3056D3">
                    </circle>
                    <circle cx="103" cy="16.3333" r="1.66667" transform="rotate(-90 103 16.3333)" fill="#3056D3">
                    </circle>
                    <circle cx="132" cy="60.0003" r="1.66667" transform="rotate(-90 132 60.0003)" fill="#3056D3">
                    </circle>
                    <circle cx="132" cy="16.3333" r="1.66667" transform="rotate(-90 132 16.3333)" fill="#3056D3">
                    </circle>
                    <circle cx="1.66667" cy="45.3333" r="1.66667" transform="rotate(-90 1.66667 45.3333)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="1.66667" cy="1.66683" r="1.66667" transform="rotate(-90 1.66667 1.66683)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="16.3333" cy="45.3333" r="1.66667" transform="rotate(-90 16.3333 45.3333)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="16.3333" cy="1.66683" r="1.66667" transform="rotate(-90 16.3333 1.66683)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="31" cy="45.3333" r="1.66667" transform="rotate(-90 31 45.3333)" fill="#3056D3">
                    </circle>
                    <circle cx="31" cy="1.66683" r="1.66667" transform="rotate(-90 31 1.66683)" fill="#3056D3">
                    </circle>
                    <circle cx="45.6667" cy="45.3333" r="1.66667" transform="rotate(-90 45.6667 45.3333)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="45.6667" cy="1.66683" r="1.66667" transform="rotate(-90 45.6667 1.66683)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="60.3333" cy="45.3338" r="1.66667" transform="rotate(-90 60.3333 45.3338)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="60.3333" cy="1.66683" r="1.66667" transform="rotate(-90 60.3333 1.66683)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="88.6667" cy="45.3338" r="1.66667" transform="rotate(-90 88.6667 45.3338)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="88.6667" cy="1.66683" r="1.66667" transform="rotate(-90 88.6667 1.66683)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="117.667" cy="45.3338" r="1.66667" transform="rotate(-90 117.667 45.3338)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="117.667" cy="1.66683" r="1.66667" transform="rotate(-90 117.667 1.66683)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="74.6667" cy="45.3338" r="1.66667" transform="rotate(-90 74.6667 45.3338)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="74.6667" cy="1.66683" r="1.66667" transform="rotate(-90 74.6667 1.66683)"
                      fill="#3056D3">
                    </circle>
                    <circle cx="103" cy="45.3338" r="1.66667" transform="rotate(-90 103 45.3338)" fill="#3056D3">
                    </circle>
                    <circle cx="103" cy="1.66683" r="1.66667" transform="rotate(-90 103 1.66683)" fill="#3056D3">
                    </circle>
                    <circle cx="132" cy="45.3338" r="1.66667" transform="rotate(-90 132 45.3338)" fill="#3056D3">
                    </circle>
                    <circle cx="132" cy="1.66683" r="1.66667" transform="rotate(-90 132 1.66683)" fill="#3056D3">
                    </circle>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
          <div class="text-gray-600 dark:text-gray-300 mt-10 lg:mt-0">
            <span class="block mb-4 text-lg font-semibold text-primary">
              ¿Por qué elegirnos?
            </span>
            <h2 class="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
              Construimos tus sueños, ladrillo a ladrillo
            </h2>
            <p class="mb-5 text-base text-body-color">
              Con años de experiencia en la industria de la construcción, nuestro equipo de expertos te brindará las
              mejores soluciones para tus necesidades.
            </p>
            <p class="mb-8 text-base text-body-color">
              Gestión de mantenimiento y suministros de sistemas de incendio y protección, instalaciones en general.
            </p>
          </div>
        </div>
      </div>
    </section>
  </UContainer>
  <!-- Quienes somos? -->
  <div :class="inverted ? 'dark:bg-white bg-gray-900' : 'bg-white dark:bg-gray-900'">
    <div class="max-w-screen-xl mx-auto">
      <SectionBase :content="whoWeAre" :inverted="true" />
    </div>
  </div>
  <!-- Mision, vision y valores -->
  <div :class="!inverted ? 'dark:bg-white bg-gray-900' : 'bg-white dark:bg-gray-900'">
    <div class="max-w-screen-xl mx-auto">
      <SectionSubtitle :inverted="false" />
    </div>
  </div>
  <!-- Cards -->
  <div clas="">
    <div class="max-w-screen-xl mx-auto">
      <CardBase :content="services" />
    </div>
  </div>
  <!-- TODO: ver que el cliente quiere -->
  <!-- Gallery -->
  <!-- <div class="bg-white dark:bg-gray-900">
    <div class="max-w-screen-xl mx-auto">
      <GalleryMasonry />
    </div>
  </div> -->
  <!-- Bloque de cita -->
  <div>
    <div class=" max-w-screen-xl mx-auto">
      <BlockQuoteUserTestimonial :content="blockquote" />
    </div>
  </div>
  <!-- TODO: hacer que el formulario envie -->
  <!-- Formulario de contacto -->
  <!-- <div class="bg-white dark:bg-gray-900">
    <div class="max-w-screen-xl mx-auto">
      <FormContact />
    </div>
  </div> -->
</template>