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
  name: 'createResume',
  components: {
    holder,
    foot
  },
  data () {
    return {
      msg: '当前是创建简历页面'
    }
  }
}
</script>
<style scoped>

</style>
