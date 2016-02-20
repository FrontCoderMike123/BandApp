var mongoose = require('mongoose');
var AlbumSchema = new mongoose.Schema({
		Name: String,
		Photo: String,
		Year: String,
		Songs: [{
			Title: String,
			Length: String
		}]
});

module.exports = mongoose.model('Albums', AlbumSchema);