express = require("express");
const router = express.Router();
var fetch = require("node-fetch");
const getCovidStats = require("../api");
const getIndiaCovidStats = require("../apiIndia");

router.post("/", async (req, res) => {
  try {
    const country = await getCovidStats();
    country
      .json()
      .then((data) => {
        let result = data.Countries.find((obj) => {
          return obj.Country === req.body.country;
        });
        res.render("country/country.ejs", {
          countryName: req.body.country,
          TotalConfirmed: result.TotalConfirmed,
          TotalDeaths: result.TotalDeaths,
          TotalRecovered: result.TotalRecovered,
          NewConfirmed: result.NewConfirmed,
          NewDeaths: result.NewDeaths,
          NewRecovered: result.NewRecovered,
        });
      })
      .catch((e) => console.log(e));
  } catch (e) {
    console.log(e);
  }
});

router.get("/region", async (req, res) => {
  try {
    const region = await getIndiaCovidStats();
    region.json().then((data) => {
      res.render("country/region", { region: data });
    });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
