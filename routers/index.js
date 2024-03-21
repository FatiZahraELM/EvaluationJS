const router = require("express").Router();
const {getCountry} = require("../services/countries.service");

router.get("/name/:name", getCountry);

module.exports = router;