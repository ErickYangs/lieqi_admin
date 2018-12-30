import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("./components/Login.vue")
    },
    {
      path: "/home",
      name: "home",
      component: () => import("./views/Home.vue"),
      children: [
        {
          path: "/home/data",
          name: "data",
          component: () => import("./components/Data.vue")
        },
        {
          path: "/home/news_control",
          name: "news_control",
          component: () => import("./components/News_control.vue")
        },
        {
          path: "/home/page_index_banner",
          name: "page_index_banner",
          component: () => import("./components/Page_index_banner.vue")
        },
        {
          path: "/home/page_index_text",
          name: "page_index_text",
          component: () => import("./components/Page_index_text.vue")
        },
        {
          path: "/home/page_index_pic",
          name: "page_index_pic",
          component: () => import("./components/Page_index_pic.vue")
        },
        {
          path: "/home/page_topic_news",
          name: "page_topic_news",
          component: () => import("./components/Page_topic_news.vue")
        },
        {
          path: "/home/page_index2_news",
          name: "page_index2_news",
          component: () => import("./components/Page_index2_news.vue")
        },
        {
          path: "/home/page_modify_news",
          name: "page_modify_news",
          component: () => import("./components/Page_modify_news.vue")
        },
        {
          path: "/home/soruce_lib",
          name: "soruce_lib",
          component: () => import("./components/Soruce_lib.vue")
        },
        {
          path: "/home/source_fe",
          name: "source_fe",
          component: () => import("./components/Source_fe.vue")
        },
        {
          path: "/home/source_res",
          name: "source_res",
          component: () => import("./components/Source_res.vue")
        },
        {
          path: "/home/other_smy",
          name: "other_smy",
          component: () => import("./components/Other_smy.vue")
        },
        {
          path: "/home/other_newindex",
          name: "other_newindex",
          component: () => import("./components/Other_newindex.vue")
        },
        {
          path: "/home/other_datalib",
          name: "other_datalib",
          component: () => import("./components/Other_datalib.vue")
        },
        {
          path: "/home/other_feedback",
          name: "other_feedback",
          component: () => import("./components/Other_feedback.vue")
        },
        {
          path: "/home/hsq_index_banner",
          name: "hsq_index_banner",
          component: () => import("./components/Hsq_index_banner.vue")
        },
        {
          path: "/home/hsq_index_text",
          name: "hsq_index_text",
          component: () => import("./components/Hsq_index_text.vue")
        },
        {
          path: "/home/hsq_Topic_news",
          name: "hsq_Topic_news",
          component: () => import("./components/Hsq_Topic_news.vue")
        },
        {
          path: "/home/other_newslieqi",
          name: "other_newslieqi",
          component: () => import("./components/Other_newslieqi.vue")
        }
      ]
    }
  ]
});
