<template>
  <div class="tab-panel" :id="id" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      header: String,
      icon: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        id: null
      }
    },
    computed: {
      styles() {

        return {
          'display': this.$parent.activeTab === this.id ? 'block' : 'none'
        }
      }
    }
  }
</script>
