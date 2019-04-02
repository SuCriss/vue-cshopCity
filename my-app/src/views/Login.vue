<template>
  <div id="login">
    <Nav :title="loginTitle" :list="textList" @test="loginPage"></Nav>
  <div class="home">
    <cellGroup>
      <Field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="toast('question')"
      />
      <Field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </cellGroup>
    <div class="btnInfo">
      <Button type="info" @click="userLogin">登录</Button>
      <router-link to="/register"><Button type="primary">注册</Button></router-link>
    </div>
  </div>
  </div>
</template>
<style lang="stylus">
.home
  margin 180px auto 100px;
  text-align center
.btnInfo
  margin-top 50px;
.btnInfo Button:nth-child(1)
  margin-right 10px;
.btnInfo Button:nth-child(2)
  margin-left  10px;
</style>
<script>
// @ is an alias to /src
import Nav from '@/components/NavBar.vue'
import {cellGroup,Field,Button} from 'vant'
import md5 from 'js-md5';
import Cookies from 'js-cookie'
export default {
  name: 'home',
  data(){
    return {
      username:'',
      password:'',
      pwd:'',
      loginTitle:'登录',
      textList:{textL:'返回',textR:'退出'}
    }
  },
  watch:{
    password(newPwd,oldPwd){
      this.pwd = md5(newPwd)
    }
  },
  components: {
    Nav,
    cellGroup,
    Field,
    Button
  },
  methods:{
    toast(text){
      this.$toast(text);
    },
    loginPage(val){
      // this.$toast(val);
    },
    userLogin(){
      console.log(Cookies);
      const user = JSON.parse(Cookies.get('user'))
      console.log(user);
      if(!this.username){
        this.$toast('用户名不能为空');
        return;
      }
      if(!this.pwd){
        this.$toast('密码不能为空');
        return;
      }
      if(this.username == user.name && this.pwd ==user.pwd){
        this.$router.push('/firstPage')
      }
    }
  },
  mounted(){
    // this.$get('https://www.fastmock.site/mock/13ed63e0b7c00387334ba5cbc9b12da7/api/login',{})
    //   .then( data => {
    //     console.log(data)
    //   }).catch(err => {
    //     this.$toast(err)
    // })
  }
}
</script>
