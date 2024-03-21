const axios = require("../config/axiosConfig");

let getCountries = async (req, res, next) => {
    const url = req.url;
    console.log(url)
    axios
        .get(`all`)
        .then((response) =>
            res.render("countries", { countries: response.data })
        )
        .catch((err) => console.error(err));
};

let getCountry = async (req, res, next)   => {
    const url = req.url;
    const name = req.params['name']
    axios
        .get(`${url}`)
        .then((response) =>
            res.render("country", { country: response.data[0] })
        )
        .catch((err) => console.error(err));
};

module.exports = {getCountries, getCountry};

