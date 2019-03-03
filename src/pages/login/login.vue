<template>
  <div>
    <holder></holder>
    <div class="login">
      <img src="../../assets/images/logo.png">
      <div class="content">
        <div class="header">登录</div>
        <div class="yonghu inputm">
          <div class="icon1"></div>
          <input type="text" placeholder="请输入手机号码/邮箱/用户名" v-model="address">
        </div>
        <div class="mima inputm">
          <div class="icon"></div>
          <input type="password" placeholder="请输入密码" v-model="password">
        </div>
        <router-link to="/findpw">
          <div class="forgetword">
            <div>忘记密码？</div>
          </div>
        </router-link>
        <div class="loginbutton">登录</div>
      </div>
      <div class="Lfooter">
        <span>还没有账号?</span>
        <router-link to="/register">
          <span class="signup">免费注册</span>
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
  name: "login",
  components: {
    foot,
    holder
  },
  data() {
    return {
      address: null,
      password: null,
      signin: true,
      desicion: true
    };
  },
  methods: {
    signup() {
      this.signin = !this.signin;
    },
    forgetword() {
      this.desicion = false;
      this.signin = false;
    },
    signup1() {
      this.signin = true;
      this.desicion = true;
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  height: 500px;
  width: 100%;
  background: url(../../assets/images/backg.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;

  img {
    display: block;
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.5;
  }

  .Lfooter {
    position: absolute;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);

    .signup {
      display: inline-block;
      padding-left: 5px;
      color: orangered;
    }
  }

  .content {
    position: absolute;
    left: 50%;
    top: 80px;
    transform: translateX(-50%);
    width: 300px;
    height: 280px;
    border-top: 5px solid orangered;
    background: white;

    .header {
      color: orangered;
      text-align: center;
      margin: 20px 0;
      font-size: 18px;
    }

    .xiyi {
      text-align: center;
      font-size: 12px;
      padding-top: 5px;
    }

    .common {
      display: flex;
      padding: 10px 20px 5px 20px;

      .inputs {
        flex: 1;
        display: flex;
        border: 1px solid #666;
        border-radius: 3px;
        padding: 5px 0;
        color: #f6f6f6;
        margin-right: 8px;

        input {
          flex: 1;
          padding-left: 10px;
          border: none;
        }
      }

      .getcode {
        background: #666;
        padding: 5px 5px;
        border-radius: 3px;
      }
    }

    .inputm {
      display: -webkit-flex;
      display: flex;
      margin: 20px 20px 0px 20px;
      border: 1px solid #666;
      border-radius: 3px;
      padding: 5px 0;

      .icon {
        width: 20px;
        height: 20px;
        background: url(../../assets/images/mima.png);

        background-size: 20px 20px;
      }

      .icon1 {
        width: 20px;
        height: 20px;
        background: url(../../assets/images/zh.png);

        background-size: 20px 20px;
      }

      input {
        flex: auto;
        color: #666;
        padding-left: 15px;
        line-height: 20px;
        outline: none;
      }
    }

    .forgetword {
      color: blue;
      position: relative;
      font-size: 12px;

      div {
        position: absolute;
        top: 3px;
        right: 20px;
      }
    }

    .loginbutton {
      color: white;
      background: orangered;
      margin: 90px 20px 10px;
      text-align: center;
      line-height: 30px;
      border-radius: 5px;
    }
    .signupbutton {
      color: white;
      background: orangered;
      margin: 20px 20px 10px;
      text-align: center;
      line-height: 30px;
      border-radius: 5px;
    }
    .yanzhengbutton {
      color: white;
      background: orangered;
      margin: 80px 20px 10px;
      text-align: center;
      line-height: 30px;
      border-radius: 5px;
    }
  }
}
</style>
