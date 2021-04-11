<template>
 <v-card
    class="mx-auto my-12"
    max-width="80vw"
  >
    <v-img
      class="white--text align-end"
      height="300px"
      :src="image"
    >
      <v-card-title>{{ label }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      {{ datetime }}
    </v-card-subtitle>

    <v-card-text class="text--primary">
        {{ subtitle }}
    </v-card-text>

    <v-card-actions>
        <v-spacer></v-spacer>
      <v-btn
        color="#80CBC4"
        dark
        @click="copy()"
      >
        复制地址
      </v-btn>
      <v-btn
        color="#80CBC4"
        dark
        :to="`/show?v=${vid}`"
      >
        打开页面
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
    name: 'RecordBox',
    props: {
        label: {
            type: String,
            required: true,
            default: ''
        },
        datetime: {
            type: String,
            default: ''
        },
        vid: {
            type: String,
            required: true,
            default: ''
        },
        image: {
            type: String,
            default: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
        },
        subtitle: {
            type: String,
            default: ''
        }
    },
    methods: {
        async copy() {
            const data = this.label + '  ' + location.href
            await navigator.clipboard.writeText(data)
            await this.notify()
        },
        async notify() {
            if(undefined === window.Notification) return
            if (Notification.permission === "default") {
                await Notification.requestPermission()
            }
            if (Notification.permission === "granted") {
                const no = new Notification('瞬间', {
                    body: '复制信息成功🎉',
                    icon: this.image
                })
                setTimeout(()=>{no.close()}, 3000)
            }
        }
    }
})
</script>
