import Vue from 'vue';
import AmView from '../src/main';
import App from './App';
import router from './router';

// import AmView from '../lib';

Vue.use(AmView);

const app = new Vue({
  router,
  ...App
});

app.$mount('#app');
