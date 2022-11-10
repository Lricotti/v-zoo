<template>
  <div id="Home_game">
  <nav style="width: 96vw;background: darkgrey; border: 3px solid black">
        <span class="s">
          <router-link to="/">Home|</router-link>
        </span>
    <router-link to="/game">|Game</router-link>
  </nav>
  </div>
  <div style="border: 3px solid black; height: max-content;background: radial-gradient(lightslategrey,lightcyan)">


    <h2 id="Titulo"> Juego interactivo con tu animal favorito</h2>
    <h4 v-if="animal==0" style="font-family: 'Noto Sans Old Italic';">Seleccione el animal con el que desea continuar....</h4>
    <input v-else id="animal-button" type="button" value="Cambiar de animal" v-on:click="animal=0, restart()">
    <div id="fotos">
      <h3 id="que_animal" v-if="animal>0"> ¡ {{ nombre }} !</h3>
      <img v-if="animal==1 || animal==0" @click="show_1" src="../assets/img/tiburon.jpg" id="animal_1" width="310" height="163">
      <img v-if="animal==2 || animal==0" @click="show_2" src="../assets/img/leon.jpg" id="animal_2" width="310" height="163">
      <img v-if="animal==3 || animal==0" @click="show_3" src="../assets/img/pinguino.jpg" id="animal_4" width="310" height="163">
      <img v-if="animal==4 || animal==0" @click="show_4" src="../assets/img/osopolar.jpg" id="animal_5" width="310" height="163">
    </div>

    <br>
    <div v-if="animal>0" id="botones">

      <div>
        <input v-if="variable==1" class="punch-button" type="button" value="❤️" v-on:click="punch(), variable = 0">
       <div id="vida">
          <p>Vida del {{ nombre }}</p> <div v-bind:style="{width: vida + '%' }">{{vida}}</div>
       </div>
      </div>
      <div>
        <input v-if="variable==1" class="Alimentar-button" type="button" value="🍽" v-on:click="eat(), variable = 0">
        <div id="hambre">
          <p>Hambre del {{ nombre }}</p> <div v-bind:style="{width: hambre + '%' }">{{hambre}}</div>
        </div>
      </div>
      <input v-if="animal>0" class="restart-button" type="button" style="color: green" value="Restart values" v-on:click="restart()">
      <p>Puntaje: {{puntaje}}</p>
      <input class="dice-button" type="button" style="color: green" value="Roll dice" v-on:click="dice(), variable = 1">
      <div>
        <input v-if="variable==1" class="dormir-button" type="button" value="💤" v-on:click="sleep(), variable = 0">
        <div id="energia">
          <p>Energia del {{ nombre }}</p> <div v-bind:style="{width: energia + '%' }">{{energia}}</div>
        </div>
      </div>
      <div>
        <input v-if="variable==1" class="jugar-button" type="button" value="⚽️" v-on:click="play(), variable = 0">
        <div id="felicidad">
          <p>Felicidad del {{ nombre }}</p> <div v-bind:style="{width: felicidad + '%' }">{{felicidad}}</div>
        </div>
      </div>
    </div>

    <div>
      <h3 v-if="animal!=0" style="text-decoration: underline; color: black;">5 Datos Curiosos del {{nombre}} que probablemente no conocias</h3>
      <ul v-if="animal==1" id="Datos">
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
      <ul v-if="animal==2" id="Datos">
        <li>Es el rey de la sabana</li>
        Un mito sobre los leones es que son los reyes de la selva, cuando realmente son los reyes de la sabana. Los leones viven en llanuras, pastizales y sabanas y aunque llegaron a habitar gran parte de África, Europa, Oriente Próximo e incluso América del Norte, actualmente viven en zonas muy concretas del noroeste de la India y el sureste y centro de África.
        <li>¿Qué horario de sueño tienen?</li>
        Como costumbres de los leones destacamos que suelen dormir entre 16 y 20 horas al día. El resto de horas las hembras las dedican a cazar, aunque hay veces que adaptan su horario de sueño al de su presa. Mientras, los leones lo dedican a descubrir nuevos territorios. Una última curiosidad es que los leones son capaces de comerse una presa de hasta el doble de su tamaño.
        <li>Viven en matriarcados</li>
        Aunque lo conocemos como “El Rey León”, para sorpresa de muchos, la cohesión social de la manada es gracias a las leonas. Se trata de unidades sociales basadas en el matriarcado donde las hembras son las encargadas de cazar y alimentar al grupo carnívoro. Adoptan una actitud defensiva del territorio que ocupan para evitar que otras hembras puedan invadir su espacio.
        <li>Destacan por su grandeza física</li>
        Solo por detrás de los tigres, los leones son los segundos felinos más grandes. Aunque existen distintos tipos de leones, como los asiáticos y los africanos, la mayoría de ellos acostumbra a medir entre 1,70 y 2,10 metros. En cuanto al peso, pueden llegar a pesar entre 150 y 200 kg.
        <li>Su gran sonoridad los distingue</li>
        Otra curiosidad de los leones es su rugido. Aunque también pueden maullar y ronronear como los gatos, la fama de grandeza de estos felinos viene dada por su rugido y por su pelaje, como ya hemos comentado. El rugido de un león puede llegar a escucharse desde 8 kilómetros de distancia y hasta 114 decibelios. De hecho, es el rugido más fuerte dentro de la especie de los felinos y sirve para marcar territorio, comunicarse entre ellos y ahuyentar a los posibles enemigos de la zona.

      </ul>
      <ul v-if="animal==3" id="Datos">
        <li>Tienen plumas, no pelos</li>
        Una de las razones por las que los pingüinos son capaces de sobrevivir en entornos extremadamente fríos es que tienen plumas, no pelo. Las plumas de los pingüinos son tan buenas para aislar a las aves que el sobrecalentamiento es en realidad más un problema para ellos que el mantenimiento del calor.
        Las plumas de los pingüinos tienen otras propiedades notables, además de su increíble capacidad aislante. También son helofóbicas, lo que significa que repelen el hielo. Por eso pueden sumergirse y salir del agua helada y empaparse con las olas del mar, y no acabar con manchas de hielo en las plumas.
        <li>No tienen dientes</li>
        Al igual que sus primos los pájaros, los pingüinos no tienen dientes. Sin embargo, tienen espinas en el interior de sus picos que pueden parecerse un poco a los dientes. También tienen estas espinas en la lengua: ambos conjuntos de espinas apuntan hacia atrás. Esto les permite sujetar a los peces u otras presas en la boca, y también les ayuda a tragar.
        <li>Comen una gran variedad de alimentos ricos en proteinas</li>
        Los pingüinos son oportunistas, lo que significa que comerán lo que puedan encontrar, dentro de sus preferencias. Varias especies de pingüinos, incluidos los pingüinos de ojos amarillos y los pingüinos rey, comerán de todo, desde calamares y crustáceos hasta peces como el pez plata, las sardinas, los espadines, el pez ópalo, los sardinas y otros peces más pequeños.
        <li>Pueden beber agua salada</li>
        Estas aves pueden beber agua de mar gracias a su glándula supraorbital, que es una glándula especial que filtra la sal de su sangre. Su sistema expulsa entonces la sal de su cuerpo a través de las fosas nasales del pingüino.
        <li>Si, todos los pinguinos son blancos y negros</li>
        Independientemente de dónde los encuentres, o de lo grandes o pequeños que sean, todos los pingüinos son lo que los científicos llaman «contraluz». Tienen la espalda negra y la parte superior de las alas es negra, mientras que el cuello, el pecho y el vientre son blancos.

        Su patrón de coloración sirve de camuflaje muy útil. Los depredadores de los pingüinos, como orcas y focas, nadan principalmente por debajo de ellos en el agua, y cuando miran hacia arriba, es más difícil diferenciar a los pingüinos de la superficie del agua
      </ul>
      <ul v-if="animal==4" id="Datos">
        <li>¿Porque el oso polar tiene el pelaje blanco?</li>
        El oso polar tienen pelaje blanco para que pueda camuflarse en su entorno. Su pelaje está tan bien adaptado para los ambientes árticos que a veces puede confundirse con un montón de nieve.
        <li>¿De que se alimenta?</li>
        El oso polar es el miembro más carnívoro de la familia de los osos, se alimenta principalmente de una dieta compuesta por focas anilladas ya que necesita grandes cantidades de grasa para sobrevivir. El estómago de un oso polar puede recibir el equivalente en comida del 15 al 20% de su propio peso corporal, y su sistema digestivo absorbe aproximadamente el 84% de las proteínas y el 97% de la grasa que consume.
        <li>Les gusta mantenerse limpios</li>
        Al oso polar les gusta mantenerse limpio porque ayuda a las propiedades aislantes de su pelaje. La piel sucia, enmarañada y mojada no funciona tan bien como aislante. Después de alimentarse, el oso polar normalmente se baña nadando o rodando en la nieve. También rueda en la nieve para refrescarse; a pesar de las duras condiciones de su entorno, el oso polar pueden ser propenso a sobrecalentarse.
        <li>Es una especie vunerable</li>
        Aunque es difícil conocer sus poblaciones exactas, los científicos estiman que la mayoría de los osos polares están en declive. Actualmente, la UICN(Unión Internacional para la Conservación de la Naturaleza) lo califica al oso polar como especie “vulnerable” con una población estimada de unos 26.000 ejemplares.
        <li>Puede nadar sin parar durante dias</li>
        En el agua el oso polar puede alcanzar velocidades de hasta 10 kilómetros por hora. Además, pueden recorrer largas distancias y nadar durante mucho tiempo. Sus grandes patas están especialmente adaptadas para nadar, y las utilizan para remar por el agua mientras mantienen sus patas traseras planas como un timón.
      </ul>
    </div>
  </div>
