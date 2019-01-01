import Mock from "mockjs";
export default Mock.mock("feedback", {
  "feedback|1-40": [
    {
      "id|+1": 1,
      "telphone|11": 1,
      question_type: "@ctitle(4)",
      link: "@url",
      date: "@datetime",
      descp: "@ctitle(120, 200)"
    }
  ]
});
