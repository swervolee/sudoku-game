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
				pastelGreen: "#D4EDDA",
				pastelRed: "#F8D7DA",
				pastelGray: "#F1F3F4",
				neutralGray: "#6B7280",
				darkGreen: "#155724",
				darkRed: "#721C24"
			}

		},
	},
	plugins: [],
}
