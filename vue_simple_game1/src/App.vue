<template>
  <div id="vue-app">
      <!-- picture -->
      <div id="bag" :class="{ burst: ended }"></div>

      <!-- status info -->
      <div id="bag-health">
          <div :style="{ width: health + '%' }"></div>
      </div>

      <!-- control game button -->
      <div id="controls">
          <button @click="punch" v-show="!ended">Punch</button>
          <button @click="restart">Restart</button>
      </div>
  </div>
</template>

<script>
  export default {
      data(){
        return {
          health: 100,
          ended: false
        }  
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
#bag{
    width: 200px;
    height: 500px;
    margin: 0 auto;
    background: url(./assets/bag.png) center no-repeat;
    background-size: 80%;
}

#bag.burst{
    background-image: url(./assets/bag-burst.png);
}

#bag-health{
    width: 200px;
    border: 2px solid #000;
    margin: 0 auto 20px auto;
}

#bag-health div{
    height: 20px;
    background: crimson
}

#controls{
    width: 120px;
    margin: 0 auto;
}
</style>
