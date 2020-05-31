<template>
<div>
  <CompHeader headerTitle="国内折扣"></CompHeader>
    <div class="moneyproduct">

    <h1 class="title">{{product.productName}}</h1>
    <div class="from">
      <span class="productFrom">{{product.productFrom}}</span>
      <span class="productTime">{{product.productTime}}</span>
      <span class="productTips">{{product.productTips}}</span>
    </div>
    <div class="content">
      <div class="img" v-html="product.productImg2"></div>
      <div v-html="product.productInfo"></div>
      <div v-html="product.productInfo2"></div>
    </div>
  </div>
</div>

</template>

<script>
import axios from 'axios'
import CompHeader from '../components/CompHeader'
export default {
  components: {
    CompHeader
  },
  created () {
    this.id = this.$route.params.id
    this.getProductData()
  },
  data () {
    return {
      id: '',
      product: {}
    }
  },
  methods: {
    async getProductData () {
      const res = await axios.get(
        `/myapi/getmoneyctrlproduct?productid=${this.id}`
      )
      if (res.status === 200) {
        this.product = res.data.result[0]
      }
    }
  }
}
</script>

<style  lang="less" scoped>
.moneyproduct {
   margin:0 30px;
  .title {
    margin:10px 0;
    font-size: 28px;
  }
  .from {
    span{
      color: #999;
      font-size: 16px;
    }
  }
  .content{
    .img{
      width: 180px;
      height: 180px;
      margin-left: 20px;
      float: right;
    }
    >div{
      font-size: 22px;
      line-height: 40px;
    }
  }
}
</style>
