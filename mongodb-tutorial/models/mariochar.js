const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create Schema and Model

/*
 * desc: Schema
 */

const MarioCharSchema = new Schema({
	name: String,
	weight: Number
});

/**
 * desc: model,
 * mariochar - collection
 * 
 * */
const MarioChar = mongoose.model('mariochar',MarioCharSchema);

module.exports = MarioChar;




