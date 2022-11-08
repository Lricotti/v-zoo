<template>
  <div id="subscription-main">
    <Header v-bind:show-button="false"/>
  </div>
  <div id="boxes">
    <div class="firstbox">
      <img src="../assets/img/tiburon.jpg" class="animal1">
      <h2>{{title1}}</h2>
      <h4>Habitat:{{habitat1}}</h4>
      <h4>Nombre cientifico:{{nombrecientifico1}}</h4>
      <h4>Vida promedio:{{vidapromedio1}}</h4>
      <h4>Dieta:{{dieta1}}</h4>
      <audio controls>
        <source src="" type="audio/mp3">
      </audio>
    </div>

    <div class="secondbox">
      <img src="../assets/img/pulpo.jpg" class="animal2">
      <h2>{{title2}}</h2>
      <h4>Habitat:{{habitat2}}</h4>
      <h4>Nombre cientifico:{{nombrecientifico2}}</h4>
      <h4>Vida promedio:{{vidapromedio2}}</h4>
      <h4>Dieta:{{dieta2}}</h4>
      <audio controls>
        <source src="" type="audio/mp3">
      </audio>
    </div>

      <div class="thirdbox">
        <img src="../assets/img/medusa.jpg" id="animal3">
        <h2>{{title3}}</h2>
        <h4>Habitat:{{habitat3}}</h4>
        <h4>Nombre cientifico:{{nombrecientifico3}}</h4>
        <h4>Vida promedio:{{vidapromedio3}}</h4>
        <h4>Dieta:{{dieta3}}</h4>
        <audio controls>
          <source src="" type="audio/mp3">
        </audio>
      </div>
  </div>
  <Footer/>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "OceanoComp",
  components: {
    Header,
    Footer
  },
  data(){
    return{
      title1:"Tiburon",
      habitat1:" Océano",
      vidapromedio1: " 20-30 años",
      nombrecientifico1:" Selachimorpha",
      dieta1:" Comen pescado o invertebrados, como calamares o almejas",

      title2:" Pulpo",
      habitat2:" Océano",
      vidapromedio2: " 3-5 años",
      nombrecientifico2:"Octopoda",
      dieta2:" Se alimenta de crustáceos, otros moluscos y peces, por lo tanto, son carnívoros.",

      title3:"Medusa",
      habitat3:" Océano",
      vidapromedio3:" Entre 6 meses-2 años",
      nombrecientifico3:" Medusozoa",
      dieta3:" Son animales generalmente carnívoros y se alimentan de organismos del plancton, crustáceos, huevos y larvas de peces, peces pequeños y también de otras medusas",


    }

  }
}
</script>

<style scoped>
#boxes{
  padding-top: 100px;
}

#animal3{
  max-width: 180px;
}
</style>