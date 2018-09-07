<template>
  <div id="app" class="app">
    <holder></holder>
      <el-container class="elContainer">
          <el-aside class="elAside">
             <div class="sider-nav">
                <div 
                  v-for="(item,index) in sidebarItems" 
                  :key="index" 
                  :class="[isActive === index ? 'active': '', 'module']" 
                  @click="moduleClickHandle(item.src, index, $event)">
                    {{item.text}}
                </div>
            </div>
          </el-aside>
          <el-main class="elMain">
             <div>
                <router-view></router-view>
             </div>
          </el-main>
      </el-container>
    <foot></foot>
  </div>
</template>
<script>
import holder from '@/components/header/header'
import foot from '@/components/footer/footer'
import Vue from 'vue'
import { Container,Aside, Main} from 'element-ui'
Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);


export default {
  name: 'about',
   data() {
        return {
            isActive: 0,
            sidebarItems:[{
                text:'关于我们',
                src:'/about/AboutUs'
            },{
                text:'加入我们',
                src:'/about/JoinUs'
            },{
                text:'网站声明',
                src:'/about/declare'
            }],
        }
    },
    methods: {
        // 模块点击事件。
        moduleClickHandle(routerLink, index, event) {
            this.isActive = index;
            this.$router.push({ path: routerLink });
        }
    },
  components: {
    foot,
    holder
  },
  created() {
            this.$router.replace('/about/AboutUs');
        }    
}


</script>
<style lang="less" scoped>
   .elContainer{
     width: 1200px;
     margin: 0 auto;
     margin-top: 30px;
     .elAside{
        width: 220px !important;
        box-sizing: border-box;
        .sider-nav{
          width: 150px;
          margin-left: 70px;
          box-sizing: border-box;
          border: 1px solid #eee;
          .module{
            height: 50px; 
            line-height: 50px;
            text-align: center;
            cursor: pointer; 
            font-size: 16px; 
            border-bottom: 1px solid #eeeeee;
            border-left: 3px solid #fff;
          }
          .module:nth-child(3){
            border-bottom:none;
          }
          .module.active{
            border-left: 3px solid orange;
          }
        }
     }
     .elMain{
        width: 950px !important;
        height: 440px;
        margin-left: 30px;
        border: 1px solid #eeeeee;
        margin-bottom: 30px;
     }
   }
</style>
