import Button from './components/Button';
import Card from './components/Card';
import Loading from './components/Loading';
import InfiniteLoading from 'vue-infinite-loading';

import Toast from './plugins/toast';
import Modal from './plugins/modal';

import "./styles/index.less";

const install = function (Vue) {
  Vue.component('Button', Button);
  Vue.component('Card', Card);
  Vue.component('Loading', Loading);
  Vue.component('InfiniteLoading', InfiniteLoading);

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
  Loading,
  Toast,
  Modal,
  InfiniteLoading
};
