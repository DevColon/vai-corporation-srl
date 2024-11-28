<script setup lang="ts">
const open = ref(false)
const dropdownButtonRef = ref<HTMLButtonElement | null>(null)

const toggleNavbar = () => {
	open.value = !open.value
}

const navLinkItems = ref([
	{ text: 'Home', href: 'javascript:void(0)' },
	{ text: 'Payment', href: 'javascript:void(0)' },
	{ text: 'About', href: 'javascript:void(0)' },
	{ text: 'Blog', href: 'javascript:void(0)' }
])

const handleClickOutside = (event: MouseEvent) => {
	if (dropdownButtonRef.value && !dropdownButtonRef.value.contains(event.target as Node)) {
		open.value = false
	}
}

onMounted(() => {
	document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
	document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
	<header
		class="bg-primary-500 dark:bg-secondary-950 border-b border-gray-200 dark:border-gray-700 fixed z-30 w-full min-h-[4rem]">
		<div class="px-3 py-3 lg:px-5 lg:pl-3">
			<div class="flex items-center justify-between">
				<div class="flex items-center justify-start">
					<a href="/" class="text-xl font-bold flex items-center lg:ml-2.5 text-white">
						<img src="/img/logo.png" class="h-6 mr-2" alt="Windster Logo">
						<span class="self-center whitespace-nowrap">Windster</span>
					</a>
				</div>
				<div class="flex gap-4">
					<!-- Items del menu -->
					<nav :class="{ hidden: !open }" id="navbarCollapse"
						class="absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-primary-900 px-6 py-5 lg:p-0 shadow dark:bg-dark-2 lg:static lg:flex lg:w-fit lg:max-w-none lg:shadow-none lg:dark:bg-transparent">
						<ul class="block lg:flex">
							<template v-for="(item, index) in navLinkItems" :key="index">
								<li>
									<NuxtLink v-if="item.href" :to="item.href"
										class="flex py-2 text-base font-medium text-body-color text-white dark:text-dark-6 dark:hover:text-white lg:inline-flex lg:px-4">
										{{ item.text }}
									</NuxtLink>
								</li>
							</template>
						</ul>
					</nav>
					<!-- Boton de desplegar menu en mobile -->
					<UButton @click="toggleNavbar" icon="i-solar-hamburger-menu-outline" color="gray" variant="ghost"
						aria-label="Theme"
						class="p-2 rounded-lg text-white hover:text-white hover:bg-gray-700 bg-gray-100 block lg:hidden" />
					<!-- Boton de cambiar de modo -->
					<LayoutsColorModeSwitcher />
				</div>
			</div>
		</div>
	</header>
</template>