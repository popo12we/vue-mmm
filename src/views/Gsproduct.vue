<template>
  <div class="gsproduct">
    <CompHeader headerTitle="凑单品" headBgc="#ff841d"></CompHeader>
    <div class="choose">
      <div class="right"></div>
      <div class="left">
        <div class="shopname" @click="clickShop">京东</div>
        <div class="area" @click="clickArea">华北</div>
        <div class="price" @click="clickPrice">全部价格</div>
      </div>
    </div>
    <van-picker
      title="店铺"
      show-toolbar
      :columns="shopList"
      v-if="shopFlag"
      @confirm="onConfirmShop"
      @cancel="onCancelShop"
      ref="shop"
    />
    <van-picker
      title="地区"
      show-toolbar
      :columns="areaList"
      v-if="areaFlag"
      @confirm="onConfirmArea"
      @cancel="onCancelArea"
      ref="area"
    />
    <van-picker
      title="价格"
      show-toolbar
      :columns="priceList"
      v-if="priceFlag"
      @confirm="onConfirmPrice"
      @cancel="onCancelPrice"
      ref="price"
    />
  </div>
</template>

<script>
import axios from 'axios'
import CompHeader from '../components/CompHeader'
export default {
  components: {
    CompHeader
  },
  data () {
    return {
      shopList: [],
      areaList: [],
      priceList: ['全部价格'],
      shopFlag: false,
      areaFlag: false,
      priceFlag: false,
      shopid: 0,
      areaid: 0
    }
  },
  created () {
    this.getShopData()
    this.getAreaData()
    this.getData()
  },
  methods: {

    async getData () {
      const res = await axios.get(`/myapi/getgsproduct?shopid=${this.shopid}&areaid=${this.areaid}`)
      if (res.status === 200) {
        console.log(res.data)
      }
    },
    async getShopData () {
      const res = await axios.get('/myapi/getgsshop')
      if (res.status === 200) {
        res.data.result.forEach(item => {
          this.shopList.push(item.shopName)
        })
      }
    },
    async getAreaData () {
      const res = await axios.get('/myapi/getgsshoparea')
      if (res.status === 200) {
        res.data.result.forEach(item => {
          this.areaList.push(item.areaName)
        })
      }
    },
    clickShop () {
      this.shopFlag = true
    },
    onConfirmShop () {
      this.shopFlag = false
      this.shopid = this.$refs.shop.getIndexes()[0]
      this.getData()
    },
    onCancelShop () {
      this.shopFlag = false
    },

    clickArea () {
      this.areaFlag = true
    },
    onConfirmArea () {
      this.areaFlag = false
      this.areaid = this.$refs.area.getIndexes()[0]
      this.getData()
    },
    onCancelArea () {
      this.areaFlag = false
    },

    clickPrice () {
      this.priceFlag = true
    },
    onConfirmPrice () {
      this.priceFlag = false
    },
    onCancelPrice () {
      this.priceFlag = false
    }
  }
}
</script>

<style  lang="less" scoped>
.gsproduct {
  background-color: #f1f1f1;
  height: 100%;
  .choose {
    height: 72px;
    .left {
      height: 72px;
      overflow: hidden;
      line-height: 72px;
      > div {
        width: 33.33%;
        height: 72px;
        float: left;
        text-align: center;
        line-height: 72px;
        font-size: 24px;
      }
    }
    .right {
      width: 80px;
      height: 72px;
      line-height: 72px;
      float: right;
      border-left: 1px solid #ddd;
      background-image: url(../assets/images/icongsproduct.svg);
      background-size: 60%;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
  /deep/ .van-picker {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}
</style>
