var fetch = require("node-fetch");

const getIndiaCovidStats = async () => {
  try {
    const response = await fetch(
      "https://covid-19india-api.herokuapp.com/v2.0/state_data"
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};

module.exports = getIndiaCovidStats;
