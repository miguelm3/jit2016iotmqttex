var mqtt = require('mqtt')

client = mqtt.connect('mqtt://localhost:18830', function(err, client){
	if (err) { 
		console.log(err);
		throw err;
	}
});

client.subscribe('LuzInteligenteEj');

client.on('message', function(topic, message) {
   console.log('Fecha Recibido:', new Date().toISOString().replace('T', ' ').substr(0, 19) ,message.toString() + ' Topic:' + topic.toString());
});

console.log('Cliente iniciado...');
