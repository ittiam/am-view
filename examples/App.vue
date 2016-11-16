<template>
  <div id="app">
    <div class="page-header">
      <div class="header-inner">
        <div class="header-title">
          <h1>Am View</h1>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="less">
@headerHeight: 44px;

body {
  background: #f7f8f8;
}

.page-header {
  height: @headerHeight;
  background-color: #3e98f0;

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
