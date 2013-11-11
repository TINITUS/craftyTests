//server vars and requirements
var myServer = require('http').createServer(handler),
    fs = require('fs'),
    util = require('util'),
    url = require('url'),
    path = require('path'),
    io = require('socket.io').listen(myServer),
    sys = require('sys'),

    serverURL = 'localhost',
    port = 8880;

//app vars
var socket;
    /* add in later state:
    Player = require('./player.js').Player, //define players handler
    players; //register players
    */

function setMIME(file){
    var i = file.lastIndexOf("."),
        ext = (i === -1) ? "default" : file.substr(i),
        mimeTypes = {
            ".bmp": "image/bmp",
            ".css": "text/css",
            ".gif": "image/gif",
            ".htm": "text/html",
            ".html": "text/html",
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".js": "application/javascript",
            ".json": "application/json",
            ".otf": "font/opentype",
            ".png": "image/png",
            ".text": "text/plain",
            "default": "application/octet-stream"
        };

    return mimeTypes[ext.toLowerCase()];
}


function handler(req, res){
    var reqURL = url.parse(req.url).pathname;
    fs.exists(__dirname+reqURL, function (exists) {
        if(exists){
            if(fs.lstatSync(__dirname+reqURL).isDirectory()){
                sys.puts(__dirname+reqURL + ' is directiry');
            }
            fs.readFile(__dirname+reqURL, function(err, cont){
                if(!err){
                    res.writeHead(200, {'Content-Type':setMIME(req.url)});
                    res.end(cont);
                }else{
                    res.writeHead(500);
                    res.end(err);
                }
            });
        }else{
            res.writeHead(400);
            res.end('404 File no found');
        }
    });
}

myServer.listen(port);
sys.puts('server started at ' + serverURL + ':' + port + ' on '+ Date());

io.sockets.on('connection', function (socket) {
    socket.emit('connected', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
        socket.emit('received');
    });
});
