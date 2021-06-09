const express = require('express');
const router = express.Router();

const ctrlHealthZones = require('../controllers/health-zones');
const ctrlDeaths = require('../controllers/deaths');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Health zone pages */
router.get('/health-zones', ctrlHealthZones.healthZonesReadAll);
router.get('/health-zones/:id', ctrlHealthZones.healthZoneReadOne);


module.exports = router;
