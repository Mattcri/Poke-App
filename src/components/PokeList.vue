<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3" lg="4" v-for="(pokemon, index) in pokemons" :key="'poke'+index">

        <v-card :loading="loading" outlined shaped class="mx-auto my-5 px-3" :max-width="270" >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="230"
            class="blue-grey lighten-5 rounded-circle mt-4"
            contain
            :src="pokeImage + pokemon.id + '.png'"
            alt="Pokemón"
          ></v-img>

          <v-card-title class="justify-center" :class="'capitalize'">{{ pokemon.name }}</v-card-title>

          <v-divider class="mx-4 mb-3"></v-divider>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" class="mx-auto white--text"  @click="clickDetail">
              Reserve
            </v-btn>
          </v-card-actions>
        </v-card>
        

      </v-col>
        <infinite-loading @infinite="newData"></infinite-loading>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data: () => ({
    loading: false,
    pokeImage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
  }),
  methods: {
    ...mapActions(['getPokemons']),
    clickDetail () {
      // if(index) {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          //llevar a ruta
          }, 2000)
      // }
    },

  },
  computed: {
    ...mapState(['pokemons']),
  },
  created() {
    this.getPokemons()
  }
};
</script>

<style>
  .capitalize {
    text-transform: capitalize;
  }
</style>