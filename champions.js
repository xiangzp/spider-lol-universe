const request = require("request");
const { addList, clearCollection } = require("./db.js");

request(
  {
    url: "https://yz.lol.qq.com/v1/zh_cn/search/index.json"
  },
  async (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    await clearCollection("champions");
    await clearCollection("factions");
    const data = JSON.parse(res.body);
    const { champions, factions } = data;
    addList("champions", champions);
    addList("factions", factions);
  }
);
