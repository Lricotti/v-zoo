<template>
  <div id="Home_game">
  <nav style="width: 96vw;background: darkgrey; border: 3px solid black">
        <span class="s">
          <router-link to="/">Home|</router-link>
        </span>
    <router-link to="/game">|Game</router-link>
  </nav>
  </div>
  <div style="width: 100vw;
  height: 200vh;
  background: linear-gradient(aliceblue, white);
  padding-top: 10px; border: 3px solid black">


    <h2 id="Titulo"> Juego interactivo con tu animal favorito</h2>
    <h4 v-if="animal==0">Seleccione el animal con el que desea continuar....</h4>
    <input v-else class="animal-button" type="button" value="Cambiar de animal" v-on:click="animal=0">
    <br>
    <br>
    <div id="prueba">
      <h3 v-if="animal>0"> ¡ {{ nombre }} !</h3>


      <img v-if="animal==1 || animal==0" @click="show_1" src="../assets/img/tiburon.jpg" class="animal_1" width="310" height="163">
      <img v-if="animal==2 || animal==0" @click="show_2" src="../assets/img/leon.jpg" class="animal_2" width="310" height="163">
      <img v-if="animal==3 || animal==0" @click="show_3" src="../assets/img/pinguino.jpg" class="animal_4" width="310" height="163">
      <img v-if="animal==4 || animal==0" @click="show_4" src="../assets/img/osopolar.jpg" class="animal_5" width="310" height="163">
    </div>

    <br>
    <div v-if="animal>0" id="Botones">

      <div>
        <input class="punch-button" type="button" value="🥊" v-on:click="punch()">
       <div id="vida">
          <p>Vida del {{ nombre }}</p> <div v-bind:style="{width: vida + '%' }"></div>
       </div>
      </div>
      <div>
        <input class="Alimentar-button" type="button" value="🍽" v-on:click="eat()">
        <div id="hambre">
          <p>Hambre del {{ nombre }}</p> <div v-bind:style="{width: hambre + '%' }"></div>
        </div>
      </div>
      <input v-if="animal>0" class="restart-button" type="button" style="color: green" value="Restart values" v-on:click="restart()">
      <div>
        <input class="dormir-button" type="button" value="💤" v-on:click="sleep()">
        <div id="energia">
          <p>Energia del {{ nombre }}</p> <div v-bind:style="{width: energia + '%' }"></div>
        </div>
      </div>
      <div>
        <input class="jugar-button" type="button" value="⚽️" v-on:click="play()">
        <div id="felicidad">
          <p>Felicidad del {{ nombre }}</p> <div v-bind:style="{width: felicidad + '%' }"></div>
        </div>
      </div>
    </div>

    <div>
      <h3 v-if="animal!=0" style="text-decoration: underline">5 Datos Curiosos del {{nombre}} que probablemente no conocias...!</h3>
      <ul v-if="animal==1" id="Tiburon">
          <li>No tienen huesos</li>
              Sus esqueletos están hechos de cartílagos, esto los hace más ligeros y les da flexibilidad, lo que les permite moverse con facilidad y ser veloces.
          <li>Dentadura eterna</li>
              Mientras que los humanos tenemos en promedio 32 dientes que renovamos una vez en la vida, ellos no paran de renovarlos, ya que carecen de raíces y se rompen con facilidad. Un diente de tiburón tarda alrededor de una semana en caer, el nuevo diente puede aparecer en tan solo un día. Así pueden perder hasta 1000 dientes por año. Para que te hagas una idea, un tiburón tigre puede producir 24,000 dientes durante una década.
          <li>Un gran rastreador</li>
              Como buenos cazadores, los tiburones tienen un gran sentido del olfato, pueden oler una simple gota de sangre desde por lo menos 100 metros de distancia, dependiendo del orificio nasal por el que percibe el olor, se dirige hacia la izquierda o derecha.
          <li>¿Cómo duermen?</li>
              Los tiburones saben cómo renovar energía y mantener sus reservas, mientras siguen en movimiento. Nunca pueden dejar de nadar, ya que carecen de vejiga natatoria, que permite a los peces flotar; y porque abren las boca mientras nadan para absorber oxígeno por las branquias. Si dejan de nadar, dejan de flotar y respirar. Por ello, para descansar,  alternan periodos de inactividad, en los que solo una parte del cerebro duerme.
          <li>Los humanos no somos parte del menú</li>
              Este es un viejo mito nacido en los años 50 y acentuado por la película Tiburón. Los tiburones consumen sobretodo otros peces, moluscos y crustáceos, y las especies más grandes también consumen mamíferos marinos. Otro grupo de tiburones son herbívoros y prefieren solo el plancton.
      </ul>
      <ul v-if="animal==2" id="Leon">
        <li>No tienen huesos</li>
        Sus esqueletos están hechos de cartílagos, esto los hace más ligeros y les da flexibilidad, lo que les permite moverse con facilidad y ser veloces.
        <li>Dentadura eterna</li>
        Mientras que los humanos tenemos en promedio 32 dientes que renovamos una vez en la vida, ellos no paran de renovarlos, ya que carecen de raíces y se rompen con facilidad. Un diente de tiburón tarda alrededor de una semana en caer, el nuevo diente puede aparecer en tan solo un día. Así pueden perder hasta 1000 dientes por año. Para que te hagas una idea, un tiburón tigre puede producir 24,000 dientes durante una década.
        <li>Un gran rastreador</li>
        Como buenos cazadores, los tiburones tienen un gran sentido del olfato, pueden oler una simple gota de sangre desde por lo menos 100 metros de distancia, dependiendo del orificio nasal por el que percibe el olor, se dirige hacia la izquierda o derecha.
        <li>¿Cómo duermen?</li>
        Los tiburones saben cómo renovar energía y mantener sus reservas, mientras siguen en movimiento. Nunca pueden dejar de nadar, ya que carecen de vejiga natatoria, que permite a los peces flotar; y porque abren las boca mientras nadan para absorber oxígeno por las branquias. Si dejan de nadar, dejan de flotar y respirar. Por ello, para descansar,  alternan periodos de inactividad, en los que solo una parte del cerebro duerme.
        <li>Los humanos no somos parte del menú</li>
        Este es un viejo mito nacido en los años 50 y acentuado por la película Tiburón. Los tiburones consumen sobretodo otros peces, moluscos y crustáceos, y las especies más grandes también consumen mamíferos marinos. Otro grupo de tiburones son herbívoros y prefieren solo el plancton.
      </ul>
      <ul v-if="animal==3" id="Pinguino">
        <li>No tienen huesos</li>
        Sus esqueletos están hechos de cartílagos, esto los hace más ligeros y les da flexibilidad, lo que les permite moverse con facilidad y ser veloces.
        <li>Dentadura eterna</li>
        Mientras que los humanos tenemos en promedio 32 dientes que renovamos una vez en la vida, ellos no paran de renovarlos, ya que carecen de raíces y se rompen con facilidad. Un diente de tiburón tarda alrededor de una semana en caer, el nuevo diente puede aparecer en tan solo un día. Así pueden perder hasta 1000 dientes por año. Para que te hagas una idea, un tiburón tigre puede producir 24,000 dientes durante una década.
        <li>Un gran rastreador</li>
        Como buenos cazadores, los tiburones tienen un gran sentido del olfato, pueden oler una simple gota de sangre desde por lo menos 100 metros de distancia, dependiendo del orificio nasal por el que percibe el olor, se dirige hacia la izquierda o derecha.
        <li>¿Cómo duermen?</li>
        Los tiburones saben cómo renovar energía y mantener sus reservas, mientras siguen en movimiento. Nunca pueden dejar de nadar, ya que carecen de vejiga natatoria, que permite a los peces flotar; y porque abren las boca mientras nadan para absorber oxígeno por las branquias. Si dejan de nadar, dejan de flotar y respirar. Por ello, para descansar,  alternan periodos de inactividad, en los que solo una parte del cerebro duerme.
        <li>Los humanos no somos parte del menú</li>
        Este es un viejo mito nacido en los años 50 y acentuado por la película Tiburón. Los tiburones consumen sobretodo otros peces, moluscos y crustáceos, y las especies más grandes también consumen mamíferos marinos. Otro grupo de tiburones son herbívoros y prefieren solo el plancton.
      </ul>
      <ul v-if="animal==4" id="Oso Polar">
        <li>No tienen huesos</li>
        Sus esqueletos están hechos de cartílagos, esto los hace más ligeros y les da flexibilidad, lo que les permite moverse con facilidad y ser veloces.
        <li>Dentadura eterna</li>
        Mientras que los humanos tenemos en promedio 32 dientes que renovamos una vez en la vida, ellos no paran de renovarlos, ya que carecen de raíces y se rompen con facilidad. Un diente de tiburón tarda alrededor de una semana en caer, el nuevo diente puede aparecer en tan solo un día. Así pueden perder hasta 1000 dientes por año. Para que te hagas una idea, un tiburón tigre puede producir 24,000 dientes durante una década.
        <li>Un gran rastreador</li>
        Como buenos cazadores, los tiburones tienen un gran sentido del olfato, pueden oler una simple gota de sangre desde por lo menos 100 metros de distancia, dependiendo del orificio nasal por el que percibe el olor, se dirige hacia la izquierda o derecha.
        <li>¿Cómo duermen?</li>
        Los tiburones saben cómo renovar energía y mantener sus reservas, mientras siguen en movimiento. Nunca pueden dejar de nadar, ya que carecen de vejiga natatoria, que permite a los peces flotar; y porque abren las boca mientras nadan para absorber oxígeno por las branquias. Si dejan de nadar, dejan de flotar y respirar. Por ello, para descansar,  alternan periodos de inactividad, en los que solo una parte del cerebro duerme.
        <li>Los humanos no somos parte del menú</li>
        Este es un viejo mito nacido en los años 50 y acentuado por la película Tiburón. Los tiburones consumen sobretodo otros peces, moluscos y crustáceos, y las especies más grandes también consumen mamíferos marinos. Otro grupo de tiburones son herbívoros y prefieren solo el plancton.
      </ul>
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
      hambre: 100,
      felicidad:100,
      energia: 100,
      amor: 100,
      nombre: [],
    }
  },
  methods:{
    punch: function() {
      if(this.vida > 21)
      {this.vida -= 20}
      else if(alert("Vida muy baja"))
      if(this.felicidad > 21){
      this.felicidad -= 20}
      else if(alert("Esta muy triste, porque no juegan un rato?"))
      if(this.hambre>11){
        this.hambre -= 10}
      else (alert("Necesita comer"))
    },

    eat: function() {
      if(this.vida<= 95)
      {this.vida += 5}
      if(this.felicidad<= 90){
        this.felicidad += 10}
      if(this.hambre<=75){
        this.hambre += 25}
      if(this.energia<=90){
        this.energia += 10}
    },

    sleep: function() {
      if(this.vida<=85)
      {this.vida += 15}
      if(this.felicidad > 11){
        this.felicidad -= 10}
      if(this.hambre>16){
        this.hambre -= 15}
      if(this.energia<=50){
        this.energia += 50
      }
    },
    play: function() {
      if(this.felicidad<= 60){
        this.felicidad += 40}
      if(this.hambre>16){
        this.hambre -= 15}
      if(this.energia >31){
        this.energia -= 30}
    },


    restart() {
      this.vida = 100
      this.energia = 100
      this.hambre = 100
      this.felicidad = 100
    },
    show_1() {
      this.animal = 1
      this.nombre = "Tiburon"
    },
    show_2() {
      this.animal = 2
      this.nombre = "Leon"
    },
    show_3() {
      this.animal = 3
      this.nombre = "Pinguino"
    },
    show_4() {
      this.animal = 4
      this.nombre = "Oso Polar"
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
#vida{
  width: 200px;
  border: 2px solid #000;
  margin: 0 auto 20px auto;
}
#vida div{
  height: 20px;
  background: crimson;
}

