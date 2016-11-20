<template>
  <div class="view view-spinner">
    <div class="demo-name">
      加载
      <p>Spinner</p>
    </div>

    <div class="demo-content">
      <div class="list">
        <cell title="shape" :show-right="true">
          <spinner type="shape" slot="right"></spinner-shape>
        </cell>
        <cell title="snake" :show-right="true">
          <spinner type="snake" slot="right" color="#3e98f0"></spinner-snake>
        </cell>
        <cell title="bounce" :show-right="true">
          <spinner type="bounce" slot="right" color="#3e98f0"></spinner-snake>
        </cell>
      </div>
    </div>
  </div>
</template>
