<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
</script>
<template>

   <HeadlessMenu as="div" class="w-full relative inline-block text-left">

     <HeadlessMenuButton class="w-full border rounded-lg border-gray-900 px-4 py-2">
      <Icon name="material-symbols:language" class="h-5 w-5" />
      {{ locale }}
      <Icon class="ml-2 -mr-1 h-5 w-5 " name="ic:baseline-keyboard-arrow-down" />
    </HeadlessMenuButton> 

     <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
      <HeadlessMenuItems
        class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="px-1 py-1 links">
          <HeadlessMenuItem v-slot="{ active }" v-for="locale in availableLocales" :key="locale.code" >
            <nuxt-link :to="switchLocalePath(locale.code)" class="group flex w-full items-center rounded-md px-2 py-2 text-sm">
              <Icon class="mr-2 h-5 w-5 " aria-hidden="true" :name="locale.icon" />
                {{ locale.name }}
            </nuxt-link>
          </HeadlessMenuItem>
        </div>
      </HeadlessMenuItems>
    </transition>
  </HeadlessMenu> 

</template>