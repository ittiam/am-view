<template>
  <i
    :class="['icon', 'icon-' + type]"
    :style="{ 'font-size': size + 'px', color: color }"
  >
  </i>
</template>

<script>
  export default {
    props: {
      type: String,
      size: {
        type: Number,
        default: 24
      },
      color: {
        type: String,
        default: '#212121'
      }
    }
  }
</script>
