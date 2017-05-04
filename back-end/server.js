var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//var Message = require('./models/message')
//var User = require('./models/user')
var auth = require('./controllers/auth');
var message = require('./controllers/message'); 
var checkAuthenticated = require('./services/checkAuthenticated'); 
var cors = require('./services/cors'); 

//var database;
//var Message = mongoose.model('Message',{
//	msg: String
//}); 

//MiddleWare
app.use(bodyParser.json());
app.use(cors);


//Requests
app.get('/api/message', message.get);
app.post('/api/message', checkAuthenticated, message.post); //function(req,res){
	//console.log(req.body);

	//var message = new Message(req.body);

	//message.save();
	//database.collection('messages').insertOne(req.body);
	//res.status(200);
//})

app.post('/auth/register', auth.register); //function(req,res){
	//console.log(req.body);

	//var user = new User(req.body);
	//user.save(function(err,result){
	//	if(err){
	//		res.status(500).send({
	//			message: err.message
	//		});
	//	}
	//	res.status(200);
	//})
//})

//function getMessage(req, res){
//	Message.find({}).exec(function(err,result){
		//console.log(result)
//		res.send(result);
//	})
//}

//Connection 
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