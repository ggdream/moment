import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import mavonEditor from './plugins/editor'
import Http from './net'


Vue.use(mavonEditor)

Vue.config.productionTip = false

Vue.prototype.formatWord = (text: string) => text.replace(/\n/g, '<br>')
Vue.prototype.$http = new Http()

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
