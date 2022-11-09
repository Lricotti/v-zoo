<template>
  <div id="Home_game">
  <nav>
        <span class="s">
          <router-link to="/">Home</router-link>
        </span>
    <router-link to="/game">Game</router-link>
  </nav>
  </div>
  <h2> Juego interactivo con tu animal favorito</h2>
  <h4 v-if="animal==0">Seleccione su animal favorito para continuar....</h4>
  <input v-else class="animal-button" type="button" value="Cambiar de animal" v-on:click="animal=0">
  <br>
  <br>
  <div id="prueba">
    <div v-if="animal==1">
      <h3>TIBURON!</h3>

    </div>

    <img v-if="animal==0" @click="show_1" src="../assets/img/tiburon.jpg" class="animal_1">
    <img v-if="animal==2 || animal==0" @click="show_2" src="../assets/img/leon.jpg" class="animal_2">
    <img v-if="animal==3 || animal==0" @click="show_3" src="../assets/img/pinguino.jpg" class="animal_4">
    <img v-if="animal==4 || animal==0" @click="show_4" src="../assets/img/osopolar.jpg" class="animal_5">
  </div>

  <br>

  <div v-if="animal>0">
    <input class="punch-button" type="button" value="Punch" v-on:click="punch()">
    <input class="restart-button" type="button" value="Restart" v-on:click="restart()">
   <div id="health">
      <p>Vida del animal</p> <div v-bind:style="{width: vida + '%' }"></div>
   </div>
  </div>

</template>

<script>
export default {
  name: "Game2",
  data() {
    return {
      animal: 0,
      vida: 100,
      hambre: 200,
      amor: 10,
    }
  },
  methods:{
    punch() {
      this.vida -= 10
    },
    restart() {
      this.vida = 100
    },
    show_1() {
      this.animal = 1
    },
    show_2() {
      this.animal = 2
    },
    show_3() {
      this.animal = 3
    },
    show_4() {
      this.animal = 4
    },
  }
}
</script>

<style>
#Home_game{
  font-size: 25px;
}
.s{
  padding-right: 50px;
}
#health{
  width: 200px;
  border: 2px solid #000;
  margin: 0 auto 20px auto;
}

#health div{
  height: 20px;
  background: crimson;
}

#prueba
{ display: flex;
  justify-content: center;
  align-items: center;
}

#tiburon{
  background: url("../assets/img/big_shark.jpg");

}
</style>