<template>
  <nav>
    <v-app-bar app height="70px">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="indigo--text " />
      <v-container>
        <!-- <v-toolbar-items> -->
          <v-img src="../assets/pokemon.svg" width="130px" height="65px" contain transition="scale-transition" />
        <!-- </v-toolbar-items> -->
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary color="grey lighten-3">
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>
      </v-list-item>
      <v-divider />

      <v-list rounded>
      <v-subheader>GENERACIONES</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(link, i) in links"
          :key="i"
          router :to="link.route"
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
      { text: 'Home', icon: 'mdi-nintendo-game-boy', route: '/' },
      { text: 'Generación I', icon: 'mdi-pokeball', route: '/about' },
      { text: 'Generación H', icon: 'mdi-pokeball', route: '/poke' }
    ]

  })
}
</script>

<style>
  /* .nav {
    height: 100px;
  }  */
</style>