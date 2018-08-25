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
  name: 'register',
  components: {
    foot,
    holder
  },
  data () {
    return {
      msg: '当前是注册页面'
    }
  }
}
</script>
<style scoped>

</style>