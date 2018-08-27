<template>
  <div>
    <holder></holder>
    <div>
      {{this.msg}} <br/>
      <br/>
      <router-link to="/login">
        <el-button type="primary" round>点击跳转到登录login.vue页面，去开发吧，加油哦！</el-button>
      </router-link>
      <br/><br/>
      <router-link to="/feedback">
        <el-button type="warning" round>点击跳转到反馈feedback.vue页面，去开发吧，加油哦！</el-button>
      </router-link>
      <br/><br/>
      <router-link to="/postdetail">
        <el-button type="info" round>点击跳转到职位详情postDetail.vue页面，去开发吧，加油哦！</el-button>
      </router-link>
      <br/><br/>
      <router-link to="/findpw">
        <el-button type="success" round>点击跳转到找回密码findpw.vue页面，去开发吧，加油哦！</el-button>
      </router-link>
      <br/><br/>
      <router-link to="/register">
        <el-button type="info" round>点击跳转到注册register.vue页面，去开发吧，加油哦！</el-button>
      </router-link>
      <br/><br/>
      <router-link to="/createresume">
        <el-button type="warning" round>点击跳转到创建简历createResume.vue页面，去开发吧，加油哦！</el-button>
      </router-link>
      <br/><br/>
      <router-link to="/selfcenter">
        <el-button type="danger" round>点击跳转到个人中心selfCenter.vue页面，去开发吧，加油哦！</el-button>
      </router-link>
      <br/> <br/>
      <router-link to="/about">
        <el-button type="primary" round>点击跳转到关于about.vue页面，去开发吧，加油哦！</el-button>
      </router-link>
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
