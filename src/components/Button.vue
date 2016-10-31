<template>
  <button :type="htmlType" :class="classes" :disabled="disabled">
    <i :class="loadingIconClasses" v-if="loading"></i>
    <i :class="typeIconClassed" v-if="icon && !loading"></i>
    <slot></slot>
  </button>
</template>

<script>
  import { oneOf } from '../utils/assist';

  const prefixCls = 'btn';
  const iconPrefixCls = 'icon';

  export default {
    props: {
      type: {
        validator(value) {
          return oneOf(value, ['primary', 'ghost', 'warning']);
        }
      },
      size: {
        validator(value) {
          return oneOf(value, ['small', 'large']);
        }
      },
      htmlType: {
        default: 'button',
        validator (value) {
          return oneOf(value, ['button', 'submit', 'reset']);
        }
      },
      icon: String,
      loading: Boolean,
      disabled: Boolean
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-disabled`]: this.disabled,
            [`${prefixCls}-${this.type}`]: !!this.type,
            [`${prefixCls}-${this.size}`]: !!this.size,
            [`${prefixCls}-loading`]: this.loading != null && this.loading
          }
        ]
      },
      loadingIconClasses () {
        return `${iconPrefixCls} icon-loading`;
      },
      typeIconClasses () {
        return [
          `${iconPrefixCls}`,
          {
            [`${iconPrefixCls}-${this.icon}`]: !!this.icon
          }
        ]
      }
    }
  }
</script>

<style lang="less">

</style>
