<template>
  <div class="layout_smy">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="广告操作" name="ggaction">
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
          show-overflow-tooltip 
          fixed    
            prop="ggname"
            label="广告位名称"
            align="center" 
            width="150">
          </el-table-column>
          <el-table-column
            prop="ds_online"
            label="定时上线时间"
            show-overflow-tooltip 
            align="center" 
            width="120">
          </el-table-column>
          <el-table-column
            prop="ds_offline"
            label="定时下线时间"
            show-overflow-tooltip 
            align="center" 
            width="120">
          </el-table-column>
          <el-table-column
            prop="sj_online"
            width="120"
            show-overflow-tooltip 
            align="center" 
            label="实际上线时间">
          </el-table-column>
          <el-table-column
            prop="total"
            align="center" 
             width="100"
             show-overflow-tooltip 
            label="当前总量">
          </el-table-column>
          <el-table-column
            prop="shield_city"
            align="center" 
            show-overflow-tooltip 
            min-width="240"
            label="屏蔽城市">
          </el-table-column>
          <el-table-column
            prop="shield_qid"
            align="center" 
            min-width="240"
            show-overflow-tooltip 
            label="屏蔽渠道">
          </el-table-column>
          <el-table-column
            prop="Resimes"
            align="center" 
            width="120"
            label="访问限制次数">
          </el-table-column>
          <el-table-column
            prop="address"
            align="center" 
            show-overflow-tooltip 
            width="100"
            label="状态">
            <template slot-scope="scope"><el-switch
              v-model="scope.row.state"
              active-color="#13ce66"
              inactive-color="#ff4949">
            </el-switch>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            width="120"
            label="操作">
            <template slot-scope="scope">
              <el-button icon="el-icon-search" circle></el-button>
              <el-button type="primary" icon="el-icon-edit" circle></el-button>
            </template>
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
          ggname: "详情页tips",
          ds_online: "2019-01-08 18:88:88",
          ds_offline: "2019-01-08 18:88:88",
          sj_online: "2019-01-08 18:88:88",
          shield_city: "上海,北京,深圳",
          shield_qid: "01359,hao123shipin",
          Resimes: "650",
          total: "2000",
          state: true
        },
        {
          ggname: "详情页tips",
          ds_online: "2019-01-08 18:88:88",
          ds_offline: "2019-01-08 18:88:88",
          sj_online: "2019-01-08 18:88:88",
          shield_city: "上海,北京,深圳",
          shield_qid: "01359,hao123shipin",
          Resimes: "650",
          total: "2000",
          state: true
        },
        {
          ggname: "详情页tips",
          ds_online: "2019-01-08 18:88:88",
          ds_offline: "2019-01-08 18:88:88",
          sj_online: "2019-01-08 18:88:88",
          shield_city: "上海,北京,深圳",
          shield_qid: "01359,hao123shipin",
          Resimes: "650",
          total: "2000",
          state: true
        },
        {
          ggname: "详情页tips",
          ds_online: "2019-01-08 18:88:88",
          ds_offline: "2019-01-08 18:88:88",
          sj_online: "2019-01-08 18:88:88",
          shield_city: "上海,北京,深圳",
          shield_qid: "01359,hao123shipin",
          Resimes: "650",
          total: "2000",
          state: true
        },
        {
          ggname: "详情页tips",
          ds_online: "2019-01-08 18:88:88",
          ds_offline: "2019-01-08 18:88:88",
          sj_online: "2019-01-08 18:88:88",
          shield_city: "上海,北京,深圳",
          shield_qid: "01359,hao123shipin",
          Resimes: "650",
          total: "2000",
          state: true
        },
        {
          ggname: "详情页tips",
          ds_online: "2019-01-08 18:88:88",
          ds_offline: "2019-01-08 18:88:88",
          sj_online: "2019-01-08 18:88:88",
          shield_city: "上海,北京,深圳",
          shield_qid: "01359,hao123shipin",
          Resimes: "650",
          total: "2000",
          state: true
        },
        {
          ggname: "详情页tips",
          ds_online: "2019-01-08 18:88:88",
          ds_offline: "2019-01-08 18:88:88",
          sj_online: "2019-01-08 18:88:88",
          shield_city: "上海,北京,深圳",
          shield_qid: "01359,hao123shipin",
          Resimes: "650",
          total: "2000",
          state: true
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
