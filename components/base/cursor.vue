<template>
  <div class="hidden md:block cursor"></div>
</template>

<style>
.cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background: hsla(39, 47%, 59%, 1);
  /* background-image: url(https://media.tenor.com/ltLTC6mfpqwAAAAC/tex-mex-mexican-foods.gif); */
  /* background-size: cover; */
  border-radius: 50%;
  transition: all 200ms ease-out;
  z-index: 1;
  pointer-events: none;
}
</style>

<script setup>
onMounted(() => {
  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", (e) => {
    cursor.setAttribute(
      "style",
      "top: " + (e.clientY + 10) + "px; left: " + (e.clientX + 10) + "px;"
    );
    cx = e.clientX;
    cy = e.clientY;
  });

})


</script>