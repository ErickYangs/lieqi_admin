<template>
  <div class="layout_index_banner">
    <div class="title_nav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>轮播图</el-breadcrumb-item>
        <el-breadcrumb-item>新闻管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="banner_list">
      <el-table
        ref="multipleTable"
        :data="dataList"
        border
        tooltip-effect="dark"
        style="width: 100%">
        <el-table-column
          type="selection"
          width="55"
          fixed
          style="text-align: center;">
        </el-table-column>
        <el-table-column
          label="标题"
          width="400"
          show-overflow-tooltip>
          <template slot-scope="scope">{{ scope.row.title }}</template>
        </el-table-column>
        <el-table-column
          prop="url"
          label="链接"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          width="200"
          label="图片">
          <template slot-scope="scope">
            <img :src="scope.row.img" alt="" style="width: 140px;">
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          width="180"
          label="操作"
          >
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="primary" plain size="small"><i class="el-icon-edit"></i>编辑</el-button>
            <el-button @click="handleClick(scope.row)" type="danger" plain size="small"><i class="el-icon-delete"></i>删除</el-button>            
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [],
      multipleSelection: []
    };
  },
  methods: {
    async get_banner_data() {
      let res = await this.axios.get(
        "http://www.lieqinews.com/json/lieqixwdlq.json?jsonpcallback=jsonpCallback"
      );
      let num1 = res.data.indexOf("(");
      let num2 = res.data.indexOf(")");
      let resultData = JSON.parse(res.data.substring(num1 + 1, num2));
      resultData.map((v, i) => {
        v.id = i + 1;
      });
      this.dataList = resultData;
    }
  },
  created() {
    this.get_banner_data();
  }
};
</script>

<style lang="scss" scoped>
.layout_index_banner {
  margin-top: 20px;
  border-radius: 8px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #fff;
  /deep/ .title_nav {
    height: 30px;
    line-height: 30px;
    padding-left: 20px;
    span {
      line-height: 30px;
      font-size: 16px;
    }
  }
  /deep/ .banner_list {
    padding: 0 20px;
    margin-top: 20px;
    table {
      .el-table-column--selection {
        .cell {
          text-align: center;
        }
      }
      .el-table__row {
        .el-table_1_column_4,
        .el-table_1_column_5 {
          .cell {
            text-align: center;
          }
        }
      }
      th.el-table_1_column_4,
      th.el-table_1_column_5 {
        .cell {
          text-align: center;
        }
      }
    }
  }
}
</style>
