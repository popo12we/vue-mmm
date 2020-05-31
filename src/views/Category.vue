<template>
  <div class="category">
    <AppHeader></AppHeader>
    <SearchInput></SearchInput>
    <div class="categorybox">
      <van-collapse v-model="activeNames" @change="clickTitle">
          <van-collapse-item
            :title="item.title"
            :name="item.id"
            v-for="item in titleList"
            :key="item._id"
          >
            <ul class="clearfix">
              <li v-for="item in secondLevelData" :key="item._id">{{item.category}}</li>
            </ul>
          </van-collapse-item>
      </van-collapse>
    </div>
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
  data () {
    return {
      activeNames: [],
      titleList: [],
      secondLevelData: []
    }
  },
  created () {
    this.getCategoryTitle()
  },
  methods: {
    async getCategoryTitle () {
      const res = await axios.get('/myapi/getcategorytitle')
      if (res.status === 200) {
        this.titleList = res.data.result
      }
    },

    clickTitle (list) {
      // console.log(list)
      // console.log(this.activeNames)
      if (list.length > this.activeNames.length) {
        const lastValue = list[list.length - 1]
        console.log(lastValue)
        this.getSecondLevelData(lastValue)
      }
    },

    async getSecondLevelData (value) {
      const res = await axios.get(`/myapi/getcategory?titleid=${value}`)
      if (res.status === 200) {
        this.secondLevelData = res.data.result
        console.log(this.secondLevelData)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.categorybox {
  margin-top: 20px;
}
ul {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  li {
    width: 33.33%;
    height: 50px;
    line-height: 50px;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    float: left;
    text-align: center;
    font-size: 20px;
    color: #666;
  }
}
</style>
