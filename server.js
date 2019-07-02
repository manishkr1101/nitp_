


const express = require('express');

const app = express();
const PORT = 3000;

app.use('/images', express.static('images'));
app.use('/css', express.static('css'));
app.use('/scripts', express.static('scripts'));
app.use('/iframe', express.static('iframe'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/about.html', function(req, res){
	res.sendFile(__dirname + "/about.html");
	
});

app.get('/about', function(req, res){
	// console.log(req.query.option);
	res.sendFile(__dirname + "/about.html");
	// ScriptManager.RegisterStartupScript(this, GetType(), "key", "<script>press('campus'); </script>", false);
	// res.write('hi');
	
});

app.get('/admin.html', function(req, res){
	res.sendFile(__dirname + "/admin.html");
	
});

app.get('/index.html', function(req, res){
	res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, function(){
	console.log("running at port: "+PORT);
});


