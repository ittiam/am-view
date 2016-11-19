<template>
  <div class="view view-icon">
    <div class="demo-name">
      图标
      <p>Icon</p>
    </div>

    <div class="demo-content demo-icons">
      <icon :size="36" type="left"></icon>
      <icon :size="36" type="right"></icon>
      <icon :size="36" type="up"></icon>
      <icon :size="36" type="down"></icon>
      <icon :size="36" type="boultup"></icon>
      <icon :size="36" type="boultdown"></icon>
      <icon :size="36" type="close"></icon>
      <icon :size="36" type="check"></icon>
      <icon :size="36" type="search"></icon>
      <icon :size="36" type="nav"></icon>
      <icon :size="36" type="tip"></icon>
      <icon :size="36" type="discuss"></icon>
      <icon :size="36" type="like"></icon>
      <icon :size="36" type="praise"></icon>
      <icon :size="36" type="clean"></icon>
    </div>
  </div>
</template>

<style lang="less">
  .demo-icons .icon {
    float: left;
    width: 72px;
    height: 72px;
    font-size: 36px;
    box-shadow: inset 0 0 0 2px #ffbb4d;
    margin-right: 8px;
    margin-bottom: 8px;
    text-align: center;
    line-height: 72px;
  }
</style>
