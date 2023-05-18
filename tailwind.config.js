/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				color1: '#022E40',
				color2: '#EBEEF2',
				color3: '#D94E67',
				color4: '#8C2B3D',
				color5: '#F5F5F5',

			}
		},
		fontSize: {
			sm: '0.8rem',
			base: '1.1rem',
			lg: '1.2rem',
			xl: '1.4rem',
			'2xl': '1.563rem',
			'3xl': '1.953rem',
			'4xl': '2.441rem',
			'5xl': '3.052rem',
		}
	},
	plugins: [],
}

