import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import DrawerLayout from 'vue-drawer-layout'
 
Vue.use(DrawerLayout)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
