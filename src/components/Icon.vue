<template>
  <i
    :class="['icon', 'icon-' + type]"
    :style="{ 'font-size': size + 'px' }"
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
      }
    }
  }
</script>
