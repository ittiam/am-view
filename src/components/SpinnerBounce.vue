<template>
  <div class="spinner-bounce">
    <div class="spinner-bounce-bounce1" :style="bounceStyle"></div>
    <div class="spinner-bounce-bounce2" :style="bounceStyle"></div>
    <div class="spinner-bounce-bounce3" :style="bounceStyle"></div>
  </div>
</template>

<script>
  export default {
    props: {
      size: Number,
      color: String
    },
    computed: {
      spinnerSize() {
        return ((this.size || this.$parent.size || 30) / 3) + 'px';
      },
      spinnerColor() {
        return this.color || this.$parent.color || '#3e98f0';
      },
      bounceStyle() {
        return {
          width: this.spinnerSize,
          height: this.spinnerSize,
          backgroundColor: this.spinnerColor
        };
      }
    }
  }
</script>
