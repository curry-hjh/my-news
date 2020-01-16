<template>
  <div class="focus">
    <div class="top">
      <div class="left" @click="$router.go(-1)">
        <i class="iconfont iconjiantou2"></i>
      </div>
      <div class="logo">
        <span>我的关注</span>
      </div>
    </div>
    <div class="list">
      <hm-focus-list></hm-focus-list>
      <hm-focus-list></hm-focus-list>
      <hm-focus-list></hm-focus-list>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.focus {
  .top {
    padding: 20px;
    display: flex;
    .logo {
      flex: 1;
      text-align: center;
      span {
        font-size: 14px;
        font-weight: 700;
      }
    }
  }
   .list {
    padding: 0 20px;
  }
}
</style>
