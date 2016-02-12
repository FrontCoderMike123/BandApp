var mongoose = require('mongoose');
var BandSchema = new mongoose.Schema({
	Name: String,
	Photo: String,
	Bio: String,
	Genre: String,
	Albums: [{
		Name: String,
		Photo: String,
		Year: String,
		Songs: [{
			Title: String,
			Length: String
		}]
	}]
});

module.exports = mongoose.model('Band', BandSchema);