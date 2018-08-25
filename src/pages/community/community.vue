<template>
  <div>
    <holder></holder>
    {{this.msg}}
    <h1>正在建设中...</h1>
    <foot></foot>
  </div>
</template>
<script>
import holder from '@/components/header/header'
import foot from '@/components/footer/footer'
export default {
  name: 'community',
  components: {
    foot,
    holder
  },
  data () {
    return {
      msg: '当前是社区页面'
    }
  }
}
</script>
<style scoped>
h1{
  text-align: center;
  font-weight: 900;
  font-size: 40px;
  height: 300px;
  line-height: 300px;
}
</style>
