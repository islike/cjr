<template>
  <div>
    <holder></holder>
     <div class="login" v-if="signin">
       <img src="../../assets/images/logo.png">
       <div class="content">
         <div class="header">登录</div>
         <div class="yonghu inputm">
           <div class="icon"></div>
           <input type="text" placeholder="请输入手机号码/邮箱/用户名" v-model="address">
          </div>
         <div class="mima inputm">
           <div class="icon"></div>
           <input  type="password" placeholder="请输入密码" v-model="password"/>
          </div>
         <div class="forgetword" @click="forgetword"><div>忘记密码？</div></div>
         <div class="loginbutton">登录</div>
       </div>
       <div class="Lfooter">
         <span>还没有账号?</span>
         <span class="signup" @click="signup">免费注册</span>
       </div>
      
     </div>
     <div class="login" v-if="!signin&&desicion">
        <img src="../../assets/images/logo.png">
       <div class="content">
         <div class="header" >注册账号</div>
         <div class=" common">
           <div style="padding:5px 0">电子邮箱：</div>
           <div class="youx inputs">
             <input type="email" v-model="email" placeholder="请输入邮箱账号">
           </div>
         </div>
         <div class="common ">
           <div style="padding:5px 0">登录密码：</div>
           <div class="dmima inputs">
             <input type="password" v-model="password" placeholder="请输入密码">
           </div>
         </div>
         <div class="common">
           <div style="padding:5px 0">确认密码：</div>
           <div class="queren inputs">
             <input type="password" v-model="repassword" placeholder="请确认密码">
           </div>
         </div>
         <div class="xiyi">点击注册表示你同意<span style="color:blue">《用户使用协议》</span></div>
          <div class="signupbutton">立即注册</div>
       </div>
       <div class="Lfooter">
         <span>已有账号</span>
         <span class="signup" @click="signup">立即登录</span>
       </div>
     </div>

     <div class="login" v-if="!desicion">
      <img src="../../assets/images/logo.png">
       <div class="content">
         <div class="header" >找回密码</div>
         <div class=" common">
           <div style="padding:5px 0">手机号：</div>
           <div class="youx inputs">
             <input type="email" v-model="email" placeholder="请输入注册手机号">
           </div>
         </div>
         <div class="common ">
           <div style="padding:5px 0">验证码：</div>
           <div class="dmima inputs">
             <input type="password" v-model="password" placeholder="请输入验证码">
           </div>
           <div class="getcode">获取验证码</div>
         </div>
         <div class="forgetword" @click.stop="signup1"><div>返回<span style="color:orangered">登录</span></div></div>
          <div class="yanzhengbutton">立即验证</div>
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
     signin:true,
     desicion:true,
    }
  },
  methods:{
    signup(){
      this.signin = !this.signin;
    },
    forgetword(){
      this.desicion = false
      this.signin = false;
    },
    signup1(){
      this.signin = true;
      this.desicion = true
    }
  }
}
</script>
<style lang="less" scoped>
.login{
   height:500px;
   width:100%;
   background:url(../../assets/images/backg.jpg);
   background-repeat: no-repeat;
   background-size:100% 100%;
   position:relative;
        
          img{
              display: block;
              position:absolute;
              top:20px;;
              left:50%;
              transform: translateX(-50%);
              opacity: .5;
            }


            .Lfooter{
                position:absolute;
                bottom:80px;
                left:50%;
                transform: translateX(-50%);
                 

                 .signup{
                   display:inline-block;
                   padding-left:5px;
                   color:orangered;
                 }
            }

    .content{
              position:absolute;
              left:50%;
              top:80px;
              transform: translateX(-50%);
              width:300px;
              height:280px;
              border-top:5px solid orangered;
              background:white;
                
                .header{
                    color:orangered;
                    text-align:center;
                    margin:20px 0;
                    font-size:18px;
                }
                
                .xiyi{
                  text-align:center;
                  font-size:12px;
                  padding-top:5px;
                }
                
                
                .common{
                  display:flex;
                  padding:10px 20px 5px 20px;
                  font-size:14px;
                
             
                         
                         .inputs{
                           flex:1;
                           display:flex;
                           border:1px solid #666;
                           border-radius:3px;
                           padding:5px 0;
                           color:#f6f6f6;
                           margin-right:8px;

                           input{
                             flex:1;
                             padding-left:10px;
                           }
                         }

                         .getcode{
                           background:#666;
                           padding:5px 5px;
                           border-radius:3px;

                         }
                         
                         
                         
                }


                .inputm{
                  display:-webkit-flex;
                  display:flex;
                  margin:20px 20px 0px 20px;
                  border:1px solid #666;
                  border-radius:3px;
                  padding:5px 0;


                    .icon{
                        width:20px;
                        height:20px;
                        background:url(../../assets/images/icon.png);
                        background-position:0px 20px ;
                        background-size:25px 25px;
                        
                    } 

                    input{
                        flex:1;
                        color:#666;
                        padding-left:15px;
                        line-height:20px;
                    }

                }


              .forgetword{
              
                color:blue;
                position:relative;
                font-size:12px;

                   div{
                    position:absolute;
                    top:3px;
                    right:20px;

                   }
              }

              .loginbutton{
            
                color:white;
                background:orangered;
                margin:90px 20px 10px;
                text-align:center;
                line-height:30px;
                border-radius:5px;
              }
              .signupbutton{
                color:white;
                background:orangered;
                margin:20px 20px 10px;
                text-align:center;
                line-height:30px;
                border-radius:5px;
              }
              .yanzhengbutton{
                color:white;
                background:orangered;
                margin:80px 20px 10px;
                text-align:center;
                line-height:30px;
                border-radius:5px;
              }
            }


}
</style>
