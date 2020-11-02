import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const pokeImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const API = 'https://pokeapi.co/api/v2/pokemon/'

export default new Vuex.Store({
  state: {
    pokemons: [],
    nextUrl: ''
  },
  mutations: {
    GET_POKEMON (state) {
      state.pokemons
    }
  },
  actions: {
    getPokemons ({commit, state}) {
      let required = new Request(API)
      return fetch(required)
        .then( res => {
          if(res.status === 200)
            return res.json()
        })
        .then( data => {
          state.nextUrl = data.next
          data.results.forEach(pokemon => {
            state.pokemons.push(pokemon)
          })
          commit('GET_POKEMON')
        })
        .catch( error => console.log(error) )
    }
  },
  modules: {
  }
})
