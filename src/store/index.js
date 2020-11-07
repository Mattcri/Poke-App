import Vue from 'vue'
import Vuex from 'vuex'
import InfiniteLoading from 'vue-infinite-loading';

Vue.use(Vuex)
Vue.use(InfiniteLoading)

const API = 'https://pokeapi.co/api/v2/generation/1/'

export default new Vuex.Store({
  state: {
    pokemons: [],
    region: undefined
  },
  mutations: {
    GET_POKEMONS (state) {
      state.pokemons
    },
    REGION (state) {
      state.region
    }
    
  },
  actions: {
    getPokemons ({commit, state}) {
      return fetch(API)
        .then( res => {
          if(res.status === 200)
            return res.json()
        })
        .then( data => {
          data.pokemon_species.forEach(pokemon => {
            pokemon.id = pokemon.url.split('/')
              .filter(part => {return !!part}).pop()
            state.pokemons.push(pokemon)
          })
          commit('GET_POKEMONS')
        })
        .catch( error => console.log(error) )
    },
    
  },
  modules: {
  }
})
