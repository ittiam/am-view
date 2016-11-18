<template>
  <div class="tabs">
    <slot></slot>
    <span class="mu-tab-link-highlight" :style="tabLightStyle"></span>
  </div>
</template>

<script>
  export default {
    props: {
      value: {}
    },
    data () {
      return {
        tabLightStyle: {
          width: '100%',
          transform: 'translate3d(0, 0, 0)'
        }
      }
    },
    methods: {
      handleTabClick (value, tab) {
        if (this.value !== value) {
          this.$emit('change', value);
        }
      },
      getActiveIndex () {
        if (!this.$children || this.$children.length === 0) return -1
        let activeIndex = -1;
        this.$children.forEach((tab, i) => {
          if (tab.value === this.value) {
            activeIndex = i;
            return false;
          }
        })
        return activeIndex;
      },
      setTabLightStyle () {
        let x = this.getActiveIndex() * 100;
        let len = this.$children.length;
        this.tabLightStyle = {
          width: len > 0 ? (100 / len).toFixed(4) + '%' : '100%',
          transform: 'translate3d(' + x + '%, 0, 0)'
        }
      }
    },
    mounted () {
      this.setTabLightStyle();
    },
    watch: {
      value (val, oldVal) {
        if (val === oldVal) return;
        this.setTabLightStyle();
      }
    }
  }
</script>
