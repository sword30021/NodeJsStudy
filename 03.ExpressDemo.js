var express = require('express');
var app = express();

app.get('/sendMsg', function(req, res) {
    res.send(req.path);
})

app.get('/login', function(req, res) {
    res.send(req.path);
})

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
