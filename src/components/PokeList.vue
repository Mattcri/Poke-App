<template>
  <v-container>
    <div class="spinner" v-show="spinner">
      <grid-loader :loading="spinner" class="spinner__element" :color="'#68d391'" :size="60" />
    </div>

    <!-- <cp-search v-if="!spinner" @filtered="pokeFilter" class="mt-5" /> -->
    <v-row v-if="!spinner">
      <v-col cols="12" md="9">
        <v-text-field
          v-model="search"
          label="Búsca tu Pokémon"
          placeholder="Pikachu & 5"
          filled
          rounded
          dense
        >
        </v-text-field>
      </v-col>
    </v-row>

    <v-row v-if="!spinner">
      <v-col cols="12" md="3" lg="4" v-for="(pokemon, index) in pokeFilter" :key="index">

        <v-card :loading="loading" outlined shaped class="mx-auto px-3" :max-width="270" >
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
            transition="fab-transition"
          ></v-img>

          <v-card-title class="justify-center" :class="'capitalize'">{{ pokemon.name }}</v-card-title>

          <v-divider class="mx-4 mb-3"></v-divider>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" class="mx-auto white--text"  @click="clickDetail(index)">
              Reserve
            </v-btn>
          </v-card-actions>
        </v-card>
        

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
// import CpSearch from '@/components/CpSearch.vue'

export default {
  name: 'PokeList',
  // components: { CpSearch },
  // props: {
  //   search: ''
  // }
  data: () => ({
    loading: false,
    spinner: false,
    search: '',
    pokeImage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
  }),
  methods: {
    ...mapActions(['getPokemons']),
    clickDetail (data) {
        // this.loading = true
        // if (data) {
        //   setTimeout(() => {
        //     this.loading = false
        //     //llevar a ruta
        //   }, 2000)

        //   console.log(data)
        // }
      
    },

  },
  computed: {
    ...mapState(['pokemons']),
    // async pokeFilter (data) {
    //   this.searchPoke = await data
    //   return this.pokemons.filter(poke => {
    //     return poke.results.name.toLowerCase().includes(this.searchPoke.toLowerCase())
    //   })
    // }
    pokeFilter () {
      return this.pokemons.filter(poke => {
        return poke.name.toLowerCase().includes(this.search.toLowerCase()) ||
               poke.id.includes(this.search)
      })
    }
  },
  created() {
    this.spinner = true
    setTimeout(() => {
      this.getPokemons().finally(() => this.spinner = false)
    }, 1500)
  }
};
</script>

<style lang="scss" scoped>
  .capitalize {
    text-transform: capitalize;
  }
  .spinner {
    height: 75vh;
    display: flex;
    &__element {
      margin: auto;
    }
  }
</style>