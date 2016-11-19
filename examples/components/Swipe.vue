<template>
  <div class="view view-spinner">
    <div class="demo-name">
      走马灯
      <p>Swipe</p>
    </div>

    <div class="demo-content">
      <div class="swipe-wrapper">
        <swipe class="my-swipe">
          <swipe-item class="slide1">Slide1</swipe-item>
          <swipe-item class="slide2">Slide2</swipe-item>
          <swipe-item class="slide3">Slide3</swipe-item>
        </swipe>
      </div>

      <div class="divide"></div>

      <div class="swipe-wrapper">
        <swipe class="my-swipe" :speed="900" :auto="0" :show-indicators="false">
          <swipe-item class="slide1">SINGLE SLIDE</swipe-item>
        </swipe>
      </div>

    </div>
  </div>
</template>

<script>

</script>

<style lang="less">
  .swipe-wrapper {
    height: 200px;
  }

  .my-swipe {
    color: #fff;
    font-size: 30px;
    text-align: center;
  }

  .slide1 {
    background-color: #0089dc;
    color: #fff;
  }

  .slide2 {
    background-color: #ffd705;
    color: #000;
  }

  .slide3 {
    background-color: #ff2d4b;
    color: #fff;
  }
</style>
