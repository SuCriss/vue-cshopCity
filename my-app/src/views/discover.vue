<template>
    <div id="discover">
      <div class="search">
        <van-search
          v-model="keyWord"
          placeholder="请输入搜索关键词"
          show-action
          shape="round"
          @focus="initPage"
          @search="onSearch"
        >
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
      </div>
      <div class="history-panel" v-if="!isFocus">
        <h3 v-if="historyxs">搜索历史</h3>
        <div class="his_ulcon" v-if="historyxs">
          <van-tag v-for="(item,index) in searches_list" :key="index" @click="historysearch(item)" type="success">{{item}}</van-tag>
        </div>
        <van-button size="small"  v-if="historyxs" @click="clearhis()" type="danger">清空历史记录</van-button>
      </div>
     <div class="footer">
       <Tabbar :active="active" />
     </div>
    </div>
</template>

<script>
  import Tabbar from '@/components/tabbar.vue'
  import {saveSearch} from '../cache/cache.js'
  import storage from 'good-storage'
  import { Search,Tag,Button } from 'vant';
    export default {
        name: "discover",
      components:{
        Tabbar,
        [Search.name]:Search,
        [Tag.name]:Tag,
        [Button.name]:Button
      },
      data(){
        return {
          active:2,
          keyWord:'',
          isFocus:true,
          searches_list:[], //历史搜索记录列表
          historyxs:false
        }
      },
      methods:{
        //输入框获取焦点
        initPage(){
          this.isFocus = false;
          //为避免重复先清空再添加
          this.searches_list = [];
          let searches=storage.get('_search_');
          this.searches_list = searches?searches:[];
          if (this.searches_list.length > 0 ) {
            this.historyxs=true;
          }else{
            this.historyxs=false;
          }
        },
          // 清除历史记录
        clearhis(){
          this.$dialog.confirm({
            title: '温馨提示',
            message: '确认清空历史记录？'
          }).then(() => {
            storage.remove('_search_');
            this.searches_list = [];
            this.historyxs=false;
          }).catch(() => {
            //取消
          });
        },
        //点击搜索
        onSearch(){
          this.isFocus = true;

          if(this.keyWord!=''){ //搜索框不为空
            saveSearch(this.keyWord); // 本地存储搜索的内容
            this.isFocus = true;
            this.keyWord='';
          }
        },
        //点击历史搜索把搜索的记录添加到good-storage中
        historysearch(item){
          saveSearch(item);
          this.keyWord = item;
          // this.onSearch();
          this.historyxs = false;
        }
      }
    }
</script>

<style scoped lang="stylus">
.history-panel
  margin 15px
.van-tag
  margin-right 10px
.his_ulcon
  margin-bottom 15px
</style>
