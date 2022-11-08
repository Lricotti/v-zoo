<template>
  <div id="Contenido_Total">
    <div id="Izq">
      <img src="@/assets/Logofinal.png" alt="logo_pagina">
    </div>


    <div id="Medio_Del_Header">
    <div id="Home_Game">
      <nav>
        <span class="s">
          <router-link to="/">Home</router-link>
        </span>
        <router-link to="/game">Game</router-link>
      </nav>
      <router-view/>
    </div>
    <h1 id="NombrePagina">{{ Nombre }}</h1>
      <div id="Eslogan_Negativo">
        <h4 id="Eslogan">{{ Eslogan }}</h4>
      </div>
    </div>

    <div class="Derecha_del_Header">
        <div style="width: 145px">
          <router-link style="text-decoration: none;color:inherit" to="Registro">
            <div id="menu-container" v-if="showButton">
             {{ Boton }}
            </div>
          </router-link>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
  props: {
    showButton: {
      type: Boolean,
      default: true
    }
  },



  data() {
    return {
      Nombre:"V-Zoo",
      Eslogan:"Un zoologico sin rejas",
      Boton: "Registrarme",
    }
  }
}
</script>

<style scoped>

#Contenido_Total {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background: #f6f4ef;
  border-bottom: 2px solid gray;
  padding-bottom: -1000px;
  box-shadow: 0 4px lightgreen;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
}
#Izq{
  margin-left: -165px;
}


img {
  max-width: 650px;
  border-radius: 50%;
}

#Medio_Del_Header {
  text-align: center;
}

#Home_Game{
  font-size: 25px;
  padding-right: 250px;
}



#NombrePagina {
  font-family: "Freestyle Script";
  font-style: italic;
  font-size: 700%;
  padding-right: 250px;
}

#Eslogan_Negativo{
  margin-top: -3px;
}

#Eslogan {
  font-style: italic;
  font-size: 20px;
  padding-right: 250px;
  margin-top: -50px;
  margin-bottom: -25px;
}

#menu-container {
  align-self: center;
  padding: 15px 25px;
  border-radius: 5px;
  background: #c7a17a;
  border: 2px solid #493a2b;
}

#menu-container:hover{
  background-color: #DBB186;
}

.Derecha_del_Header {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}
.s{
  padding-right: 50px;
}
nav{
  margin-bottom: -50px;
}

</style>