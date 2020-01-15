<template>
  <div id="app">
    <router-view @toregister="toregister"></router-view>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  methods: {
    toregister() {
      this.$router.push({
        path: "/register",
      });
    }
  }
};
</script>

<style lang="less"></style>
