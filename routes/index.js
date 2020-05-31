express = require("express");
var async = require("express-async-await");
var fetch = require("node-fetch");
const router = express.Router();
const getCovidStats = require("../api");

router.get("/", async (req, res) => {
  try {
    const country = await getCovidStats();
    country
      .json()
      .then((data) => {
        res.render("index.ejs", { country: data.Countries });
      })
      .catch((e) => console.log(e));
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
