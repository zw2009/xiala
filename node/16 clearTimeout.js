//clearTimeout( t ) 全局函数用于停止一个之前通过 setTimeout() 创建的定时器。 参数 t 是通过 setTimeout() 函数创建的定时器


function printHello(){
	console.log("hello");
}

var t = setTimeout(printHello,2000);

clearTimeout(t);
