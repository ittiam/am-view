<template>
  <transition name="indicator">
    <div class="indicator" v-show="visible">
      <div class="indicator-wrapper" :style="{ 'padding': text ? '20px' : '15px' }">
        <spinner class="indicator-spin" type="snake" :size="32"></spinner>
        <span class="indicator-text" v-show="text">{{ text }}</span>
      </div>
      <div class="indicator-mask" @touchmove.stop.prevent></div>
    </div>
  </transition>
</template>

<script>
  import Spinner from './Spinner';

  export default {
    data() {
      return {
        visible: false
      };
    },
    components: {
      Spinner
    },
    beforeMount() {
      if (this.show) {
        this.visible = true;
      }
    },
    watch: {
      show(val) {
        this.visible = !!val;
      }
    },
    props: {
      show: {
        type: Boolean,
        default: false
      },
      text: String
    }
  };
</script>
