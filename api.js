var fetch = require("node-fetch");

const getCovidStats = async () => {
  const response = await fetch("https://api.covid19api.com/summary");
  return response;
};

module.exports = getCovidStats;
