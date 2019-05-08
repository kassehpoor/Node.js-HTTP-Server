var http = require('http');
var fs = require('fs');

const port = 2020;

var server = http.createServer(function (req, res) {
	console.log(req.method, req.url);

	if (req.method === 'GET' && req.url === '/') {
		fs.readFile('indexhttp.html', function (err, pageData) {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(pageData);
			res.end();
		});
	} else if (req.method === 'POST' && req.url === '/data/') {
		var data = [];
		req.on('data', chunk => {
			data.push(chunk)
		});
		req.on('end', () => {
			var obj = JSON.parse(data);
			res.write('Hello ' + obj.value + ' form Nodejs...! ');
			res.end();
		});
	} else {
		res.end();
	}
});

server.listen(port);
server.on('listening', function () {
	console.log('Listenning on port ' + port);
});



//-------------------------------------------------------
















/*

var http = require('http');
http.createServer(function(request,response){
	if (request.url == "/Data"){
		response.writeHead(200,{'Content-Type':'application/json'});
		response.end('hello from server....');
	};

	var jsonObj = {
		name :'tahereh',
		family: 'kashpoor',
		server: 'Nodejs'
	};
	response.end(JSON.stringify(jsonObj));

}).listen(2020);

console.log('server is runing on localhost:2020/');

*/








/*
var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('clicked',(url,request,response)=>{
	response.setHeader('Content-Type','text/html');
});
 eventEmitter.emit('clicked',request.url);
*/

/*
//---------------------------------------------------------------------------
const https = require('https');
const server = https.createServer((request, response) => {
	const {headers,mehtod,url} = request;
	console.log(request.url);
	//---------------------------------------------------------------
	{
		request.on('data',(chunck)=> {
			let body = [];
			body.push(chunck);

		}).on ('end',()=>{body = Buffer.concat(body).toString() });

	response.setHeader('Content-Type','text/html');
	const responseBody = {headers,method,url,body};
	response.write(JSON.stringify(responseBody));
	response.end();
	}

	//-------------------------------------------------------------

	response.writeHead(200,{'Content-Type':'text/html'});
	response.write('Hello from server....');
	//response.json({message:'Hello from server....'});
	//response.send({message:'Hello from server...'});
	//response.send('<p>some html<p/>');
	//response.end('<html><body><h1>Hello, World!</h1></body></html>');

	//----------------------------------------------------------------
}).listen(8080, (err) => {
	if (err) {
		return console.error('something bad happened', err);
	}
	console.log(`server is listening on 8080`);
	});
*/
//*******************************************************************

