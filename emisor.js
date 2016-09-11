const mqtt = require('mqtt')  
client = mqtt.connect('mqtt://localhost:18830');

console.log('Inicio Emitir ');

var documentNumber = 0;
var cantMsjs = 10;

function insertDocument() {
	client.publish('LuzInteligenteEj','Cliente está vivo.. Envío Nro:'+ documentNumber++ + ' Enviado:'+
	new Date().toISOString().replace('T', ' ').substr(0, 19),{  qos: 1 } );
		
	console.log('Mensaje emitido. %j',documentNumber);
	
	if ( documentNumber < cantMsjs) {
		setTimeout(insertDocument, 10000);
	} else
	{	client.end();	}
	
}

insertDocument();
