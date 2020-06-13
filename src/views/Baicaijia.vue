<template>
  <div class="baicaijia">
    <CompHeader headerTitle="白菜价-淘宝内部券" headBgc="#f4483e"></CompHeader>
    <van-tabs>
      <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">内容 {{ index }}</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import CompHeader from '../components/CompHeader'
export default {
  components: {
    CompHeader
  }
}
</script>

<style>
</style>
