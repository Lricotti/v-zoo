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
  margin-right: 340px;
}
.izquierda{
  margin-right: 40px;
}

.selvapic{
  width: 300px;
  height: 300px;
  margin-left: 20px;
  margin-right: 20px;
  box-shadow: 7px 10px 15px black;
}
.aguapic{
  width: 300px;
  height: 300px;
  margin-left: 20px;
  margin-right: 20px;
  box-shadow: 7px 10px 15px black;
}
.desiertopic{
  width: 300px;
  height: 300px;
  margin-left: 20px;
  margin-right: 20px;
  box-shadow: 7px 10px 15px black;
}
.tundrapic{
  width: 300px;
  height: 300px;
  margin-left: 20px;
  margin-right: 20px;
  box-shadow: 7px 10px 15px black;
}
.selvapic:hover{
  opacity: 0.6;

}
.aguapic:hover{
  opacity: 0.6;

}
.tundrapic:hover{
  opacity: 0.6;

}
.desiertopic:hover{
  opacity: 0.6;
}

#selva{
  margin-bottom: 200px;
}

#Desierto{
  margin-bottom: 200px;
}
h2{
  color: black;
  text-decoration: white;
  top: 50%;
  bottom: 50%;
  right: 50%;
  left: 50%;
  margin-bottom: -25%;
  margin-top: 50%;
  font-size: 40px;
  font-family: "Roboto Light";

}
img {
  max-width: 420px;
  border-radius: 50%;
}

</style>