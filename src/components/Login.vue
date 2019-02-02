<template>
  <div class="login_lay">
    <div class="login_content">
      <h2>后台管理系统</h2>
      <el-form :model="usermsg" ref="form" status-icon :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="usermsg.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="usermsg.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login()">登录</el-button>
          <el-button>注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usermsg: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "change" },
          { min: 3, max: 12, message: "用户名长度为3-12", trigger: "change" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          { min: 6, max: 18, message: "密码长度为3-12", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    login() {
      try {
        this.$refs.form.validate(async valid => {
          if (valid) {
            let res = await this.axios.post(
              "/api/index/index/login",
              this.usermsg
            );
            if (res.data.code == 0) {
              let { token, name } = res.data.data;
              this.$store.state.token = token;
              this.$store.state.username = name;
              // 存token
              this.common.set_sessionStorage("token", token);
              // 存用户名
              this.common.set_sessionStorage("username", name);
              this.$message.success("欢迎来到猎奇新闻管理系统！");
              this.$router.push({ path: "/home/data", name: "data" });
            } else {
              this.$message.error(res.data.message);
            }
          } else {
            this.$message.error("用户名或密码格式错误，请重新输入！");
          }
        });
      } catch (e) {
        throw e;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.login_lay {
  width: 100%;
  height: 100%;
  background: url(../assets/common/images/desktop2.png) no-repeat;
  background-size: cover;
  overflow: hidden;
  position: relative;
  /deep/ .login_content {
    width: 400px;
    box-sizing: border-box;
    padding: 20px 40px 60px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    border: skyblue solid 2px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;

    h2 {
      line-height: 60px;
      font-size: 20px;
      text-align: center;
      margin-bottom: 20px;
      border-bottom: 1px solid #fff;
      color: #fff;
    }
    .el-form {
      .el-input {
        width: 100%;
      }

      .el-form-item {
        .el-form-item__content {
          .el-form-item__label {
            color: red !important;
          }
          button.el-button--primary {
            margin-right: 80px;
            margin-left: 40px;
          }
        }
      }
    }
  }
}
</style>
