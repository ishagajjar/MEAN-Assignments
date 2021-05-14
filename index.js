var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/api.js')
var app = express();

mongoose.connect('mongodb+srv://IshaGajjar:Eternity1998@ishacluster1.qlt2o.mongodb.net/inventory?retryWrites=true&w=majority');

app.use(bodyParser.json());
app.use(routes);

app.listen(process.env.port || 8081, function(){
    console.log('listening');
});