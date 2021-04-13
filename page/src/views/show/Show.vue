<template>
  <div class="show">
    <div
      class="main"
      v-html="formatWord(content)"
    />

    <v-snackbar v-model="snackbar">
      糟糕，服务器开小差啦~~
      <template v-slot:action>
        <span>😳</span>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";

export default Vue.extend({
  name: "Show",
  data() {
    return {
      content: "",
      snackbar: false,
    };
  },
  created() {
    this.reqText();
  },
  methods: {
    async reqText() {
      const { v } = this.$route.query;
      if (Array.isArray(v)) return;
      try {
        const res = await this.$http.getText(v);
        if (res.code !== 0) {
          console.log(res.msg);
          throw "发生了错误";
        }
        this.content = res.data;
      } catch (error) {
        this.snackbar = true;
      }
    },
  },
});
</script>


<style lang="scss" scoped>
.show {
  display: flex;
  justify-content: center;
  align-items: center;
  .main {
    width: 80vw;
  }
}
</style>
