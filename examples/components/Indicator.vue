<template>
  <div class="view view-indicator">
    <div class="demo-name">
      加载
      <p>Indicator</p>
    </div>

    <div class="demo-content">
      <am-button @click.native="openIndicator">显示 Indicator</am-button>
      <div class="divide"></div>
      <am-button @click.native="openTextIndicator">显示 带文字 Indicator</am-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        showText: false
      }
    },
    methods: {
      openTextIndicator() {
        this.$indicator.open('加载中...');
      },
      openIndicator() {
        this.$indicator.open();

        setTimeout(() => {
          this.$indicator.close();
        }, 1000);
      }
    }
  }
</script>
