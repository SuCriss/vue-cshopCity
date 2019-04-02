<template>
  <div id="tabbar">
    <van-tabbar v-model="currenIndex">
      <van-tabbar-item icon="home-o"><router-link to="/firstPage">首页</router-link></van-tabbar-item>
      <van-tabbar-item icon="apps-o"><router-link to="/classify">分类</router-link></van-tabbar-item>
      <van-tabbar-item icon="search"><router-link to="/discover">发现</router-link></van-tabbar-item>
      <van-tabbar-item icon="cart-o"><router-link to="/shopCar">购物车</router-link></van-tabbar-item>
      <van-tabbar-item icon="manager-o"><router-link to="/mine">我的</router-link></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem} from 'vant';
    export default {
      name: "tabbar",
      props:['active'],
      components:{
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem
      },
      data(){
        return {
        currenIndex:this.active
        }
      }

    }
</script>

<style scoped lang="stylus">
a
  color #7d7e80
</style>
