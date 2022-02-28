import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    naves:[],
    infoNave:[],
    loggedIn: false,
    // page:1
  
  },
 
  getters:{
    allNaves: state => state.naves.responce,
    infoShips: state => state.infoNave.responce,
    page: state => state.page.responce
 
  },

  actions: {
    
    async fetchNaves({commit}){
      const responce = await axios.get('https://swapi.dev/api/starships/')
      console.log(responce.data)
      commit('fetchNaves', responce.data)
      
    },

    async infoNaves({commit}, name){
      const responce = await axios.get(`https://swapi.dev/api/starships/?search=${name}`)
      console.log(responce.data)
      commit('infoNaves', responce.data)
      
    },
    async obtenerPagina({ commit }, pagina) {
      const responce = await axios.get(`https://swapi.dev/api/starships/?page=${pagina}`)
      console.log(responce.data.next)
      commit('Pages', responce.data)
  }
  }, 

  mutations: {
    fetchNaves:(state, naves) => (state.naves = naves),
    obtenerPagina: (state, naves) => (state.naves = naves),
    infoNaves:(state, infoNave) => (state.infoNave = infoNave),

    }
  
})
