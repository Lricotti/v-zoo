<template>

  <div id="subscription-main">
    <Header v-bind:show-button="false"/>

    <div id="subscription-container">
      <h2>{{ title }}</h2>
      <span>{{ subtitle }}</span>

      <form id="subscription-form" method="post" @submit.prevent="registrate()">
        <label>Nombre<span class="required-field">*</span></label>
        <input type="text" v-model="firstName" required>

        <label>Apellido<span class="required-field">*</span></label>
        <input type="text" v-model="lastName" required>

        <label>E-mail<span class="required-field">*</span></label>
        <input id="email-label" type="text" v-model="email" required>

        <input type="submit" value="Registrarme">

      </form>
      <router-link :to="{ name: 'home'}">De vuelta al Zoo</router-link>

    </div>


    <Footer/>

  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import axios from "axios"

export default {
  name: "RegistroComp",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      title: "Creá tu cuenta",
      subtitle: "Con su registro recibiras las ultimas noticias, y podras explorar V-zoo",
      firstName: "",
      lastName: "",
      email: ""
    }
  },
  methods: {
    registrate() {
      axios.post("http://localhost:3000/api/v1/users", {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
      })
          .then(response => {
            console.log(response)
            this.$router.push({
              name: "registroexito",
              query: {clientName: this.firstName},
              params: {user_id: response.data["user_id"]}
            })
          })
          .catch(error => {
            console.log(error);
            this.$router.push({name: "AlgoSalioMal"})
          })
    }
  },
}
</script>

<style scoped>
#subscription-main {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 98vh;

}
#subscription-container {
  margin-top: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("../assets/img/pada.jpg");
  background-repeat: repeat;
  background-size: 100px;

}
#subscription-container span {
  margin-bottom: 30px;
  font-size: 14px;
  background-color:white ;

}
#subscription-form {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 350px;
  padding: 10px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 30px;
  background-color: white;
  border-color: black;
  border-width: thick;
}
#subscription-form label {
  text-align: left;
  padding: 10px;
  opacity: 0.6;
  font-weight: bold;
}
#subscription-form input[type="text"] {
  font-size: 16px;
  border-radius: 5px;
  border: 2px solid lightgrey;
  padding: 3px;
  text-transform: capitalize;
}
#email-label {
  text-transform: lowercase !important;
}

#subscription-form input[type="submit"] {
  margin-top: 20px;
  margin-left: auto;
  width: 150px;
  padding: 10px;
  font-weight: bold;
  font-size: 100%;
  border-radius: 5px;
  background: #c7a17a;
  border: 2px solid #493a2b;
  cursor: pointer;
  color: white;
}

.required-field {
  color: red;
}

</style>