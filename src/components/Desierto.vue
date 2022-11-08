<template>
  <div id="subscription-main">
    <Header v-bind:show-button="false"/>
  </div>
  <div id="boxes">
    <div class="firstbox">
      <img src="../assets/img/coyote.jpg" class="animal1">
      <h2>{{title1}}</h2>
      <h4>Habitat:{{habitat1}}</h4>
      <h4>Vida Promedio:{{vidapromedio1}}</h4>
      <h4>Nombre cientifico:{{nombrecientifico1}}</h4>
      <h4>Dieta:{{dieta1}}</h4>
      <audio controls>
        <source src="" type="audio/mp3">
      </audio>

    </div>
    <div class="secondbox">
      <img src="../assets/img/camello.jpg" class="animal2">
      <h2>{{title2}}</h2>
      <h4>Habitat:{{habitat2}}</h4>
      <h4>Vida promedio:{{vidapromedio2}}</h4>
      <h4>Nombre cientifico:{{nombrecientifico2}}</h4>
      <h4>Dieta:{{dieta2}}</h4>



      <audio controls>
        <source src="" type="audio/mp3">
      </audio>

    </div>
    <div class="thirdbox">
      <img src="../assets/img/ZorroDesierto.jpg">
      <h2>{{title3}}</h2>
      <h4>Habitat:{{habitat3}}</h4>
      <h4>Vida promedio:{{vidapromedio3}}</h4>
      <h4>Nombre cientifico:{{nombrecientifico3}}</h4>
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
  name: "DesiertoComp",
  components: {
    Header,
    Footer
  },
  data(){
    return{
      title1:"Coyote",
      habitat1:" Desierto",
      vidapromedio1: " 6 años",
      nombrecientifico1:" Canis latrans",
      dieta1:" Se alimenta de una gran variedad de presas, incluyendo mamíferos, aves, reptiles, anfibios, peces, crustáceos, artrópodos, carroña, frutas y semillas",

      title2:"Camello",
      habitat2:" Desierto",
      vidapromedio2: " 40 años",
      nombrecientifico2:" Camelus",
      dieta2:" Son herbívoros y su dieta contiene sal, por lo que suelen comer pasto y plantas del desierto",

      title3:"Fénec",
      habitat3:" Desierto",
      vidapromedio3: " 10 a 12 años",
      nombrecientifico3:" Vulpes zerda",
      dieta3:" Buscan plantas para alimentarse, pero también comen roedores, huevos, reptiles e insectos",
    }

  }
}
</script>

<style scoped>
#boxes{
  display: flex;
  flex-direction: column;
  padding-top: 100px;
}
.firstbox{
  display: inline;

}
.secondbox{
  display: inline;
}
</style>