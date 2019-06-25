//表单通过 POST 提交并输出数据：

let http = require('http');
let querystring = require('querystring');

let postHTML = 
	'<html><head><meta charset="utf-8"><title>post提交数据</title></head><body>'+
		'<form>'+
			'网站名：<input type="text" name="name" />'+
			'网站URL：<input type="text" name="url" />'+
			'<input type="submit" value="提交">'+
		'<form>'+
	'</body></html>';
	
	
http.createServer(function(req,res){
	var body = '';
	
	req.on('data',function(chunk){
		body += chunk;
	});
	
	req.on('end',function(){
		//解析参数
		body = querystring.parse(body);
		
		//设置响应头部信息及编码
		res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
		
		if(body.name && body.url){ //输出提交的数据
			res.write("网站名:" + body.name);
			res.write("<br/>");
			res.write("网站名URL:" + body.url);
		}else{
			res.write(postHTML);
		};
		
		res.end();
	});
}).listen(3000);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
