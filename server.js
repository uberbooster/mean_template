var express = require('express'),
    server = express();

server.use(express.static(__dirname+'/css'));
server.use(express.static(__dirname+'/images'));

server.get('/', function(req, res){
	res.sendFile('html/index.html', { root: __dirname });
});

server.post('/signup', function(req, res){
  console.log('You signed up');
  console.log(req.body);
  res.redirect('/');
});

server.listen(8080, function(){
	console.log("Now listening on port 8080");
});
