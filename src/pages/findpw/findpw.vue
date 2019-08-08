<template>
  <div class="findpassword">
    <div class="logo">
      <img class="logosec" src="../../assets/images/logo.png" />
    </div>

    <div class="content1">
      <div class="content">
        <div class="header">找回密码</div>
        <div class="common">
          <div style="padding:5px 0;">手机号：</div>
          <div class="youx inputs">
            <input type="email" v-model="email" placeholder="请输入注册手机号" />
          </div>
        </div>
        <div class="common">
          <div style="padding:5px 0;">验证码：</div>
          <div class="dmima inputs">
            <input type="password" v-model="password" placeholder="请输入验证码" />
          </div>
          <div class="getcode">获取验证码</div>
        </div>
        <router-link to="/login">
          <div class="forgetword">
            <div>
              返回
              <span style="color:orangered">登录</span>
            </div>
          </div>
        </router-link>
        <div class="yanzhengbutton">
          <div>立即验证</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "findpw",
  data() {
    return {
      email: null,
      password: null
    };
  }
};
</script>
<style lang="less" scoped>
.findpassword {
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
        margin-bottom: 20px;
      }
      .common {
        display: flex;
        padding: 10px 20px 5px 20px;
        color: #666;
        .inputs {
          flex: 1;
          display: flex;
          border: 1px solid #ccc;
          border-radius: 3px;
          padding: 5px 0;
          color: #f6f6f6;
          margin-right: 8px;

          input {
            flex: 1;
            width: 50px;
            padding-left: 10px;
            outline: none;
          }
        }
        .getcode {
          background: #ccc;
          padding: 5px 5px;
          border-radius: 3px;
        }
      }
      .forgetword {
        font-size: 12px;
        direction: rtl;
        padding-right: 20px;
      }
      .yanzhengbutton {
        display: flex;
        justify-content: center;
        margin: 60px 20px 0;

        div {
          flex: 1;
          padding: 5px 0;
          text-align: center;
          color: white;
          background: orangered;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
