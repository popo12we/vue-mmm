<template>
  <div class="AppHeader clearfix">
    <div class="logoimg">
      <img src="../assets/images/header_logo.png" />
    </div>
    <div class="appdown">
      <img src="../assets/images/header_app.png" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style  lang="less" scoped>
.AppHeader {
  height: 98px;
  background-color: #ff841d;
  .logoimg {
    margin-left: 32px;
    margin-top: 25px;
    float: left;
    width: 371px;
    height: 50px;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .appdown {
    float: right;
    width: 68px;
    height: 68px;
    margin-top:15px;
    margin-right: 15px;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
}
</style>
