import Button from './components/Button';
import Card from './components/Card';
import Cell from './components/Cell';
import Icon from './components/Icon';
import InfiniteLoading from './components/InfiniteLoading';
import Tabs from './components/Tabs';
import TabPanel from './components/TabPanel';
import Textbox from './components/Textbox';
import { Swipe, SwipeItem } from 'vue-swipe';

import Spinner from './components/Spinner';

import Toast from './plugins/toast';
import Modal from './plugins/modal';
import Indicator from './plugins/indicator';

import './styles/index.less';
import 'vue-swipe/dist/vue-swipe.css';

const install = function (Vue) {
  Vue.component('AmButton', Button);
  Vue.component('Card', Card);
  Vue.component('Cell', Cell);
  Vue.component('Swipe', Swipe);
  Vue.component('SwipeItem', SwipeItem);
  Vue.component('Spinner', Spinner);
  Vue.component('Icon', Icon);
  Vue.component('Tabs', Tabs);
  Vue.component('TabPanel', TabPanel);
  Vue.component('Textbox', Textbox);

  Vue.component('InfiniteLoading', InfiniteLoading);

  Vue.$toast = Vue.prototype.$toast = Toast;
  Vue.$modal = Vue.prototype.$modal = Modal;
  Vue.$indicator = Vue.prototype.$indicator = Indicator;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  install,
  Button,
  Card,
  Swipe,
  SwipeItem,
  Toast,
  Modal,
  Indicator,
  Spinner,
  InfiniteLoading,
  Icon,
  Tabs,
  TabPanel,
  Textbox
};
