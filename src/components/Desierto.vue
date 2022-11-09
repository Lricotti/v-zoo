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
      <img src="../assets/img/ZorroDesierto.jpg" class="animal33">
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
      title1:"COYOTE",
      habitat1:" Desierto",
      vidapromedio1: " 6 años",
      nombrecientifico1:" Canis latrans",
      dieta1:" Se alimenta de una gran variedad de presas, incluyendo mamíferos, aves, reptiles, anfibios, peces, crustáceos, artrópodos, carroña, frutas y semillas",

      title2:"CAMELLO",
      habitat2:" Desierto",
      vidapromedio2: " 40 años",
      nombrecientifico2:" Camelus",
      dieta2:" Son herbívoros y su dieta contiene sal, por lo que suelen comer pasto y plantas del desierto",

      title3:"FÉNEC",
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
  font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif;
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  background: #c7a17a;
  margin: 0 0 25px;
  overflow: hidden;
  padding: 20px;
  border-radius: 35px 0px 35px 0px;
  -moz-border-radius: 35px 0px 35px 0px;
  -webkit-border-radius: 35px 0px 35px 0px;
  border: 2px solid black;
}
.animal1{
  height: 250px;
  border: 5px solid black;
}
.secondbox{
  display: inline;
  font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif;
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  background: #c7a17a;
  margin: 0 0 25px;
  overflow: hidden;
  padding: 20px;
  border-radius: 35px 0px 35px 0px;
  -moz-border-radius: 35px 0px 35px 0px;
  -webkit-border-radius: 35px 0px 35px 0px;
  border: 2px solid #5878ca;
}
.animal2{
  height: 250px;
  border: 5px solid black;
}
.thirdbox{
  font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif;
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  background: #c7a17a;
  margin: 0 0 25px;
  overflow: hidden;
  padding: 20px;
  border-radius: 35px 0px 35px 0px;
  -moz-border-radius: 35px 0px 35px 0px;
  -webkit-border-radius: 35px 0px 35px 0px;
  border: 2px solid #5878ca;
}
.animal33{
  height: 200px;
  border: 5px solid black;
}
</style>