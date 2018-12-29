<template>
  <el-container>
  <el-header>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
  </el-header>
  <el-container>
    <el-aside style="width: auto; max-width: 200px;">
      <el-menu active-text-color="#5e99f3" default-active="1-1" style="background-color: rgb(50, 65, 87);" class="el-menu-vertical-demo" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="fa fa-th-large" style="margin-right: 16px;margin-left: 5px; margin-bottom: 2px;"></i>
            <span slot="title">独立推荐</span>
          </template>
          <el-menu-item-group style="background-color: rgb(50, 65, 87);">
            <el-menu-item index="1-1"><i class="fa fa-newspaper-o" style="margin-right: 14px;margin-left: 5px; margin-bottom: 2px;"></i>新闻</el-menu-item>
            <el-menu-item index="1-2"><i class="fa fa-search" style="margin-right: 17px;margin-left: 5px; margin-bottom: 2px;"></i>新闻搜索</el-menu-item>
            <el-menu-item index="1-3"><i class="fa fa-trash-o" style="margin-right: 18px;margin-left: 5px; margin-bottom: 2px;"></i>删除新闻</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="fa fa-google-plus" style="margin-right: 12px;margin-left: 5px; margin-bottom: 2px;"></i>
            <span slot="title">页面管理</span>
          </template>
          <el-menu-item-group style="background-color: rgb(50, 65, 87);">
            <el-menu-item index="2-1"><i class="fa fa-bandcamp" style="margin-right: 17px;margin-left: 5px; margin-bottom: 2px;"></i>首页轮播图</el-menu-item>
            <el-menu-item index="2-2"><i class="fa fa-file-archive-o" style="margin-right: 18px;margin-left: 5px; margin-bottom: 2px;"></i>首页文字链</el-menu-item>
            <el-menu-item index="2-3"><i class="fa fa-picture-o" style="margin-right: 17px;margin-left: 5px; margin-bottom: 2px;"></i>首页图片</el-menu-item>
            <el-menu-item index="2-3"><i class="fa fa-mortar-board" style="margin-right: 16px;margin-left: 5px; margin-bottom: 2px;"></i>Topic新闻</el-menu-item>
            <el-menu-item index="2-3"><i class="fa fa-map-o" style="margin-right: 18px;margin-left: 5px; margin-bottom: 2px;"></i>index2新闻</el-menu-item>
            <el-menu-item index="2-3"><i class="fa fa-modx" style="margin-right: 19px;margin-left: 5px; margin-bottom: 2px;"></i>新闻修改</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-news" style="margin-right: 8px;margin-left: 2px; margin-bottom: 2px;"></i>
            <span slot="title">素材管理</span>
          </template>
          <el-menu-item-group style="background-color: rgb(50, 65, 87);">
            <el-menu-item index="3-1"><i class="fa fa-edge" style="margin-right: 18px;margin-left: 5px; margin-bottom: 2px;"></i>奇手素材Lib库</el-menu-item>
            <el-menu-item index="3-2"><i class="fa fa-foursquare" style="margin-right: 20px;margin-left: 5px; margin-bottom: 2px;"></i>前端30条Fe库</el-menu-item>
            <el-menu-item index="3-3"><i class="fa fa-dropbox" style="margin-right: 17px;margin-left: 4px; margin-bottom: 2px;"></i>猎奇优选Res库</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="fa fa-free-code-camp" style="margin-right: 14px;margin-left: 5px; margin-bottom: 2px;"></i>
            <span slot="title">其他</span>
          </template>
          <el-menu-item-group style="background-color: rgb(50, 65, 87);">
            <el-menu-item index="4-1"><i class="fa fa-fonticons" style="margin-right: 19px;margin-left: 5px; margin-bottom: 2px;"></i>萨摩耶</el-menu-item>
            <el-menu-item index="4-2"><i class="fa fa-pinterest-square" style="margin-right: 19px;margin-left: 5px; margin-bottom: 2px;"></i>新首页</el-menu-item>
            <el-menu-item index="4-3"><i class="fa fa-wpbeginner" style="margin-right: 18px;margin-left: 5px; margin-bottom: 2px;"></i>每日最优数据库</el-menu-item>
            <el-menu-item index="4-3"><i class="fa fa-yelp" style="margin-right: 19px;margin-left: 5px; margin-bottom: 2px;"></i>新闻站导猎奇</el-menu-item>
            <el-menu-item index="4-3"><i class="fa fa-feed" style="margin-right: 19px;margin-left: 5px; margin-bottom: 2px;"></i>用户反馈</el-menu-item>
            <el-menu-item index="4-3"><i class="fa fa-audio-description" style="margin-right: 12px;margin-left: 5px; margin-bottom: 2px;"></i>哈士奇</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped lang="scss">
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-container {
  height: 100%;
  .el-aside {
    max-width: 201px;
    .el-menu {
      border-right: none;
      height: 100%;
      /deep/ .el-submenu {
        text-align: left;
        .el-submenu__title:hover {
          background-color: rgb(40, 52, 70) !important;
        }
        .el-menu-item {
          &:hover {
            background-color: rgb(40, 52, 70);
          }
          color: rgb(191, 203, 217);
        }
        span {
          color: rgb(191, 203, 217);
        }
      }
    }
    .el-menu--inline {
      background-color: red;
    }
  }
}
</style>
