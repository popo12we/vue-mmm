<template>
  <div id="app">
      11111
  </div>
</template>
<script>
import axios from 'axios'
export default {
  mounted () {
    axios.get('/myapi/getindexmenu')
  }
}
</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
}
  #app{
   height: 98px;
   background-color: red;
  }
</style>
