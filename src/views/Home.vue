<template>
  <el-container>
  <el-header style="height: 60px;">
    <div class="open" @click="switch_p()">
      <i class="fa fa-superpowers fa"></i>
    </div>
    <div class="logo">
      <h1 title="猎奇新闻管理系统"></h1>
    </div>
    <div class="head-user">
      <div class="btn-fullscreen">
        <el-tooltip class="item" effect="dark" content="全屏" placement="bottom">
          <i class="fa fa-snowflake-o"></i>
        </el-tooltip>
      </div>
      <div class="btn-message">
        <el-tooltip class="item" effect="dark" content="有2条未读消息" placement="bottom">
          <i class="fa fa-clock-o"></i>
        </el-tooltip>
      </div>
      <div class="user-img">
        <img src="../assets/user.jpg" alt="">
      </div>
      <div class="user-name">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            {{usermeg.username}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" style="top:auto; top: 40px; padding-bottom: 0;">
            <el-dropdown-item>用户信息</el-dropdown-item>
            <el-dropdown-item>项目仓库</el-dropdown-item>
            <el-dropdown-item class="login-out" @click.native="loginout()" style="border-top: 1px solid #ccc;">退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </el-header>
  <el-container>
    <el-aside style="width: auto; max-width: 220px;">
      <el-menu :unique-opened="true" :router="true" default-active="/home/data" active-text-color="#5e99f3" text-color="#BFCBD9" background-color="#304058" class="el-menu-vertical-demo" :collapse="isCollapse">
        <el-menu-item index="/home/data">
          <i class="fa fa-database" style="margin-right: 16px;margin-left: 6px; margin-bottom: 2px;"></i>
          <span slot="title">数据中心</span>
        </el-menu-item>
        <el-menu-item index="/home/news_control">
          <i class="fa fa-th-large" style="margin-right: 16px;margin-left: 6px; margin-bottom: 2px;"></i>
          <span slot="title">新闻中心</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="fa fa-google-plus" style="margin-right: 12px;margin-left: 5px; margin-bottom: 2px;"></i>
            <span slot="title">页面管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/home/page_index_banner"><i class="fa fa-bandcamp" style="margin-right: 17px;margin-left: 5px; margin-bottom: 2px;"></i>首页轮播图</el-menu-item>
            <el-menu-item index="/home/page_index_text"><i class="fa fa-file-archive-o" style="margin-right: 18px;margin-left: 5px; margin-bottom: 2px;"></i>首页文字链</el-menu-item>
            <el-menu-item index="/home/page_index_pic"><i class="fa fa-picture-o" style="margin-right: 17px;margin-left: 5px; margin-bottom: 2px;"></i>首页图片</el-menu-item>
            <el-menu-item index="/home/page_topic_news"><i class="fa fa-mortar-board" style="margin-right: 16px;margin-left: 5px; margin-bottom: 2px;"></i>Topic新闻</el-menu-item>
            <el-menu-item index="/home/page_index2_news"><i class="fa fa-map-o" style="margin-right: 18px;margin-left: 5px; margin-bottom: 2px;"></i>index2新闻</el-menu-item>
            <el-menu-item index="/home/page_modify_news"><i class="fa fa-modx" style="margin-right: 19px;margin-left: 5px; margin-bottom: 2px;"></i>新闻修改</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-news" style="margin-right: 8px;margin-left: 2px; margin-bottom: 2px;"></i>
            <span slot="title">素材管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/home/soruce_lib"><i class="fa fa-edge" style="margin-right: 18px;margin-left: 5px; margin-bottom: 2px;"></i>奇手素材Lib库</el-menu-item>
            <el-menu-item index="/home/source_fe"><i class="fa fa-foursquare" style="margin-right: 20px;margin-left: 5px; margin-bottom: 2px;"></i>前端30条Fe库</el-menu-item>
            <el-menu-item index="/home/source_res"><i class="fa fa-dropbox" style="margin-right: 17px;margin-left: 4px; margin-bottom: 2px;"></i>猎奇优选Res库</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="fa fa-free-code-camp" style="margin-right: 14px;margin-left: 5px; margin-bottom: 2px;"></i>
            <span slot="title">其他</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/home/other_smy"><i class="fa fa-fonticons" style="margin-right: 19px;margin-left: 5px; margin-bottom: 2px;"></i>萨摩耶</el-menu-item>
            <el-menu-item index="/home/other_newindex"><i class="fa fa-pinterest-square" style="margin-right: 19px;margin-left: 5px; margin-bottom: 2px;"></i>新首页</el-menu-item>
            <el-menu-item index="/home/other_datalib"><i class="fa fa-wpbeginner" style="margin-right: 18px;margin-left: 5px; margin-bottom: 2px;"></i>每日最优数据库</el-menu-item>
            <el-menu-item index="/home/other_newslieqi"><i class="fa fa-yelp" style="margin-right: 19px;margin-left: 5px; margin-bottom: 2px;"></i>新闻站导猎奇</el-menu-item>
            <el-menu-item index="/home/other_feedback"><i class="fa fa-feed" style="margin-right: 19px;margin-left: 5px; margin-bottom: 2px;"></i>用户反馈</el-menu-item>
            <el-submenu index="4-8">
              <template slot="title" ><i class="fa fa-audio-description" style="margin-right: 12px;margin-left: 5px; margin-bottom: 2px;"></i>哈士奇</template>
              <el-menu-item index="/home/hsq_index_banner"><i class="fa fa-bluetooth-b" style="margin-right: 12px;margin-left: 5px; margin-bottom: 2px;"></i>首页轮播图</el-menu-item>
              <el-menu-item index="/home/hsq_index_text"><i class="fa fa-bullseye" style="margin-right: 12px;margin-left: 5px; margin-bottom: 2px;"></i>首页文字链</el-menu-item>
              <el-menu-item index="/home/hsq_Topic_news"><i class="fa fa-caret-square-o-up" style="margin-right: 12px;margin-left: 5px; margin-bottom: 2px;"></i>Topic新闻</el-menu-item>              
            </el-submenu>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-news" style="margin-right: 8px;margin-left: 2px; margin-bottom: 2px;"></i>
            <span slot="title">账号管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/home/user_management"><i class="fa fa-edge" style="margin-right: 18px;margin-left: 5px; margin-bottom: 2px;"></i>用户管理</el-menu-item>
            <el-menu-item index="/home/permission"><i class="fa fa-foursquare" style="margin-right: 20px;margin-left: 5px; margin-bottom: 2px;"></i>权限管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <keep-alive>
        <router-view>main</router-view>
      </keep-alive>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      usermeg: {
        username: ""
      }
    };
  },
  methods: {
    switch_p() {
      if (!this.isCollapse) {
        this.isCollapse = true;
      } else {
        this.isCollapse = false;
      }
    },
    setUsermsg() {
      let _token = this.common.get_sessionStorage("token");
      if (_token) {
        let name = this.common.get_sessionStorage("username");
        this.usermeg.username = name;
      }
    },
    loginout() {
      // 登出清空sessionStorage
      sessionStorage.clear();
      this.$router.push({ path: "/login", name: "login" });
    }
  },
  created() {
    this.setUsermsg();
  }
};
</script>

