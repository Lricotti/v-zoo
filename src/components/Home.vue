<template>
  <span id="main-home">
    <span class="derecha">
      <div id="selva">
        <router-link to="selva">
          <h2>Selva</h2>
          <img src="../assets/img/selva.jpg" class="selvapic">
        </router-link>
      </div>

      <div id="Tundra">
        <router-link to="tundra">
          <h2>Tundra</h2>
          <img src="../assets/img/tundra.jpg" class="tundrapic">
        </router-link>
      </div>
      </span>
    <span class="izquierda">
      <div id="Desierto">
        <router-link to="desierto">
          <h2>Desierto</h2>
          <img src="../assets/img/desierto.jpg" class="desiertopic">
        </router-link>
      </div>

      <div id="Agua">
        <router-link to="oceano">
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
  margin-right: 340px;
}
.izquierda{
  margin-right: 40px;
}

.selvapic{
  width: 300px;
  height: 300px;
  margin-left: 40px;
  margin-right: 40px;

}
.aguapic{
  width: 300px;
  height: 300px;
  margin-left: 40px;
  margin-right: 40px;
}
.desiertopic{
  width: 300px;
  height: 300px;
  margin-left: 40px;
  margin-right: 40px;
}
.tundrapic{
  width: 300px;
  height: 300px;
  margin-left: 40px;
  margin-right: 40px;
}

#selva{
margin-bottom: 200px;
}
#Desierto{
  margin-bottom: 200px;
}


.home-img:hover {
  opacity: 0.7;
}
.button-box:hover {
  background-color: #3e1c08;
}

</style>