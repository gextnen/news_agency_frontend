import Vue from 'vue'
import App from './App.vue'
import store from "../vuex/store";
import router from './router'
Vue.config.productionTip = false
import Axios from 'axios'


Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  console.log("Hello from main.js Getitem(token)")
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
