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
      class="max-w-xl bg-opacity-70 absolute bg-gray-50 p-8 rounded-lg top-0 left-0 m-6 mt-8 lg:ml-[300px] lg:mt-20">
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