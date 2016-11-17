<template>
  <div class="view view-spinner">
    <div class="demo-name">
      加载
      <p>Indicator</p>
    </div>

    <div class="demo-content">
      <am-button @click.native="openIndicator">显示 Indicator</am-button>
    </div>

    <indicator :show="show"></indicator>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    },
    methods: {
      openIndicator() {
        this.show = true;

        setTimeout(() => {
          this.show = false;
        }, 1000);
      }
    }
  }
</script>
