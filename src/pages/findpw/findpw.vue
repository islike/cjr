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
  name: 'findpw',
  components: {
    holder,
    foot
  },
  data () {
    return {
      msg: '当前是找回密码页面'
    }
  }
}
</script>
<style scoped>

</style>
