background-color: rgba(153, 153, 153, 0.2);<template>
  <div class="btn" @click='handleClick'><slot></slot></div>
</template>

<script>
export default {
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang='less' scoped>
.btn{
  background-color: #c30;
  height: 48px;
  line-height: 48px;
  color: #fff;
  text-align: center;
  border-radius: 24px;
  font-size: 18px;
}

</style>
