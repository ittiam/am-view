import Button from './components/Button';
import Card from './components/Card';
import Cell from './components/Cell';
import InfiniteLoading from 'vue-infinite-loading/src/index';

import SpinnerShape from './components/SpinnerShape';
import SpinnerSnake from './components/SpinnerSnake';
import Indicator from './components/Indicator';

import Toast from './plugins/toast';
import Modal from './plugins/modal';

import "./styles/index.less";

const install = function (Vue) {
  Vue.component('AmButton', Button);
  Vue.component('Card', Card);
  Vue.component('Cell', Cell);
  Vue.component('SpinnerShape', SpinnerShape);
  Vue.component('SpinnerSnake', SpinnerSnake);
  Vue.component('InfiniteLoading', InfiniteLoading);
  Vue.component('Indicator', Indicator);

  Vue.$toast = Vue.prototype.$toast = Toast;
  Vue.$modal = Vue.prototype.$modal = Modal;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  install,
  Button,
  Card,
  Toast,
  Modal,
  InfiniteLoading,
  SpinnerShape,
  SpinnerSnake,
  Indicator
};
