import { createStore } from 'vuex'

export default createStore({  //Guardar el contenido
  state: {                    //Almacenar variables, movimiento de informacion, etc.
    counter:0
    //Se pueden seguir ingresando variables, es un objeto.
  },
  getters: {                  //Poder entrar a la informacion del estado
    cuadrado(state){
      return state.counter * state.counter;
    }
  },
  mutations: {                //Si quieremos hacer modificacion en el estado
    subirContador(state){
      state.counter++;        //Para las mutaciones se usa commit
    },
    bajarContador(state){
      state.counter--;
    },
    cambiarContador(state, random){
      state.counter += random;
    },
    randomContador(state, random){
      state.counter -= random;
    }
  },
  actions: {                  //Las acciones son parecidas a las mutaciones, solo que en estas se puede tener codigo asincrono, sirven para accionar las mutaciones
    async cambiarContador({commit}){
      const res=await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
      const result=await res.json();
      console.log(result);
      commit("cambiarContador",result)
    },
    async randomContador({commit}){
      const res=await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new');
      const result=await res.json();
      console.log(result);
      commit("randomContador",result)
    }
  },
  modules: {                  //Limita las acciones para el modulo definido
  }
})
