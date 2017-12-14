const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create Schema and Model, Relational Data

/*
 * desc: Schema
 */

const BookSchema = new Schema({
	title: String,
	pages: Number
});
const AuthorSchema = new Schema({
	name: String,
	age: Number,
	books: [BookSchema] 
});

/**
 * desc: model,
 *  author - collection
 * 
 * */
const Author = mongoose.model('author',AuthorSchema);

module.exports = Author;




