const path = require("path");
const fs = require("fs").promises;

// Get all cities from the json file
exports.getAllCities = async () => {
  const jsonString = await fs.readFile("./data/cities.json", "utf8");
  const data = JSON.parse(jsonString);

  return data;
};
