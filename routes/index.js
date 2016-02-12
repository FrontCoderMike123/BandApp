var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Student = require('../models/Bands.js');

router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Home',
  	comment: 'Welcome Home!' 
  });
});

router.get('/about', function(req, res, next) {
  res.render('index', {
  	title: 'About',
  	comment: 'This is About page'
  });
});

router.get('/students', function(req, res, next) {
  res.render('index', {
  	title: 'Students',
  	comment: 'So many Students!'
  });
});

module.exports = router;