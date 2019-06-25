//获取 POST 请求内容

let http = require('http');
let querystring = require('querystring');
let util = require('util');

http.createServer(function(req,res){
	//定义一个【post变量，用于暂停请求体的信息
	let post = '';
	
	//通过req打data事件监听函数，每当接收到请求体的数据，就会累加到post变量中
	req.on('data',function(chunk){
		post += chunk;
	});
	
	//在end事件触发后，通过querystring.parse将post解析为真正的post请求格式，然后向客户端返回
	req.on('end',function(){
		post = querystring.parse(post);
		res.end(util.inspect(post));
	});
}).listen(3000);


