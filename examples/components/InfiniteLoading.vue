<template>
  <div class="view view-spinner">
    <div class="demo-name">
      无限加载
      <p>Infinite Scroll</p>
    </div>

    <div class="demo-content">
      <p class="example-list-item" v-for="item in list" v-text="item"></p>
      <infinite-loading :on-infinite="onInfinite" :distance="distance" v-if="list.length < 300" ref="infiniteLoading"></infinite-loading>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        distance: 100,
        list: []
      }
    },
    beforeMount: function () {
      for (var i = 0; i < 50; i++) {
        this.list.push(i + 1);
      }
    },
    methods: {
      onInfinite: function () {
        setTimeout(function () {
          var temp = [];
          for (var i = this.list.length; i <= this.list.length + 20; i++) {
            temp.push(i);
          }
          this.list = this.list.concat(temp);
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
        }.bind(this), 1000);
      }
    }
  }
</script>

<style lang="less">
  .example-list-item{
    margin: 0;
    padding: 0 10px;
    line-height: 40px;
    color: #666;
    border-bottom: 1px solid #e3e3e3;
  }

  .example-list-item:before{
    content: 'Line: ';
  }
</style>
