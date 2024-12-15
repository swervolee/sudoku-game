/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				spotifyGreen: '#1DB954',
				spotifyBlack: '#191414',
				spotifyGray: '#121212',
				spotifyDarkGreen: '#1ed760',
			}

		},
	},
	plugins: [],
}
