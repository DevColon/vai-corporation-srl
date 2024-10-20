import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')

export default <Partial<Config>>{
	darkMode: 'class',
	content: [
		'docs/content/**/*.md',
		'./node_modules/flowbite/**/*.{ js, ts }',
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'vtd-primary': colors.sky,
				'vtd-secondary': colors.gray,
				'green-vogue': {
					'50': '#f0f7ff',
					'100': '#dfeeff',
					'200': '#b8dfff',
					'300': '#79c5ff',
					'400': '#32a8fe',
					'500': '#078ef0',
					'600': '#006fcd',
					'700': '#0057a6',
					'800': '#034b89',
					'900': '#093f71',
					'950': '#072e57',
				},
				'shuttle-gray': {
					'50': '#f6f7f9',
					'100': '#ededf1',
					'200': '#d6d8e1',
					'300': '#b2b7c7',
					'400': '#8891a8',
					'500': '#606981',
					'600': '#545c75',
					'700': '#454b5f',
					'800': '#3c4150',
					'900': '#353845',
					'950': '#23252e',
				},
				'blue-chill': {
					'50': '#f1fcfc',
					'100': '#cff8f5',
					'200': '#9ff0ee',
					'300': '#66e2e1',
					'400': '#37c5ca',
					'500': '#1b989e',
					'600': '#15848c',
					'700': '#156970',
					'800': '#165359',
					'900': '#17454a',
					'950': '#07262c',
				}
			},
			aspectRatio: {
				auto: 'auto',
				square: '1 / 1',
				video: '16 / 9'
			}
		},
	},
	plugins: [
		require('flowbite/plugin'),
		require('@tailwindcss/forms')
	],
}
