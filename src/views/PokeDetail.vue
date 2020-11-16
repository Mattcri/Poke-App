<template>
  <v-container v-if="pokemonDetail">

    <h2 :class="'capitalize'" class="my-2">Nombre: {{pokemonDetail.name}}</h2>
    <v-divider></v-divider>

    <v-row class="mb-4">
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

    <span>{{pokeStats}}</span>
    <br>
    <span>{{statsMap}}</span>
    <br>
    <p>{{test}}</p>
    <div v-for="(s, index) in PokeDetail" :key="index">
      <p>{{s.base_stat}}</p>
      <br>
      <p>{{s.stat.name}}</p>
      <!-- <p>{{s.base_stat}}</p> -->
    </div>

    <table-stats :stats="pokeStats"  />
    
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TableStats from '@/components/TableStats.vue'


export default {
  name: 'PokeDetail',
  components: { TableStats },
  computed: {
    ...mapState(['pokemonDetail']),
    pokeStats () {
      return this.pokemonDetail.stats.map(item => {
        return item.base_stat
      })
    },
    test () {
      return this.pokemonDetail.stats.map(item => Object.entries(item.base_stat))
    },
    statsMap () {
      return this.pokemonDetail.stats.map(item => item)
    }
    // pokeImg () {
    //   return this.pokemonDetail.sprites.back_default
    // }
  }

}
</script>

<style lang="scss" scoped>
.capitalize {
    text-transform: capitalize;
    text-align: center;
}
.shadow {
  box-shadow: 0px 2px 3px 3px rgba(0,0,0,0.45)
}

</style>
