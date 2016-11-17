import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Index from './components/Index';
import Button from './components/Button';
import Cell from './components/Cell';
import Spinner from './components/Spinner';
import Indicator from './components/Indicator';
import Toast from './components/Toast';
import InfiniteLoading from './components/InfiniteLoading';

export default new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: Index },
    { path: '/button', component: Button },
    { path: '/cell', component: Cell },
    { path: '/spinner', component: Spinner },
    { path: '/indicator', component: Indicator },
    { path: '/toast', component: Toast },
    { path: '/infinite-loading', component: InfiniteLoading }
  ]
});
