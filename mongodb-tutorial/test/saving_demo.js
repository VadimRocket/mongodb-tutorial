/**
 * [mocha Saving Data to MDB]
 * @type {[type]}
 */
// const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');


/**
 * desc: create tests
 */

describe("Saving records", function(){
	
	it('Saves record to the database', function(){
		var char = new MarioChar({
			name: 'Mario'
		});

		char.save().then(function(){
			assert(char.isNew === false);
			done();
		});
	});
	
	//next test

});

// npm run test