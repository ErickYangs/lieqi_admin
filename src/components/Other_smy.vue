<template>
  <div class="layout_smy">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="广告操作" name="ggaction">
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="date"
            label="广告位名称"
            align="center" 
            width="150">
          </el-table-column>
          <el-table-column
            prop="name"
            label="定时上线时间"
            align="center" 
            width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="定时下线时间"
            align="center" 
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            width="120"
            align="center" 
            label="实际上线时间">
          </el-table-column>
          <el-table-column
            prop="address"
            align="center" 
             width="100"
            label="当前总量">
          </el-table-column>
          <el-table-column
            prop="address"
            align="center" 
            min-width="240"
            label="屏蔽城市">
          </el-table-column>
          <el-table-column
            prop="address"
            align="center" 
            min-width="240"
            label="屏蔽渠道">
          </el-table-column>
          <el-table-column
            prop="address"
            align="center" 
            width="120"
            label="访问限制次数">
          </el-table-column>
          <el-table-column
            prop="address"
            align="center" 
            width="100"
            label="状态">
          </el-table-column>
          <el-table-column
            prop="address"
            align="center"
            width="120"
            label="操作">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="数据统计" name="datatotal">数据统计</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "ggaction",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="scss" scoped>
.layout_smy {
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  background: #fff;
}
</style>
