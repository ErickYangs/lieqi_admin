<template>
  <div class="layout">
    <!-- 导航 -->
    <nav>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </nav>
    <!-- 表格信息 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: "222"
    };
  },
  methods: {
    async get_lib_data() {
      // console.log(this.$store);
      this.axios
        .post("/api/index/qishoulib/index", { token: this.$store.state.token })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.get_lib_data();
  }
};
</script>

<style scoped lang="scss">
.layout {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  background-color: #fff;
  /deep/ nav {
    height: 40px;
    line-height: 40px;
    span {
      line-height: 40px;
      font-size: 16px;
    }
  }
}
</style>
