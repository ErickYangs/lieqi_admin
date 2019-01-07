<template>
  <div class="layout_index_banner">
    <div class="title_nav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>新闻中心</el-breadcrumb-item>
        <el-breadcrumb-item>新闻列表</el-breadcrumb-item>
      </el-breadcrumb>
      <el-button type="primary" @click="addNews()">添加新闻<i class="el-icon-upload el-icon--right"></i></el-button>
    </div>
    <div class="banner_list">
      <el-table
        :data="newsData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
        border
        style="width: 100%">
        <el-table-column
          fixed    
          type="index"
          :index="indexMethod"
          align="center"
          width="50">
        </el-table-column>
        <el-table-column
          show-overflow-tooltip    
          prop="title"
          label="标题"
          min-width="300">
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型"
          align="center"          
          width="90">
        </el-table-column>
        <el-table-column
          show-overflow-tooltip
          label="链接"
          min-width="300">
          <template slot-scope="scope"><a :href="scope.row.link">{{ scope.row.link }}</a></template>
        </el-table-column>
        <el-table-column
          show-overflow-tooltip    
          prop="newstime"
          label="新闻时间"
          align="center"          
          width="160">
        </el-table-column>
        <el-table-column
          show-overflow-tooltip    
          prop="creatime"
          align="center"
          label="创建时间"
          width="160">
        </el-table-column>
        <el-table-column
        show-overflow-tooltip
          prop="source"
          align="center"
          label="来源"
          min-width="86">
        </el-table-column>
        <el-table-column
          show-overflow-tooltip    
          prop="creators"
          align="center"
          label="创建人员"
          width="120">
        </el-table-column>
        <el-table-column
          show-overflow-tooltip    
          prop="editer"
          align="center"
          label="最后编辑人员"
          width="120">
        </el-table-column>
        <el-table-column
          align="center"
          fixed="right"
          label="操作"
          width="180">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="primary" plain size="small"><i class="el-icon-edit"></i>编辑</el-button>
                <el-button @click="handleClick(scope.row)" type="danger" plain size="small"><i class="el-icon-delete"></i>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="pagenation">
      <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[4, 6, 8, 10]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="newsData.length">
    </el-pagination>
    </div>
    <!-- 添加/修改新闻的模态框 -->
    <el-dialog
      :title="modeltype"
      :visible.sync="openModel"
      width="60%"
      center>
      <el-form :model="ruleForm" :rules="rules" ref="newsForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="新闻标题" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="新闻类型" prop="type">
          <el-select v-model="ruleForm.type" placeholder="请选择新闻类型">
            <el-option label="考古发现" value="kgfx"></el-option>
            <el-option label="名人轶事" value="mrys"></el-option>
            <el-option label="世界之窗" value="sjzc"></el-option>
            <el-option label="军事密码" value="jsmm"></el-option>
            <el-option label="极品奇葩" value="jpqp"></el-option>
            <el-option label="互联网" value="it"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="创建时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col style="text-align: center;" class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="新闻来源" prop="source">
          <el-input v-model="ruleForm.source"></el-input>
        </el-form-item>
        <quill-editor v-model="ruleForm.content"
                      ref="myQuillEditor"
                      @blur="onEditorBlur($event)"
                      @focus="onEditorFocus($event)"
                      @ready="onEditorReady($event)"
                      style="min-height: 600px;">
        </quill-editor>
        <!-- <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item> -->
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel()">取 消</el-button>
        <el-button type="primary" @click="sure()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      pageSize: 6,
      newsData: [],
      multipleSelection: [],
      openModel: false,
      modeltype: "",
      ruleForm: {
        title: "",
        type: "",
        date1: "",
        date2: "",
        source: "",
        content: ""
      },
      rules: {
        title: [
          { required: true, message: "请输入新闻标题", trigger: "change" },
          {
            min: 10,
            max: 20,
            message: "长度在 10 到 20 个字符",
            trigger: "change"
          }
        ],
        type: [
          { required: true, message: "请选择新闻类型", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        source: [
          { required: true, message: "请输入新闻来源", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    getmockdata() {
      this.axios.get("newsList").then(res => {
        this.newsData = res.data.newslist;
      });
    },
    addNews() {
      this.modeltype = "添加新闻";
      this.openModel = true;
    },
    cancel() {
      this.openModel = false;
      this.$refs.newsForm.resetFields();
      this.ruleForm.content = "";
    },
    sure() {
      this.$refs.newsForm.resetFields();
      this.ruleForm.content = "";
      this.openModel = false;
    },
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    indexMethod(index) {
      return (this.currentPage - 1) * this.pageSize + index + 1;
    }
  },
  created() {
    this.getmockdata();
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
    position: relative;
    span {
      line-height: 30px;
      font-size: 16px;
    }
    .el-button {
      position: absolute;
      right: 64px;
      top: -6px;
      padding: 6px 10px;
    }
  }
  /deep/ .banner_list {
    padding: 0 20px;
    margin-top: 20px;
  }
  .quill-editor {
    .ql-container {
      height: auto;
      min-width: 500px;
    }
  }
}
</style>
