<template>
  <transition name="load">
    <div class="loading" v-show="visible">
      <div class="loading-inner">
        <span class="indicator indicator-white" :style="styles"></span>
        <div class="toast-text" v-if="text" v-html="text"></div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      text: String,
      size: {
        type: Number,
        default: 20
      },
      visible: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      styles() {
        return {
          width: this.size + 'px',
          height: this.size + 'px'
        }
      }
    }
  }
</script>

<style lang="less">
  .loading {
    transition: opacity .3s linear;
  }

  .loading-enter, .loading-leave-active {
    opacity: 0;
  }
</style>
