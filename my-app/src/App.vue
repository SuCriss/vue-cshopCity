<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  height 100vh
  font-size 12px
  overflow hidden
  color #2c3e50
  .van-tabbar-item--active
    a
      color #1989fa
.footer
  margin-top 65px;
.clearfix:after{
  content:".";/*加一段内容*/
  display:block;/*让生成的元素以块级元素显示，占满剩余空间*/
  height:0;/*避免生成的内容破坏原有布局高度*/
  clear:both;/*清除浮动*/
  visibility:hidden;/*让生成的内容不可见*/
}
.clearfix{zoom:1;/*为IE6，7的兼容性设置*/}
</style>
