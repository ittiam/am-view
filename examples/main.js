import Vue from 'vue';
import App from './App';
import router from './router';
import AmView from '../src/main';

// import AmView from '../lib';
// import '../lib/style.css';

Vue.use(AmView);

const app = new Vue({
  router,
  ...App
});

app.$mount('#app');
