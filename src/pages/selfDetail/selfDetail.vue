<template>
  <div>
    <holder></holder>
    {{this.msg}}
    <foot></foot>
  </div>
</template>
<script>
import holder from '@/components/header/header'
import foot from '@/components/footer/footer'
export default {
  name: 'detail',
  components: {
    holder,
    foot
  },
  data () {
    return {
      msg: '当前是个人信息审核页面'
    }
  }
}
</script>
<style scoped>

</style>
