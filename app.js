const express = require('express');
const app = express();
<<<<<<< HEAD
const bodyParser = require("body-parser"); 
=======
require("dotenv").config();
const bodyParser = require("body-parser");
>>>>>>> 46f40f66a0ebd3e78ca61fd903cb95c3507cd84b
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
