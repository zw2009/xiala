//以下实例通过 connection（连接）事件演示了 EventEmitter 类的应用。

let events = require('events');

let eventEmitter = new events.EventEmitter();

//监听器 #1
let listener1 = function listener1(){
	console.log('监听器 listener1 执行');
}

//监听器 #2
let listener2 = function listener2(){
	console.log('监听器 listener2 执行');
}

//绑定connection事件，处理函数为listener1
eventEmitter.addListener('connection',listener1);

//绑定connection事件，处理函数为listener2
eventEmitter.on('connection',listener2);

let eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + '个监听器监听链接事件');

//处理connection事件
eventEmitter.emit('connection');

//移除监听绑定的listener1函数
eventEmitter.removeListener('connection',listener1);
console.log("listener1不再受监听");

eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + '个监听器监听事件连接');

console.log('程序执行完毕')
