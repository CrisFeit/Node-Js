var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('customEvent' , msg => console.log(msg))

emitter.emit('customEvent', 'The event was emitted');

