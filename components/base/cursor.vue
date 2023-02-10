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
  // const darkBG = document.querySelector(".dark-bg");
  const ativators = document.querySelectorAll(".cursor-ativator");
  var cx, cy;

  document.addEventListener("mousemove", (e) => {
    cursor.setAttribute(
      "style",
      "top: " + (e.clientY + 10) + "px; left: " + (e.clientX + 10) + "px;"
    );
    cx = e.clientX;
    cy = e.clientY;
  });

  // darkBG.addEventListener('mouseenter', () => {
  //   cursor.classList.add('cursor-light');
  // });

  // darkBG.addEventListener('mouseleave', () => {
  //   cursor.classList.remove('cursor-light');
  // });

  ativators.forEach(ativator => {
    ativator.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-expand');
      //ativator.children[0].style.zIndex = "3";
      //ativator.style.backgroundColor = "red";
      //ativator.style.transform = "translate3d(" + cx + "px," + cy + "px, -4px)";
      ativator.style.transform = "translate3d(3px, -3px, 0px)";
      //console.log("offsetTop: " + ativator.offsetTop);
      //console.log("offsetLeft: " + ativator.offsetLeft);
      //console.log("offsetWidth: " + ativator.offsetWidth);
      //console.log("offsetHeight " + ativator.offsetHeight);
      //console.log("MouseX " + cx);
      //console.log("MouseY " + cy);
      //console.log("-----------------");
    });
    ativator.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-expand');
      ativator.style.transform = "translate3d(0px, 0px, 0px)";
    });
  });
})


</script>