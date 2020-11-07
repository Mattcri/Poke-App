import Vue from 'vue'
import Vuex from 'vuex'
import InfiniteLoading from 'vue-infinite-loading';

Vue.use(Vuex)
Vue.use(InfiniteLoading)

const API = 'https://pokeapi.co/api/v2/pokemon?limit=1050/'

export default new Vuex.Store({
  state: {
    pokemons: [],
  },
  mutations: {
    GET_POKEMONS (state) {
      state.pokemons
    },
    
  },
  actions: {
    getPokemons ({commit, state}) {
      return fetch(API)
        .then( res => {
          if(res.status === 200)
            return res.json()
        })
        .then( data => {
          data.results.map(pokemon => {
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
