const router = require("express").Router();
const {getCountries} = require("../services/countries.service");

router.get("", getCountries);

module.exports = router;
