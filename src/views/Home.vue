<template>
  <div class="home">
    <SearchInput></SearchInput>
  </div>
</template>

<script>
import SearchInput from '../components/SearchInput'
export default {
  components: {
    SearchInput
  }
}
</script>

<style lang="less" scoped>
.home{
  height: 100%;
  box-sizing: border-box;
  position: relative;
}
</style>
