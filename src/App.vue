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
