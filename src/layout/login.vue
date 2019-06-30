<template>
  <div class="login">
    <div class="bg"></div>
    <div class="login-box">
      <el-form
        :model="form"
        ref="form"
        label-position="left"
        label-width="0px"
        class="demo-ruleForm login-container"
      >
        <h3 class="title">BBangToken管理系统</h3>
        <el-form-item prop="account">
          <el-input type="text" v-model="form.account" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="form.password" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="captcha">
            <el-input type="text" v-model="form.captcha" placeholder="验证码"></el-input>
            <span class="captcha_btn" v-if="!isCaptchaSend" @click="getCaptcha">获取验证码</span>
            <span class="captcha_btn" v-else>{{captchaTxt}}</span>
          </div>
        </el-form-item>

        <el-form-item>
          <el-button class="submitBtn" type="primary" @click.native.prevent="onSubmit">登录</el-button>
          <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { LOGIN } from "@/store/actions.type";
import "@/assets/js/jquery.particleground.min.js";

export default {
  name: "RwvLogin",
  data() {
    return {
      form: {
        account: "",
        password: "",
        captcha: ""
      },
      isCaptchaSend: false,
      captchaTxt: ""
    };
  },
  mounted() {
    const particleground = window.particleground(
      document.getElementsByClassName("bg")[0],
      {
        dotColor: "rgb(75, 73, 73)",
        lineColor: "rgb(75, 73, 73)",
        lineWidth: 0.6
      }
    );
  },
  methods: {
    getCaptcha() {},
    onSubmit() {}
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  .bg {
    width: 100%;
    height: 100%;
  }
  &-box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -75%);
    border-radius: 5px;
    background-clip: padding-box;
    border-radius: 14px;
    width: 500px;
    padding: 35px 35px 15px 35px;
    background: rgba(0, 0, 0, 0.8);
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: $main-color;
    }
    .captcha {
      display: flex;
      justify-content: space-between;
      .el-input input {
        width: 230px;
      }
      .captcha_btn {
        /* position: absolute; */
        width: 200px;
        font-size: 12px;
        text-align: center;
        line-height: 40px;
        background: none;
        border-radius: 20px;
        color: $main-color;
        cursor: pointer;
        border: 1px solid $main-color;
      }
    }
    .submitBtn {
      width: 100%;
      height: 40px;
      background-color: $main-color;
      border-color: $main-color;
    }
    .el-form {
      .el-form-item {
        margin-bottom: 22px;
      }
    }
  }
}
</style>
