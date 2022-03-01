<template>
   <div>
    <b-card
      no-body
      style="max-width: 75%;"
      img-src="https://www.cinemascomics.com/wp-content/uploads/2021/06/cazas-tie-star-wars-avanzado.jpg"
      img-alt="Image"
      img-top
      class="mx-auto">

      <b-card-body>
        <b-card-title>Name: {{infoNave.results[0].name}}  </b-card-title>
        <b-card-text>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius obcaecati aspernatur asperiores repudiandae quasi ab architecto! Doloremque quia quas facilis!
        </b-card-text>
      </b-card-body>

        <b-list-group flush >
          <b-list-group-item>Passengers:  {{infoNave.results[0].passengers}}  </b-list-group-item>
          <b-list-group-item>Model: {{infoNave.results[0].model}}</b-list-group-item>
          <b-list-group-item>Length: {{infoNave.results[0].length}} </b-list-group-item>
        </b-list-group>
    </b-card>
  </div>
</template>

<script>

import {mapState, mapGetters } from "vuex";

export default {
   computed:{
    ...mapState(['naves', 'modal', 'infoNave']),
    ...mapGetters(['allNaves', 'infoShips']),
  },
}
</script>

<style scoped>

</style>