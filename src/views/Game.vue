<template>
  <p>Hola</p>
</template>

<script>
{
  data: {
    health: 100,
    ended: false
  },
  methods: {
    punch: function(){
      this.health -= 10;
      if ( this.health <= 0 ){
        this.ended = true;
      }
    },
    restart: function(){
      this.health = 100;
      this.ended = false;
    }
  },
  computed: {

  }
}

</script>

<style>
bag{
  width: 200px;
  height: 500px;
  margin: 0 auto;
  background: url("../assets/img/bag.png");
  background-size: 80%;
}

bag.burst{
  background: url("../assets/img/bag-burst.png");
}

bag-health{
  width: 200px;
  border: 2px solid #000;
  margin: 0 auto 20px auto;
}

bag-health div{
  height: 20px;
  background: crimson
}

controls{
  width: 120px;
  margin: 0 auto;
}

</style>