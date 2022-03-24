<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
    <Counter/>
    <Cuadrado/>
    <Botones/>
  </div>
  
</template>

<script>
import Counter from "../components/Counter.vue";
import Cuadrado from "../components/Cuadrado.vue";
import Botones from "../components/Botones.vue";

export default {
  name: 'HomeView',
  components:{
    Counter,
    Cuadrado, 
    Botones,
  }
  /*data(){
    return {counter:0 //Va con dos puntos porque lo que regresa es ub objeto
    }
  },*/
  /*methods:{
    bajarContador(){
      this.counter--;
    },
    subirContador(){
      this.counter++;
    }
  }*/
}
</script>

<style>

  div{
    margin-bottom: 10px;
  }
  .counter{
  font-size:80px;
  }

  .buttons button{  /*Se pone de esta manera cuando quieres que afecte a los elementos que estan dentro de otro, sus hijos, porque justamente al div ya se le asigno algo */
    font-size: 40px;
    width: 100px;
    margin: 0 10px;
  }

  .cuadrado{
    font-size: 25px;

  }
</style>
