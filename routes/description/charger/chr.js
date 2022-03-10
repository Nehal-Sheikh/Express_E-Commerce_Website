var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/chr1', function(req, res, next) {
  res.render('description/charger/chr1', { title: 'AUKEY Omnia 65W USB C' });
});



router.get('/chr2', function(req, res, next) {
  res.render('description/charger/chr2', { title: 'Anker PowerPort 2 Lite' });
});



router.get('/chr3', function(req, res, next) {
  res.render('description/charger/chr3', { title: 'Aukey Minima 20W PD Charger' });
});


router.get('/chr4', function(req, res, next) {
  res.render('description/charger/chr4', { title: 'Aukey Minima 20W PD 3.0 Charger' });
});



router.get('/chr5', function(req, res, next) {
  res.render('description/charger/chr5', { title: 'Mi Type C 20W' });
});


router.get('/chr6', function(req, res, next) {
  res.render('description/charger/chr6', { title: 'MI 33W (TYPE-A + TYPE-C)' });
});


router.get('/chr7', function(req, res, next) {
  res.render('description/charger/chr7', { title: 'Mi 20W Wireless Charging Stand' });
});


router.get('/chr8', function(req, res, next) {
  res.render('description/charger/chr8', { title: 'RAVPower 90W PD 3.0 Dual Port' });
});


router.get('/chr9', function(req, res, next) {
  res.render('description/charger/chr9', { title: 'RAVPower 65W 4 Port Charging Station' });
});


router.get('/chr10', function(req, res, next) {
  res.render('description/charger/chr10', { title: 'Apple 5W Adapter' });
});


router.get('/chr11', function(req, res, next) {
  res.render('description/charger/chr11', { title: 'Apple 20W Adapter' });
});


router.get('/chr12', function(req, res, next) {
  res.render('description/charger/chr12', { title: 'Apple 85W MagSafe 2' });
});


router.get('/chr13', function(req, res, next) {
  res.render('description/charger/chr13', { title: 'Apple 61W USB-C PD 3.0' });
});


router.get('/chr14', function(req, res, next) {
  res.render('description/charger/chr14', { title: 'Aukey Swift 25W PD' });
});


router.get('/chr15', function(req, res, next) {
  res.render('description/charger/chr15', { title: 'Aukey 30W PD Port with International Compatibility' });
});


router.get('/chr16', function(req, res, next) {
  res.render('description/charger/chr16', { title: 'Samsung 25W Adapter' });
});

module.exports = router;
