<template>
  <div class="baicaijia">
    <CompHeader headerTitle="白菜价-淘宝内部券" headBgc="#f4483e"></CompHeader>
    <van-tabs @change="changeTab">
      <van-tab v-for="(item) in titleList" :title="item.title" :key="item._id">

        <div class="item" v-for="item1 in baicaijiaproductList" :key="item1._id">

          <div class="left" v-html="item1.productImg">

          </div>
          <div class="right">
            <div class="title" v-html="item1.productName"></div>
            <div class="price">
              <span class="newprice"><i>¥</i>券后7.9</span>
              <span class="oldprice"><i>¥</i>13.8</span>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import CompHeader from '../components/CompHeader'
import axios from 'axios'
export default {
  components: {
    CompHeader
  },
  data () {
    return {
      titleList: [],
      changeid: 0,
      baicaijiaproductList: []
    }
  },
  created () {
    this.getbaicaijiatitle()
    this.getChangeTabData(this.changeid)
  },
  methods: {
    async getbaicaijiatitle () {
      const res = await axios.get('/myapi/getbaicaijiatitle')
      if (res.status === 200) {
        this.titleList = res.data.result
      }
    },

    async getChangeTabData () {
      const res = await axios.get(
        `/myapi/getbaicaijiaproduct?titleid=${this.changeid}`
      )
      if (res.status === 200) {
        this.baicaijiaproductList = res.data.result
      }
    },
    changeTab (titleid) {
      this.changeid = titleid
      this.getChangeTabData(this.changeid)
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .van-tab__text {
  color: #000;
  font-size: 20px;
}
.baicaijia {
  background-color: #f1f1f1;
  .item {
    margin: 10px;
    overflow: hidden;
    .left {
      width: 200px;
      height: 200px;
      float: left;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .right {
      overflow: hidden;
      height: 200px;
      padding-left: 20px;
      .price{
        margin-top: 20px;
        .newprice{
          color: orangered;
          font-size: 32px;
          i{
            font-size: 16px;
          }
        }
        .oldprice{
          color:#bbb;
          font-size: 14px;
          margin-left: 8px;
          i{
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
