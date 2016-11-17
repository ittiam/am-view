import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Index from './components/Index';
import Button from './components/Button';
import Cell from './components/Cell';
import Spinner from './components/Spinner';

export default new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: Index },
    { path: '/button', component: Button },
    { path: '/cell', component: Cell },
    { path: '/spinner', component: Spinner }
  ]
});
