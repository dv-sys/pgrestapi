const express = require('express');
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const route = require('./routes/route');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/',route);

app.set('port',process.env.PORT || 8000);


module.exports = app;
