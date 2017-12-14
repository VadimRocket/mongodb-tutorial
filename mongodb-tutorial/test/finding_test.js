/**
 * [mocha Finding Records to MDB]
 */

const assert = require('assert');
const MarioChar = require('../models/mariochar');

/**
 * desc: create tests
 */

describe("Finding Records", function(){

	var char;

	beforeEach(function(done){
		char = new MarioChar({
			name: 'Mario'
		});

		char.save().then(function(){
			// assert(char.isNew === false);
			done();
		});
	});

//Create tests
	it('Finds one record from the Db', function(done){
		MarioChar.findOne({name: 'Mario'}).then(function(result){
			assert(result.name === 'Mario');
			done();
		});
		// MarioChar.find({});
	});
	
	//next test 
	
	/**
	 * Find a record by ID
	 */
	it('Finds one record by Id from the Db', function(done){
		MarioChar.findOne({_id:char._id}).then(function(result){
			assert(result._id.toString() === char._id.toString()); 
			done();
		});
		// MarioChar.find({});
	});

});

// npm run test
