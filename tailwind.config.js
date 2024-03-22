/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#111827',
        'tag': '#6366F1',
        'second': '#18202A'
      },
    },
  },
  plugins: [],
}

