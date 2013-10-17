var io = require('socket.io'),
    fs = require('fs'),
    path = require('path'),
    http = require('http'),
    url = require('url'),
    util = require('util'),
    sys = require('sys')

var appServer = http.createServer(function(req,res){

    sys.puts(url.parse(req.url).pathname);
    res.end();
});
appServer.listen(8080);
sys.puts('server started');