<template>
  <div
    class="imagebox"
    :style="{background: `url(${url})`}"
  />
</template>

<script lang='ts'>
import Vue from "vue"

export default Vue.extend({
  name: "ImageBox",
  props: {
      url: {
          type: String,
          required: true
      }
  }
})
</script>

<style lang='scss' scoped>
.imagebox {
  width: 100vw;
  height: calc(100vh - 64px);
  object-fit: none;
}
</style>