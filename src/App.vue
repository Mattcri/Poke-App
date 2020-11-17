<template>
  <v-app>
    <nav-bar />
    <v-main class="grey lighten-5 ">
      <router-view />
    </v-main>
    <cp-footer />
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import CpFooter from '@/components/CpFooter.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    CpFooter
  },

  data: () => ({
    //
  }),
};
</script>
