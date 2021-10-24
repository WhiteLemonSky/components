import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ELementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios' /* 引入axios进行地址访问*/
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(ELementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
