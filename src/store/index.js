import Vue from 'vue'
import Vuex from 'vuex'
import InfiniteLoading from 'vue-infinite-loading';

Vue.use(Vuex)
Vue.use(InfiniteLoading)

const API = 'https://pokeapi.co/api/v2/pokemon/'

export default new Vuex.Store({
  state: {
    pokemons: [],
    nextUrl: '',
  },
  mutations: {
    GET_POKEMON (state) {
      state.pokemons
    },
    LOADED_NEW_POKEMONS (state) {
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
          data.results.map(pokemon => {
            pokemon.id = pokemon.url.split('/')
              .filter(part => {return !!part}).pop()
            state.pokemons.push(pokemon)
          })
          commit('GET_POKEMON')
          // async newData ({commit}) {
          //   try {
          //     let next = await fetch(state.nextUrl)
          //     let response = await next.json()
          //   } catch (err) {
          //     console.log(err)
          //   }
          // }

        })
        .catch( error => console.log(error) )
    },
    // loadedNewPokemons ({ commit, state }, $state) {
    //   return fetch(state.nextUrl)
    //     .then(response => {
    //       if (state.pokemons.length > 0) {
    //         state.pokemons.push(...response.data)
    //         $state.loaded()
    //       } else {
    //         $state.complete()
    //       }
    //     commit('LOADED_NEW_POKEMONS')
    //     })

    // }
  },
  modules: {
  }
})
