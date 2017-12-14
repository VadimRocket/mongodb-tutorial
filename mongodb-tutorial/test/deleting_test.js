/**
 * Deleting Records
 * 	methods:
 *  char.remove();
	MarioChar.remove();
	MarioCharfindOneAndRemove();
 */
const assert = require('assert');
const MarioChar = require('../models/mariochar');

/**
 * desc: create tests
 */
describe("Deleting Records", function(){

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

	it('Deletes one record from the Db', function(done){
		MarioChar.findOneAndRemove({name:'Mario'}).then(function(){
			MarioChar.findOne({name: 'Mario'}).then(function(result){
				assert(result === null);
				done();
			});
		});
	});
	
	//next test 
	

});

