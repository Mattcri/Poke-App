<template>
  <nav>
    <v-app-bar app height="70px" >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="deep-purple--text lighten-2" />
      <v-container class="d-flex">
          <v-img src="../assets/pokemon.svg" width="130px" height="65px" contain transition="scale-transition" @click.stop="goHome" :class="'pointer'" />
          
      </v-container>
      <a href="https://github.com/Mattcri/Poke-App" target="_blank">
        <v-img contain src="@/assets/github.svg" max-width="30"></v-img>
      </a>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary color="grey lighten-3">
      <v-list-item class="d-flex justify-center">
        <v-list-item-avatar>
          <v-img src="@/assets/pokemon-13.svg" contain></v-img>
        </v-list-item-avatar>
      </v-list-item>
      <v-divider />

      <v-list rounded>
      <v-subheader>GENERACIONES</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item to='/'>
          <v-list-item-icon>
            <v-icon v-text="'mdi-nintendo-game-boy'"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="'Home'"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-for="(link, i) in links"
          :key="i"
          router :to="{ name: 'GenerationsViews', params: {generation: link.route} }"
        >
          <v-list-item-icon>
            <v-icon v-text="link.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="link.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    selectedItem: 1,
    links: [
      { text: 'Generación II', icon: 'mdi-pokemon-go', route: 'generation-ii' },
      { text: 'Generación III', icon: 'mdi-pokemon-go', route: 'generation-iii' },
      { text: 'Generación IV', icon: 'mdi-pokemon-go', route: 'generation-iv' },
      { text: 'Generación V', icon: 'mdi-pokemon-go', route: 'generation-v' },
      { text: 'Generación VI', icon: 'mdi-pokemon-go', route: 'generation-vi' },
      { text: 'Generación VII', icon: 'mdi-pokemon-go', route: 'generation-vii' },
      { text: 'Generación VIII', icon: 'mdi-pokemon-go', route: 'generation-viii' }
    ]

  }),
  methods: {
    goHome () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style>
  .pointer {
    cursor: pointer;
  }
  /* .nav {
    height: 100px;
  }  */
</style>