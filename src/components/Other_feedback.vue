<template>
  <div class="layout_index_banner">
    <!-- 搜索条件 -->
    <div class="search_condition">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="时间">
          <el-col :span="11">
            <el-form-item>
              <el-date-picker type="date" v-model="formInline.date1" placeholder="选择日期" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item>
              <el-date-picker type="date" v-model="formInline.date2" placeholder="选择日期" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="问题分类">
          <el-select v-model="formInline.region" placeholder="问题分类">
            <el-option label="视频无法播放" value="shanghai"></el-option>
            <el-option label="链接错误" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="banner_list">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="unread" name="unread">
          <el-table
          @select="sure_feedback"
            ref="multipleTable"
            :data="unread_data"
            border
            tooltip-effect="dark"
            style="width: 100%">
            <el-table-column
              type="index"
              width="55"
              fixed
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              label="日期"
              width="200"
              prop="date"
              header-align="center"
              align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="question_type"
              width="140"
              label="问题分类"
              header-align="center"
              align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              width="160"
              prop="telphone"
              header-align="center"
              align="center"
              label="联系方式">
            </el-table-column>
            <el-table-column width="340" label="链接地址" prop="link" show-overflow-tooltip></el-table-column> 
            <el-table-column width="380" label="具体描述" prop="descp" show-overflow-tooltip></el-table-column> 
            <el-table-column
              type="selection"
              width="55"
              header-align="center"
              align="center"
              >
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane :label="alread" name="alread">
          <el-table
            ref="multipleTable"
            :data="alread_data"
            border
            tooltip-effect="dark"
            style="width: 100%">
            <el-table-column
              type="index"
              width="55"
              fixed
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              label="日期"
              width="200"
              prop="date"
              header-align="center"
              align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="question_type"
              width="140"
              label="问题分类"
              header-align="center"
              align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              width="160"
              prop="telphone"
              header-align="center"
              align="center"
              label="联系方式">
            </el-table-column>
            <el-table-column width="340" label="链接地址" prop="link" show-overflow-tooltip></el-table-column> 
            <el-table-column width="380" label="具体描述" prop="descp" show-overflow-tooltip></el-table-column> 
            <el-table-column
              type="selection"
              width="55"
              header-align="center"
              align="center">
            </el-table-column>
          </el-table>
          </el-tab-pane>
        <el-tab-pane :label="recycle" name="recycle"><el-table
            ref="multipleTable"
            :data="recycle_data"
            border
            tooltip-effect="dark"
            style="width: 100%">
            <el-table-column
              type="index"
              width="55"
              fixed
              header-align="center"
              align="center">
            </el-table-column>
            <el-table-column
              label="日期"
              width="200"
              prop="date"
              header-align="center"
              align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="question_type"
              width="140"
              label="问题分类"
              header-align="center"
              align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              width="160"
              prop="telphone"
              header-align="center"
              align="center"
              label="联系方式">
            </el-table-column>
            <el-table-column width="340" label="链接地址" prop="link" show-overflow-tooltip></el-table-column> 
            <el-table-column width="380" label="具体描述" prop="descp" show-overflow-tooltip></el-table-column> 
            <el-table-column
              type="selection"
              width="55"
              header-align="center"
              align="center">
            </el-table-column>
          </el-table>
          </el-tab-pane>
      </el-tabs>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "unread",
      formInline: {
        date1: "",
        date2: "",
        region: ""
      },
      unread_data: [],
      alread_data: [],
      recycle_data: [],
      multipleSelection: []
    };
  },
  methods: {
    get_feedback() {
      this.axios.get("newsList").then(res => {
        let { feedback } = res.data;
        this.unread_data = feedback;
      });
    },
    handleClick(tab, event) {},
    sure_feedback(selection, row) {
      this.alread_data.push(row);
      let sure_idx = this.unread_data.findIndex((v, idx, arr) => {
        return row.id === v.id;
      });
      this.unread_data.splice(sure_idx, 1);
    }
  },
  created() {
    this.get_feedback();
  },
  computed: {
    unread() {
      return "未读反馈(" + this.unread_data.length + ")";
    },
    alread() {
      return "已读反馈(" + this.alread_data.length + ")";
    },
    recycle() {
      return "回收站(" + this.recycle_data.length + ")";
    }
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
  /deep/ .search_condition {
    padding: 0 20px;
    form {
      text-align-last: left;
      .el-form-item__content {
        .line {
          padding-left: 10px;
        }
      }
    }
  }
  /deep/ .banner_list {
    padding: 0 20px;
  }
}
</style>
