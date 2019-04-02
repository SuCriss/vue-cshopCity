<template>
  <NavBar
    :title="title"
    :list="textList=list"
    :left-text="list.textL"
    :right-text="list.textR"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>

<script>
  import {NavBar} from 'vant'
  export default {
    name: "nav-bar",
    props:['title','list'],
    data(){
      return {
        textList:{}
      }
    },
    components:{
      NavBar
    },
    methods:{
      onClickLeft(){
        this.$emit('test',this.textList.Lcode)
      },
      onClickRight(){
        this.$emit('test',this.textList.Rcode)
      }
    }
    }
</script>

<style scoped>

</style>
