var express = require('express');
var bodyParser = require('body-parser');
// making an instance of express
var app = express();
// express.static will take a path to the files
// we want to serve publicly
// middleware = functions that get executed with the request and the response

var id = 4;

var pData = [];

app.use(bodyParser());
// what bodyParser does is add a propery to the request, called body, that we can use

app.use(express.static(__dirname + '/public'));



app.listen(8000);