<template>
  <v-container>
    <h3>Estoy en la sección de genereación</h3>
    <generation-list :generation="generationPokemons" :spinner="spinner" />
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import GenerationList from '@/components/GenerationList.vue'

export default {
  name: 'GenerationViews',
  components: { GenerationList },
  data: () => ({
    spinner: false
  }),
  methods: {
    ...mapActions(['getGenerationPokemons']),
    generation () {
      const id = this.$route.params.generation
      this.spinner = true
      setTimeout(() => {
        this.getGenerationPokemons(id).finally(() => this.spinner = false)
      }, 1500)
    }
  },
  computed: {
    ...mapState(['generationPokemons'])
  },
  created () {
    this.generation()
  },
  watch: {
    $route () {
      this.generation()
    }
  }
  

}
</script>

<style>

</style>