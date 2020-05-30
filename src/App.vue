<template>
  <div id="app">
      <AppHeader></AppHeader>
      <router-view></router-view>
  </div>
</template>
<script>
import AppHeader from './components/AppHeader.vue'
export default {
  components: {
    AppHeader
  },
  mounted () {
    // axios.get('/myapi/getindexmenu')
  }
}
</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
</style>
