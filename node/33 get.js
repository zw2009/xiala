//获取GET请求内容

var http = require('http');
let url = require('url');
let util = require('util');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
	res.end(util.inspect(url.parse(req.url,true)));
}).listen(3000);
