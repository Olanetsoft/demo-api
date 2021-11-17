const { getAllCities } = require("../services/cityService");
const { successResponse, errorResponse } = require("../util/response_handler");

// Get all cities
exports.getAllCities = async (req, res, next) => {
  try {
    const cities = await getAllCities();

    // return cities;
    return successResponse(res, 200, cities);
  } catch (error) {
    errorResponse(res, "Something went wrong", 500);
    return next(error);
  }
};
