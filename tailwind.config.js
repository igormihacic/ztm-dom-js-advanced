/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./dist/*.html", "./dist/script/*.js"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			colors: {
				c1: "#1E1C19",
				c2: "#4C5A62",
				c3: "#AB9985",
				c4: "#DCBE8F",
				c5: "#D16C57",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
