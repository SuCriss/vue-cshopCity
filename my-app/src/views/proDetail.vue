<template>
  <div class="proDetail">
    <Nav :title="loginTitle" :list="textList" @test="navOper"></Nav>
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
        <img :src="thumb" >
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ goods.title }}</div>
        <div class="goods-price">{{ formatPrice(goods.price) }}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：{{ goods.express }}</van-col>
        <van-col span="14">剩余：{{ goods.remain }}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template slot="title">
          <span class="van-cell-text">有赞的店</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情" is-link @click="sorry" />
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-mini-btn icon="chat-o" @click="sorry">
        客服
      </van-goods-action-mini-btn>
      <van-goods-action-mini-btn icon="cart-o" @click="onClickCart">
        购物车
      </van-goods-action-mini-btn>
      <van-goods-action-big-btn @click="addShopCar">
        加入购物车
      </van-goods-action-big-btn>
      <van-goods-action-big-btn primary @click="sorry">
        立即购买
      </van-goods-action-big-btn>
    </van-goods-action>
  </div>
</template>

<script>
  import Nav from '@/components/NavBar.vue'
  import {
    Tag,
    Col,
    Icon,
    Cell,
    CellGroup,
    Swipe,
    Toast,
    SwipeItem,
    GoodsAction,
    GoodsActionBigBtn,
    GoodsActionMiniBtn
  } from 'vant';
  export default {
    components: {
      Nav,
      [Tag.name]: Tag,
      [Col.name]: Col,
      [Icon.name]: Icon,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
      [GoodsAction.name]: GoodsAction,
      [GoodsActionBigBtn.name]: GoodsActionBigBtn,
      [GoodsActionMiniBtn.name]: GoodsActionMiniBtn
    },
    data() {
      return {
        loginTitle:'商品详情',
        textList:{textL:'返回',Lcode:'L',textR:'退出',Rcode:'R'},
        goods: {
          id:'1',
          title: '美国伽力果',
          desc:'（约680g/3个）',
          price: 2680,
          express: '免运费',
          remain: 19,
          num:1,
          thumb: [
            'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
            'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
          ]
        }
      };
    },
    methods: {
      formatPrice() {
        return '¥' + (this.goods.price / 100).toFixed(2);
      },
      onClickCart() {
        this.$router.push('/shopCar');
      },
      sorry() {
        Toast('暂无后续逻辑~');
      },
      addShopCar(){
        var isExits = this.$store.getters.getGoods.find((item)=>{
          return item.id==this.goods.id;
        });
        if(!isExits){
          this.$store.dispatch('updateGoodsList',this.goods)
          this.$toast('添加成功，在购物车等亲~')
        }else{
          this.$toast('该商品已在购物车等亲~')
        }
      },
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
  .proDetail
    height 100%
    overflow scroll
  .goods
    padding-bottom: 50px;
    &-swipe
      img
        width: 100%;
        display: block;
    &-title
      font-size: 16px;
    &-price
      color: #f44;
    &-express
      color: #999;
      font-size: 12px;
      padding: 5px 15px;
    &-cell-group
      margin: 15px 0;
      .van-cell__value
        color: #999;
    &-tag
      margin-left: 5px;
</style>
