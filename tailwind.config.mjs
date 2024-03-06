/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': {
					'50': '#fdf2f8',
					'100': '#fce7f2',
					'200': '#fbcfe7',
					'300': '#f9a8d4',
					'350': '#FE94CE',
					'400': '#f472b9',
					'500': '#ec48a1',
					'600': '#db2789',
					'700': '#be1872',
					'800': '#9d1760',
					'900': '#831852',
					'950': '#50072f',
				},
				'secondary': 'rgb(64, 194, 208)',
				'secondarydark': 'rgb(19, 124, 135)'
			},
			spacing: {
				'header': '4rem'
			}
		},
	},
	plugins: [],
}