#hambre{
  width: 200px;
  border: 2px solid #000;
  margin: 0 auto 20px auto;
}
#hambre div{
  height: 20px;
  background: cornflowerblue;
}

#energia{
  width: 200px;
  border: 2px solid #000;
  margin: 0 auto 20px auto;
}
#energia div{
  height: 20px;
  background: yellow;
}
#felicidad{
  width: 200px;
  border: 2px solid #000;
  margin: 0 auto 20px auto;
}
#felicidad div{
  height: 20px;
  background: coral;
}

#prueba {
  justify-content: space-between;
  align-items: center;
}

#Titulo{
  color: black;
}

#0{
  width: 100vw;
  height: 100vh;
  background: radial-gradient(cornflowerblue, white);
  padding-top: 10px;
}
#Tiburon{
  list-style-type: decimal;
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin: 0 auto;
}

#Tiburon li{
  color: black;
  font-weight: bold;

}

#2{
  width: 100vw;
  height: 100vh;
  background: radial-gradient(cornflowerblue, white);
  padding-top: 10px;
}
#3{
  width: 100vw;
  height: 100vh;
  background: radial-gradient(cornflowerblue, white);
  padding-top: 10px;
}
#4{
  width: 100vw;
  height: 100vh;
  background: radial-gradient(cornflowerblue, white);
  padding-top: 10px;
}

#Botones{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: auto;
}

</style>