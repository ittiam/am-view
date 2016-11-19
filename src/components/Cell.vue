<template>
  <a class="cell" :class="{ 'cell-with-brief': !!brief }" @click="onClick">
    <div class="cell-left" v-if="showLeft">
      <slot name="left"></slot>
    </div>
    <div class="cell-content">
      <div class="cell-title">
        <slot name="title">
          {{title}}
          <div class="cell-brief" v-text="brief" v-if="brief"></div>
        </slot>
      </div>
      <div class="cell-value">
        <slot></slot>
      </div>
    </div>
    <div class="cell-right" v-if="showRight || !!extra">
      {{extra}}
      <slot name="right"></slot>
    </div>
    <i class="icon-right" v-if="isLink || !!to"></i>
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
      brief: '',
      extra: '',
      showLeft: {
        type: Boolean,
        default: false
      },
      showRight: {
        type: Boolean,
        default: false
      },
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
