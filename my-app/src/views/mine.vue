<template>
  <div class="mine">
    <Nav :title="loginTitle" :list="textList" @test="navOper"></Nav>
    <img class="user-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">
    <van-row class="user-links">
      <van-col span="4">
        <van-icon name="pending-payment" />
        待付款
      </van-col>
      <van-col span="4">
        <van-icon name="tosend" />
        待发货
      </van-col>
      <van-col span="4">
        <van-icon name="logistics" info="1" />
        待收货
      </van-col>
      <van-col span="4">
        <van-icon name="other-pay" info="3" />
        评价
      </van-col>
      <van-col span="4">
        <van-icon name="after-sale" />
        退款/售后
      </van-col>

    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
      <van-cell icon="gift-o" title="我收到的礼物" is-link />
    </van-cell-group>
    <div class="footer">
      <Tabbar :active="active" />
    </div>
  </div>
</template>

<script>
  import Tabbar from '@/components/tabbar.vue'
  import Nav from '@/components/NavBar.vue'
  import { Row, Col, Icon, Cell, CellGroup } from 'vant';
  export default {
    components: {
      Tabbar,
      Nav,
      [Row.name]: Row,
      [Col.name]: Col,
      [Icon.name]: Icon,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup
    },
    data(){
      return {
        active:4,
        loginTitle:'我的',
        textList:{textL:'返回',Lcode:'L',textR:'退出',Rcode:'R'}
      }
    },
    methods:{
      navOper(text){
        if(text == 'R') {
          this.$router.push('/');
        }else{
          this.$router.go(-1)
        }
      }
    }
  };
</script>

<style lang="stylus">
  .user
    &-poster
      width: 100%;
      display: block;
    &-group
      margin-bottom: 15px;
    &-links
      padding: 15px 0;
      font-size: 12px;
      text-align: center;
      background-color: #fff;
      .van-icon
        display: block;
        font-size: 24px;
.user-links
  .van-col--4
    width 20%
    color #aeb0a7
  .van-icon
    color #ff2011
    .van-info
      top -.4rem;
      right 1.4rem
</style>
