// Load modules
//make it with pure node!

var SocketIO = require('socket.io');
var Hapi = require('hapi');

// Declare internals
var internals = {};
internals.startServer = function () {
    internals.server = new Hapi.Server('localhost',8080);
    internals.server.route({ method: 'GET', path: '/{path*}', handler: internals.urlHandler });

    internals.server.start(internals.startSocketIO);
};

internals.startSocketIO = function () {
    var io = SocketIO.listen(internals.server.listener);

    io.sockets.on('connect',function(socket){
        socket.emit('connected', {data:'some data'});
    })
};


internals.urlHandler = function(){
    return {directory:{path:'./',listing:false,index:true}};
}

internals.startServer();

