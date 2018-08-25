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
  name: 'about',
  components: {
    foot,
    holder
  },
  data () {
    return {
      msg: '当前是关于页面'
    }
  }
}
</script>
<style scoped>

</style>
