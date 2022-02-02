
<template>
  <div class="container" id="starship">
   <ul v-for="(nave, index) in allNaves" :key="index" :nave="nave" class="list">
     <li>
      <h4 id = "nombre"> <strong >Nombre:</strong>  {{nave.name}} </h4> <br>
      <h6 id = "modelo"><strong >Modelo:</strong> {{nave.model}} </h6><br>
      <b-button class="mb-3" pill variant="outline-warning" id="boton" size="sm" @click="moreInfo(model)">Más Info</b-button>
     </li>
   </ul>
     
  </div>
  
</template>

<script>
import Vuex from 'vuex'


export default {
  components: {
    
  },
  name: 'Ships',
  data(){
      return{
        busy:false,
      }
    },
  computed:{
    ...Vuex.mapState(['naves', 'modal', 'infoNave']),
    ...Vuex.mapGetters(['allNaves', 'infoShips']),
    created(){
         this.fetchNaves();
       

         //this.fetchIndex(2);

    },
    
  },
  methods:{    
      ...Vuex.mapActions(['fetchNaves', 'fetchIndex',]),
      ...Vuex.mapMutations(['setNaves','setIndex', 'moreInfo']),
      
      moreInfo (model) {
      console.log(model)
    },
        mounted(){
         this.fetchIndex(index);
      },
    
  }

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