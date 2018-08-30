
<template>
  <div>
    <div class="m-register">
      <div class="logo">
        <router-link to="/">
          <img src="../../../src/assets/images/logo2.png" alt=""/>
        </router-link>
      </div>
      <div class="m-login">
        <div class="tit">{{this.title}}</div>
        <el-form ref="form" :model="form" status-icon :rules="rules"  label-width="90px">
          <el-form-item label="电子邮箱：" prop="name">
            <el-input type="tet" v-model="form.name" placeholder="请输入邮箱账户" class="inp"></el-input>
          </el-form-item>
          <el-row type="flex" justify="space-between">
            <el-col :span="13">
              <el-form-item label="验证码：" prop="yzm">
                <el-input type="tet" v-model="form.name" placeholder="请输入验证码" class="inp"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <div class="yz">
                <img src="../../../src/assets/images/yz.png" alt="">
                <span>换一换</span>
              </div>
            </el-col>
          </el-row>
          <p class="g-have r">返回<router-link to="/login">登录</router-link> </p>
          <el-button type="primary" @click="onSubmit" class="sub">立即验证</el-button>
        </el-form>
      </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import Vue from 'vue';
import foot from '@/components/footer/footer';
import {Form,FormItem,Input,Col,Row} from 'element-ui';
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Col);
Vue.use(Row);
export default {
  name: 'findpw',
  components: {
    foot
  },
  data () {
    return {
      title:"找回密码",
      form: {
        name: ''
      }
    };
  }
}

</script>



<style lang="less" scoped>
*{box-sizing: border-box;}
  .m-register{
    background: url(../../../src/assets/images/zc-bg.jpg) no-repeat center;background-size: cover;
    padding: 190px 0 20px;text-align: center;
  }
  .logo{
    text-align: center;
    margin-bottom: 30px;
    a{
      display: inline-block;
    }
    img{
      display: block;

    }
  }
  .m-login{
    width: 500px;
    border-top: 10px solid #f46d43;
    background-color: #fff;
    padding: 30px 45px;
    margin: 0 auto;
    .inp{height: 50px;line-height: 50px;}
    .tit{
      font-size: 24px;color: #ec4c48;line-height: 30px;margin-bottom: 45px;text-align: center;
    }
    .sub{width: 100%;background-color: #fe9401;color: #ffffff;font-size: 20px;border: none;line-height: 26px;}
    .yz{
      img{display: inline-block;vertical-align: middle;}
      span{display: inline-block;vertical-align: middle;margin-left: 10px;color: #3ca6fc;}
    }
  }
  .g-have{
    font-size: 14px;color: #333333;line-height: 24px;margin: 15px 0;
    a{color: #ff6000;text-decoration: underline;display: inline-block;margin-left: 5px;}
  }
  .r{float: right;}
  .r.g-have{margin-top: 0;}
</style>
