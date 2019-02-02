<template>
  <div class="layout">
    <div class="nav_list">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>账号中心</el-breadcrumb-item>
        <el-breadcrumb-item>用户信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 用户信息表 -->
    <div class="user_form">
      <el-table
        border
        :data="userData"
        style="width: 100%">
        <el-table-column
          type="index"
          :index="sort_index"
          align="center"
          width="48">
        </el-table-column>
        <el-table-column
          prop="account"
          label="用户名"
          align="center">
        </el-table-column>
        <el-table-column
          prop="last_login_ip"
          label="最后一次登录IP"
          align="center">
        </el-table-column>
        <el-table-column
          prop="last_login_date"
          align="center"
          label="最后一次登录时间">
        </el-table-column>
        <el-table-column
          align="center"
          label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="small"
              icon="el-icon-edit"
              plain>
              修改
            </el-button>
            <el-button
              type="danger"
              size="small"
              icon="el-icon-delete"
              @click="delet_user_model(scope.row)"
              plain>
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页处理 -->
    <div class="pagination">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :total="total_num">
      </el-pagination>
    </div>
    <!-- 删除用户模态框 -->
    <el-dialog
      title="温馨提示"
      :visible.sync="delet_user_mask"
      width="30%"
      center>
      <el-form>
        <el-form-item label="请输入管理员密码">
          <el-input v-model="admin_password" type="password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delet_user_mask = false">取 消</el-button>
        <el-button type="primary" @click="delet_user()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: [],
      total_num: 0,
      current_page: 1,
      delet_user_mask: false,
      delet_user_info: "",
      admin_password: ""
    };
  },
  methods: {
    // 获取用户数据
    async get_user_data(page = 1) {
      let res = await this.axios.post("/api/index/user/index", {
        token: this.common.get_sessionStorage("token"),
        page: page
      });
      this.userData = res.data.data.info;
      this.total_num = res.data.data.count;
    },
    // 分页切换
    handleCurrentChange(val) {
      this.current_page = val;
      this.get_user_data(val);
    },
    // 页码排序
    sort_index(idx) {
      return idx + 1 + (this.current_page - 1) * 10;
    },
    // 删除用户模态框
    delet_user_model(val) {
      this.delet_user_info = val;
      this.delet_user_mask = true;
    },
    // 删除用户
    async delet_user() {
      let res = await this.axios.post("/api/index/user/delete", {
        token: this.common.get_sessionStorage("token"),
        author_pwd: this.admin_password,
        user_id: this.delet_user_info.id
      });
      if (res.data.code == 0) {
        this.$message.success(res.data.message);
        this.delet_user_mask = false;
        this.get_user_data();
        this.admin_password = "";
      } else {
        this.$message.error("删除失败，请重试！");
        this.delet_user_mask = false;
        this.admin_password = "";
      }
    }
  },
  created() {
    this.get_user_data();
  }
};
</script>

<style lang="scss" scoped>
.layout {
  margin-top: 20px;
  border-radius: 8px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #fff;
  .nav_list {
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    .el-breadcrumb {
      line-height: 40px;
      font-size: 16px;
    }
  }
  .user_form {
    padding: 20px;
  }
}
</style>
