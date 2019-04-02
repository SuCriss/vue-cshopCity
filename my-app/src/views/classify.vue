<template>
    <div id="classify">
      <div class="classifies clearfix">
        <div class="leftList">
          <van-badge-group :active-key="activeKey" borderColor="green" @change="onChange">
            <van-badge v-for="(classify,index) in classifies" :key="index" :title="classify.title" />
          </van-badge-group>
        </div>
        <div class="rightCont" v-if="activeKey==activeCont">
          <div class="swipe">
            <van-swipe :autoplay="3000">
              <van-swipe-item v-for="(image, index) in images" :key="index">
                <img :src="image.img" />
              </van-swipe-item>
            </van-swipe>
          </div>
          <div class="sugprod" v-for="(item,index) in List" :key="index">
            <h5>{{item.title}}</h5>
            <van-row gutter="20">
              <van-col v-for="(o,i) in item.List2" :key="i" span="8">
                <img v-lazy="o.img" />
                <p>{{o.title}}</p>
              </van-col>
            </van-row>
          </div>
        </div>
      </div>
      <div class="footer">
        <Tabbar :active="active" />
      </div>
    </div>
</template>

<script>
  import Tabbar from '@/components/tabbar.vue'
  import {Swipe,SwipeItem, Badge, BadgeGroup, Row, Col} from 'vant'
    export default {
        name: "classify",
      components:{
        Tabbar,
        [Swipe.name]:Swipe,
        [SwipeItem.name]:SwipeItem,
        [Badge.name]:Badge,
        [BadgeGroup.name]:BadgeGroup,
        [Row.name]:Row,
        [Col.name]:Col
      },
      data(){
          return {
            active:1,
            activeKey:0,
            activeCont:0,
            classifies:[],
            images:[],
            List:[]
          }
      },
      mounted(){
          this.getClassify()
          this.getSwipe()
          this.getSugList()
      },
      methods:{
        onChange(key) {
          if(this.activeKey==key){
            return
          }
          this.activeKey = key;
          this.activeCont = key;
          this.getSugList()
        },
        getClassify(){
          this.$get('/classifies',{})
            .then(data => {
              console.log(data)
              this.classifies = data.classifies;
            }).catch( err => {
            // this.$toast(err)
          })
        },
        getSwipe(){
          this.$get('/images',{})
            .then(data => {
              console.log(data)
              this.images = data.images;
            }).catch( err => {
            // this.$toast(err)
          })
        },
        getSugList(){
          this.$get('/sugclassifies',{})
            .then(data => {
              console.log(data)
              this.List = data.List;
            }).catch( err => {
            // this.$toast(err)
          })
        }
      }
    }
</script>

<style scoped lang="stylus">
.leftList
  float left
  width 25%
  height 90vh
  margin-bottom  65px
  overflow scroll
.rightCont
  float left
  width 75%
  margin-bottom  65px
  height 90vh
  overflow scroll
.leftList::-webkit-scrollbar,.rightCont::-webkit-scrollbar
  display:none
.van-badge--select
  border-color green
.van-badge__text
  text-align center
.van-swipe-item
  img
   width 100%
.sugprod
  div
    text-align center
.van-row
  margin 0!important
</style>
