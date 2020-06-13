<template>
  <div class="home">
    <AppHeader></AppHeader>
    <SearchInput></SearchInput>
    <div class="menu">
      <ul class="clearfix">
        <li
          v-for="(item,index) in menuList.slice(0,8)"
          @click="goToOther(linkList[index].url,item.name)"
          :key="item._id"
        >
          <img :src="linkList[index].img" />
          <div>{{item.name}}</div>
        </li>
        <li
          v-for="(item,index) in menuList.slice(8,12)"
          @click="goToOther(linkList[index].url,item.name)"
          :key="item._id"
          v-show="showMore"
        >
          <img :src="linkList[index].img" />
          <div>{{item.name}}</div>
        </li>
      </ul>
    </div>
    <!-- 下方商品列表 -->
    <div class="list">
      <router-link :to='/moneyproduct/+`${item.productId}`' v-for="item in list" :key="item._id">
        <div class="item" >
          <div class="img" v-html="item.productImg2"></div>
          <div class="info">
            <div class="title">移动端凑单品：海天 鲜味 生抽 1.28L</div>
            <div class="price">10.9元</div>
            <div class="other">
              <span class="mall">京东商城 | 10-25 14:10</span>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import SearchInput from '../components/SearchInput'
import axios from 'axios'
const img1 = require('../assets/images/ic_search.png')
const img2 = require('../assets/images/ic_cu.png')
const img3 = require('../assets/images/ic_coudanpin.png')
const img4 = require('../assets/images/ic_bcj.png')
const img5 = require('../assets/images/haitao.png')
const img6 = require('../assets/images/ic_temai.png')
const img7 = require('../assets/images/ic_trend.png')
const img8 = require('../assets/images/gengduo.png')
const img9 = require('../assets/images/ic_coudanpin.png')
const img10 = require('../assets/images/ic_kb.png')
const img11 = require('../assets/images/ic_mall.png')
const img12 = require('../assets/images/ic_pp.png')
export default {
  components: {
    AppHeader,
    SearchInput
  },
  data () {
    return {
      menuList: [],
      list: [],
      showMore: false,
      linkList: [
        { url: '/category', img: img1 },
        { url: '/category', img: img2 },
        { url: '/category', img: img3 },
        { url: '/baicaijia', img: img4 },
        { url: '/category', img: img5 },
        { url: '/category', img: img6 },
        { url: '/category', img: img7 },
        { url: '/category', img: img8 },
        { url: '/category', img: img9 },
        { url: '/category', img: img10 },
        { url: '/category', img: img11 },
        { url: '/category', img: img12 }
      ]
    }
  },
  created () {
    this.getIndexMenu()
    this.getMoneyCtrl()
  },
  methods: {
    async getIndexMenu () {
      const res = await axios.get('/myapi/getindexmenu')
      if (res.status === 200) {
        this.menuList = res.data.result
      }
    },

    async getMoneyCtrl () {
      const res = await axios.get('/myapi/getmoneyctrl')
      if (res.status === 200) {
        this.list = res.data.result
      }
    },
    goToOther (url, name) {
      if (name !== '更多') {
        this.$router.push(url)
      } else {
        this.showMore = !this.showMore
      }
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  box-sizing: border-box;
  position: relative;
  .menu {
    ul {
      li {
        float: left;
        width: 25%;
        text-align: center;
        margin-top: 20px;
        font-size: 16px;
      }
      img {
        display: block;
        width: 100px;
        height: 100px;
        margin: 0 auto;
      }
      div {
        padding-top: 10px;
        text-align: center;
      }
    }
  }
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
        height: 180px;
        padding: 10px;
        .price {
          color: red;
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
}
</style>
