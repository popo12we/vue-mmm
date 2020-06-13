<template>
  <div class="productlist">
    <AppHeader></AppHeader>
    <SearchInput></SearchInput>
    <!-- 下方商品列表 -->
    <div class="list">
      <router-link :to="/moneyproduct/+`${item.productId}`" v-for="item in list" :key="item._id">
        <div class="item">
          <div class="img" v-html="item.productImg"></div>
          <div class="info">
            <div class="title">{{item.productName}}</div>
            <div class="price">{{item.productPrice}}</div>
            <div class="other">
              <span class="mall">{{item.productQuote}}</span>
              <span class="mall">{{item.productCom}}</span>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <van-pagination v-model="pageid" :page-count="pageNum" @change="changePage" mode="simple" />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import SearchInput from '../components/SearchInput'
import axios from 'axios'
export default {
  components: {
    AppHeader,
    SearchInput
  },
  created () {
    this.id = this.$route.params.id.split('=')[1]
    this.getproductlist(this.pageid)
  },
  data () {
    return {
      id: '',
      // 翻页
      pageid: 1,
      list: [],
      pagesize: 0,
      totalCount: 0,
      pageNum: 0
    }
  },
  methods: {
    async getproductlist (pageid = 0) {
      const res = await axios.get(
        `/myapi/getproductlist?categoryid=${this.id}&pageid=${pageid}`
      )

      const { pagesize, result, totalCount } = res.data
      this.pagesize = pagesize
      this.list = result
      this.totalCount = totalCount
      this.pageNum = Math.ceil(totalCount / pagesize)
    },

    // 分页
    changePage (page) {
      this.pageid = page
      this.getproductlist(this.pageid)
    }
  }
}
</script>

<style  lang="less" scoped>
.list {
  margin-top: 20px;
  .item {
    border-bottom: 1px solid #ccc;
    margin: 15px 0;
    .img {
      width: 180px;
      height: 180px;
      float: left;
      padding: 10px;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .info {
      overflow: hidden;
      position: relative;
      font-size: 20px;
      height: 200px;
      padding: 10px;
      .price {
        color: red;
        font-size: 24px;
        margin: 10px 0;
      }
      .other {
        position: absolute;
        bottom: 60px;
        font-size: 18px;
        color: #aaa;
      }
    }
  }
}
.btn{
  margin-bottom:20px;
}
</style>
