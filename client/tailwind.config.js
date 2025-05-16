/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#d3a971',
        'secondary': '#fbf6f1',
        'white': '#ffffff',
        'black': '#000000',
        'bg-primary': '#130e0b',
        'bg-secondary': '#f6f6f6',
        'bg-white': '#ffffff'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}