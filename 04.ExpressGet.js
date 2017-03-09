var express = require('express');
var http = require('http');
var url = require('url');
var queryString = require('querystring');
var app = express();

app.get('/login', function(req, res) {
    var params = url.parse(req.url, true).query;
    response = {
        name: params.name,
        pwd: params.pwd
    };
    res.end(JSON.stringify(response));
})

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
