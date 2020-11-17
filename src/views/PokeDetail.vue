<template>
  <v-container >

    <h2 :class="'capitalize'" class="my-2">Nombre: {{pokemonDetail.name}}</h2>
    <v-divider></v-divider>

    <v-row class="mb-4" v-if="pokemonDetail">
      <v-col cols="12" md="6" class="d-flex justify-center" >
        <v-img
          height="220"
          max-width="200"
          class="blue-grey lighten-4 rounded-circle mt-4"
          contain
          :src="pokemonDetail.sprites.front_default"
          alt="Pokemón"
          transition="fab-transition"
          :class="'shadow'"
        >
        </v-img>

      </v-col>
      <v-col cols="12" md="6" class="d-flex justify-center">
        <v-img
          height="220"
          max-width="200"
          class="blue-grey lighten-4 rounded-circle mt-4"
          contain
          :src="pokemonDetail.sprites.back_default"
          alt="Pokemón"
          transition="fab-transition"
          :class="'shadow'"
        >
        </v-img>

      </v-col>
    </v-row>
    <v-divider></v-divider>

    <h2 :class="'capitalize'" class="my-3">caracteristicas</h2>
    <p>Altura: <strong class="purple--text lighten-1">{{ pokemonDetail.height }} pulgadas</strong> </p>
    <p>Peso: <strong class="purple--text lighten-1">{{ pokemonDetail.weight }} libras</strong></p>
    <v-divider></v-divider>

    <h2 :class="'capitalize'" class="my-2">Habilidades</h2>
    <list-abilities class="my-3" :abilities="abalitiesMap" />
    <v-divider></v-divider>

    <h2 :class="'capitalize'" class="my-2">estadísticas</h2>
    <table-stats class="my-7" :stats="statsMap" />
    
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TableStats from '@/components/TableStats.vue'
import ListAbilities from '@/components/ListAbilities.vue'


export default {
  name: 'PokeDetail',
  components: { TableStats, ListAbilities },
  computed: {
    ...mapState(['pokemonDetail']),
    statsMap () {
      return this.pokemonDetail.stats.map(item => item)
    },
    abalitiesMap () {
      return this.pokemonDetail.abilities.map(item => item)
    }
    
  }

}
</script>

<style lang="scss" scoped>
.capitalize {
    text-transform: capitalize;
    // text-align: center;
    color: #1e88e5;
}
.shadow {
  box-shadow: 0px 2px 3px 3px rgba(0,0,0,0.45)
}

</style>
