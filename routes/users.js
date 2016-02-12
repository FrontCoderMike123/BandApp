var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Band = require('../models/Band.js');

router.get('/', function(req, res, next) {
	//Band.find(function(err,students){
		//if(err) return next(err);
		//res.json(students);
		var data = JSON.stringify();//students goes into the stringify VAR... but it gave erros. FUCK
		res.render('index', {
  			title: 'Students',
  			comment: 'This is the Users page',
  			info: data
  		});
	//});
//uncomment this shit once i actually have a json file to parse
});

router.get('/:id', function(req, res, next) {
	//Band.findById(req.params.id, function(err,student){
		//if(err) return next(err);
		//res.json(student);
		var data = JSON.stringify();//student goes into the stringify VAR... but it gave erros. FUCK
		res.render('detail', {
  			title: 'Student Details',
  			comment: 'This is the Details page',
  			details: data
  		});
	//});
//uncomment this shit once i actually have a json file to parse
});

module.exports = router;
