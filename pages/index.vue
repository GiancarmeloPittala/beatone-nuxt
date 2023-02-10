<script setup>
const { t } = useI18n()
useSchemaOrg([
  defineWebSite({
    name: 'test'
  }),
  definePerson({
    name: 'eccolo',
    image: "/icon.png",
    sameAs: ["https://timbenniks.dev/"]
  }),
  defineWebPage(),
])

</script>
<template>
  <div>
    <section id="hero">
      <HomeSlider />
    </section>

    <div class="container mx-auto px-4 xl:px-6 grid my-[100px] xl:my-[100px] gap-6 xl:gap-[100px]">
        <HomeDescription class="text-xl" />
        <HomeInfo />
        <HomeSpecial />
        <HomeContact />
    </div>

  </div>
</template>