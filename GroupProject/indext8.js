var express = require('express');
var bodyParser = require('body-parser');

//change code 
//var mongoose = require("mongoose");
//mongoose.connect("mongodb://localhost/data");

var routes = require("./routes");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/js', express.static('./public/js'));
app.use(routes);

var port = process.env.PORT || 3008;
app.listen(port);


app.use(express.static(__dirname + "/"));  // 0