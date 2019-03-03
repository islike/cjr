<template>
  <div>
    <holder></holder>
    <div class="regiser">
      <div class="logo">
        <img class="logosec" src="../../assets/images/logo.png">
      </div>
      <div class="content1">
        <div class="content">
          <div class="header">注册账号</div>
          <div class="common">
            <div style="padding:5px 10px 5px 0">电子邮箱:</div>
            <div class="youx inputs">
              <input type="email" v-model="email" placeholder="请输入邮箱账号">
            </div>
          </div>
          <div class="common">
            <div style="padding:5px 10px 5px 0">登录密码:</div>
            <div class="dmima inputs">
              <input type="password" v-model="password" placeholder="请输入密码">
            </div>
          </div>
          <div class="common">
            <div style="padding:5px 10px 5px 0">确认密码:</div>
            <div class="queren inputs">
              <input type="password" v-model="repassword" placeholder="请确认密码">
            </div>
          </div>
          <div class="xieyi">
            点击注册表示你同意
            <span style="color:blue">《用户使用协议》</span>
          </div>
          <div class="signupbutton">立即注册</div>
        </div>
      </div>
      <div class="Lfooter">
        <span>已有账号</span>
        <router-link to="/login">
          <span class="signup">立即登录</span>
        </router-link>
      </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import holder from "@/components/header/header";
import foot from "@/components/footer/footer";
export default {
  name: "register",
  components: {
    holder,
    foot
  },
  data() {
    return {
      email: "",
      password: "",
      repassword: ""
    };
  }
};
</script>
<style lang="less" scoped>
.regiser {
  height: 500px;
  width: 100%;
  background: url(../../assets/images/backg.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .logo {
    display: flex;
    justify-content: center;
    .logosec {
      display: block;
      margin-top: 20px;
      opacity: 0.5;
    }
  }
  .content1 {
    display: flex;
    justify-content: center;
    margin-top: 10px;

    .content {
      width: 300px;
      height: 280px;
      border-top: 5px solid orangered;
      background: white;
      .header {
        text-align: center;
        color: orangered;
        letter-spacing: 2px;
        padding: 10px 0;
        margin-bottom: 15px;
      }
      .common {
        display: flex;
        padding: 10px 20px 5px 20px;
        color: #666;
        .inputs {
          flex: 1;
          border: 1px solid #ccc;
          border-radius: 3px;
          padding: 5px 0;
          color: #f6f6f6;
          input {
            padding-left: 10px;
            outline: none;
          }
        }
      }
      .xieyi {
        font-size: 12px;
        text-align: center;
        padding-top: 10px;
      }
      .signupbutton {
        margin: 10px 20px 0;
        padding: 5px 0;
        text-align: center;
        background: orangered;
        color: white;
        border-radius: 5px;
      }
    }
  }
  .Lfooter {
    text-align: center;
    margin-top: 80px;
    .signup {
      color: orangered;
    }
  }
}
</style>
