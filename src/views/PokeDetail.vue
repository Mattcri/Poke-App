<template>
  <v-container >
    <div class="spinner" v-show="loading">
      <clip-loader :loading="loading" class="spinner__element" :color="'#68d391'" :size="60" />
    </div>

    <div v-if="!loading">
      <h2 :class="'capitalize'" class="my-2">Nombre: {{pokemonDetail.name}}</h2>
    </div>

    <v-row class="mb-4" v-if="!loading">
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
    <v-divider v-if="!loading" class="mt-7"></v-divider>
    
    <div v-if="!loading">
      <h2 :class="'capitalize'" class="my-5">caracteristicas</h2>
      <p>Altura: <strong class="purple--text lighten-1">{{ pokemonDetail.height }} pulgadas</strong> </p>
      <p>Peso: <strong class="purple--text lighten-1">{{ pokemonDetail.weight }} libras</strong></p>
      <p>Tipo: <strong :class="'capitalize'" class="purple--text lighten-1">{{ typeMap[0].type.name }}</strong></p>
      <v-divider class="mt-6"></v-divider>
    </div>

    <div v-if="!loading">
      <h2 :class="'capitalize'" class="mt-5">Habilidades</h2>
      <list-abilities class="my-3" :abilities="abalitiesMap" />
      <v-divider class="mt-4"></v-divider>
    </div>

    <div v-if="!loading">
      <h2 :class="'capitalize'" class="my-5">estadísticas</h2>
      <table-stats class="my-7" :stats="statsMap"  />
    </div>
    
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TableStats from '@/components/TableStats.vue'
import ListAbilities from '@/components/ListAbilities.vue'


export default {
  name: 'PokeDetail',
  components: { TableStats, ListAbilities },
  data: () => ({
    loading: false
  }),
  computed: {
    ...mapState(['pokemonDetail']),
    statsMap () {
      return this.pokemonDetail.stats.map(item => item)
    },
    abalitiesMap () {
      return this.pokemonDetail.abilities.map(item => item)
    },
    typeMap () {
      return this.pokemonDetail.types.map(item => item)
    }
    
  },
  methods: {
    ...mapActions(['detailPokemon'])
  },
  created () {
    const id = this.$route.params.pokemon
    this.loading = true
    this.detailPokemon(id).finally(() => this.loading = false)
  }

}
</script>

<style lang="scss" scoped>
  .capitalize {
    text-transform: capitalize;
    @media only screen and (max-width: 586px) {
      text-align: center;
    }
    // color: #1e88e5;
  }
  .shadow {
    box-shadow: 0px 2px 3px 3px rgba(0,0,0,0.45)
  }
  .spinner {
    height: 75vh;
    display: flex;
    &__element {
      margin: auto;
    }
  }

</style>
