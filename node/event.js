//Node.js EventEmitter

let EventEmitter = require("events").EventEmitter;

let event = new EventEmitter();

event.on('some_event',function(){
	console.log('some_event事件被触发');
})

setTimeout(function(){
	event.emit('some_event');
},1000)
