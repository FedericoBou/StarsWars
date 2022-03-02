import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    naves:[],
    infoNave:[],
    loggedIn: false,
  },
  getters:{
    allNaves: state => state.naves.responce,
    infoShips: state => state.infoNave.responce,
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
    async obtenerPagina({ commit, state }, pagina) {
      const responce = await axios.get(`https://swapi.dev/api/starships/?page=${pagina}`)
      console.log(responce.data.next)
      return responce;
    }
  }, 
  mutations: {
    fetchNaves:(state, naves) => (state.naves = naves),
    obtenerPagina: (state, naves) => (state.naves = naves),
    infoNaves:(state, infoNave) => (state.infoNave = infoNave),

    // hacerScroll() {
    //     let pagina = 1;
    //     window.onscroll = () => {
    //     let bottomOfWindow = document.documentElement.scrollTop + 
    //     window.innerHeight === document.documentElement.offsetHeight;
    //     if (bottomOfWindow) {
    //       if(pagina < 5){
    //         this.$store.dispatch("obtenerPagina", pagina).then ( (resultado) => {
    //         if(pagina < 5){
    //           pagina++;
    //         }
    //         resultado.data.results.forEach(nave => {
    //           this.naves.results.push(nave)
    //         });
    //         }) 
    //       }

    //     }
    //   }
    // }
  }
})
// probando