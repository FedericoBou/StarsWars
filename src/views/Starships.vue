<template>
  <div id="starship">
   
   <ul v-for="(nave, index) in allNaves" :key="index">
     <li>
       {{nave.name}}
     </li>
   </ul>
   {{naves}}
  </div>
</template>

<script>

import {mapActions} from "vuex";

export default {
  name: "Starships",
  data(){
    return{

    }
  },
  
  computed:{
    ...Vuex.mapState(['naves']),
    ...Vuex.mapGetters[('allNaves')]
  },
  methods:{
    ...Vuex.mapMutatios([]),
    ...Vuex.mapAction(['fetchNaves']),
    
  },
  created(){
    this.fetchNaves();
  }

}
</script>

<style scoped>
#about{
  background: url(img/fondo-home.png); 
  background-size: contain ;
  background-position:center;
  /* display: grid; */
}
</style>