<template>

  <div id="todo">
    <Header v-bind:show-button="false"/>
    <span class="titulo">¡{{ this.$route.query["clientName"] }}!</span>
    <span class="titulo"> Gracias por el  registro, ya perteneces a la comunidad de V-Zoo</span>

    <div id="imagen-registro">
      <img src="../assets/img/zooo.webp" alt="">
    </div>
    <br>
    <br>

    <router-link :to="{ name: 'home'}">Volver</router-link>
    <br>
    <br>
    <Footer></Footer>
  </div>

</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "Registroexito",
  components: {Footer, Header}
}
</script>

<style scoped>
#todo {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 98vh;

}
#imagen-registro {
  display: flex;
  flex-direction: column;
  margin: auto;
  height: 500px;
  width: 500px;
}
#sub-success-img img {
  border-radius: 5px;
}
.titulo {
  margin: 10px;
  font-size: 200%;
  font-weight: bold;
}
</style>