require("dotenv").config();
const express = require("express");
const router = require("./routers/router");
const rou1 = require('./routers/index')

const PORT = 4000;

const app = express();

app.use('/all', router);
app.use('/country', rou1);

app.set("view engine", "ejs");

app.all("*", (req, res, nex) => {
    res.render("error");
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
