import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import service from './utils/http';
import urls from './utils/urls'

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$urls = urls;
Vue.prototype.$https = service;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
