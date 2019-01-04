import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import Vuetify from 'vuetify'
import VueLodash from 'vue-lodash'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(Vuetify)
Vue.use(VueLodash)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
