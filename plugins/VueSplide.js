import VueSplide from '@splidejs/vue-splide';
// Default theme
import '@splidejs/vue-splide/css';

export default defineNuxtPlugin((nuxtApp) =>
  nuxtApp.vueApp.use(VueSplide)
)