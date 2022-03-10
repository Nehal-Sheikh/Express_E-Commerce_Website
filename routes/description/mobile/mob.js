var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/mob1', function(req, res, next) {
  res.render('description/mobile/mob1', { title: 'Apple Iphone 13 Pro' });
});


router.get('/mob2', function(req, res, next) {
  res.render('description/mobile/mob2', { title: 'Samsung S21 Ultra' });
});


router.get('/mob3', function(req, res, next) {
  res.render('description/mobile/mob3', { title: 'Xiaomi mi 11' });
});


router.get('/mob4', function(req, res, next) {
  res.render('description/mobile/mob4', { title: 'Oneplus 9 Pro' });
});


router.get('/mob5', function(req, res, next) {
  res.render('description/mobile/mob5', { title: 'Samsung S20 Ultra' });
});


router.get('/mob6', function(req, res, next) {
  res.render('description/mobile/mob6', { title: 'Samsung Note 20 Ultra' });
});


router.get('/mob7', function(req, res, next) {
  res.render('description/mobile/mob7', { title: 'Apple Iphone 13' });
});


router.get('/mob8', function(req, res, next) {
  res.render('description/mobile/mob8', { title: 'Xioami Mi 10' });
});


router.get('/mob9', function(req, res, next) {
  res.render('description/mobile/mob9', { title: 'Xioami Redmi Note 10 Pro' });
});


router.get('/mob10', function(req, res, next) {
  res.render('description/mobile/mob10', { title: 'Xioami Poco F3' });
});


router.get('/mob11', function(req, res, next) {
  res.render('description/mobile/mob11', { title: 'Oneplus 7 Pro' });
});


router.get('/mob12', function(req, res, next) {
  res.render('description/mobile/mob12', { title: 'Oneplus 8 Pro' });
});


router.get('/mob13', function(req, res, next) {
  res.render('description/mobile/mob13', { title: 'Vivo V21' });
});


router.get('/mob14', function(req, res, next) {
  res.render('description/mobile/mob14', { title: 'Vivo Y33s' });
});


router.get('/mob15', function(req, res, next) {
  res.render('description/mobile/mob15', { title: 'Vivo X70 Pro' });
});


router.get('/mob16', function(req, res, next) {
  res.render('description/mobile/mob16', { title: 'Oneplus 9 Pro' });
});

module.exports = router;
