<template>
  <div class="moneyproduct">
    <h1 class="title">{{product.productName}}</h1>
    <div class="from">
      <span class="productFrom">{{product.productFrom}}</span>
      <span class="productTime">{{product.productTime}}</span>
      <span class="productTips">{{product.productTips}}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
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
      console.log(this.product)
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
}
</style>
