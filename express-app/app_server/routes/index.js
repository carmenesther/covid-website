const express = require('express');
const router = express.Router();
const ctrlHealthZones = require('../controllers/locations');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Health zone pages */
router.get('/health-zones', {title: "Por definir el controlador de health zones"});


module.exports = router;
