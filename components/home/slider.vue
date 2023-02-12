<template>
  <div id="top" class="relative container mx-auto" >
    <Splide :options="options" aria-label="My Favorite Images">
      <SplideSlide v-for="i of 5" :key="i">

        <picture >
          <source media="(max-width: 600px)" :srcset="'https://source.unsplash.com/random/600x720?food'" />
          <source media="(min-width: 800px)" :srcset="'https://source.unsplash.com/random/800x720?tree'" />
          <img loading="lazy" class="h-full object-cover object-center w-full rounded-lg" 
            :src="'https://source.unsplash.com/random/1280x720?woman' + i"
            alt="Chris standing up holding his daughter Elva" />
        </picture>

      </SplideSlide>

    </Splide>

    <div
      class="max-w-xl bg-opacity-70 absolute bg-gray-50 p-8 rounded-lg bottom-10 left-14 right-14 border-2 border-primary ">
      <h2 class="md:text-4xl">
        What we learned so far
      </h2>
      <p class="md:text-5xl lg:text-6xl font-normal my-8">
        THE BEST IDEAS EMERGE FROM THE SIMPLEST TOOLS
      </p>
   
        <BaseButton>
          <a class=" animate-bounce flex items-center gap-2" href="tel:+39485938444">
            <Icon name="bi:telephone-forward"  />
            <span>+39485938444</span>
          </a>
        </BaseButton>
     
   
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