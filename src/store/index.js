import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    naves:[],
    modal: false,
    infoNave:{}
  
   
    
  },
 
  getters:{
    allNaves: state => state.naves.results,
    infoShips: state => state.infoNave.results,
 
  },

  actions: {
   
    async fetchNaves({commit}){
      const responce = await axios.get('https://swapi.dev/api/starships/')
      console.log(responce.data)
      commit('setNaves', responce.data)
    },
    // async fetchIndex({commit}, model){
    //   const respuesta = await axios.get(`https://swapi.py4e.com/api/starships/${model}/`)
    //   commit('setIndex', respuesta.data)
    //   console.log(respuesta.data)
    // },
  

    
  }, 

  mutations: {
    setNaves:(state, naves) => (state.naves = naves),
    setIndex:(state, infoNaves) => (state.infoNave = infoNaves),
    
 
    
     
  
}
})
