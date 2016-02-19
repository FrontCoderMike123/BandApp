var express = require('express');
var path = require('path');
var router = express.Router();
var mongoose = require('mongoose');
var Band = require('../models/Band.js');

router.get('/',function(req,res){
  res.render('index', {
        title: 'Bands & Albums'
      });
});

router.get('/bands', function(req,res,next){
  Band.find(function(err,band){
    if(err)return next(err);
    res.json(band);
  });
});

router.get('/details/:bandId', function(req,res,next){
  Band.findById(req.params.bandId,function(err,band){
    if(err)return next(err);
    res.json(band);
  });
});

module.exports = router;