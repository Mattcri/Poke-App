<template>
  <div class="home">
    <poke-list :pokemons="pokemons" :spinner="spinner" />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex'
import PokeList from '@/components/PokeList.vue'

export default {
  name: 'Home',
  components: {
    PokeList
  },
  data: () => ({
    spinner: false
  }),
  methods: {
    ...mapActions(['getPokemons']),
  },
  computed: {
    ...mapState(['pokemons'])
  },
  created () {
    this.spinner = true
    setTimeout(() => {
      this.getPokemons().finally(() => this.spinner = false)
    }, 1500)
  }
}
</script>
