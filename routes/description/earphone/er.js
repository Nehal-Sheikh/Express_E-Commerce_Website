var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/er1', function(req, res, next) {
  res.render('description/earphone/er1', { title: 'Sony WF-1000XM3' });
});


router.get('/er2', function(req, res, next) {
  res.render('description/earphone/er2', { title: 'Apple Airpods Pro' });
});


router.get('/er3', function(req, res, next) {
  res.render('description/earphone/er3', { title: 'Samsung Galaxy Buds Pro' });
});


router.get('/er4', function(req, res, next) {
  res.render('description/earphone/er4', { title: 'JBL PowerBeats' });
});


router.get('/er5', function(req, res, next) {
  res.render('description/earphone/er5', { title: 'Mpow MBits S True Wireless' });
});


router.get('/er6', function(req, res, next) {
  res.render('description/earphone/er6', { title: 'MPOW X3 V2.0 ANC Bluetooth' });
});


router.get('/er7', function(req, res, next) {
  res.render('description/earphone/er7', { title: 'Mpow M13 Wireless Earbuds' });
});


router.get('/er8', function(req, res, next) {
  res.render('description/earphone/er8', { title: 'Tronsmart Apollo Air Plus' });
});


router.get('/er9', function(req, res, next) {
  res.render('description/earphone/er9', { title: 'Tronsmart Onyx Apex True Wireless' });
});


router.get('/er10', function(req, res, next) {
  res.render('description/earphone/er10', { title: 'MPOW X6 ANC True Wireless' });
});


router.get('/er11', function(req, res, next) {
  res.render('description/earphone/er11', { title: 'SoundBEATS Truengine 3' });
});


router.get('/er12', function(req, res, next) {
  res.render('description/earphone/er12', { title: 'Beats Studio Buds True Wireless' });
});


router.get('/er13', function(req, res, next) {
  res.render('description/earphone/er13', { title: 'OnePlus Buds Pro' });
});


router.get('/er14', function(req, res, next) {
  res.render('description/earphone/er14', { title: 'OnePlus Buds Z' });
});


router.get('/er15', function(req, res, next) {
  res.render('description/earphone/er15', { title: 'Mpow Flame S' });
});


router.get('/er16', function(req, res, next) {
  res.render('description/earphone/er16', { title: 'Aukey Magnetic Wireless Earbuds' });
});

module.exports = router;
