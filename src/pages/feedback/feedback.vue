<template>
  <div>
    <holder></holder>
   <!--  {{this.msg}} -->
    <foot></foot>
  </div>
</template>
<script>
import holder from '@/components/header/header'
import foot from '@/components/footer/footer'
export default {
  name: 'feedback',
  components: {
    foot,
    holder
  },
  data () {
    return {
      msg: '当前是反馈页面'
    }
  }
}
</script>
<style>

</style>
