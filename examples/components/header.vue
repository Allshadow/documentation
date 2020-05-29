<template lang="html">
  <div class="header-model">
    <div class="header">
      <div class="header-left">Allshadow</div>
      <ul class="header-right">
        <li :class="{ select : tabIndex == '0'}" @click="changeTab('0')">组件</li>
        <li :class="{ select : tabIndex == '1'}" @click="changeTab('1')">说明</li>
        <li :class="{ select : tabIndex == '2'}" @click="changeTab('2')">我的</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabIndex: '0'
    }
  },
  methods: {
    changeTab(index) {
      this.tabIndex = index;
      if('0' == index){
        this.$router.push({
          path:'/show'
        })
      }else if('1' == index){
        this.$router.push({
          path:'/explain'
        })
      }else if('2' == index){
        this.$router.push({
          path:'/test'
        })
      }
    }
  },
}
</script>

<style scoped lang="scss">
  .header-model{
    .header{
      width: 1200px;
      margin: 0 auto;
      vertical-align: middle;
      @at-root{
        &-left{
          float: left;
          font-size: 36px;
          color: #3385ff;
          padding: 10px;
        }
        &-right{
          float: right;
          li{
            display: inline-block;
            padding: 10px;
            cursor: pointer;
          }
          .select{
            color: #3a8ee6;
          }
        }
      }
    }
  }
</style>
