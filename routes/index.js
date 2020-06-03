express = require("express");
var async = require("express-async-await");
var fetch = require("node-fetch");
const router = express.Router();
const getCovidStats = require("../api");
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = new JSDOM("").window;
global.document = document;
var Chart = require("chart.js");

var $ = (jQuery = require("jquery")(window));

router.get("/", async (req, res) => {
  try {
    const country = await getCovidStats();
    country
      .json()
      .then((data) => {
        res.render("index.ejs", {
          country: data.Countries,
          global: data.Global,
        });
      })
      .catch((e) => console.log(e));
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
