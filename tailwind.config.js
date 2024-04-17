/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'custom-1': '378px'
      },
      borderColor: {
        'greenBorder': '#26582A'
      },
      borderRadius: {
        'custom-1': '80px'
      }
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

