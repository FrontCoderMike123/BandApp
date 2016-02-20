var mongoose = require('mongoose');
var SongSchema = new mongoose.Schema({
	Title: String,
	Length: String
});

module.exports = mongoose.model('Song', SongSchema);