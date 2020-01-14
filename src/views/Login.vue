<template>
  <div class="login">
    <div class="chanel">
      <img src="../images/登录/u338.png" alt />
    </div>
    <div class="logo">
      <img src="../images/登录/u339.png" alt />
    </div>
    <div class="main">
      <input type="text" class="name" placeholder="用户名/手机号码" />
      <input type="password" class="password" placeholder="密码" />
    </div>
    <button class="loginbtn" @click="login">登录</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      qqq: 'qqq'
    }
  },
  methods: {
    login () {
      this.$emit('login')
    }
  }
}
</script>

<style lang="less">
.login {
  position: relative;
  .chanel {
    border-width: 0px;
    position: absolute;
    left: 10px;
    top: 10px;
    width: 27px;
    height: 27px;
    img {
      border-width: 0px;
      position: absolute;
      left: 0px;
      top: 0px;
      width: 27px;
      height: 27px;
    }
  }
  .logo {
    color: red;
  }
  .main {
    input {
      background: none;
      outline: none;
      border: none;
      border-bottom: 2px solid #333;
      width: 320px;
      height: 30px;
      padding: 20px;
      line-height: 30px;
      margin-bottom: 20px;
      font-size: 18px;
    }
  }
  .loginbtn {
    width: 318px;
    height: 48px;
    background: inherit;
    background-color: rgba(204, 51, 0, 1);
    border: none;
    border-radius: 50px;
    box-shadow: none;
    font-size: 18px;
    color: #fff;
  }
}
</style>
