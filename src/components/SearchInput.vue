<template>
  <div class="SearchInput clearfix">
    <div class="input">
      <input type="text" placeholder="请输入你想比价的商品" />
    </div>
    <div class="btn">
      <input type="button" value="搜索" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.SearchInput {
  padding-top: 20px;
  .input {
    width: 446px;
    height: 60px;
    margin-left: 20px;
    float: left;

    input {
      width: 100%;
      height: 100%;
      border-radius: 30px;
      background-color: #f1f1f1;
      text-indent: 2em;
    }
  }
  .btn {
    float: right;
    width: 126px;
    height: 60px;
    margin-right: 20px;
    input {
      width: 100%;
      height: 100%;
      border-radius: 30px;
      background-color: #ff841d;
      color: #fff;
      font-size: 24px;
    }
  }
}
</style>
