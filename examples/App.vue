<template>
  <div id="app">
    <div class="page-header">
      <div class="header-left">
        <a class="icon" @click="onBack">&#xe601;</a>
      </div>
      <div class="header-inner">
        <div class="header-title">
          <h1><router-link to="/">Am View</router-link></h1>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    methods: {
      onBack() {
        history.back();
      }
    }
  }
</script>

<style lang="less">
@headerHeight: 44px;

.page-header {
  height: @headerHeight;
  background-color: #3e98f0;

  .header-left {
    position: absolute;
    left: 0;
    top: 0;
    height: @headerHeight;

    .icon {
      padding: 10px;
      color: #fff;
      font-size: 20px;
      height: @headerHeight;
      line-height: @headerHeight;
    }
  }

  .header-title {
    margin: 0 80px;

    h1 {
      font-size: 18px;
      color: #fff;
      width: 100%;
      line-height: @headerHeight;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      a {
        color: #fff;
      }
    }
  }
}

.divide {
  height: 10px;
}

.demo-content {
  margin: 0 .75rem;
}

.demo-name {
  font-size: 1.8rem;
  color: #3e98f0;
  padding: 1.2rem 0;
  text-align: center;

  p {
    font-size: .7rem;
    color: #999;
  }
}
</style>
