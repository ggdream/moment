<template>
  <div class="play">
    <div
      class="iter"
      v-for="value in data"
      :key="value"
    >
    <image-box :url="value" />
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import ImageBox from "./ui/ImageBox.vue";
import Config from '@/global'

export default Vue.extend({
  name: "UiPlay",
  components: {
    ImageBox,
  },
  data() {
      return {
          baseURL: Config.baseURL
      }
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
});
</script>