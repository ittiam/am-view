<template>
  <div class="view view-spinner">
    <div class="demo-name">
      轻提示
      <p>Toast</p>
    </div>

    <div class="demo-content">
      <am-button @click.native="openToast">显示 Toast</am-button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      openToast() {
        this.$toast('数据出错!')
      }
    }
  }
</script>
