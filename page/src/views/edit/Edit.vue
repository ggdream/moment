<template>
  <!-- get private key -->
  <div class="edit">
    <v-dialog
      persistent
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
      v-show="showEditor"
      ref="marker"
      :toolbars="markdown.toolbars"
      @imgAdd="addImage"
      @save="onSave"
    />

    <v-dialog
      v-model="upDialog"
      width="60vw"
    >
      <v-card>
        <v-card-title class="headline">
          请填写本条博客的标头
        </v-card-title>

        <v-card-text>
          <v-text-field
            solo
            label="标题"
            hide-details="auto"
            v-model="meta.label"
          />
        </v-card-text>

        <v-card-text>
          <v-textarea
            solo
            name="label"
            label="简介"
            v-model="meta.subtitle"
            class="text-caption"
          />
        </v-card-text>

        <v-card-text>
          <v-file-input
            v-model="imageFile"
            placeholder="上传封面"
            label="封面"
            prepend-icon="mdi-camera"
          >
            <template v-slot:selection="{ text }">
              <v-chip
                small
                label
                color="#009688"
              >
                {{ text }}
              </v-chip>
            </template>
          </v-file-input>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            dark
            @click="startUpload"
          >
            开始上传
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
  data() {
    return {
      dialog: true,
      upDialog: false,
      showEditor: false,
      value: "",
      verifyMsg: "",
      snackbar: false,
      token: "",
      markdown: Config.marker,
      imageFile: (null as unknown) as File,
      meta: {
        label: "",
        subtitle: "",
        text: "",
      },
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
        this.showEditor = true;
      }
    },
    async addImage(pos: number, file: File) {
      const res = await this.$http.uploadImage(file, this.token);
      if (res.code !== 0) return;
      // eslint-disable-next-line
      const marker: any = this.$refs.marker;
      marker.$img2Url(pos, res.data);
    },
    onSave(_: string, render: string) {
      this.meta.text = render;
      this.showEditor = false;
      this.upDialog = true;
    },
    async startUpload() {
      if (
        this.meta.label === "" ||
        this.meta.subtitle === "" ||
        this.meta.text === "" ||
        this.imageFile === null
      )
        return;
      try {
        // upload cover image
        const res0 = await this.$http.uploadImage(this.imageFile, this.token);
        if (res0.code !== 0) {
          this.verifyMsg = res0.msg;
          return;
        }

        const { label, subtitle, text } = this.meta;
        const res = await this.$http.setRecord(
          {
            label,
            subtitle,
            image: (res0.data as string).split("/").pop() as string,
            text,
          },
          this.token
        );
        this.verifyMsg = res.msg;
      } catch (error) {
        this.verifyMsg = "服务器暂时无法连接哟~~";
      } finally {
        this.upDialog = false;
        this.showEditor = true;
        this.snackbar = true;
      }
    },
  },
});
</script>
