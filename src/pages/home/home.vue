<template>
  <div>
    <holder></holder>
    <div>
      这里是首页
    </div>
    <foot></foot>
  </div>
</template>
<script>
import Vue from 'vue'
import holder from '@/components/header/header'
import foot from '@/components/footer/footer'

import { Button } from 'element-ui'
Vue.use(Button)

export default {
  name: 'home',
  components: {
    foot,
    holder
  },
  data () {
    return {
      msg: '当前是首页页面，首页基于当前进行开发即可'
    }
  }
}
</script>

<style scoped>
</style>
