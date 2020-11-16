<template>
  <v-simple-table >
    <template v-slot:default >
      <thead>
        <tr >
          <th class="text-left">
            HP
          </th>
          <th class="text-left">
            Attack
          </th>
          <th class="text-left">
            Defense
          </th>
          <th class="text-left">
            Special-attack
          </th>
          <th class="text-left">
            Special-defense
          </th>
          <th class="text-left">
            Speed
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in stats" :key="index">
          <td>{{ item.base_stats }}</td>
          <!-- <td>{{ item.calories }}</td> -->
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  
</template>

<script>
export default {
  name: 'TableStats',
  props: {
    stats: Array
  }

}
</script>

<style>

</style>