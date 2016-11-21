<template>
  <div class="tabs" :class="styleClasses">
    <div class="tabs-header">
      <ul class="tabs-header-items" ref="tabs-container">
        <li class="tab-header-item"
          :class="['type-' + type, { 'active': activeTab === tab.id, 'disabled': tab.disabled }]"
          @click="select(tab, $event)"
          v-for="(tab, index) in headers"
        >
          <div class="tab-header-item-icon" v-if="type === 'icon' || type === 'icon-and-text'">
            <icon :icon="tab.icon"></icon>
          </div>
          <div class="tab-header-item-text" v-text="tab.header" v-if="type === 'text' || type === 'icon-and-text'"></div>
        </li>
      </ul>
      <div
        class="tabs-active-tab-indicator" :class="[indicatorColor]"
        :style="indicatorStyle"
      ></div>
    </div>
    <div class="tabs-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import UUID from '../utils/uuid';
  import { oneOf } from '../utils/assist';

  import Icon from './Icon';

  export default {
    components: {
      Icon
    },
    props: {
      type: {
        type: String,
        validator(value) {
          return oneOf(value, ['text', 'icon', 'icon-and-text']);
        },
        default: 'text'
      },
      indicatorColor: {
        type: String,
        default: '#3e98f0'
      },
      fullwidth: {
        type: Boolean,
        default: false
      },
      activeName: String
    },
    data() {
      return {
        activeTab: null,
        activeTabElement: null,
        headers: []
      }
    },
    mounted() {
      // Setup default ids
      for (let i = 0; i < this.$children.length; i++) {
        var tab = this.$children[i];
        this.$children[i].id = tab.id || UUID.short('ui-tab-');

        this.headers.push({
          id: tab.id,
          header: tab.header,
          icon: tab.icon,
          disabled: tab.disabled
        });
      }

      this.activeTab = this.activeName || this.$children[0].id;

      this.$nextTick(() => {
        if (this.$refs['tabs-container']) {
          this.activeTabElement = this.$refs['tabs-container'].querySelector('.active');
        }
      });
    },
    computed: {
      styleClasses() {
        let classes = ['tabs-type-' + this.type];

        if (this.fullwidth) {
          classes.push('fullwidth');
        }
        return classes;
      },
      indicatorStyle() {
        var left = 0;
        if (this.activeTabElement) {
          left = this.activeTabElement.offsetLeft + 'px';
        }

        var width = 100 / this.$children.length + '%';

        return { 'left': left, 'width': width }
      }
    },
    methods: {
      select(tab, e) {
        let newTabElement = e.currentTarget ? e.currentTarget : e;

        if (tab.disabled || this.activeTabElement === newTabElement) {
          return;
        }

        this.activeTabElement = newTabElement;
        this.activeTab  = tab.id;

        this.$emit('tab-changed', tab.id);
      }
    }
  }
</script>
