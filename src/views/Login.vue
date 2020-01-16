<template>
  <div class="login">
    <div class="close"  @click="$router.go(-1)">
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
      <hm-button @click="login">登录</hm-button>
    </div>
    <div class="register">
      没有账号？ 点击 <span @click="toregister">注册</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  created () {
    // console.log(this.$route)
    const { username, password } = this.$route.params
    this.username = username
    this.password = password
  },
  methods: {
    async login () {
      // console.log('登录了吗')
      if (!this.username || !this.password) {
        alert('用户名或者密码输入为空！')
        return
      }

      // 发送ajax请求
      const res = await this.$axios.post('/login', {
        username: this.username,
        password: this.password
      })
      if (res.data.statusCode === 401) {
        alert('用户名或者密码错误')
      } else {
        console.log(res)
        const { token, user } = res.data.data
        localStorage.setItem('token', token)
        localStorage.setItem('user_id', user.id)
        this.$toast.success('登录成功')
        this.$router.push('/home')
      }
    },
    toregister () {
      this.$router.push({
        path: '/register'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
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
  .register {
    padding-left: 180px;
    span {
      color: #d81e06;
    }
  }
}
</style>