<style scoped lang="scss">
.el-header {
  background-color: #242f42;
  color: #fff;
  height: 60px;
  line-height: 60px;
  padding: 0;
  .open {
    float: left;
    width: 64px;
    text-align: center;
    box-sizing: border-box;
    padding: 0 24px;
    font-size: 16px;
    cursor: pointer;
    transition: all 1s;
    &:hover {
      transform: rotate(360deg);
    }
  }
  .logo {
    float: left;
    h1 {
      width: 180px;
      height: 60px;
      background-size: cover;
      background: url(../assets/log.png) no-repeat center center;
    }
  }
  .head-user {
    float: right;
    display: flex;
    height: 60px;
    padding-right: 40px;
    .user-img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      margin-top: 10px;
      margin-left: 10px;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .btn-fullscreen,
    .btn-message {
      cursor: pointer;
      padding: 0 10px;
    }
    .user-name {
      cursor: pointer;
      span {
        color: #fff;
      }
      ul.el-dropdown-menu {
        li {
          font-size: 12px;
          border-top: 1px solid #ccc;
        }
      }
    }
  }
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
  padding: 0 10px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-container {
  height: 100%;
  .el-aside {
    max-width: 220px;
    .el-menu {
      border-right: none;
      height: 100%;
      .el-submenu {
        text-align: left;
      }
      .el-menu-item {
        text-align: left;
      }
    }
  }
}
</style>
