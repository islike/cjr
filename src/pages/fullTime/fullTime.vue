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
  name: 'fullTime',
  components: {
    foot,
    holder
  },
  data () {
    return {
      msg: '当前是全职页面'
    }
  }
}
</script>
<style scoped>

</style>
