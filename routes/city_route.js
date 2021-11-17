const router = require("express").Router();
const { getAllCities } = require("../controllers/city_controller");

router.get("/cities", getAllCities);

module.exports = router;
