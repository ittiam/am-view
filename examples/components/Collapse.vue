<template>
  <div class="view view-toast">
    <div class="demo-name">
      手风琴
      <p>Collapse</p>
    </div>

    <div class="demo-content">
      <collapse header="This is open initially" :open="true">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur nemo suscipit ipsa molestias, tempora dolor natus modi et incidunt tenetur!</div>
      </collapse>

      <collapse header="Slightly longer body content">
          <b>Howdy!</b>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolore, numquam inventore esse consequatur doloribus pariatur accusantium voluptatum veritatis soluta corrupti impedit, asperiores accusamus! Ullam perferendis, ipsum officia consequatur quam! Sapiente nisi quam voluptates ipsam consequatur autem culpa repudiandae dignissimos.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolore, numquam inventore esse consequatur doloribus pariatur accusantium voluptatum veritatis soluta corrupti impedit, asperiores accusamus! Ullam perferendis, ipsum officia consequatur quam! Sapiente nisi quam voluptates ipsam consequatur autem culpa repudiandae dignissimos.</p>
      </collapse>
    </div>
  </div>
</template>