</template>

<script>
import Footer from "../components/Footer";



export default {
  name: "Game2",
  components: {
    Footer
  },
  data() {
    return {
      animal: 0,
      vida: 100,
      hambre: 100,
      felicidad:100,
      energia: 100,
      nombre: [],
      puntaje: 0,
      variable: 0,
    }
  },
  methods:{

    dice: function () {

      if(Math.floor(Math.random()*6 + 1) === 1){
        this.puntaje += 1, this.vida -= 5, this.hambre -=5
      }
      else if(Math.floor(Math.random()*6 + 1) == 2){
        this.puntaje += 2, this.vida -= 10
      }
      else if(Math.floor(Math.random()*6 + 1) == 3){
        this.puntaje += 3, this.energia -= 20, this.felicidad -=10
      }
      else if(Math.floor(Math.random()*6 + 1) == 4){
        this.puntaje += 4, this.hambre -= 15
      }
      else if(Math.floor(Math.random()*6 + 1) == 5){
        this.puntaje += 5, this.energia -= 10, this.hambre -=5
      }
      else if(Math.floor(Math.random()*6 + 1) == 6)
      {this.puntaje += 6, this.energia -=5, this.felicidad -=15, this.vida -=10}

      if (this.vida <0)
        {alert("Perdiste")}
      if (this.energia <0)
        {alert("Perdiste")}
      if (this.hambre <0)
        {alert("Esta con mucha hambre. Volve a reiniciar, para jugar.")}
      if (this.felicidad <0)
        {alert("Esta muy triste. Volve a reiniciar, para jugar.")}

    },

    punch: function() {
      if(this.vida < 96)
      {this.vida += 5}
      else if(alert("Vida llena :)"));
    },

    eat: function() {
      if(this.hambre< 96)
      {this.hambre += 5}
      else if(alert("Ya no necesita comer!"));
    },

    sleep: function() {
      if(this.energia < 96)
      {this.energia += 5}
      else if(alert("No hace falta dormir, si la energia esta al tope de potencia"));
    },

    play: function() {
      if(this.felicidad < 96)
      {this.felicidad += 5}
      else if(alert("Mejor hagamos otra cosa, no quiere jugar ahora. Parece que ya esta muy feliz <3"));
    },

    restart() {
      this.vida = 100
      this.energia = 100
      this.hambre = 100
      this.felicidad = 100
      this.puntaje = 0
      this.variable = 0
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
  background: ghostwhite;
  width: 200px;
  border: 2px solid #000;
  margin: 0 auto 20px auto;
}
#vida div{
  height: 20px;
  background: crimson;
}

#hambre{
  background: ghostwhite;
  width: 200px;
  border: 2px solid #000;
  margin: 0 auto 20px auto;
}
#hambre div{
  height: 20px;
  background: cornflowerblue;
}

#energia{
  background: ghostwhite;
  width: 200px;
  border: 2px solid #000;
  margin: 0 auto 20px auto;
}
#energia div{
  height: 20px;
  background: darkgreen;
}
#felicidad{
  background: ghostwhite;
  width: 200px;
  border: 2px solid #000;
  margin: 0 auto 20px auto;
}
#felicidad div{
  height: 20px;
  background: coral;
}

#Titulo{
  color: black;
  font-weight: 900;
  ont-family: "Freestyle Script";
  font-style: italic;
  font-size: xx-large;
}
#Datos{
  list-style-type: decimal;
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin: 0 auto;
}

#Datos li{
  color: black;
  font-weight: bold;
  text-align: left;
}

#botones{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: auto;
}

#fotos {
  justify-content: space-between;
  align-items: center;
}

#fotos img{
  border: 2px solid black;
  justify-content: space-evenly;
  border-radius: 10px;
  margin: 10px;
}

#animal-button{
  color: black;
  font-family: "Noto Sans Imperial Aramaic";
  background: antiquewhite;
  width: 300px;
}

#que_animal{
  font-weight: 900;
  font-family: "Lao MN";
  font-size: xx-large;
}
</style>