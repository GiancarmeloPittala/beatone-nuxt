export const myfetch = async (url,opts = {}) => 
  await $fetch("http://localhost:1337/api"+ url, opts)