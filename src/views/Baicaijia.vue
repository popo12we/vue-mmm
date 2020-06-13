<template>
  <div class="baicaijia">
    <CompHeader headerTitle="白菜价-淘宝内部券" headBgc="#f4483e"></CompHeader>
    <van-tabs @change="changeTab">
      <van-tab v-for="(item) in titleList" :title="item.title" :key="item._id">
        <div class="item">
          <div class="left">
            <img
              src="https://gd2.alicdn.com/imgextra/i2/2631609186/TB2NI_UX9iJ.eBjSszfXXa4bVXa_!!2631609186.jpg_400x400.jpg"
            />
          </div>
          <div class="right">
            <div class="title">厦门太祖挑嘴系列牛轧糖200g</div>
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
      baicaijiaproductList: []
    }
  },
  created () {
    this.getbaicaijiatitle()
    this.getChangeTabData()
  },
  methods: {
    async getbaicaijiatitle () {
      const res = await axios.get('/myapi/getbaicaijiatitle')
      if (res.status === 200) {
        this.titleList = res.data.result
      }
    },

    async getChangeTabData (titleid = 0) {
      const res = await axios.get(
        `/myapi/getbaicaijiaproduct?titleid=${titleid}`
      )
      if (res.status === 200) {
        this.baicaijiaproductList = res.data.result
        this.titleList[titleid].objData = this.baicaijiaproductList
        console.log(this.titleList)
      }
    },
    changeTab (titleid) {
      this.getChangeTabData(titleid)
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
