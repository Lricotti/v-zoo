<template>
  <div class="home">
    <HelloWorld msg="V-Zoo"/>
  </div>
</template>

<script>
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

</style>