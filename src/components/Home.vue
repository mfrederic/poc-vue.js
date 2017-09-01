<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <item v-bind:item="item" v-for="item in items" :key="item.id"></item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Item from '@/components/Item'

export default {
  components: {
    Item
  },
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: mapGetters({
    items: 'allItems'
  })
}
</script>

