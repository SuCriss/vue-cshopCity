<template>
  <div class="shopCar">
    <div class="isGoodsExits" v-if="goods.length > 0">
      <van-checkbox-group class="card-goods" v-model="checkedGoods">
        <van-checkbox
          class="card-goods__item"
          v-for="(item,index) in goods"
          :key="item.id"
          :name="item.id"
        >
          <van-card
            :title="item.title"
            :desc="item.desc"
            :num="item.num"
            :price="formatPrice(item.price)"
            :thumb="item.thumb[0]"
          />
        </van-checkbox>
      </van-checkbox-group>
      <van-submit-bar
        :price="totalPrice"
        :disabled="!checkedGoods.length"
        :button-text="submitBarText"
        @submit="onSubmit"
      >
        <van-checkbox v-model="checked" @change="isChecked">全选</van-checkbox>
      </van-submit-bar>
    </div>
    <div class="empty" v-else>
      <div class="shop_desc">
        <h4>购物车竟然是空的</h4>
        <small>"再忙，也要记得买点什么犒赏自己~"</small>
      </div>
      <van-row gutter="20">
        <p><img src="@/assets/fav.png" alt=""></p>
        <van-col span="12" v-for="(product,index) in products" :key="index" class="pro_detail">
          <router-link to="/proDetail">
            <img v-lazy="product.img">
            <div class="prodesc">
              {{product.desc}}
            </div>
            <div class="price"><span class="count">￥ {{product.price}}</span>&nbsp;<span class="pay_per">{{product.payer}}付款</span></div>
          </router-link>
        </van-col>

      </van-row>
    </div>
    <div class="footer">
      <Tabbar :active="active" />
    </div>
  </div>
</template>

<script>
  import Tabbar from '@/components/tabbar.vue'
  import { Checkbox, CheckboxGroup, Card,Row, Col, SubmitBar, Toast } from 'vant';
  export default {
    components: {
      Tabbar,
      [Card.name]: Card,
      [Checkbox.name]: Checkbox,
      [SubmitBar.name]: SubmitBar,
      [Row.name]: Row,
      [Col.name]: Col,
      [CheckboxGroup.name]: CheckboxGroup
    },
    data() {
      return {
        active:3,
        checkedGoods: [],
        checked:false,
        products:[],
        goods: []
      };
    },
    computed: {
      submitBarText() {
        const count = this.checkedGoods.length;
        return '提交订单' + (count ? `(${count})` : '');
      },
      totalPrice() {
        console.log(this.checkedGoods)
        return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0), 0);
      }
    },
    mounted(){
      this.getProducts();
      this.goods = this.$store.getters.getGoods;
      console.log(this.$store.getters.getGoods);
    },
    methods: {
      formatPrice(price) {
        return (price / 100).toFixed(2);
      },
      onSubmit() {
        Toast('提交订单');
      },
      isChecked(){
        if(this.checked){
          this.goods.map((i,o)=>{
            this.checkedGoods.push(i.id);
          })
        }else{
          this.checkedGoods=[];
        }
      },
      getProducts(){
        this.$get('/products',{})
          .then(data => {
            console.log(data)
            this.products = data.products;
          }).catch( err => {
          // this.$toast(err)
        })
      }
    }
  };
</script>

<style lang="stylus">
  .shopCar
    overflow scroll
    height 100%
  .card-goods
    padding: 10px 0;
    background-color: #fff;
    &__item
      position: relative;
      background-color: #fafafa;
      .van-checkbox__label
        width: 100%;
        height: auto; // temp
        padding: 0 10px 0 15px;
        box-sizing: border-box;
      .van-checkbox__icon
        top: 50%;
        left: 10px;
        z-index: 1;
        position: absolute;
        margin-top: -10px;
      .van-card__price
        color: #f44;
.empty
  .shop_desc
    text-align center
    width 100%
    margin 50px auto
    small
      color: #a29a9b
  p
    text-align center
.van-col
  height 70px;
  margin-top 15px;
  a
   color #7d7e80
.van-row
  margin 0!important
  .van-col--5
    width 20%
    .desc
      font-size 12px
  .van-col--24
    height 100px
  .van-card__desc
    margin-top 5px
  .van-card__bottom
    margin-top 28px
  .van-col--12
    height 200px
    img
      width 100%
  .count
    color #ff5611
    font-size 14px
  .price
    margin-top 10px
  .pay_per
    color: #7a8069
</style>
