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
        <Field
          v-model="repassword"
          type="password"
          label="确认密码"
          placeholder="请再次输入密码"
          required
        />
      </cellGroup>
      <div class="btnInfo">
        <router-link to="/"><Button type="primary">登录</Button></router-link>
        <Button type="info" @click="register">注册</Button>
      </div>
    </div>
  </div>
</template>
<style lang="stylus">
  .home
    margin 180px auto 100px;
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
        repassword:'',
        pwd:'',
        repwd:'',
        loginTitle:'注册',
        textList:{textL:'返回',textR:'退出'}
      }
    },
    components: {
      Nav,
      cellGroup,
      Field,
      Button
    },
    watch: {
      password(newPwd, oldPwd) {
        this.pwd = md5(newPwd)
        console.log(this.pwd)
      },
      repassword(newPwd, oldPwd) {
        this.repwd = md5(newPwd)
      }
    },
    methods:{
      toast(text){
        this.$toast(text);
      },
      loginPage(val){
        this.$toast(val);
      },
      register(){
        const user = {
          name: this.username,
          pwd:this.pwd
        }
        if(!this.username){
          this.$toast('用户名不能为空');
          return;
        }
        if(this.pwd==this.repwd) {
          //创建有效期为7天的cookie
          Cookies.set('user',user, { expires: 7 });
          this.$router.push('/')
        } else {
          this.$toast('两次输入密码不一致')
        }
    }
  },
    mounted (){
      Cookies.remove('user')
    }
  }
</script>
