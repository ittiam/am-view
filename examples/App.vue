<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="less">
.view {
  padding-top: 44px;
}

.page-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  z-index: 99;
  background-color: #3e98f0;

  .header-title {
    margin: 0 80px;

    h1 {
      font-size: 18px;
      color: #fff;
      width: 100%;
      line-height: 44px;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
