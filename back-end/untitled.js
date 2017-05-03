var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Message = require('/models/message')


//var database;
//var Message = mongoose.model('Message',{
//	msg: String
//});

app.use(bodyParser.json())

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
})

app.get('/api/message', getMessage);

app.post('/api/message', function(req,res){
	console.log(req.body);

	var message = new Message(req.body);

	message.save();
	//database.collection('messages').insertOne(req.body);
	res.status(200);
})

app.post('/auth/register', function(req,res){
	console.log(req.body);
})

function getMessage(req, res){
	Message.find({}).exec(function(err,result){
		//console.log(result)
		res.send(result);
	})
}

mongoose.connect("mongodb://localhost:27017/test", function(err, db){
	if (!err){
		console.log("we are connected to mongo");
		//database = db;
		//db.collection('messages').insertOne({'msg':'test'});
		//getMessage();
	}else{
		console.log("we are not connected")
	}


})

 var server = app.listen(5000,function(){
 	console.log('listening on port', server.address().port)
 })