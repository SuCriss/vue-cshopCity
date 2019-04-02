<template>
  <div id="firstPage">
    <Nav :title="loginTitle" :list="textList" @test="navOper"></Nav>
    <div class="swipe">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image.img" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="proList">
      <!-- 每个元素的两侧间隔相等 -->
      <van-row gutter="5">
        <van-col v-for="(item, index) in lists" :key="index" span="5"><div class="img"><img v-lazy="item.img"></div><div class="desc">{{item.title}}</div></van-col>
      </van-row>
    </div>
    <div class="notice">
      <van-notice-bar
        :text="notice"
        left-icon="volume-o"
        color="green"
      />
    </div>
    <div class="tabs">
      <van-tabs v-model="active" @click="getProducts" sticky swipeable color="green" title-active-color="green">
        <van-tab v-for="(tab,index) in tabs" :title="tab" :key="index">
          <van-row gutter="20" v-if="index==0">
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
          <van-row v-if="index==1">
            <van-col span="24" v-for="(prod,index) in products2" :key="index" class="pro_detail">
              <router-link to="/proDetail">
                <van-card
                  :num="prod.num"
                  :tag="prod.tag"
                  :price="prod.price"
                  :desc="prod.desc"
                  :title="prod.title"
                  :thumb="prod.img"
                  :origin-price="prod.orgprice"
                >
                </van-card>
              </router-link>
            </van-col>

          </van-row>
          <van-row gutter="20" v-if="index==2">
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
          <van-row gutter="20" v-if="index==3">
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
          <van-row gutter="20" v-if="index==4">
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
          <van-row gutter="20" v-if="index==5">
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
          <van-row gutter="20" v-if="index==6">
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
        </van-tab>
      </van-tabs>
    </div>
    <div class="footer">
      <Tabbar :active="active" />
    </div>
  </div>
</template>

<script>
  import Tabbar from '@/components/tabbar.vue'
  import Nav from '@/components/NavBar.vue'
  import {Swipe, SwipeItem, Row, Col, NoticeBar,Tab, Tabs, Card} from 'vant'
  export default {
    name:'first-page',
    components: {
      Tabbar,
      Nav,
      [Swipe.name]:Swipe,
      [SwipeItem.name]:SwipeItem,
      [Row.name]:Row,
      [Col.name]:Col,
      [NoticeBar.name]:NoticeBar,
      [Tab.name]:Tab,
      [Tabs.name]:Tabs,
      [Card.name]:Card,
    },
    data() {
      return {
        active:0,
        loginTitle:'首页',
        textList:{textL:'返回',Lcode:'L',textR:'退出',Rcode:'R'},
        images:[],
        lists:[],
        notice:'',
        tabs:[],
        products:[],
        products2:[]
      };
    },
    computed: {

    },

    mounted(){
      this.getSwipe()
      this.getList()
      this.getNotice()
      this.getProducts()
    },
    methods: {
      getSwipe(){
        this.$get('/images',{})
          .then(data => {
            console.log(data)
            this.images = data.images;
          }).catch( err => {
          // this.$toast(err)
        })
      },
      getList(){
        this.$get('/lists',{})
          .then(data => {
            console.log(data)
            this.lists = data.lists;
          }).catch( err => {
          // this.$toast(err)
        })
      },
      getNotice(){
        this.$get('/notices',{})
          .then(data => {
            console.log(data)
            this.notice = data.notice;
            this.tabs = data.tabs;
          }).catch( err => {
          // this.$toast(err)
        })
      },
      getProducts(){
        this.$get('/products',{})
          .then(data => {
            console.log(data)
            this.products2 = data.products2
            this.products = data.products;
          }).catch( err => {
          // this.$toast(err)
        })
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

<style lang="stylus" scoped>
#firstPage
  overflow scroll
  height 100%
.proList
  text-align center
.van-col
  height 70px;
  margin-top 15px;
  a
    color #7d7e80
.img
  width 35px
  height 35px
  margin 5px auto
  border-radius 10px
  img
    width 100%
    height:100%
    border-radius inherit
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
