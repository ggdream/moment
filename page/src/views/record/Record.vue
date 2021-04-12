<template>
  <div class="record">
    <div
      class="box"
      v-for="value in data"
      :key="value.vid"
    >
      <record-box
        :label="value.label"
        :subtitle="value.subtitle"
        :datetime="value.datetime"
        :image="value.image === '' ? undefined : value.image"
        :vid="value.vid"
      />
    </div>

    <v-fab-transition>
      <v-btn
        color="#7986CB"
        dark
        fixed
        bottom
        right
        fab
        to="/edit"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import RecordBox from "./RecordBox.vue";
import { Record } from "@/model/record";

export default Vue.extend({
  name: "Record",
  data() {
    return {
      data: [] as Array<Record>,
    };
  },
  components: {
    RecordBox,
  },
  created() {
    this.wheelListener();
    this.reqRecords();
  },
  methods: {
    async reqRecords() {
      const res = await this.$http.getRecords({
        offset: this.data.length,
        number: 4,
      });
      this.data = this.data.concat(res.data);
    },
    wheelListener() {
      window.addEventListener('scroll', () => {

        const clientHeight  = document.documentElement.clientHeight; //浏览器高度
        const scrollHeight = document.body.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;

        if ((scrollTop + clientHeight) >= scrollHeight) {
          console.log("到底了，开始加载数据");
          this.reqRecords()
        }
      })
    }
  },
});
</script>
