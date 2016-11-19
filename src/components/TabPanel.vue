<template>
  <div class="tab-panel" :id="id" v-show="active">
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
      active() {
        return this.$parent.activeTab === this.id;
      }
    }
  }
</script>
