<script setup>
// const { locale } = useI18n()

// import { useHomeStore } from '~~/store/home';
// const homeStore = useHomeStore();

// const { pending, data: home } = await myfetch('/home', { 
//   query: { locale: locale.value, populate: 'depp' }
//  });


useSchemaOrg([
  defineWebSite({
    name: 'test'
  }),
  defineWebPage(),
])

</script>
<template>
  <div>

    <section id="hero">
      <HomeSlider />
    </section>

    <div class="container mx-auto px-4 xl:px-6 grid my-[100px] xl:my-[100px] gap-6 xl:gap-8">
      <HomeDescription />
      <HomeInfo />
      <HomeProduct />
      <HomeSpecial />
      <HomeContact />
    </div>

  </div>
</template>