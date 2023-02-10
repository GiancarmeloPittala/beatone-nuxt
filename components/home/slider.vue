<template>
  <div id="top" class="relative">
    <Splide :options="options" aria-label="My Favorite Images">
      <SplideSlide v-for="i of 14" :key="i">

        <picture>
          <source media="(max-width: 600px)" :srcset="'https://source.unsplash.com/random/600x600?food' + i" />
          <source media="(min-width: 800px)" :srcset="'https://source.unsplash.com/random/800x600?texas+food' + i" />
          <img loading="lazy" class=" h-full object-cover w-full"
            :src="'https://source.unsplash.com/random/1200x600?' + i"
            alt="Chris standing up holding his daughter Elva" />
        </picture>

      </SplideSlide>

    </Splide>

    <div
      class=" max-w-lg lg:max-w-xl bg-opacity-70 top-8 left-6 right-6 lg:right-auto lg:bottom-auto absolute lg:left-2 lg:top-1/2 lg:translate-x-1/2 lg:-translate-y-1/2  bg-gray-50 p-8 rounded-lg">
      <h2 class="text-4xl">
        What we learned so far
      </h2>
      <p class="text-5xl lg:text-6xl font-normal my-8">
        THE BEST IDEAS EMERGE FROM THE SIMPLEST TOOLS
      </p>
      <button class="border hover:bg-gray-900 shadow-lg hover:text-gray-50 rounded-lg border-gray-900  px-4 py-2">
        <span class="flex items-center gap-2">
          <Icon name="bi:telephone-forward"  />
          <a href="tel:+39485938444">+39485938444</a>
        </span>
      </button>
    </div>
  </div>
</template>


<script setup>
const props = defineProps({
  caption: {
    type: [String, Boolean],
    default: () => false
  }
})
const options = reactive({
  rewind: true,
  perPage: 1,
  gap: "1rem",
  autoplay: true,
  interval: 3500,
  fixedHeight: 600,
  breakpoints: {

    640: {
      fixedWidth: "100%",
    },
  }
})
</script>