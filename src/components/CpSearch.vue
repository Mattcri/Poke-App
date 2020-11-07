<template>
  <v-row class="d-flex justify-space-around">
    <v-col cols="12" md="9">
      <v-text-field
        v-model="search"
        label="Búsca tu Pokémon"
        placeholder="Pikachu & 5"
        filled
        rounded
        dense
      >
      </v-text-field>
    </v-col>
    <v-col cols="12" md="2" >
      <v-btn elevation="2" large rounded class="my-1" @click="filtered">
        Búscar
      </v-btn>
    </v-col>
  </v-row>
  
</template>

<script>
export default {
  name: 'CpSearch',
  data: () => ({
    search: undefined
  }),
  methods: {
    async filtered () {
      let inputData = await this.search
      this.$emit('filtered', inputData)
    }
  }

}
</script>

<style>

</style>