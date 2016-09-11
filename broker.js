var mosca = require('mosca');

var settings = {
	port: 18830,
	persistence: mosca.persistence.Memory
};

var server = new mosca.Server(settings, function() {
});

server.on('ready', function () {
	console.log('Servidor Mosca está iniciado y funcionando.');
});

server.on('clientConnected', function(client) {
  console.log('Cliente conectado: ', client.id);
});

server.published = function(packet, client, cb) {
	console.log('Mensaje: %j',   packet.payload.toString('utf8'));
}
