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
        <div class="hidden w-full lg:block md:w-auto links mt-4"  :class="{ 'open': open }">
  
          <ul class="grid lg:flex space-y-4 md:space-y-0 items-center text-xl p-4 md:pr-0 mt-4 border border-primary-100 rounded-lg bg-gray-50 lg:border-0 md:space-x-6 md:mt-0">
            <li>
              <nuxt-link :to="localePath({ path: '/', hash: $t('menu[0].to') })">
                {{ $t('menu[0].text') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath({ path: '/', hash: $t('menu[1].to') })">
                {{ $t('menu[1].text') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath({ path: '/', hash: $t('menu[2].to') })">
                {{ $t('menu[2].text') }} 
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath({ path: '/', hash: $t('menu[3].to') })">
                {{ $t('menu[3].text') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="localePath({ path: '/', hash: $t('menu[4].to') })">
                {{ $t('menu[4].text') }}
              </nuxt-link>
            </li>

           
            <div class="md:pl-4 md:border-l-2 border-gray-200 z-50"> 
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