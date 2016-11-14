import Vue from 'vue';
import App from './App';
import router from './router';
import AmView from '../src/main';

Vue.use(AmView);

const app = new Vue({
  router,
  ...App
});

app.$mount('#app');
