<template>
  <div>
    <holder></holder>
     <div class="login">
       <img src="../../assets/images/logo.png">
       <div class="content">
         <div class="header">登录</div>
         <div class="yonghu inputm"><i class="icon"></i><input placeholder="请输入手机号码/邮箱/用户名" v-model="address"></div>
         <div class="mima inputm"><i class="icon"></i><input type="password" placeholder="请输入密码" v-model="password"/></div>
         <div class="forgetword">忘记密码？</div>
         <div class="loginbutton">登录</div>
       </div>
       <div class="Lfooter">
         <span>还没有账号</span>
         <span class="signup">免费注册</span>
       </div>
     </div>
    <foot></foot>
  </div>
</template>
<script>
import holder from '@/components/header/header'
import foot from '@/components/footer/footer'
export default {
  name: 'login',
  components: {
    foot,
    holder
  },
  data () {
    return {
     address:null,
     password:null,
    }
  }
}
</script>
<style lang="scss" scoped>
.login{
  width:100%;
  min-width:100%;
  background:url("../../assets/images/backg.jpg") no-repeat;
  background-size: 100% 100%;
     img{
       display:block;
       text-align: center;
       width:296px;
       height:67px;
     }
     .content{
       position:relative;
       width:500px;
       height:400px;
       border-top:10px solid #ff6000;
       background:#ffffff;
       .header{
          color:#ff6000;
          text-align: center;
          margin-top:30px;
          margin-bottom:30px;
       }
       .inputm{
          position:relative;
          width:100%;
          margin:10px 30px; 
          line-height:20px;
          border:2px solid #666;
          .icon{
            display:inline-block;
            width:20px;
            height:20px;
            position:absolute;
            top:50%;
            left:5px;
            transform: translateY(-50%);
          }
          input{
            padding:20px;
            
          }
       }
       .forgetword{
              position:absolute;
              top:0;
              right:30px;
              color:blue;
       }
       .loginbutton{
         text-align:center;
         color:white;
         background:#ff6000;
         width:100%;
         line-height:30px;
       }
     }
    .Lfooter{
        text-align:center;
        .signup{
          display:inline-block;
          padding-left:8px;
          color:#ff6000;
        }
    }
  }
</style>
