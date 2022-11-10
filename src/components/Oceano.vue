<template>
  <div id="subscription-main">
    <Header v-bind:show-button="false" style="background: radial-gradient(#4895E7,lightblue)"/>
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
        <source src="../assets/audios/Tiburon.mp3" type="audio/mp3">
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
        <source src="../assets/audios/pulpo.mp3" type="audio/mp3">
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
          <source src="../assets/audios/sonido-de-la-medusa-vision-en-3d_RXVX3Qc7.mp3" type="audio/mp3">
        </audio>
      </div>
  </div>
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
      title1:"TIBURON",
      habitat1:" Océano",
      vidapromedio1: " 20-30 años",
      nombrecientifico1:" Selachimorpha",
      dieta1:" Comen pescado o invertebrados, como calamares o almejas",

      title2:" PULPO",
      habitat2:" Océano",
      vidapromedio2: " 3-5 años",
      nombrecientifico2:"Octopoda",
      dieta2:" Se alimenta de crustáceos, otros moluscos y peces, por lo tanto, son carnívoros.",

      title3:"MEDUSA",
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
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  background: url("../assets/img/oceanofondo.jpeg");
}
.firstbox{
  display: inline;
  font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif;
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  background: #3999FF;
  overflow: hidden;
  padding: 20px;
  border-radius: 35px 35px 35px 35px;
  -moz-border-radius: 35px 35px 35px 35px;
  -webkit-border-radius: 35px 35px 35px 35px;
  border: 2px solid black;
  max-width: 600px;
  margin-left: 30%;
  margin-bottom: 5%;


}
.secondbox{
  display: inline;
  font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif;
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  background: #3999FF;
  overflow: hidden;
  padding: 20px;
  border-radius: 35px 35px 35px 35px;
  -moz-border-radius: 35px 35px 35px 35px;
  -webkit-border-radius: 35px 35px 35px 35px;
  border: 2px solid black;
  max-width: 600px;
  margin-left: 30%;
  margin-bottom: 5%;
}
.thirdbox{
  display: inline;
  font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif;
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  background: #3999FF;
  overflow: hidden;
  padding: 20px;
  border-radius: 35px 35px 35px 35px;
  -moz-border-radius: 35px 35px 35px 35px;
  -webkit-border-radius: 35px 35px 35px 35px;
  border: 2px solid black; max-width: 600px;
  margin-left: 30%;
}
.animal1{
  height: 200px;
  border: 5px solid black;
}
.animal2{
  height: 250px;
  border: 5px solid black;
}

#animal3{
  height: 250px;
  border: 5px solid black;

}
</style>