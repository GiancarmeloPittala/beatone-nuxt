<template>
  <div class="relative">
    <Splide  :options="options" aria-label="My Favorite Images">
      <SplideSlide v-for="i of 14" :key="i">
  
        <picture >
          <source media="(max-width: 600px)" :srcset="'https://source.unsplash.com/random/600x600?food' + i" />
          <source media="(min-width: 800px)" :srcset="'https://source.unsplash.com/random/800x600?texas+food' + i" />
          <img loading="lazy" class=" h-full object-cover w-full" :src="'https://source.unsplash.com/random/1200x600?' + i" alt="Chris standing up holding his daughter Elva" />
        </picture>
  
      </SplideSlide>
      
    </Splide>

    <div v-if="caption" class=" bg-opacity-70  hidden sm:block absolute bottom-10 left-10 max-w-[50%] bg-gray-50 p-8 rounded-lg font-bold">
      {{caption}}
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
  perPage: 2,
  gap: "1rem",
  fixedWidth: "50%",
  fixedHeight: 500,
  breakpoints: {
    1200: {
      fixedWidth: 600,
    },
    640: {
      fixedWidth: "100%",
      fixedHeight: 300,
    },
  }
})
</script>