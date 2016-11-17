<template>
  <div class="spinner-fading-circle"
    :style="{ width: spinnerSize, height: spinnerSize }"
  >
    <div class="spinner-circle" v-for="n in 12" :class="['spinner-circle' + n]"></div>
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
      }
    }
  }
</script>
