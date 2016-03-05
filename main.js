var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectionHandler = function connected()
{
	console.log('connection succesful.');

	eventEmitter.emit('data_recieved');
}

eventEmitter.on('connection', connectionHandler);

eventEmitter.on('data_received', function()
		{
			console.log('data recived succesfully.');
		});

eventEmitter.emit('connection');

console.log("Program Ended.");
