<template>
  <div class="home">
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