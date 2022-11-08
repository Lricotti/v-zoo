<template>
  <div id="Contenido_SideBar">
  <div id="titulo">
    <h3>Ultimas Noticias!</h3>
    </div>
    <div v-for="item in data" :key=item.id class="contenedor_articulos" >
      <a href={{item.link}} class="titulo">{{item.titulo}}</a>
      <br><br>
      <img class="product-img" src="{{item.image}}">
      <p class="medio">Medio: {{item.medio}}</p>
      <p class="fecha">Fecha: {{item.fecha}}</p>
      <br>

    </div>


  </div>
</template>

<script>

import jsonData from "../assets/js/jsonData.json";

export default {
    name: 'SideBar',

  data() {
    return {
      data: jsonData,



    }
  }

}
</script>

<style scoped>
#Contenido_SideBar {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: inline-block;
  margin-left: 10px;
  width: 300px;
  border: 5px double rgb(109, 55, 55);
  border-radius: 5px;
  text-align: center;
  margin-bottom: 5px;
  height: 1290px;
  background-color: #228b22;
}
.fecha{
  border-bottom: 1px solid black;
  margin-bottom: 0px;
  padding-bottom: 6px;
}
.product-img{
  width: 150px;
  height: 150px;
}
.contenedor_articulos{
  color: black;
}
.titulo{
  color: black;
}
a:link{
  text-decoration: none;
}
</style>