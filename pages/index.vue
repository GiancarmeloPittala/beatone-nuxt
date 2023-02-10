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
  <p class="text-white bg-red-900">
    {{ t('test') }}
  </p>
  <BaseLangSwitcher />
  <Icon name="uil:github" />
  

</template>