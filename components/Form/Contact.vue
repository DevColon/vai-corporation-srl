<template>
  <section class="relative z-10 overflow-hidden py-20 lg:py-[120px]">
    <div class="flex flex-wrap items-center -mx-4 lg:justify-between">
      <div class="w-full px-4 lg:w-1/2 xl:w-6/12">
        <div class="mb-12 max-w-[570px] lg:mb-0">
          <span class="block mb-4 text-base font-semibold text-primary">
            Contactanos
          </span>
          <h2
            class="text-dark dark:text-white mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
            PONTE EN CONTACTO CON NOSOTROS
          </h2>
          <p class="text-base leading-relaxed text-body-color dark:text-dark-6 mb-9">
            ¿Tienes dudas sobre nuestros productos o servicios? ¿Necesitas asistencia técnica? ¡Nuestro equipo de
            expertos está aquí para ayudarte! Contáctanos a través de nuestro formulario de contacto y te brindaremos
            una solución rápida y eficiente. Valoramos tu tiempo y haremos todo lo posible para resolver tus
            inquietudes de manera personalizada.
          </p>
          <div class="mb-8 flex w-full max-w-[370px]">
            <div
              class="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
              <UIcon name="i-material-symbols-location-on-rounded" class="text-[42px]" />
            </div>
            <div class="w-full">
              <h4 class="mb-1 text-xl font-bold text-dark dark:text-white">
                Nuestra dirección
              </h4>
              <p class="text-base text-body-color dark:text-dark-6">
                Calle Heriberto Núñez No. 14, Cul de Sac Oasis, Unidad 13C, 2do. Nivel
              </p>
            </div>
          </div>
          <div class="mb-8 flex w-full max-w-[370px]">
            <div
              class="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
              <UIcon name="i-material-symbols-phone-in-talk" class="text-[42px]" />
            </div>
            <div class="w-full">
              <h4 class="mb-1 text-xl font-bold text-dark dark:text-white">
                Nuestro número telefónico
              </h4>
              <p class="text-base text-body-color dark:text-dark-6">(809) - 809 - 8009</p>
            </div>
          </div>
          <div class="mb-8 flex w-full max-w-[370px]">
            <div
              class="bg-primary/5 text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
              <UIcon name="i-material-symbols-alternate-email" class="text-[42px]" />
            </div>
            <div class="w-full">
              <h4 class="mb-1 text-xl font-bold text-dark dark:text-white">
                Nuestro correo electrónico
              </h4>
              <p class="text-base text-body-color dark:text-dark-6">info@yourdomain.com</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
        <div class="relative p-8 rounded-lg shadow-lg bg-gray-200 dark:bg-gray-700 sm:p-12">
          <UForm>
            <div class="mb-6">
              <UInput type="text" placeholder="Your Name" />
            </div>
            <div class="mb-6">
              <UInput type="email" placeholder="Your Email" />
            </div>
            <div class="mb-6">
              <UInput type="text" placeholder="Your Phone" />
            </div>
            <div class="mb-6">
              <UTextarea rows="6" placeholder="Your Message"></UTextarea>
            </div>
            <div>
              <UButton type="submit" label="Enviar Mensaje" block />
            </div>
          </UForm>
          <div>
            <span class="absolute -right-10 top-[90px] z-[-1]">
              <svg width="34" height="134" viewBox="0 0 34 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="31.9993" cy="132" r="1.66667" transform="rotate(180 31.9993 132)" fill="#13C296" />
                <circle cx="31.9993" cy="117.333" r="1.66667" transform="rotate(180 31.9993 117.333)" fill="#13C296" />
                <circle cx="31.9993" cy="102.667" r="1.66667" transform="rotate(180 31.9993 102.667)" fill="#13C296" />
                <circle cx="31.9993" cy="88" r="1.66667" transform="rotate(180 31.9993 88)" fill="#13C296" />
                <circle cx="31.9993" cy="73.3333" r="1.66667" transform="rotate(180 31.9993 73.3333)" fill="#13C296" />
                <circle cx="31.9993" cy="45" r="1.66667" transform="rotate(180 31.9993 45)" fill="#13C296" />
                <circle cx="31.9993" cy="16" r="1.66667" transform="rotate(180 31.9993 16)" fill="#13C296" />
                <circle cx="31.9993" cy="59" r="1.66667" transform="rotate(180 31.9993 59)" fill="#13C296" />
                <circle cx="31.9993" cy="30.6666" r="1.66667" transform="rotate(180 31.9993 30.6666)" fill="#13C296" />
                <circle cx="31.9993" cy="1.66665" r="1.66667" transform="rotate(180 31.9993 1.66665)" fill="#13C296" />
                <circle cx="17.3333" cy="132" r="1.66667" transform="rotate(180 17.3333 132)" fill="#13C296" />
                <circle cx="17.3333" cy="117.333" r="1.66667" transform="rotate(180 17.3333 117.333)" fill="#13C296" />
                <circle cx="17.3333" cy="102.667" r="1.66667" transform="rotate(180 17.3333 102.667)" fill="#13C296" />
                <circle cx="17.3333" cy="88" r="1.66667" transform="rotate(180 17.3333 88)" fill="#13C296" />
                <circle cx="17.3333" cy="73.3333" r="1.66667" transform="rotate(180 17.3333 73.3333)" fill="#13C296" />
                <circle cx="17.3333" cy="45" r="1.66667" transform="rotate(180 17.3333 45)" fill="#13C296" />
                <circle cx="17.3333" cy="16" r="1.66667" transform="rotate(180 17.3333 16)" fill="#13C296" />
                <circle cx="17.3333" cy="59" r="1.66667" transform="rotate(180 17.3333 59)" fill="#13C296" />
                <circle cx="17.3333" cy="30.6666" r="1.66667" transform="rotate(180 17.3333 30.6666)" fill="#13C296" />
                <circle cx="17.3333" cy="1.66665" r="1.66667" transform="rotate(180 17.3333 1.66665)" fill="#13C296" />
                <circle cx="2.66536" cy="132" r="1.66667" transform="rotate(180 2.66536 132)" fill="#13C296" />
                <circle cx="2.66536" cy="117.333" r="1.66667" transform="rotate(180 2.66536 117.333)" fill="#13C296" />
                <circle cx="2.66536" cy="102.667" r="1.66667" transform="rotate(180 2.66536 102.667)" fill="#13C296" />
                <circle cx="2.66536" cy="88" r="1.66667" transform="rotate(180 2.66536 88)" fill="#13C296" />
                <circle cx="2.66536" cy="73.3333" r="1.66667" transform="rotate(180 2.66536 73.3333)" fill="#13C296" />
                <circle cx="2.66536" cy="45" r="1.66667" transform="rotate(180 2.66536 45)" fill="#13C296" />
                <circle cx="2.66536" cy="16" r="1.66667" transform="rotate(180 2.66536 16)" fill="#13C296" />
                <circle cx="2.66536" cy="59" r="1.66667" transform="rotate(180 2.66536 59)" fill="#13C296" />
                <circle cx="2.66536" cy="30.6666" r="1.66667" transform="rotate(180 2.66536 30.6666)" fill="#13C296" />
                <circle cx="2.66536" cy="1.66665" r="1.66667" transform="rotate(180 2.66536 1.66665)" fill="#13C296" />
              </svg>
            </span>
            <span class="absolute -left-7 -bottom-7 z-[-1]">
              <svg width="107" height="134" viewBox="0 0 107 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="104.999" cy="132" r="1.66667" transform="rotate(180 104.999 132)" fill="#13C296" />
                <circle cx="104.999" cy="117.333" r="1.66667" transform="rotate(180 104.999 117.333)" fill="#13C296" />
                <circle cx="104.999" cy="102.667" r="1.66667" transform="rotate(180 104.999 102.667)" fill="#13C296" />
                <circle cx="104.999" cy="88" r="1.66667" transform="rotate(180 104.999 88)" fill="#13C296" />
                <circle cx="104.999" cy="73.3333" r="1.66667" transform="rotate(180 104.999 73.3333)" fill="#13C296" />
                <circle cx="104.999" cy="45" r="1.66667" transform="rotate(180 104.999 45)" fill="#13C296" />
                <circle cx="104.999" cy="16" r="1.66667" transform="rotate(180 104.999 16)" fill="#13C296" />
                <circle cx="104.999" cy="59" r="1.66667" transform="rotate(180 104.999 59)" fill="#13C296" />
                <circle cx="104.999" cy="30.6666" r="1.66667" transform="rotate(180 104.999 30.6666)" fill="#13C296" />
                <circle cx="104.999" cy="1.66665" r="1.66667" transform="rotate(180 104.999 1.66665)" fill="#13C296" />
                <circle cx="90.3333" cy="132" r="1.66667" transform="rotate(180 90.3333 132)" fill="#13C296" />
                <circle cx="90.3333" cy="117.333" r="1.66667" transform="rotate(180 90.3333 117.333)" fill="#13C296" />
                <circle cx="90.3333" cy="102.667" r="1.66667" transform="rotate(180 90.3333 102.667)" fill="#13C296" />
                <circle cx="90.3333" cy="88" r="1.66667" transform="rotate(180 90.3333 88)" fill="#13C296" />
                <circle cx="90.3333" cy="73.3333" r="1.66667" transform="rotate(180 90.3333 73.3333)" fill="#13C296" />
                <circle cx="90.3333" cy="45" r="1.66667" transform="rotate(180 90.3333 45)" fill="#13C296" />
                <circle cx="90.3333" cy="16" r="1.66667" transform="rotate(180 90.3333 16)" fill="#13C296" />
                <circle cx="90.3333" cy="59" r="1.66667" transform="rotate(180 90.3333 59)" fill="#13C296" />
                <circle cx="90.3333" cy="30.6666" r="1.66667" transform="rotate(180 90.3333 30.6666)" fill="#13C296" />
                <circle cx="90.3333" cy="1.66665" r="1.66667" transform="rotate(180 90.3333 1.66665)" fill="#13C296" />
                <circle cx="75.6654" cy="132" r="1.66667" transform="rotate(180 75.6654 132)" fill="#13C296" />
                <circle cx="31.9993" cy="132" r="1.66667" transform="rotate(180 31.9993 132)" fill="#13C296" />
                <circle cx="75.6654" cy="117.333" r="1.66667" transform="rotate(180 75.6654 117.333)" fill="#13C296" />
                <circle cx="31.9993" cy="117.333" r="1.66667" transform="rotate(180 31.9993 117.333)" fill="#13C296" />
                <circle cx="75.6654" cy="102.667" r="1.66667" transform="rotate(180 75.6654 102.667)" fill="#13C296" />
                <circle cx="31.9993" cy="102.667" r="1.66667" transform="rotate(180 31.9993 102.667)" fill="#13C296" />
                <circle cx="75.6654" cy="88" r="1.66667" transform="rotate(180 75.6654 88)" fill="#13C296" />
                <circle cx="31.9993" cy="88" r="1.66667" transform="rotate(180 31.9993 88)" fill="#13C296" />
                <circle cx="75.6654" cy="73.3333" r="1.66667" transform="rotate(180 75.6654 73.3333)" fill="#13C296" />
                <circle cx="31.9993" cy="73.3333" r="1.66667" transform="rotate(180 31.9993 73.3333)" fill="#13C296" />
                <circle cx="75.6654" cy="45" r="1.66667" transform="rotate(180 75.6654 45)" fill="#13C296" />
                <circle cx="31.9993" cy="45" r="1.66667" transform="rotate(180 31.9993 45)" fill="#13C296" />
                <circle cx="75.6654" cy="16" r="1.66667" transform="rotate(180 75.6654 16)" fill="#13C296" />
                <circle cx="31.9993" cy="16" r="1.66667" transform="rotate(180 31.9993 16)" fill="#13C296" />
                <circle cx="75.6654" cy="59" r="1.66667" transform="rotate(180 75.6654 59)" fill="#13C296" />
                <circle cx="31.9993" cy="59" r="1.66667" transform="rotate(180 31.9993 59)" fill="#13C296" />
                <circle cx="75.6654" cy="30.6666" r="1.66667" transform="rotate(180 75.6654 30.6666)" fill="#13C296" />
                <circle cx="31.9993" cy="30.6666" r="1.66667" transform="rotate(180 31.9993 30.6666)" fill="#13C296" />
                <circle cx="75.6654" cy="1.66665" r="1.66667" transform="rotate(180 75.6654 1.66665)" fill="#13C296" />
                <circle cx="31.9993" cy="1.66665" r="1.66667" transform="rotate(180 31.9993 1.66665)" fill="#13C296" />
                <circle cx="60.9993" cy="132" r="1.66667" transform="rotate(180 60.9993 132)" fill="#13C296" />
                <circle cx="17.3333" cy="132" r="1.66667" transform="rotate(180 17.3333 132)" fill="#13C296" />
                <circle cx="60.9993" cy="117.333" r="1.66667" transform="rotate(180 60.9993 117.333)" fill="#13C296" />
                <circle cx="17.3333" cy="117.333" r="1.66667" transform="rotate(180 17.3333 117.333)" fill="#13C296" />
                <circle cx="60.9993" cy="102.667" r="1.66667" transform="rotate(180 60.9993 102.667)" fill="#13C296" />
                <circle cx="17.3333" cy="102.667" r="1.66667" transform="rotate(180 17.3333 102.667)" fill="#13C296" />
                <circle cx="60.9993" cy="88" r="1.66667" transform="rotate(180 60.9993 88)" fill="#13C296" />
                <circle cx="17.3333" cy="88" r="1.66667" transform="rotate(180 17.3333 88)" fill="#13C296" />
                <circle cx="60.9993" cy="73.3333" r="1.66667" transform="rotate(180 60.9993 73.3333)" fill="#13C296" />
                <circle cx="17.3333" cy="73.3333" r="1.66667" transform="rotate(180 17.3333 73.3333)" fill="#13C296" />
                <circle cx="60.9993" cy="45" r="1.66667" transform="rotate(180 60.9993 45)" fill="#13C296" />
                <circle cx="17.3333" cy="45" r="1.66667" transform="rotate(180 17.3333 45)" fill="#13C296" />
                <circle cx="60.9993" cy="16" r="1.66667" transform="rotate(180 60.9993 16)" fill="#13C296" />
                <circle cx="17.3333" cy="16" r="1.66667" transform="rotate(180 17.3333 16)" fill="#13C296" />
                <circle cx="60.9993" cy="59" r="1.66667" transform="rotate(180 60.9993 59)" fill="#13C296" />
                <circle cx="17.3333" cy="59" r="1.66667" transform="rotate(180 17.3333 59)" fill="#13C296" />
                <circle cx="60.9993" cy="30.6666" r="1.66667" transform="rotate(180 60.9993 30.6666)" fill="#13C296" />
                <circle cx="17.3333" cy="30.6666" r="1.66667" transform="rotate(180 17.3333 30.6666)" fill="#13C296" />
                <circle cx="60.9993" cy="1.66665" r="1.66667" transform="rotate(180 60.9993 1.66665)" fill="#13C296" />
                <circle cx="17.3333" cy="1.66665" r="1.66667" transform="rotate(180 17.3333 1.66665)" fill="#13C296" />
                <circle cx="46.3333" cy="132" r="1.66667" transform="rotate(180 46.3333 132)" fill="#13C296" />
                <circle cx="2.66536" cy="132" r="1.66667" transform="rotate(180 2.66536 132)" fill="#13C296" />
                <circle cx="46.3333" cy="117.333" r="1.66667" transform="rotate(180 46.3333 117.333)" fill="#13C296" />
                <circle cx="2.66536" cy="117.333" r="1.66667" transform="rotate(180 2.66536 117.333)" fill="#13C296" />
                <circle cx="46.3333" cy="102.667" r="1.66667" transform="rotate(180 46.3333 102.667)" fill="#13C296" />
                <circle cx="2.66536" cy="102.667" r="1.66667" transform="rotate(180 2.66536 102.667)" fill="#13C296" />
                <circle cx="46.3333" cy="88" r="1.66667" transform="rotate(180 46.3333 88)" fill="#13C296" />
                <circle cx="2.66536" cy="88" r="1.66667" transform="rotate(180 2.66536 88)" fill="#13C296" />
                <circle cx="46.3333" cy="73.3333" r="1.66667" transform="rotate(180 46.3333 73.3333)" fill="#13C296" />
                <circle cx="2.66536" cy="73.3333" r="1.66667" transform="rotate(180 2.66536 73.3333)" fill="#13C296" />
                <circle cx="46.3333" cy="45" r="1.66667" transform="rotate(180 46.3333 45)" fill="#13C296" />
                <circle cx="2.66536" cy="45" r="1.66667" transform="rotate(180 2.66536 45)" fill="#13C296" />
                <circle cx="46.3333" cy="16" r="1.66667" transform="rotate(180 46.3333 16)" fill="#13C296" />
                <circle cx="2.66536" cy="16" r="1.66667" transform="rotate(180 2.66536 16)" fill="#13C296" />
                <circle cx="46.3333" cy="59" r="1.66667" transform="rotate(180 46.3333 59)" fill="#13C296" />
                <circle cx="2.66536" cy="59" r="1.66667" transform="rotate(180 2.66536 59)" fill="#13C296" />
                <circle cx="46.3333" cy="30.6666" r="1.66667" transform="rotate(180 46.3333 30.6666)" fill="#13C296" />
                <circle cx="2.66536" cy="30.6666" r="1.66667" transform="rotate(180 2.66536 30.6666)" fill="#13C296" />
                <circle cx="46.3333" cy="1.66665" r="1.66667" transform="rotate(180 46.3333 1.66665)" fill="#13C296" />
                <circle cx="2.66536" cy="1.66665" r="1.66667" transform="rotate(180 2.66536 1.66665)" fill="#13C296" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
