<template>
  <div class="home">
    <nav-bar :url="data.avatar" />
    <ui-play :data="data.show" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from "./NavBar.vue";
import UiPlay from "./UiPlay.vue";

export default Vue.extend({
  name: "Home",
  components: {
    NavBar,
    UiPlay,
  },
  data() {
    return {
      data: {},
    }
  },
  created() {
      this.getMetaInfo()
  },
  methods: {
    async getMetaInfo() {
      const res = await this.$http.getMetaInfo()
      if (res.code !== 0) return
      // 正常逻辑
      this.data = res.data
    },
  },
})
</script>
