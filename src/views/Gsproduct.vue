<template>
  <div class="gsproduct">
    <CompHeader headerTitle="凑单品" headBgc="#ff841d"></CompHeader>
    <div class="choose">
      <div class="left">

      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import CompHeader from '../components/CompHeader'
export default {
  components: {
    CompHeader
  }
}
</script>

<style  lang="less" scoped>
.gsproduct{
   .choose{
     height: 72px;
     .left{
       overflow: hidden;
     }
     .right{
       width:80px;
       height: 100%;
       float: right;
       border-left: 1px solid #ddd;
    background-image: url(../assets/images/icongsproduct.svg);
    background-size:60%;
    background-position: center;
    background-repeat: no-repeat;
     }
   }
}
</style>
