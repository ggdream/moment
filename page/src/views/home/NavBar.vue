<template>
  <div class="navbar">
    <v-app-bar
      app
      dark
    >
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/ggdream/moment"
        target="_blank"
        class="mr-2"
      >
        <span>回家</span>
      </v-btn>
      <v-btn
        to="/record"
      >
        <span>瞬间</span>
      </v-btn>

      <v-avatar class="ml-8">
        <img
          :src="src"
          alt=""
        >
      </v-avatar>

    </v-app-bar>
  </div>
</template>

<script lang='ts'>
import Vue from "vue"

export default Vue.extend({
  name: "NavBar",
  data() {
      return {
          src: ''
      }
  },
  props: {
      url: {
          type: String,
          default: ''
      }
  },
  watch: {
    url: {
      handler(newValue) {
        this.src = newValue
      }
    }
  }
})
</script>
