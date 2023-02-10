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

    <div class="container mx-auto px-4 xl:px-6 grid my-6 xl:my-8 gap-6 xl:gap-8">
        <HomeDescription class="text-xl" />
        <HomeInfo />
        <HomeSpecial />
        <HomeContact />
    </div>

  </div>
</template>