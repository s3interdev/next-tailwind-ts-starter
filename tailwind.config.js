/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			screens: {
				mobile: '640px',
				tablet: '768px',
				laptop: '1024px',
				desktop: '1280px',
			},
		},
		fontFamily: {
			poppins: 'Poppins, sans-serif',
			ubuntu: 'Ubuntu, sans-serif',
		},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography'),
	],
};