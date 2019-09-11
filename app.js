//VERY BASIC EXPRESS APPLICATION
var express = require('express');
var bodyParser = require('body-parser');
//setup express
var app = express();
var urlendcodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');
//MIDDLEWARE 
//provided by express
app.use('/assets', express.static('assets'));
app.use('/assets', express.static(__dirname+'css'));

app.get('/', function(req,res){
	res.render('index');
});

app.get('/contact', function(req,res){
	//console.log(req.query);
	res.render('contact',{qs: req.query});
});

app.post('/contact',urlendcodedParser, function(req,res){
	console.log(req.body);
	res.render('contact-success',{data: req.body});
});

app.get('/profile/:name', function(req,res){
	var data = {age:23,weight:'90kg', other:['a','b','c']};
	res.render('profile.ejs', {person: req.params.name, data: data});
});

//port setup
app.listen(3000);