<template>
<div id="subscription-main">
<Header v-bind:show-button="false" style="background: radial-gradient(#8EB0C2,lightcyan)"/>
</div>
<div id="boxes">
<div class="firstbox">
  <img src="../assets/img/osopolar.jpg" class="animal1">
  <h2>{{title1}}</h2>
  <h4>Habitat:{{habitat1}}</h4>
  <h4>Nombre cientifico:{{nombrecientifico1}}</h4>
  <h4>Dieta:{{dieta1}}</h4>
  <h4>Vida promedio:{{vidapromedio1}}</h4>
  <audio controls>
    <source src="../assets/audios/sonidorugido-del-oso_Mt96tjdZ.mp3" type="audio/mp3">
  </audio>

</div>
<div class="secondbox">
  <img src="../assets/img/pinguino.jpg" class="animal2">
  <h2>{{title2}}</h2>
  <h4>Habitat:{{habitat2}}</h4>
  <h4>Nombre cientifico:{{nombrecientifico2}}</h4>
  <h4>Dieta:{{dieta2}}</h4>
  <h4>Vida promedio:{{vidapromedio2}}</h4>
  <audio controls>
    <source src="../assets/audios/sonido-de-pinguinos_vaheUaau.mp3" type="audio/mp3">
  </audio>

</div>
  <div class="thirdbox">
    <img src="../assets/img/caribu.jpg" class="animal3">
    <h2>{{title3}}</h2>
    <h4>Habitat:{{habitat3}}</h4>
    <h4>Nombre cientifico:{{nombrecientifico3}}</h4>
    <h4>Dieta:{{dieta3}}</h4>
    <h4>Vida promedio:{{vidapromedio3}}</h4>
    <audio controls>
      <source src="../assets/audios/sonido-de-reno_ZeR0lcU0.mp3" type="audio/mp3">
    </audio>

  </div>
</div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "TundraComp",
  components: {
    Header,
    Footer
  },
  data(){
    return{
      title1:"OSO POLAR",
      habitat1:"Tundra",
      vidapromedio1: " Entre 20 y 25 años",
      nombrecientifico1:"Ursus maritimus",
      dieta1:" Es el miembro más carnívoro de la familia de los osos, se alimenta principalmente de una dieta compuesta por focas anilladas ya que necesita grandes cantidades de grasa para sobrevivir",

      title2:" PINGÜINO",
      habitat2:" Tundra",
      vidapromedio2: " Entre 15 a 20 años",
      nombrecientifico2:" Spheniscidae",
      dieta2:" Consume peces, crustáceos eufásidos(krill) y cefalópodos (calamares)",

      title3:"CARIBÚ",
      habitat3:" Tundra",
      vidapromedio3:" Entre 12 a 15 años",
      nombrecientifico3:" Rangifer tarandus",
      dieta3:" Comen, hojas de sauce y abedul enano, y líquenes (los \"líquenes de los renos\" cetraria y cladonia) en invierno; aunque también comen juncias y hierbas. incluso ingieren plantas venenosas, como ranúnculos de los glaciares.",

    }

  }
}
</script>

<style scoped>
#boxes{
padding-top: 100px;
  display: flex;
  flex-direction: column;
  background: url("../assets/img/tundrafondo.jpeg");
}
.firstbox{
  display: inline;
  font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif;
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  background: #82a1b1;
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
  background: #82a1b1;
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
  background: #82a1b1;
  overflow: hidden;
  padding: 20px;
  border-radius: 35px 35px 35px 35px;
  -moz-border-radius: 35px 35px 35px 35px;
  -webkit-border-radius: 35px 35px 35px 35px;
  border: 2px solid black;
  max-width: 600px;
  margin-left: 30%;
}

.animal1{
  height: 200px;
  border: 5px solid black;
}
.animal2{
  height: 180px;
  border: 5px solid black;
}
.animal3{
  height: 200px;
  border: 5px solid black;
}
</style>