/* Nesting Sub Documents*/
const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');


//Describe tests
describe('Nesting records',function(){

	beforeEach(function(done){
		mongoose.connection.collections.authors.drop(function(){
			done();
		});
	});



	it('Create an author with sub documents',function(done){
		var pat = new Author({
			name: 'Alex Smit',
			books: [{title: 'Name of the book',pages: 300}]
		});
		pat.save().then(function(){
			Author.findOne({name: 'Alex Smit'}).then(function(record){
				assert(record.books.length === 1);
				done();
			});
		});
	});
	it('Adds a book an to an author',function(done){
		var pat = new Author({
			name: 'Alex Smit',
			books: [{title: 'Name of the book',pages: 300}]
		});

		pat.save().then(function(){
			Author.findOne({name: 'Alex Smit'}).then(function(record){
				// add book to the book array
				record.books.push({title: 'Name of the book',pages: 550});
				record.save().then(function(){
					Author.findOne({name: 'Alex Smit'}).then(function(result){
						assert(record.books.length === 2);
						done();
					});
				});
				
			});
		});

	});
});