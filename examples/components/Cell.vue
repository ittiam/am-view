<template>
  <div class="view view-cell">
    <div class="demo-name">
      单元格
      <p>Cell</p>
    </div>
    <div class="demo-content">
      <div class="list">
        <cell title="标题文字"></cell>
        <cell title="标题文字" brief="辅助文字"></cell>
        <cell title="标题文字" extra="说明文字"></cell>
        <cell title="Google" extra="带链接" to="https://www.google.com"></cell>
        <cell title="标题文字">
          <am-button type="primary" size="small" slot="right">按钮</am-button>
        </cell>
      </div>
    </div>
  </div>
</template>
