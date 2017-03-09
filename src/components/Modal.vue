<template>
  <div class="modal">
    <transition name="fade">
      <div class="modal-mask" @click="mask" v-if="show"></div>
    </transition>
    <div class="modal-wrapper" :style="styles" :class="classes">
      <transition name="msgbox-fade">
        <div class="modal-content" v-if="show">
          <button aria-label="Close" class="modal-close" v-if="closable" @click="close">
            <span class="modal-close-x"></span>
          </button>
          <div class="modal-header" v-if="title" :class="{ 'without-body': !message }">
            <div class="modal-title">{{title}}</div>
          </div>
          <div class="modal-body" v-if="message" v-html="message"></div>
          <div class="modal-footer">
            <div class="modal-button-group-v" v-if="footer.length">
              <a class="modal-button" @click="onPress(button)" v-for="button in footer">{{button.text}}</a>
            </div>
            <div class="modal-button-group-h">
              <a class="modal-button" v-if="cancelText" @click="cancel">{{cancelText}}</a>
              <a class="modal-button" v-if="confirmText" @click="confirm">{{confirmText}}</a>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      title: {
        type: String
      },
      message: String,
      width: {
        type: [Number, String],
        default: 256
      },
      confirmText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: ''
      },
      closable: {
        type: Boolean,
        default: true
      },
      maskClosable: {
        type: Boolean,
        default: false
      },
      transparent: {
        type: Boolean,
        default: true
      },
      style: Object
    },
    data() {
      return {
        footer: [],
        show: false,
        onClose: null,
        onConfirm: null,
        onCancel: null
      }
    },
    mounted() {
      if (this.visible) {
        this.show = true;
      }
    },
    methods: {
      close() {
        this.visible = false;
        if (this.onClose) {
          this.onClose();
        }
      },
      mask() {
        if(this.maskClosable) {
          this.close();
        }
      },
      confirm() {
        this.close();
        if (this.onConfirm) {
          this.onConfirm();
        }
      },
      cancel() {
        this.close();
        if (this.onConfirm) {
          this.onCancel();
        }
      },
      onPress(button) {
        this.close();
        if (button.onpress) {
          button.onpress.call(this);
        }
      }
    },
    computed: {
      classes() {
        return {
          'modal-transparent': this.transparent
        }
      },
      styles() {
        let style = {};

        const styleWidth = {
          width: `${this.width}px`
        };

        const customStyle = !!this.style ? this.style : {};

        Object.assign(style, styleWidth, customStyle);

        return style;
      }
    },
    watch: {
      visible(val) {
        this.show = !!val;
      }
    }
  }
</script>
