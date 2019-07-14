<template>
  <header>
    <div class="header clearfix">
      <div class="logo">
        <h1>
          <a href="javascript:;">棒棒团公益，残疾人才招聘网</a>
        </h1>
      </div>
      <nav class="nav clearfix">
        <ul class="home clearfix">
          <li>
            <router-link to="/" exact>首页</router-link>
          </li>
          <li>
            <router-link to="/fulltime" class="close">全职</router-link>
          </li>
          <li>
            <router-link to="/parttime" class="close">兼职</router-link>
          </li>
          <li>
            <router-link to="/jobfair" class="close">招聘会</router-link>
          </li>
          <li>
            <router-link to="/community">社区</router-link>
          </li>
        </ul>
        <ul class="login clearfix">
          <li v-if="login">
            <router-link to="/login">登录</router-link>
          </li>
          <li v-if="login">
            <router-link to="/register">
              <i class="beforeL">|</i> 注册 <i class="afterL">|</i>
            </router-link>
          </li>
          <li v-else class="photo">
            <el-dropdown @command="handleCommand" placement="top">
              <span class="el-dropdown-link">
                 <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1116454900,3735379103&fm=27&gp=0.jpg">
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">个人信息</el-dropdown-item>
                <el-dropdown-item command="b">我的简历</el-dropdown-item>
                <el-dropdown-item command="c">我的收藏</el-dropdown-item>
                <el-dropdown-item command="d">我的投递</el-dropdown-item>
                <el-dropdown-item command="e">账号设置</el-dropdown-item>
                <el-dropdown-item command="f">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
          <li>
            <router-link to="/feedback">反馈</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
import Vue from 'vue'
import { Dropdown, DropdownMenu, DropdownItem } from 'element-ui'
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
export default {
  name: 'holder',
  data () {
    return {
      login: !this.$store.state.login
    }
  },
  methods: {
    handleCommand (command) {
      if (command === 'a') {
        this.$router.push({name: 'selfDetail'})
      } else if (command === 'd') {
        this.$store.state.login = false
        this.$router.push('/')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.el-dropdown-menu{
  text-align: center;
  letter-spacing: 2px;
  margin: 1px 0;
}
.active{
  border-bottom: 2px solid #f46d43;
  font-weight: 600;
  color: #f46d43 !important;
  i{
    color: #333;
  }
}
header{
  height: 50px;
  .header{
    width: 1200px;
    margin: 0 auto;
    .logo{
      width: 190px;
      height: 50px;
      background-color: blue;
      float: left;
      background-image:url('../../../src/assets/images/logo.png');
      a{
        cursor: default;
        height: 50px;
        display: block;
        text-indent: -99999px;
        overflow: hidden;
      }
    }
    .nav{
      float: left;
      width: 1010px;
      height: 50px;
      .home{
        float: left;
        margin-left: 49px;
        li{
          float: left;
          a{
            display: block;
            width: 80px;
            height: 48px;
            line-height: 50px;
            text-align: center;
            color:#333;
          }
          :hover{
            border-bottom: 2px solid #f46d43;
            font-weight: 600;
            color: #f46d43;
          }
          .close{
            color: #999;
          }
        }
      }
      .login{
        float:right;
        margin-right: 20px;
        font-size: 14px;
        li{
          float:left;
          width: 60px;
          a{
            color: #333;
            width: 60px;
            height: 48px;
            display: block;
            line-height: 50px;
            text-align: center;
            position: relative;
            .beforeL{
              line-height: 50px;
              position: absolute;
              left: 0;
              top: 0;
            }
            .afterL{
              line-height: 50px;
              position: absolute;
              right: 0;
              top: 0;
            }
          }
          a:hover{
            border-bottom: 2px solid #f46d43;
            font-weight: 600;
            color: #f46d43;
            i{
              color: #333;
            }
          }
        }
        .photo{
          margin: 5px 16px 0 0;
          width: 40px;
          height: 40px;
          border-radius: 20px;
          background-color: #fff;
          position: relative;
          img{
            width: 40px;
            height: 40px;
            border-radius: 20px;
            /* background: url('../../../src/assets/images/hero.png') center center / 40px 40px; */
          }
        }
      }
    }
  }
}
</style>
