let express = require('express');
let app = express();

//主页输出‘hello world
app.get('/',function(req,res){
 	console.log('主页get 请求');
 	res.send('Hello GET');
});

//post请求
app.post('/',function(req,res){
	console.log("主页post请求");
	res.send('Hello POST');
});

//del_user 页面相应 GET 请求
app.get('/list_user',function(req,res){
	console.log('/list_user GET 请求');
	res.send();
});

//对页面abcd ， abxcd ， ab123cd ， 等响应 GET 请求
app.get('/ab*cd',function(req,res){
	console.log("/ab*cd GET 请求");
	res.send("正则匹配");
});

var server = app.listen(8081,function(){
	var host = server.address().host;
	var port = server.address().port;
	
	console.log("应用实例，访问地址为 http://%s%s",host,port)
});
