<template>
  <div class="item">
    <div class="pic">
      <img src="../images/我的关注/u285.png" alt="" />
    </div>
    <div class="info">
      <p>宇宙真理报</p>
      <p>2020-02-20</p>
    </div>
    <div class="chanelbtn">取消关注</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.item {
  padding: 20px;
  display: flex;
  border-bottom: 1px solid #ccc;

  .pic {
    width: 40px;
    height: 40px;
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
    }
    p:last-child {
      font-size: 12px;
      color: #999;
    }
  }
  .chanelbtn {
    background-color: rgba(153, 153, 153, 0.2);
    height: 30px;
    width: 70px;
    line-height: 30px;
    text-align: center;
    border-radius: 50px;
    font-size: 12px;
  }
}
</style>
