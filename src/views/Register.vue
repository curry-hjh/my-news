<template>
  <div class="register">
    <div class="close">
      <i class="iconfont iconicon-test"></i>
    </div>
    <div class="logo">
      <i class="iconfont iconnew"></i>
    </div>
    <div class="username">
      <!-- <hm-input placeholder="请输入用户名" v-model="username"></hm-input> -->
      <hm-input
        placeholder="请输入用户名"
        v-model="username"
        :rules="/^1\d{4,10}$/"
        err-msg="输入的用户名格式错误"
      ></hm-input>
    </div>
    <div class="nickname">
      <!-- <hm-input placeholder="请输入用户名" v-model="username"></hm-input> -->
      <hm-input
        placeholder="请输入昵称"
        v-model="nickname"
        :rules="/^1\d{4,10}$/"
        err-msg="输入的昵称格式错误"
      ></hm-input>
    </div>
    <div class="password">
      <hm-input
        type="password"
        placeholder="请输入密码"
        v-model="password"
        :rules="/^\d{3,12}$/"
        err-msg="你输入的密码格式有误"
      ></hm-input>
    </div>
    <div class="btn">
      <hm-button @click="register">注册</hm-button>
    </div>
  </div>
</template>

<script>
import HmInput from '../components/HmInput'
import HmButton from '../components/HmButton'
import axios from 'axios'
export default {
  data () {
    return {
      username: '',
      password: '',
      nickname: ''
    }
  },
  components: {
    HmInput,
    HmButton
  },
  methods: {
    async register () {
      // console.log('登录了吗')
      if (!this.username || !this.password || !this.nickname) {
        alert('输入不能为空！')
        return
      }
      // 发送ajax请求
      const res = await axios.post('http://localhost:3000/register', {
        username: this.username,
        password: this.password,
        nickname: this.nickname
      })
      if (res.data.statusCode === 401) {
        alert('服务器繁忙，请重试')
      } else {
        await alert('注册成功')
        this.$router.push({
          path: '/'
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.register {
  padding: 20px;
  .close {
    i {
      font-size: 27px;
    }
  }
  .logo {
    text-align: center;
    i {
      font-size: 126px;
      color: #d81e06;
    }
  }
  .btn {
    margin-top: 20px;
  }
}
</style>
