var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/bank1', function(req, res, next) {
  res.render('description/power_banks/bank1', { title: 'Anker PowerCore Slim 10000mAh' });
});


router.get('/bank2', function(req, res, next) {
  res.render('description/power_banks/bank2', { title: 'Anker PowerCore 20000mAh PD' });
});


router.get('/bank3', function(req, res, next) {
  res.render('description/power_banks/bank3', { title: 'Aukey 20W 10000mAH PD Wireless Charging' });
});


router.get('/bank4', function(req, res, next) {
  res.render('description/power_banks/bank4', { title: 'RAVPower Turbo 10050mAh' });
});


router.get('/bank5', function(req, res, next) {
  res.render('description/power_banks/bank5', { title: 'Samsung 10000mAh Fast Charging' });
});


router.get('/bank6', function(req, res, next) {
  res.render('description/power_banks/bank6', { title: 'RAVPower 12000mAh Quick Charge' });
});


router.get('/bank7', function(req, res, next) {
  res.render('description/power_banks/bank7', { title: 'AUKEY USB C Power Bank 10000mAh' });
});


router.get('/bank8', function(req, res, next) {
  res.render('description/power_banks/bank8', { title: 'Anker PowerCore 10000mAh 12W' });
});


router.get('/bank9', function(req, res, next) {
  res.render('description/power_banks/bank9', { title: 'Baseus PD+QC 10000mAh 18W' });
});


router.get('/bank10', function(req, res, next) {
  res.render('description/power_banks/bank10', { title: 'Baseus Digital Display 20000mAh 65W' });
});


router.get('/bank11', function(req, res, next) {
  res.render('description/power_banks/bank11', { title: 'Realme Power Bank 2' });
});


router.get('/bank12', function(req, res, next) {
  res.render('description/power_banks/bank12', { title: 'Mi Wireless 10000mAh' });
});


router.get('/bank13', function(req, res, next) {
  res.render('description/power_banks/bank13', { title: 'Mi Redmi Power Bank 10000mAh' });
});


router.get('/bank14', function(req, res, next) {
  res.render('description/power_banks/bank14', { title: 'Space PD + QC 3.0 22.5W 10000mAh' });
});


router.get('/bank15', function(req, res, next) {
  res.render('description/power_banks/bank15', { title: 'Space PD + QC 3.0 20000mAh' });
});


router.get('/bank16', function(req, res, next) {
  res.render('description/power_banks/bank16', { title: 'Space Wireless Series 10000mAh ' });
});

module.exports = router;
