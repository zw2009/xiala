//引入events模块
let events = require("events");

//创建eventEmitter对象
let eventEmitter = new events.EventEmitter();

//创建时间处理程序
let connectHandler = function connected(){
	console.log("链接成功");
	
	//出发data_received事件
	eventEmitter.emit('data_received');
}

//绑定connection事件处理程序
eventEmitter.on('connection',connectHandler);

//使用匿名函数绑定data_received事件
eventEmitter.on('data_received',function(){
	console.log('数据接收成功');
})

//触发connection事件
eventEmitter.emit('connection');

console.log('程序执行完毕');

