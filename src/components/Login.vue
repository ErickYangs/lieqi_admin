<template>
  <div class="login_lay">
    <div class="login_content">
      <h2>后台管理系统</h2>
      <el-form ref="form" label-width="80px">
        <el-form-item label="用户名:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码:">
          <el-input></el-input>
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
    login: () => {
      this.router.push({ path: "/home", name: "home" });
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
  .login_content {
    width: 400px;
    // height: 300px;
    padding: 20px 40px 60px;
    background-color: tomato;
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
    form.el-form {
      .el-input {
        width: 300px;
      }

      /deep/ .el-form-item[data-v-ef68022e] {
        .el-form-item__content {
          label {
            color: #fff !important;
          }
          button.el-button--primary {
            margin-right: 80px;
          }
        }
      }
    }
  }
}
</style>
