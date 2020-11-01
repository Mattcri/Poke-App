<template>
  <div class="home">
    <poke-list />
  </div>
</template>

<script>
// @ is an alias to /src
import PokeList from '@/components/PokeList.vue'


export default {
  name: 'Home',
  components: {
    PokeList
  }
}
</script>
