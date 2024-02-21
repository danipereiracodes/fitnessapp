/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        codeMono: ['Kode Mono', 'monospace'],
        roboto: ['robot', 'sans-serif'],
        pacifico: ['pacifico', 'cursive'],
      },
    },
    backgroundImage: {
      'hero-pattern': "url('/image/fitness_background.avif')",
    },
  },
  plugins: [],
};
