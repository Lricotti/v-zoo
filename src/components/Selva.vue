<template>
  <div id="subscription-main">
    <Header v-bind:show-button="false"/>
  </div>
  <div id="boxes">
    <div class="firstbox">
      <img src="../assets/img/leon.jpg" class="animal1">
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
      <img src="../assets/img/jaguar.jpg" class="animal2">
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
        <img src="../assets/img/mono.jpg" class="animal3">
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
  name: "SelvaComp",
  components: {
    Header,
    Footer
  },
  data(){
    return{
      title1:"León",
      habitat1:" Selva",
      vidapromedio1: " Los machos entre 8-10 años y las hembras entre 15-16 años",
      nombrecientifico1:" Panthera leo",
      dieta1:" Carnívora; principalmente animales de mediano y gran tamaño como ñúes, impalas y otros antílopes, cebras, jirafas, búfalos y también carroña",

      title2:"Jaguar",
      habitat2:" Selva",
      vidapromedio2: " 12–15 años",
      nombrecientifico2:" Panthera onca",
      dieta2:" Cazan peces, tortugas e incluso caimanes, tambien se alimentan de venados, pecaríes, capibaras, tapires y otros animales terrestres, y para capturarlos, prefieren emboscarse por la noche",

      title3:"Mono",
      habitat3:" Selva",
      vidapromedio3: " 15-20 años",
      nombrecientifico3:" Platyrrhini",
      dieta3:" Los monos pequeños como los titís o los tamarinos comen más insectos y menos frutas. Pero a medida que aumenta el tamaño corporal, también aumenta la predilección por alimentos jugosos"


    }

  }
}
</script>

<style scoped>
#boxes{
  padding-top: 100px;
}
</style>