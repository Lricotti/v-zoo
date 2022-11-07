<template>
  <div id="homepage">
    <header/>
  </div>
  <div class="home">
    <img alt="V-Zoo logo" src="../assets/Logofinal.png">
    <HelloWorld msg="V-Zoo"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from "@/components/Header.vue"


export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Header,
  }
}
</script>

<style>
img {
  max-width: 420px;
  border-radius: 50%;
}
</style>