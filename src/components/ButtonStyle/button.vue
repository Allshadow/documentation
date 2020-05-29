<template lang="html">
  <button>{{buttonText}}</button>
</template>

<script>
export default {
  name: 'button',
  props: ['value'],
  data () {
    return{
      buttonText: '我是测试按钮'
    }
  }
}
</script>

<style lang="css">
input{
  border: 1px solid red;
  color: #333;
}
</style>
