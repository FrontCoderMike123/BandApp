var express = require('express');
var path = require('path');
var router = express.Router();
var mongoose = require('mongoose');
var Band = require('../models/Band.js');

router.get('/',function(req,res){
  //res.sendFile(path.join(__dirname, '../public/views', 'index.html'));
  res.render('index', {
        title: 'Bands & Albums'
        //info: data
      });
});

router.get('/bands', function(req,res,next){
  Band.find(function(err,band){
    if(err)return next(err);
    res.json(band);
  });
});

/*router.get('/details/:id', function(req,res,next){
  db.bands('bands',function(err,band){
    bands.findOne({ _id: bands.db.bson_serializer.ObjectID.createFromHexString(req.params.id)},
      function(err,band){
        res.json(band);
      });
  });
});*/

router.get('/details/:id', function(req,res,next){
  Band.findById(req.params.id,function(err,band){
    if(err)return next(err);
    res.json(band);
    res.render('details', {
        title: 'Biography'
        //info: data
      });
  });
});

module.exports = router;