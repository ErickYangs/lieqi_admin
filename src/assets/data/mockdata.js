import Mock from "mockjs";
export default Mock.mock("newsList", {
  "newslist|1-40": [{
    "id|+1": 1,
    title: "@ctitle(10, 20)",
    type: "@ctitle(4)",
    link: "@url",
    newstime: "@datetime",
    creatime: "@datetime",
    source: "@ctitle(3, 6)",
    creators: "@name",
    editer: "@name",
    content: "@ctitle(120, 200)"
  }],
  "feedback|1-40": [{
    "id|+1": 1,
    telphone: "@natural",
    question_type: "@ctitle(4)",
    link: "@url",
    date: "@datetime",
    descp: "@ctitle(120, 200)"
  }]
});
