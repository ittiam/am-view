import Vue from 'vue';
import ModalComponent from '../components/Modal';

const ModalConstructor = Vue.extend(ModalComponent);
var $vm = null;

function getAnInstance() {
  return new ModalConstructor({
    el: document.createElement('div')
  });
}

var defaults = {
  title: '提示',
  message: '',
  confirmText: '确定',
  cancelText: '',
  closable: false,
  maskClosable: false,
  onClose: function() {},
  onCancel: function() {},
  onConfirm: function() {}
};

var Modal = function(options) {
  options = Object.assign({}, defaults, options);

  if (!$vm) {
    $vm = getAnInstance();
  }

  let div = $vm.$el;

  for (var prop in options) {
    if (options.hasOwnProperty(prop)) {
      $vm[prop] = options[prop];
    }
  }

  function close() {
    setTimeout(function() {
      $vm.footer = [];
      div.parentNode.removeChild(div);
    }, 350);
  }

  var originClose = $vm.onClose || function() {};
  $vm.onClose = function() {
    originClose();
    close();
  };

  document.body.appendChild(div);

  Vue.nextTick(() => {
    $vm.visible = true;
  });
};

Modal.alert = function (title, message, options) {
  if (typeof message === 'object') {
    options = message;
    message = '';
  }

  return Modal(Object.assign({
    title: title,
    message: message,
    cancelText: ''
  }, options));
};

Modal.confirm = function (title, message, options) {
  if (typeof message === 'object') {
    options = message;
    message = '';
  }

  return Modal(Object.assign({
    title: title,
    message: message,
    cancelText: '取消'
  }, options));
};

export default Modal;
