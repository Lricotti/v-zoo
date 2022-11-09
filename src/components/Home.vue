<template>
  <span id="main-home">
    <span class="derecha">
      <div id="selva">
        <router-link style="text-decoration: none;color:inherit" to="selva">
          <h2>Selva</h2>
          <img src="../assets/img/selva.jpg" class="selvapic">
        </router-link>
      </div>

      <div id="Tundra">
        <router-link style="text-decoration: none;color:inherit" to="tundra">
          <h2>Tundra</h2>
          <img src="../assets/img/tundra.jpg" class="tundrapic">
        </router-link>
      </div>
      </span>
    <span class="izquierda">
      <div id="Desierto">
        <router-link style="text-decoration: none;color:inherit" to="desierto">
          <h2>Desierto</h2>
          <img src="../assets/img/desierto.jpg" class="desiertopic">
        </router-link>
      </div>

      <div id="Agua">
        <router-link style="text-decoration: none;color:inherit" to="oceano">
          <h2>Oceano</h2>
          <img src="../assets/img/agua.jpg" class="aguapic">
        </router-link>
      </div>
      </span>

  </span>

</template>

<script>
export default {
  name: "HomeComp"
}
</script>

<style scoped>
#main-home {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: right;
  align-items: center;
  margin-top: -1300px;

}

.derecha{
  margin-right: 200px;
}
.izquierda{
  margin-right: 40px;
}

.selvapic{
  width: 300px;
  height: 300px;
  margin-left: 20px;
  margin-right: 20px;

}
.aguapic{
  width: 300px;
  height: 300px;
  margin-left: 20px;
  margin-right: 20px;
}
.desiertopic{
  width: 300px;
  height: 300px;
  margin-left: 20px;
  margin-right: 20px;
}
.tundrapic{
  width: 300px;
  height: 300px;
  margin-left: 20px;
  margin-right: 20px;
}
.selvapic:hover{
  opacity: 0.7;

}
.aguapic:hover{
  opacity: 0.7;

}
.tundrapic:hover{
  opacity: 0.7;

}
.desiertopic:hover{
  opacity: 0.7;

}

#selva{
  margin-bottom: 200px;
}

#Desierto{
  margin-bottom: 200px;
}
h2{
  color: black;
  text-decoration: none;
}



.home-img:hover {
  opacity: 0.7;
}
.button-box:hover {
  background-color: #3e1c08;
}
img {
  max-width: 420px;
  border-radius: 50%;
}

</style>