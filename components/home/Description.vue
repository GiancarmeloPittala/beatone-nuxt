<template>
  <div id="about-us" class="grid gap-8 lg:grid-cols-2">
    <div class="order-2 lg:order-1 flex items-center bg-primary-900 px-12 py-14">
      <div class="">
        <h2 class="text-primary-100 text-4xl rounded-lg text-dancing">About Us</h2>
        <h3 class="text-4xl my-6">Prime Gastronomy.</h3>
        <div class="grid gap-8">
          <div class="flex flex-col lg:flex-row gap-4">
            <Icon class="mx-auto w-12 h-8 text-primary" name="ion:flower-outline" />
            <div class="flex-1">
              <h4 class="text-2xl mb-2">Weddings</h4>
              <p>Donec vestibulum velit a dolor volutpat ornare. Mauris in turpis est. Vivamus tempus lorem nec imperdiet
                fringilla. Etiam quis purus massa.</p>
            </div>
          </div>
          <div class="flex flex-col lg:flex-row gap-4">
            <Icon class="mx-auto w-12 h-8 text-primary" name="mdi:party-popper" />
            <div class="flex-1">
              <h4 class="text-2xl mb-2 gap-4">Private Partys</h4>
              <p>Donec vestibulum velit a dolor volutpat ornare. Mauris in turpis est. Vivamus tempus lorem nec imperdiet
                fringilla. Etiam quis purus massa.</p>
            </div>
          </div>
          <div class="flex flex-col lg:flex-row gap-4">
            <Icon class="mx-auto w-12 h-8 text-primary" name="fluent:people-community-28-regular" />
            <div class="flex-1">
              <h4 class="text-2xl mb-2">Meetings</h4>
              <p>Donec vestibulum velit a dolor volutpat ornare. Mauris in turpis est. Vivamus tempus lorem nec imperdiet
                fringilla. Etiam quis purus massa.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="order-1 lg:order-2 ">
      <img loading="lazy" class="rounded-lg w-full h-full object-cover object-center"
        src="https://source.unsplash.com/UC0HZdUitWY/700x700" alt="">
    </div>
  </div>
</template>