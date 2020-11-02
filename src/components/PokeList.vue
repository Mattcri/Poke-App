<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" lg="3" v-for="(pokemon, index) in pokemons" :key="'poke'+index">

        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>

          <v-card-title class="justify-center">{{ pokemon.name }}</v-card-title>

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

export default {
  data: () => ({
    loading: false,
    // API: 'https://pokeapi.co/api/v2/pokemon/',
    // nextUrl: '',
    // pokemons: []
  }),
  methods: {
    ...mapActions(['getPokemons']),
    clickDetail (index) {
      if(index) {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          //llevar a ruta
          }, 2000)
      }
    },
    // getData () {
    //   let req = new Request(this.API);
    //   fetch(req)
    //     .then(res => {
    //       if(res.status === 200)
    //         return res.json();
    //     })
    //     .then(data => {
    //       this.nextUrl = data.next;
    //       data.results.forEach(item => {
    //         this.pokemons.push(item);
    //       });
    //     })
    //     .catch(rej => {
    //       console.log(rej)
    //     })
    // }


  },
  computed: {
    ...mapState(['pokemons'])
  },
  created() {
    this.getPokemons()
    // this.getData()
  }
};
</script>

<style>
</style>