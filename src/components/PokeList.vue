<template>
  <v-container>
    <div class="spinner" v-show="spinner">
      <grid-loader :loading="spinner" class="spinner__element" :color="'#68d391'" :size="60" />
    </div>

    <!-- <cp-search v-if="!spinner" @filtered="search=$event" class="mt-5" />
    <h2>hola:{{search}}</h2> -->
    <h2 v-if="!spinner" :class="'capitalize'">{{ region }}</h2>
   
    <v-row v-if="!spinner" class="d-flex justify-center">
      <v-col cols="12" md="10" >
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

        <v-card outlined shaped class="mx-auto px-3" :max-width="270" >
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
            <v-btn color="deep-purple lighten-2" class="mx-auto white--text"  @click="clickDetail(pokemon.name, pokemon.id)">
              Detalles
            </v-btn>
          </v-card-actions>
        </v-card>
        

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState ,mapActions } from 'vuex'
// import CpSearch from '@/components/CpSearch.vue'

export default {
  name: 'PokeList',
  // components: { CpSearch },
  data: () => ({
    search: '',
    pokeImage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
  }),
  props: {
    spinner: Boolean,
    pokemons: Array
  },
  methods: {
    ...mapActions(['getPokemons', 'nameRegion', 'detailPokemon']),
    clickDetail (name, id) {
      console.log(name);
      console.log(id);
      this.detailPokemon(id)
      console.log(this.detailPokemon(id));
      
    },

  },
  computed: {
    ...mapState(['region']),
    pokeFilter () {
      return this.pokemons.filter(poke => {
        return poke.name.toLowerCase().includes(this.search.toLowerCase()) ||
               poke.id.includes(this.search)
      })
    },
  },
  mounted () {
    this.nameRegion()
  },
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