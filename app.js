const express = require('express');
const app = express();
const bodyParser = require("body-parser"); 
const route = require('./routes/route');
require('dotenv').config();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/',route);
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
app.set('port',process.env.PORT || 8000);


module.exports = app;
