<template>
  <transition name="toast-fade">
    <div class="toast" v-show="visible">
      <div class="toast-notice" :class="toastClass">
        <i class="toast-text-icon" v-if="type !== 'info'"></i>
        <div class="toast-text" v-if="text" v-html="text"></div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { oneOf } from '../utils/assist';

  export default {
    props: {
      text: String,
      type: {
        validator(value) {
          return oneOf(value, ['info', 'success', 'fail', 'offline']);
        }
      }
    },
    data() {
      return {
        visible: false
      }
    },
    computed: {
      toastClass() {
        return {
          'toast-info': this.type === 'info',
          'toast-fail': this.type === 'fail',
          'toast-success': this.type === 'success'
        }
      }
    }
  }
</script>
