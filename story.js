const request = require("request");
const cherrio = require("cheerio");

request(
  {
    url: "https://yz.lol.qq.com/v1/zh_cn/story/aatrox-color-story/index.json",
    method: "GET",
    charset: "utf-8",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.93 Safari/537.36"
    }
  },
  function(err, res) {
    if (err) {
      console.log(err);
    }
    const data = JSON.parse(res.body);
    story = data.story['story-sections'][0]['story-subsections'][0].content
    console.log(story)
  }
);
