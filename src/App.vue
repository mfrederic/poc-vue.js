<template class="app">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">{{title}}</div>
    </v-ons-toolbar>
    <v-ons-tabbar position="top" :tabs="tabs" :visible="visible" :index.sync="activeIndex">
      <router-view slot="pages"></router-view>
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
import Home from '@/components/Home'

export default {
  name: 'app',
  data: function () {
    return {
      activeIndex: 0,
      tabs: [
        {
          icon: this.md() ? null : 'ion-home',
          label: 'Home',
          page: Home
        }
      ],
      visible: true
    }
  },
  methods: {
    md () {
      return this.$ons.platform.isAndroid()
    }
  },
  computed: {
    title () {
      return this.tabs[this.activeIndex].label
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
