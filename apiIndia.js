var fetch = require("node-fetch");

const getIndiaCovidStats = async () => {
  try {
    const response = await fetch(
      "http://covid19-india-adhikansh.herokuapp.com/states"
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};

module.exports = getIndiaCovidStats;
