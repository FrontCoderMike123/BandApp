var express = require('express');
var path = require('path');

var router = express.Router();
var mongoose = require('mongoose');
var Student = require('../models/Student.js');

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname, '../public/views', 'index.html'));
});

router.get('/students', function(req,res,next){
  Student.find(function(err,students){
    if(err)return next(err);
    res.json(students);
  });
});

router.get('/students/details', function(req,res,next){
  Student.find(function(err,student){
    if(err)return next(err);
    res.json(student);
  });
});

module.exports = router;