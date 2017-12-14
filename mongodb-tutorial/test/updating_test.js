/*Updating Records*/

const assert = require('assert');
const MarioChar = require('../models/mariochar');

/**
 * desc: create tests
 */
describe("Updating Records", function(){

	var char;

	beforeEach(function(done){
		char = new MarioChar({
			name: 'Mario',
			weight: 43
		});

		char.save().then(function(){
			done();
		});
	});

	it('Updates one record in the Db', function(done){
		MarioChar.findOneAndUpdate({name:'Mario'},{name:'Alex'}).then(function(){
			MarioChar.findOne({_id:char._id}).then(function(result){
				assert(result.name === 'Alex');
				done();
			});
		});
	});
	
	/*
	*Update Operators, see documentation about update operators
	 */ 
	it('Increments the weight by 1', function(done){
		MarioChar.update({},{$inc:{weight: 1}}).then(function(){
			MarioChar.findOne({name:'Mario'}).then(function(record){
				assert(record.weight === '44');
				done();
			});
		});
	});
	
	

});

