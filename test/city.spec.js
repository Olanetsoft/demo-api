const fs = require("fs");
const { getAllCities } = require("../services/cityService");

const jsonString = fs.readFileSync("./data/cities.json", "utf8");
const defaultCityData = JSON.parse(jsonString);

describe("Cities", () => {
  it("Should return all cites", async () => {
    return getAllCities().then((data) => {
      expect(data.cities).toEqual(
        expect.arrayContaining(defaultCityData.cities)
      );
    });
  });
});
