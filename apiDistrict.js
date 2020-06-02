var fetch = require("node-fetch");

const DistrictWise = async () => {
  const response = await fetch(
    "https://api.covid19india.org/state_district_wise.json"
  );
  return response;
};

module.exports = DistrictWise;
