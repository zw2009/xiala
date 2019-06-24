//解压文件
let fs = require('fs');
let zlib = require('zlib');

//解压input.txt.gz文件为input2.txt
fs.createReadStream('input.txt.gz')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('input2.txt'));

console.log("文件解压成功")
