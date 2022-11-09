<template>
  <div id="server-error-main">
    <Header/>
    <div id="server-error-container">
      <img src="../assets/img/algo.jpg" alt="Error">
      <h2>Upss... algo salio mal, por favor vuelva a intentar :)</h2>
    </div>

    <router-link :to="{ name: 'registro'}">Volver</router-link>

    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "AlgoSalioMal",
  components: {Footer, Header}
}
</script>

<style scoped>
#server-error-main {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 98vh;
  margin: 0;
}
#server-error-container {
  margin-top: 20px;
}
img{
  height: 500px;
  width: 500px
}
</style>