<template>
  <div class="spinner-snake" :style="{
    'border-top-color': spinnerColor,
    'border-left-color': spinnerColor,
    'border-bottom-color': spinnerColor,
    'height': spinnerSize,
    'width': spinnerSize
    }">
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
        return (this.size || this.$parent.size || 20) + 'px'
      },
      spinnerColor() {
        return this.color || this.$parent.color || '#fff';
      }
    }
  }
</script>
