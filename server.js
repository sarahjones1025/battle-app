var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public'));

app.get('/pdata/store', function (req, res) {


});

app.put('/pdata/store', function (req, res) {

});

app.listen(8000);