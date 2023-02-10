/** @type {import('tailwindcss').Config} */
// tailwind.config.js

/**
 * 
  $ecru: hsla(39, 47%, 59%, 1);
  $ecru-2: hsla(40, 44%, 59%, 1);
  $floral-white: hsla(45, 62%, 95%, 1);
  $tan: hsla(39, 41%, 71%, 1);
  $white: hsla(0, 0%, 100%, 1);
 */
module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsla(39, 47%, 59%, 1)',
          '100': 'hsla(39, 47%, 59%, .9)',
          '200': 'hsla(39, 47%, 59%, .8)',
          '300': 'hsla(39, 47%, 59%, .7)',
          '400': 'hsla(39, 47%, 59%, .6)',
          '500': 'hsla(39, 47%, 59%, .5)',
          '600': 'hsla(39, 47%, 59%, .4)',
          '700': 'hsla(39, 47%, 59%, .3)',
          '800': 'hsla(39, 47%, 59%, .2)',
          '900': 'hsla(39, 47%, 59%, .1)',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};