<template>
  <div class="edit">
    <v-dialog
      v-model="dialog"
      width="60vw"
    >
      <v-card>
        <v-card-title class="headline">
          请输入你的认证私钥
        </v-card-title>

        <v-card-text>
          <v-textarea
            solo
            name="publicKey"
            label="Write it here."
            v-model="value"
            class="text-caption"
          />
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            dark
            @click="verify"
          >
            开始认证
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar">
      {{ verifyMsg }}
    </v-snackbar>
    <mavon-editor
      v-show="!dialog"
      ref="marker"
      v-model="value"
      :toolbars="markdown.toolbars"
      @imgAdd="addImage"
      @save="onSave"
    />
  </div>
</template>

<script lang='ts'>
import Config from "@/global";
import { VerifyImple } from "@/model";
import Safety from "@/tools/safe";
import random from "@/tools/safe/random";
import Vue from "vue";

export default Vue.extend({
  name: "Edit",
  components: {},
  data() {
    return {
      dialog: true,
      value: "",
      verifyMsg: "",
      snackbar: false,
      token: "",
      markdown: Config.marker,
    };
  },
  methods: {
    async verify() {
      const time = new Date().getTime();
      const salt = random(16);
      const sign = Safety.signVerify(time + salt, this.value);
      if (sign === false) {
        this.verifyMsg = "私钥可能存在一些问题~~";
        this.snackbar = true;
        return;
      }
      const data = { time, salt, sign };

      let res: VerifyImple;
      try {
        res = await this.$http.getTokenByVerify(data);
      } catch (error) {
        this.verifyMsg = "服务器暂时无法连接哟~~";
        this.snackbar = true;
        return;
      }
      if (res.code !== 0) {
        this.verifyMsg = res.msg;
        this.snackbar = true;
      } else {
        this.token = res.data;
        this.dialog = false;
      }
    },
    async addImage(pos: number, file: File) {
      const res = await this.$http.uploadImage(file);
      if (res.code !== 0) return;
      // eslint-disable-next-line
      const marker: any = this.$refs.marker;
      marker.$img2Url(pos, res.data);
    },
    async onSave(value: string, render: string) {
      try {
        const res = await this.$http.setRecord({
          label: value.split("\n")[0],
          subtitle: new Date().toString(),
          image: "1.jpg",
          text: render,
        });
        this.verifyMsg = res.msg;
      } catch (error) {
        this.verifyMsg = "服务器暂时无法连接哟~~";
      } finally {
        this.snackbar = true;
      }
    },
  },
});
</script>
