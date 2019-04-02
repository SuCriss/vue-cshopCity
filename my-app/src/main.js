import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Toast,Lazyload,Dialog} from 'vant'
import {fetch,post,patch,put} from "./http/http";

Vue.config.productionTip = false;
Vue.use(Lazyload);
Vue.prototype.$toast = Toast;
Vue.prototype.$dialog = Dialog;
Vue.prototype.$get = fetch;
Vue.prototype.$post = post;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
