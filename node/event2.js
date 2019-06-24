

//EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。

let events = require("events");

let emitter = new events.EventEmitter();

emitter.on('someEvent',function(arg1,arg2){
	console.log('listener1',arg1,arg2);
})

emitter.on('someEvent',function(arg1,arg2){
	console.log('listener2',arg1,arg2);
})

emitter.emit('someEvent','arg1参数','arg2参数');
