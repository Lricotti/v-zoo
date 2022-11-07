<template>
  <Header v-bind:show-button="false"/>
  <p>Proximamente el juego....</p>
  <Footer/>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "Game",
  components:{
    Header,
    Footer
  }
}

</script>

<style scoped>

</style>