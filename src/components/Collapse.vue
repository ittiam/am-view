<template>
  <div class="collapse">
    <button
      class="collapse-header"
      @click="toggleMenu"
      :disabled="disabled"
    >
      <div class="collapse-header-content">
        <slot name="header">
          <div v-text="header"></div>
        </slot>
      </div>

      <icon class="collapse-header-icon" :type="icon" v-if="!hideIcon"></icon>
    </button>

    <transition
      name="collapse"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
    >
      <div
        class="collapse-body-wrapper"
        v-show="isOpen"
        :style="{ 'height': calculatedHeight }"
        ref="body"
      >
        <div class="collapse-body">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import Icon from './Icon';

  export default {
    components: {
      Icon
    },

    props: {
      open: {
        type: Boolean,
        default: false
      },
      header: String,
      hideIcon: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        isOpen: false,
        height: 0
      }
    },

    computed: {
      icon() {
        return this.isOpen ? 'up' : 'down';
      },

      calculatedHeight() {
        if (this.height === 0) {
          return 'initial';
        }

        return this.height + 'px'
      }
    },

    mounted() {
      if (this.open) {
        this.isOpen = true;
      }

      this.setHeight();
    },

    methods: {
      afterEnter() {
        this.$emit('opened');
        this.setHeight();
      },

      afterLeave() {
        this.$emit('closed');
      },

      toggleMenu() {
        if (this.disabled) return;

        this.isOpen = !this.isOpen;
      },

      setHeight() {
        var body = this.$refs.body;

        body.style.display = 'block';
        this.height = body.scrollHeight;

        if (!this.isOpen) {
          body.style.display = 'none';
        }
      }
    }
  }
</script>
