express = require("express");
const router = express.Router();
var fetch = require("node-fetch");
const getCovidStats = require("../api");
const getIndiaCovidStats = require("../apiIndia");
const DistrictWise = require("../apiDistrict");

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

router.get("/region/:id", async (req, res) => {
  try {
    var state = req.params.id;
    if (state === "Andaman and Nicobar") {
      state = state + " Islands";
    }
    if (state === "Telengana") {
      state = "Telangana";
    }
    const district = await DistrictWise();
    district.json().then((data) => {
      res.render("country/district", { district: data, state: state });
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
