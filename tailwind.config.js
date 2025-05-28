/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#B2D6DD",
          yellow: "#F3D891",
          cream: "#F0F5F8",
          teal: "#227C9D"
        }
      }
    },
  },
  plugins: [],
}
