<template>
  <header class="px-4 py-2 container mx-auto  my-2">
    <p class=" text-sm font-bold flex items-center justify-between border-b-2 pb-2  border-primary-100">
      <h1>
        Be At One Restaurant - Text Mex
      </h1>
      <span class="flex items-center gap-2">
        <Icon name="bi:telephone-forward" />
        <a href="tel:+39485938444">+39485938444</a>
      </span>
    </p>
    <nav class=" bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div class="flex flex-wrap items-center justify-between">
        <nuxt-link class="flex items-center" :to="localePath('/')">
          <img src="/imgs/icon/favicon-16x16.png" class="h-6 mr-3 sm:h-10" alt="Flowbite Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">BeAtOne</span>
        </nuxt-link>
        <BaseHeaderOpenButton  @click="open = !open" />
        <div class="hidden w-full md:block md:w-auto links"  :class="{ 'open': open }">
          <ul
            class=" flex items-center flex-col p-4 pr-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 capitalize">
            <li>
              <nuxt-link :to="localePath('/')">Home
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath('/test')">
                Test
              </nuxt-link>
            </li>
            <div class="pl-4 border-l-2 border-gray-200 z-50"> 
               <BaseHeaderLangSwitcher />
            </div>
          </ul>
          
        </div>
      </div>
    </nav>

  </header>
</template>

<style>
.open {
  display: block;
}
</style>
<script setup>
const localePath = useLocalePath()
const open = ref(false)
</script>