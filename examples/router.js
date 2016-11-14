import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Index from './components/Index';
import Button from './components/Button';

export default new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: Index },
    { path: '/button', component: Button }
  ]
});
