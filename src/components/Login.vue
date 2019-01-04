<template>
  <div class="login_lay">
    <div class="login_content">
      <h2>后台管理系统</h2>
      <el-form ref="form">
        <el-form-item>
          <el-input placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入密码"></el-input>
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
  methods: {
    login() {
      this.$router.push({ path: "/home/data", name: "data" });
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
