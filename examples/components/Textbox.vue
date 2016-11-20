<template>
  <div class="view view-textbox">
    <div class="demo-name">
      文本输入
      <p>Textbox</p>
    </div>

    <div class="demo-content">
      <h2>垂直</h2>
      <div class="divide"></div>
      <textbox type="text" label="Name" :vertical="true" placeholder="Enter your name"></textbox>
      <div class="divide"></div>
      <textbox type="textarea" label="Short bio" :vertical="true" placeholder="Introduce yourself in a few words"></textbox>

      <h2>水平</h2>
      <textbox type="text" label="Name" icon="persion" placeholder="Enter your name"></textbox>
      <div class="divide"></div>
      <textbox type="textarea" label="Short bio" icon="face" :rows="3" placeholder="Introduce yourself in a few words"></textbox>
    </div>
  </div>
</template>

<style lang="less">
  .demo-content {
    h2 {
      text-align: center;
      margin: 10px 0;
    }
  }
</style>
