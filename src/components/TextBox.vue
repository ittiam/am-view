<template>
  <div class="textbox"
    :class="{ 'disabled': disabled, 'active': active, 'has-label': !!label, 'vertical': vertical, 'horizontal': !vertical }"
  >
    <div class="textbox-icon-wrapper" v-if="!!icon">
      <icon :type="icon" class="textbox-icon"></icon>
    </div>
    <div class="textbox-content">
      <label class="textbox-label">
        <div class="textbox-label-text" v-text="label" v-if="!!label"></div>

        <textarea
          v-if="type === 'textarea'"
          class="textbox-textarea"
          :placeholder="placeholder"
          :rows="rows"
          :disabled="disabled"
          :readonly="readonly"
          v-model="currentValue"
          @focus="focussed"
          @blur="blurred"
        ></textarea>
        <input
          v-else
          class="textbox-input"
          :type="type"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          @input="handleInput"
          @focus="focussed"
          @blur="blurred"
        >
      </label>

      <div class="textbox-feedback" v-if="showFeedback">

      </div>
    </div>
  </div>
</template>

<script>
  import Icon from './Icon';

  export default {
    components: {
      Icon
    },
    props: {
      type: {
        type: String,
        default: 'text'
      },
      label: String,
      placeholder: String,
      icon: String,
      rows: {
        type: Number,
        default: 2
      },
      vertical: {
        type: Boolean,
        default: true // v, or h
      },
      disabled: Boolean,
      readonly: Boolean,
      value: ''
    },
    data() {
      return {
        showFeedback: false,
        active: false,
        currentValue: ''
      }
    },
    methods: {
      handleInput(evt) {
        this.currentValue = evt.target.value;
      },
      focussed() {
        this.active = true;
      },
      blurred() {
        this.active = false;
      }
    },
    computed: {

    }
  }
</script>
