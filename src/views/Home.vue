<template>
  <div class="home">
    <SearchInput></SearchInput>
    <div class="menu">
      <ul class="clearfix">
         <li v-for="item in menuList" :key="item._id">
           <p>{{item.name}}</p>
         </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SearchInput from '../components/SearchInput'
import axios from 'axios'
export default {
  components: {
    SearchInput
  },
  data () {
    return {
      menuList: []
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
        console.log(this.menuList)
        console.log('正则表达式社区'.match(/(?<=\\')[^\\']+(?=\\')/))
      }
    }
  }
}
</script>

<style lang="less" scoped>
.home{
  height: 100%;
  box-sizing: border-box;
  position: relative;
  .menu{
    ul{
      li{
         float: left;
         width: 25%;
      }
    }
  }
}
</style>
