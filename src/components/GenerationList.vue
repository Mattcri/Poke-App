<template>
  <v-container>
    <div class="spinner" v-show="spinner">
      <grid-loader :loading="spinner" class="spinner__element" :color="'#1976D2'" :size="60" />
    </div>

    <div v-if="!spinner">
      <h2 :class="'capitalize'" class="my-3">Región: {{ dinamicRegion }}</h2>
    </div>

    <v-row v-if="!spinner" class="d-flex justify-center">
      <v-col cols="12" md="10" >
        <v-text-field
          v-model="search"
          label="Búsca tu Pokémon"
          placeholder="Buscar en generación"
          filled
          rounded
          dense
        >
        </v-text-field>
      </v-col>
    </v-row>

    <v-row v-if="!spinner">
      <v-col cols="12" sm="6" md="6" lg="4" v-for="(pokemon, index) in pokeFilter" :key="index">

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
            <v-btn color="deep-purple lighten-2" class="mx-auto white--text"  @click="clickDetail(pokemon.name)">
              Detalles
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'GenerationList',
  data: () => ({
    search: '',
    pokeImage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
  }),
  props: {
    spinner: Boolean,
    generation: Array
  },
  methods: {
    ...mapActions(['regionNames']),
    clickDetail (pokemon) {
      this.$router.push({ name: 'PokeDetail', params: {pokemon} })
    },
    getRegions () {
      const idRegion = this.$route.params.generation
      this.regionNames(idRegion)
    }

  },
  computed: {
    ...mapState(['dinamicRegion']),
    pokeFilter () {
      return this.generation.filter(poke => {
        return poke.name.toLowerCase().includes(this.search.toLowerCase()) ||
               poke.id.includes(this.search)
      })
    },
  },
  mounted () {
    this.getRegions()
  },
  watch: {
    $route () {
      this.getRegions()
    }
  }
}
</script>

<style lang="scss" scoped>
  .capitalize {
    text-transform: capitalize;
    text-align: center;
  }
  .spinner {
    height: 75vh;
    display: flex;
    &__element {
      margin: auto;
    }
  }
</style>