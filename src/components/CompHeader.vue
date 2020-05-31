<template>
  <div class="CompHeader clearfix">
    <div class="back" @click="goback"></div>

    <div class="appdown">
      <img src="../assets/images/header_app.png" />
    </div>
    <div class="title">{{headerTitle}}</div>
  </div>
</template>

<script>
export default {
  props: ['headerTitle'],
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style  lang="less" scoped>
.CompHeader {
  height: 98px;
  background-color: #ff841d;
  .back {
    width: 98px;
    height: 98px;
    background: url("../assets/images/back.svg") center center no-repeat;
    background-size: 49px 49px;
    float: left;

  }
  .title {
    height: 98px;
    overflow: hidden;
    line-height: 90px;
    text-align: center;
    font-size: 36px;
    color: #fff;
    font-weight: 700;
  }
  .appdown {
    float: right;
    width: 68px;
    height: 68px;
    margin-top: 15px;
    margin-right: 15px;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
}
</style>
