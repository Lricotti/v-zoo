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
  background-image: url("../assets/img/zorro-wallpaper.jpg") ;
  background-repeat: repeat;
  background-attachment: fixed;


}
#home-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: -100px;



}
#div-SideBar {
  margin-top: -117px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-bottom: -100px;


}
#div-Home{
  display: flex;
  flex-direction: column;
  justify-content: right;
  margin-top: 157px;
}

h1 {

  margin-top: auto;
  margin-left: 310px;
  font-family: "Roboto Light";
  font-size: 400%;
  background-color: white;
  border-color: black;
  border-bottom: black;
  opacity: 90%;





}



</style>