<template>
  <div class="productlist">Productlist</div>
</template>

<script>
import axios from 'axios'
export default {
  created () {
    this.id = this.$route.params.id.split('=')[1]
    this.getcategorybyid()
    this.getproductlist()
  },
  data () {
    return {
      id: '',
      // 翻页
      pageid: 1
    }
  },
  methods: {
    async getcategorybyid () {
      const res = await axios.get(`/myapi/getcategorybyid?categoryid=${this.id}`)
      console.log(res)
    },
    async getproductlist () {
      const res = await axios.get(`/myapi/getproductlist?categoryid=${this.id}&pageid=${this.pageid}`)
      console.log(res)
    }

  }
}
</script>

<style>

</style>
