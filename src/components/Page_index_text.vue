<template>
  <div class="layout_index_banner">
    <div class="title_nav">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>文字链</el-breadcrumb-item>
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
      dataList: [
        {
          img: "https://manhua.qpic.cn/operation/0/29_11_54_181ed8a30e4cf068d80c8b878a39bf86_1546055693836.jpg/0",
          title: "八重樱 · 桃源恋歌 -先行预告片-【次世代卡通渲染】",
          url: "http://www.lieqinews.com/a/n181213161700173.html"
        },
        {
          img: "https://manhua.qpic.cn/operation/0/30_12_18_3801eb0af2450093c2bc453ad319508f_1546143497630.jpg/0",
          title: "【年终盘点#4】盘点今年那些最棒的女子高中生们！（一月组）",
          url: "http://www.lieqinews.com/a/n181213161700173.html"
        },
        {
          img: "https://manhua.qpic.cn/operation/0/29_10_45_17ff963c8b087b6801ee37875cbecdfc_1546051515466.jpg/0",
          title: "游戏侦查冰-育碧竟被国内游戏公司恶意举报！（育碧在中国走过的22年坎坷路-下）",
          url: "http://www.lieqinews.com/a/n181213161700173.html"
        },
        {
          img: "https://manhua.qpic.cn/operation/0/30_12_17_ce1d6695ae8d0a2c48be3859f7a77661_1546143463653.jpg/0",
          title: "【手书】她们的幸福笑容",
          url: "http://www.lieqinews.com/a/n181213161700173.html"
        },
        {
          img: "https://manhua.qpic.cn/operation/0/29_11_08_ded568964df3c17de11d82dc23ec03e9_1546052897475.jpg/0",
          title: "柚子社游戏的妹子这么萌 这对画师妹子功不可没【橙心驾校】",
          url: "http://www.lieqinews.com/a/n181213161700173.html"
        },
        {
          img: "https://manhua.qpic.cn/operation/0/29_11_07_dc07cfc5d93ff5b22b813689c487f2ab_1546052870305.png/0",
          title: "【触碰心灵】那些感动的瞬间 - 只属于我们的故事",
          url: "http://www.lieqinews.com/a/n181213161700173.html"
        }
      ],
      multipleSelection: []
    };
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
