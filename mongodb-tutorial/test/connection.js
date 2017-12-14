const mongoose = require('mongoose');

// ES6 Promises 
mongoose.Promise = global.Promise;


//Connect to the db before tests run
before(function(done){

	//Connenct to mongodb
	mongoose.connect('mongodb://localhost/testaroo');
	mongoose.connection.once('open',function(){
	console.log('Connection has been made');
	done();
	}).on('error',function(error){
		console.log('Connection Error',error);	
	});
});


/**
 * 
 * mongoose.connection.collections.mariochars.drop()
 * [Drop the characters collection before each test]
 * 
 */
beforeEach(function(done){
mongoose.connection.collections.mariochars.drop(function(){
	done();
  });
});