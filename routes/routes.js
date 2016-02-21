var express = require('express');
var path = require('path');
var router = express.Router();
var mongoose = require('mongoose');
var Band = require('../models/Band.js');
var Song = require('../models/Song.js');
var Album = require('../models/Album.js');

router.get('/',function(req,res){
  res.render('index', {
        coder: 'MB Development'
      });
});

router.get('/bands', function(req,res,next){
  Band.find(function(err,band){
    if(err)return next(err);
    res.json(band);
  });
});

router.get('/albums', function(req,res,next){
  Album.find(function(err,album){
    if(err)return next(err);
    res.json(album);
  });
});

router.get('/songs', function(req,res,next){
  Song.find(function(err,song){
    if(err)return next(err);
    res.json(song);
  });
});

router.get('/details/:bandId', function(req,res,next){
  Band.findById(req.params.bandId,function(err,band){
    if(err)return next(err);
    res.json(band);
  });
});

/*router.get('/album1/:album1ID', function(req,res,next){
  Band.findById(req.params.album1ID,function(err,band){
    if(err)return next(err);
    res.json(band);
  });
});*/

module.exports = router;