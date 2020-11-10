<template>
  <v-container v-if="pokemonDetail">
    <h2>Detail Poke Page: {{pokemonDetail.name}}</h2>
    <v-divider></v-divider>
    <span>{{pokemonDetail.sprites.back_default}}</span>
    <v-img
      :src="pokemonDetail.sprites.back_default"
      max-width="200"
    ></v-img>
    <v-img
      :src="pokemonDetail.sprites.front_shiny"
      max-width="200"
    ></v-img>
    <v-img
      :src="pokemonDetail.sprites.front_default"
      max-width="200"
    ></v-img>
    <v-img
      :src="pokemonDetail.sprites.back_shiny"
      max-width="200"
    ></v-img>
    
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'PokeDetail',
  computed: {
    ...mapState(['pokemonDetail']),
    // pokeName () {
    //   return this.pokemonDetail.name
    // }
    // pokeImg () {
    //   return this.pokemonDetail.sprites.back_default
    // }
  }

}
</script>

<style>

</style>