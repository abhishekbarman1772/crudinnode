var express = require("express");
//const Joi = require("@hapi/joi");


let router=require('./routes/routes')
//let db1 = require('./database/database')
var bodyParser = require("body-parser");
//var path = require("path")
var app = express();
app.use(express.static("public"));
app.use(bodyParser.json());
app.set('view engine', 'ejs'); 
app.engine("html", require("ejs").renderFile);
/**
 * parse requests of content-type - application/x-www-form-urlencoded
 */
 
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',router.router)
app.listen(3000);
console.log("Server Listening on port 3000");
