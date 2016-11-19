<template>
  <div class="view view-modal">
    <div class="demo-name">
      对话框
      <p>Modal</p>
    </div>

    <div class="demo-content">
      <am-button @click.native="openAlert">打开 alert 提示框</am-button>
      <div class="divide"></div>
      <am-button @click.native="openConfirm">打开 confirm 提示框</am-button>
      <div class="divide"></div>
      <am-button @click.native="openCloseableModal">打开可关闭提示框</am-button>
      <div class="divide"></div>
      <am-button @click.native="openBtns">弹出多个按钮</am-button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      openAlert() {
        this.$modal.alert('标题文字标题文字', '辅助文字辅助文字', {
          onConfirm: function() {
            console.log('确认');
          }
        })
      },
      openConfirm() {
        this.$modal.confirm('删除', '确认删除吗？？？', {
          onConfirm: function() {
            console.log('确认');
          },
          onCancel: function() {
            console.log('取消');
          }
        });
      },
      openCloseableModal() {
        this.$modal({
          closable: true,
          maskClosable: true,
          title: '这是 title',
          message: '这是内容<br /> 这是内容',
          confirmText: ''
        });
      },
      openBtns() {
        this.$modal({
          title: '这个有多个按钮',
          message: '多个按钮试试',
          confirmText: '',
          footer: [
            {
              text: '按钮一',
              onpress: function() {
                console.log('按钮一');
              }
            },
            {
              text: '按钮二',
              onpress: function() {
                console.log('按钮二');
              }
            },
            {
              text: '按钮三',
              onpress: function() {
                console.log('按钮三');
              }
            }
          ]
        })
      }
    }
  }
</script>


