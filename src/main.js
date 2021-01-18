import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueKonva from 'vue-konva'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.use(VueKonva)


Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
