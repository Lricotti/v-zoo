<template>
<div id="subscription-main">
<Header v-bind:show-button="false"/>
</div>
<div class="boxes">
<div class="firstbox">
  <img src="../assets/img/osopolar.jpg" class="animal1">
  <h2>{{title1}}</h2>
  <h4>Habitat:{{habitat1}}</h4>
  <h4>Nombre cientifico:{{nombrecientifico1}}</h4>
  <h4>Dieta:{{dieta1}}</h4>
  <h4>Vida promedio:{{vidapromedio1}}</h4>
  <audio controls>
    <source src="" type="audio/mp3">
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
    <source src="" type="audio/mp3">
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
  name: "TundraComp",
  components: {
    Header,
    Footer
  },
  data(){
    return{
      title1:"Oso polar",
      habitat1:"Tundra",
      vidapromedio1: " Entre 20 y 25 años",
      nombrecientifico1:"Ursus maritimus",
      dieta1:" Es el miembro más carnívoro de la familia de los osos, se alimenta principalmente de una dieta compuesta por focas anilladas ya que necesita grandes cantidades de grasa para sobrevivir",

      title2:" Pingüino",
      habitat2:" Tundra",
      vidapromedio2: " Entre 15 a 20 años",
      nombrecientifico2:" Spheniscidae",
      dieta2:" Consume peces, crustáceos eufásidos(krill) y cefalópodos (calamares)",

      title3:"Caribú",
      habitat3:" Tundra",
      vidapromedio3:" Entre 12 a 15 años",
      nombrecientifico3:" Rangifer tarandus",
      dieta3:" Comen, hojas de sauce y abedul enano, y líquenes (los \"líquenes de los renos\" cetraria y cladonia) en invierno; aunque también comen juncias y hierbas. incluso ingieren plantas venenosas, como ranúnculos de los glaciares.",




    }

  }
}
</script>

<style scoped>

</style>