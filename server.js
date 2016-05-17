var express = require ('express');

var 30%Bf = require('../routers/30%Bf');
var fatData = require('../routers/fatData');

var app = express();

app.use('/', 30%Bf);
app.use('/api', fatData);

app.listen(8000, function () {
	console.log('weightgain listening on port 8000');
};
