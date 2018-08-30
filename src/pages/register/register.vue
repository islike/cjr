
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
            <el-input type="tet" v-model="form.name" placeholder="请输入邮箱账户"></el-input>
          </el-form-item>
          <el-form-item label="登录密码：" prop="pass">
            <el-input type="password" placeholder="请输入密码"  v-model="form.pass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码：" prop="checkPass">
            <el-input type="password" placeholder="请确认密码" v-model="form.checkPass" auto-complete="off"></el-input>
          </el-form-item>
          <p class="notice">点击注册表示你同意<router-link to="#">《用户使用协议》</router-link> </p>
          <el-button type="primary" @click="onSubmit" class="sub">立即注册</el-button>
        </el-form>
      </div>
      <div class="g-have">已有账号<router-link to="/">立即登录</router-link></div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import Vue from 'vue';
import foot from '@/components/footer/footer';
import {Form,FormItem,Input} from 'element-ui';
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
export default {
  name: 'register',
  components: {
    foot
  },
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.form.checkPass !== '') {
          this.$refs.form.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.form.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      title:"注册页面",
      form: {
        pass: '',
        checkPass: '',
        name: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
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
    .tit{
      font-size: 24px;color: #ec4c48;line-height: 30px;margin-bottom: 45px;text-align: center;
    }
    .sub{width: 100%;background-color: #fe9401;color: #ffffff;font-size: 20px;border: none;line-height: 26px;}
    .notice{
      font-size: 12px;color: #333333;line-height: 24px;text-align: center;margin-bottom: 22px;
      a{
        color: #3ca6fc;
        &:hover{text-decoration: underline;}
      }
    }
  }
  .g-have{
    font-size: 14px;color: #333333;line-height: 24px;margin-top: 15px;
    a{color: #ff6000;text-decoration: underline;display: inline-block;margin-left: 5px;}
  }
</style>
