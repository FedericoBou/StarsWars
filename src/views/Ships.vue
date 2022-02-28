<template>
  <div class="container" id="starship">
   <ul v-for="(nave, index) in naves.results" :key="index" :nave="nave" class="list">
     <li>
      <h4 id = "nombre"> <strong >Nombre:</strong>  {{nave.name}} </h4> <br>
      <h6 id = "modelo"><strong >Modelo:</strong> {{nave.model}} </h6><br>
      <b-button class="mb-3" pill variant="outline-warning" id="boton" size="sm" @click="info(nave.name)">Más Info</b-button>
      <!-- <b-button class="mb-3" pill variant="outline-warning" id="boton" size="sm" @click="obtenerNave(nave.name)">Más Info</b-button> -->
     </li>
   </ul>
  </div>
   
</template>

<script>

import {mapActions, mapState, mapGetters, mapMutations } from "vuex";

export default {

  components: {
  },
  data(){
      return{
       name: 'Ships',
      }
    },
  computed:{

    ...mapState(['naves', 'modal', 'infoNave']),
    ...mapGetters(['allNaves', 'infoShips']),  
    },
    created(){
       this.$store.dispatch("fetchNaves")
    },
 
  methods:{    
    ...mapActions(['fetchNaves','infoNaves', 'obtenerPagina']),
    ...mapMutations(['fetchNaves','infoNaves','obtenerPagina']),
      
       info(name){
          this.$store.dispatch("infoNaves", name).then ( () => {
            this.$router.push('/shipsinfo')
          })  
    },
      
    },
      
  }

</script>

<style scoped>
.container{
    margin-top: 15px;
}
.list{
    border: 1px solid white;
    background: #222;
    padding: 0px;
    border-radius: 5px;
    text-align: center;
    color: white;
    position: relative;
    cursor: pointer;
    list-style: none;

}
#nombre{
  margin-top: 10px;
  margin-bottom: 0px;
}
#modelo{
  margin-top: -5px;
  margin-bottom: -5px;
}
</style>