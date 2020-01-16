<template>
  <div class="home">
    <div class="user-info">
      <div class="pic">
        <img src="../images/个人中心/QQ图片20151007185017.jpg" alt="" />
      </div>
      <div class="info">
        <p>
          <i class="iconfont iconxingbienan"></i>
          <span>卑微小闵</span>
        </p>
        <p>lv1 小僵尸</p>
      </div>
      <div class="icon">
        <i class="iconfont iconjiantou1"></i>
      </div>
    </div>
    <div class="list">
      <hm-home-list name="我的关注" desc="关注的用户" @click='tofocus'></hm-home-list>
      <hm-home-list name="我得跟帖" desc="跟帖/回复"></hm-home-list>
      <hm-home-list name="我的收藏" desc="文章/视频"></hm-home-list>
      <hm-home-list name="设置"></hm-home-list>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    tofocus () {
      this.$router.push({
        path: '/focus'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  .user-info {
    padding: 20px;
    display: flex;
    border-bottom: 5px solid #ccc;
    .pic {
      width: 70px;
      height: 70px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .info {
      flex: 1;
      margin-left: 10px;
      p:first-child {
        height: 30px;
        line-height: 30px;
        font-size: 16px;
        color: #000;
        i {
          color: rgb(171, 213, 242);
        }
      }
      p:last-child {
        font-size: 12px;
        color: #999;
      }
    }
    .icon {
      width: 30px;
      i {
        line-height: 70px;
      }
    }
  }
  .list {
    padding: 0 20px;
  }
}
</style>
