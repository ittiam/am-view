<template>
  <a class="tab-link"
    :class="{'tab-active': active}"
    @click="tabClick">
    <slot>
      <div class="tab-text" :class="{'has-icon': icon}" v-if="title">{{title}}</div>
    </slot>
  </a>
</template>

<script>
  function isNotNull(val) {
    return val !== undefined && val !== null;
  }

  export default {
    props: {
      icon: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      href: {
        type: String
      },
      disabled: {
        type: Boolean
      },
      value: {}
    },
    computed: {
      active () {
        return isNotNull(this.value) && this.$parent.value === this.value;
      }
    },
    methods: {
      tabClick (e) {
        if (this.$parent.handleTabClick) this.$parent.handleTabClick(this.value, this)
        this.$emit('click', e);
      }
    },
    watch: {
      active (val, oldVal) {
        if (val === oldVal) return;
        if (val) this.$emit('active');
      }
    }
  }
</script>
