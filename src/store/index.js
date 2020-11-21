import Vue from 'vue'
import Vuex from 'vuex'
import InfiniteLoading from 'vue-infinite-loading';

Vue.use(Vuex)
Vue.use(InfiniteLoading)

const API = 'https://pokeapi.co/api/v2/generation/1/'

export default new Vuex.Store({
  state: {
    pokemons: [],
    pokemonDetail: {},
    region: null,
    generationPokemons: []
  },
  mutations: {
    GET_POKEMONS (state, pokemons) {
      state.pokemons = pokemons
    },
    REGION (state, region) {
      state.region = region
    },
    DETAIL_POKEMON (state, detail) {
      state.pokemonDetail = detail
    },
    GET_GENERATION_POKEMONS (state, generation) {
      state.generationPokemons = generation
    }
    
  },
  actions: {
    getPokemons ({commit}) {
      return fetch(API)
        .then( res => {
          if(res.status === 200)
            return res.json()
        })
        .then( data => {
          let region = data.main_region.name
          // acción payload que evita traer nuevamente la misma data al llamar la función
          commit('GET_POKEMONS',
            data.pokemon_species.map(pokemon => {
              pokemon.region = region
              pokemon.id = pokemon.url.split('/')
                .filter(part => {return !!part}).pop()
              return pokemon // retorna los elementos del mapeo con la nueva data
            })
          )
          
        })
        .catch( error => console.log(error) )
    },
    async nameRegion ({ commit }) {
      try {
        let api = await fetch(API)
        let res = await api.json()
        let data = await commit('REGION', res.main_region.name)
        return data
      } catch (rej) {
        console.error(rej)
      }
    },
    async detailPokemon ({ commit }, idPoke) {
      try {
        let api = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPoke}/`)
        let res = await api.json()
        let data = await commit('DETAIL_POKEMON', res)
        return data
      } catch (rej) {
        console.error(rej)
      }
    },
    async getGenerationPokemons ({commit}, idGeneration) {
      try {
        let api = await fetch(`https://pokeapi.co/api/v2/generation/${idGeneration}/`)
        let res = await api.json()
        let region = await res.main_region.name
        let data = await commit('GET_GENERATION_POKEMONS', 
          res.pokemon_species.map(pokemon => {
            pokemon.region = region
            pokemon.id = pokemon.url.split('/')
            .filter(part => {return !!part}).pop()
            return pokemon
          })
        )
        return data
      } catch (rej) {
        console.log(rej)
      }
    }

    
    
  },
  modules: {
  }
})
