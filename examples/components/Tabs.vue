<template>
  <div class="view view-spinner">
    <div class="demo-name">
      标签页
      <p>Tabs</p>
    </div>

    <div class="demo-content">
      <tabs type="text">
        <tab-panel header="Books">
          My books
          <a href="https://google.com" target="_blank" rel="noopener">Hey</a>
        </tab-panel>

        <tab-panel header="Authors">
          Authors
        </tab-panel>

        <tab-panel header="Collections">
          My collections
        </tab-panel>

        <tab-panel header="Favourites">
          My favourites
        </tab-panel>
    </tabs>
    </div>
  </div>
</template>
