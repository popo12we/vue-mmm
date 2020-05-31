<template>
  <div class="home">
    <SearchInput></SearchInput>
    <div class="menu">
      <ul class="clearfix">
        <li v-for="(item,index) in menuList.slice(0,8)" @click="goToOther(linkList[index].url,item.name)" :key="item._id">
          <img :src="linkList[index].img" />
          <div>{{item.name}}</div>
        </li>
        <li v-for="(item,index) in menuList.slice(8,12)" @click="goToOther(linkList[index].url,item.name)" :key="item._id" v-show="showMore">
          <img :src="linkList[index].img" />
          <div>{{item.name}}</div>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
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
    SearchInput
  },
  data () {
    return {
      menuList: [],
      showMore: false,
      linkList: [
        { url: '/category', img: img1 },
        { url: '/category', img: img2 },
        { url: '/category', img: img3 },
        { url: '/category', img: img4 },
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
  },
  methods: {
    async getIndexMenu () {
      const res = await axios.get('/myapi/getindexmenu')
      if (res.status === 200) {
        this.menuList = res.data.result
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
        margin:0 auto;
      }
      div {
        padding-top: 10px;
        text-align: center;
      }
    }
  }
}
</style>
