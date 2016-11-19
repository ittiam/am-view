import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Index from './components/Index';
import Button from './components/Button';
import Cell from './components/Cell';
import Spinner from './components/Spinner';
import Indicator from './components/Indicator';
import Icon from './components/Icon';
import Toast from './components/Toast';
import Modal from './components/Modal';
import InfiniteLoading from './components/InfiniteLoading';
import Tabs from './components/Tabs';
import Swipe from './components/Swipe';

export default new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: Index },
    { path: '/button', component: Button },
    { path: '/cell', component: Cell },
    { path: '/spinner', component: Spinner },
    { path: '/icon', component: Icon },
    { path: '/indicator', component: Indicator },
    { path: '/toast', component: Toast },
    { path: '/modal', component: Modal },
    { path: '/infinite-loading', component: InfiniteLoading },
    { path: '/tabs', component: Tabs },
    { path: '/swipe', component: Swipe }
  ]
});
