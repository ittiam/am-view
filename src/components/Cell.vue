<template>
  <a class="cell" @click="onClick">
    <div class="cell-left">
      <slot name="left"></slot>
    </div>
    <div class="cell-content">
      {{title}}
      <slot></slot>
    </div>
    <div class="cell-right">
      {{extra}}
      <slot name="right"></slot>
    </div>
    <i class="icon-arrow-right" v-if="isLink || !!to"></i>
  </a>
</template>

<script>
  function go (url, $router) {
    if (/^javas/.test(url) || !url) return;
    const useRouter = typeof url === 'object' || ($router && typeof url === 'string' && !/http/.test(url));
    if (useRouter) {
      $router.push(url);
    } else {
      window.location.href = url;
    }
  }

  export default {
    props: {
      title: '',
      extra: '',
      isLink: Boolean,
      to: {
        type: [String, Object]
      }
    },
    methods: {
      onClick() {
        go(this.to, this.$router);
      }
    }
  }
</script>

<style lang="less">

</style>
