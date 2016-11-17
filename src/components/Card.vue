<template>
  <div class="card">
    <div class="card-header" v-if="showHead">
      <div class="card-header-inner" ref:head>
        <slot name="title"></slot>
      </div>
      <div class="card-header-extra">
        <slot name="extra"></slot>
      </div>
    </div>
    <div class="card-content">
      <div class="card-content-inner">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showHead: true
      }
    },
    mounted() {
      this.showHead = this.$refs.head.innerHTML !== '';
    }
  };
</script>
