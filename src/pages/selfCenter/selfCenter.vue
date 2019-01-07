<template>
  <div>
    <holder></holder>
    <div class="selfcenter">
      <div class="left">
          <div v-for="(item ,index) in feather" v-html="item" :class=" current == index ? 'redright' : ''" @click="current = index">
        </div>
      </div>
      <div class="right"></div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import holder from '@/components/header/header'
import foot from '@/components/footer/footer'
export default {
  name: 'selfCenter',
  components: {
    holder,
    foot
  },
  data () {
    return {
      feather:['个人信息','我的简历','已收藏','已投递','账号安全'],
      current:0,
    }
  }
}
</script>
<style lang="less" scoped>
      .selfcenter{
          background:#ccc;
          width:100%;
          height:500px;
          display:flex;
          justify-content:space-between;
          padding:0 20px;

           .left{
         width:100px;
         height:100px;
         font-size:14px;
          
          .redright{
            border-left:2px solid red;
          }
           
           div{
             padding:5px 0px 5px 10px ;
             background:white;
             margin-top:1px;
           }
       }

       .right{
         flex:1;
         margin-right:10px;
       }
          }
</style>
