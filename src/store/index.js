import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const pokeImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
// const API = 'https://pokeapi.co/api/v2/pokemon/'

export default new Vuex.Store({
  state: {
    pokemons: [],
    nextUrl: null
  },
  mutations: {
    GET_POKEMON (state, pokemon) {
      state.pokemons = pokemon
    }
  },
  actions: {
    getPokemons ({commit, state}) {
      // let required = new Request(API)
      return fetch('https://pokeapi.co/api/v2/pokemon/')
        .then( res => res.json() )
        .then( data => {
          state.nextUrl = data.next
          data.results.forEach(pokemon => {
            state.pokemons.push(pokemon)
            // commit('GET_POKEMON', pokemon)
            commit('GET_POKEMON')
          })
        })
        .catch( error => console.log(error) )
    }
  },
  modules: {
  }
})
