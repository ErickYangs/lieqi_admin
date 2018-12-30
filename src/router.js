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
          path: "/home/news_add",
          name: "news_add",
          component: () => import("./components/News_add.vue")
        },
        {
          path: "/home/news_search",
          name: "news_search",
          component: () => import("./components/News_search.vue")
        },
        {
          path: "/home/news_delete",
          name: "news_delete",
          component: () => import("./components/News_delete.vue")
        },
        {
          path: "/home/page_index_banner",
          name: "page_index_banner",
          component: () => import("./components/News_delete.vue")
        },
        {
          path: "/home/page_index_text",
          name: "page_index_text",
          component: () => import("./components/News_delete.vue")
        },
        {
          path: "/home/page_index_pic",
          name: "page_index_pic",
          component: () => import("./components/News_delete.vue")
        },
        {
          path: "/home/page_topic_news",
          name: "page_topic_news",
          component: () => import("./components/News_delete.vue")
        },
        {
          path: "/home/page_index2_news",
          name: "page_index2_news",
          component: () => import("./components/News_delete.vue")
        },
        {
          path: "/home/page_modify_news",
          name: "page_modify_news",
          component: () => import("./components/News_delete.vue")
        },
        {
          path: "/home/soruce_lib",
          name: "soruce_lib",
          component: () => import("./components/News_delete.vue")
        },
        {
          path: "/home/source_fe",
          name: "source_fe",
          component: () => import("./components/News_delete.vue")
        },
        {
          path: "/home/source_res",
          name: "source_res",
          component: () => import("./components/News_delete.vue")
        },
        {
          path: "/home/other_smy",
          name: "other_smy",
          component: () => import("./components/News_delete.vue")
        },
        {
          path: "/home/other_newindex",
          name: "other_newindex",
          component: () => import("./components/News_delete.vue")
        },
        {
          path: "/home/other_datalib",
          name: "other_datalib",
          component: () => import("./components/News_delete.vue")
        },
        {
          path: "/home/other_feedback",
          name: "other_feedback",
          component: () => import("./components/News_delete.vue")
        },
        {
          path: "/home/hsq_index_banner",
          name: "hsq_index_banner",
          component: () => import("./components/News_delete.vue")
        },
        {
          path: "/home/hsq_index_text",
          name: "hsq_index_text",
          component: () => import("./components/News_delete.vue")
        },
        {
          path: "/home/hsq_Topic_news",
          name: "hsq_Topic_news",
          component: () => import("./components/News_delete.vue")
        },
        {
          path: "/home/other_newslieqi",
          name: "other_newslieqi",
          component: () => import("./components/News_delete.vue")
        }
      ]
    }
  ]
});
