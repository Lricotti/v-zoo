<template>
  <div id="homepage">
    <Header/>

    <span id="home-container">
       <h1>Habitats</h1>
      <div id="div-SideBar">
        <SideBar/>
      </div>
      <div id="div-Home">
        <HomeComp/>
      </div>
    </span>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";
import HomeComp from "@/components/Home";


export default {
  name: "HomeView",
  components: {
    HomeComp,
    SideBar,
    Header,
    Footer,
  },

}

</script>

<style scoped>
#homepage {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  background-color: lightseagreen ;
}
#home-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: -100px;

}
#div-SideBar {
  margin-top: -75px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-bottom: -1px;
}
#div-Home{
  display: flex;
  flex-direction: column;
  justify-content: right;
  margin-top: 157px;
}

h1{
  margin-left: 335px;
}



</style>