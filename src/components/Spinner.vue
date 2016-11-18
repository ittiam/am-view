<template>
  <span><component :is="spinner"></component></span>
</template>

<script>

  import SpinnerSnake from './SpinnerSnake';
  import SpinnerBounce from './SpinnerBounce';
  import SpinnerShape from './SpinnerShape';

  import { oneOf } from '../utils/assist';

  export default {
    computed: {
      spinner() {
        return `spinner-${this.type}`;
      }
    },

    components: {
      SpinnerSnake,
      SpinnerBounce,
      SpinnerShape
    },

    props: {
      type: {
        default: 'shape',
        validator(value) {
          return oneOf(value, ['shape', 'bounce', 'snake']);
        }
      },
      size: {
        type: Number,
        default: 28
      },
      color: {
        type: String,
        default: '#ccc'
      }
    }
  }
</script>
