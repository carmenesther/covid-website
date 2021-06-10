const express = require('express');
const router = express.Router();

const ctrlHealthZones = require('../controllers/health-zones');
const ctrlDeaths = require('../controllers/deaths');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// SCHEMAS 

/**
 * @swagger
 * components:
 *   schemas:
 *     health-zones:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: health zone's ID.
 *           example: 0
 *         zona_basica_salud:
 *           type: string
 *           description: health zone's name.
 *           example: Almeria
 *         tasa_incidencia_acumulada_total:
 *           type: number
 *           description: total rate of covid cases in the health zone.
 *           example: 19.55
 *         fecha_informe:
 *           type: string
 *           description: date when the information was stored.
 *           example: 10/06/2021
 *         casos_confirmados_totales:
 *           type: integer
 *           description: total covid cases in the health zone.
 *           example: 100
 */

/**
 * @swagger
 * /health-zones:
 *   get:
 *     summary: Retrieve a list of health zones
 *     description: Retrieve a list of covid confirmed cases from the health zones. 
 *     tags:
 *       - health-zones
 *     responses:
 *       200:
 *         description: A list of health zones.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/health-zones'

*/
router.get('/health-zones', ctrlHealthZones.healthZonesReadAll);


/**
 * @swagger
 * /health-zones/{id}:
 *   get:
 *     summary: Retrieve a health zone
 *     description: Retrieve a health zone with the information
 *     tags:
 *       - health-zones
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the health zone to retrieve.
 *         schema:
 *           type: integer
  *     responses:
 *       200:
 *         description: One health zone.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/health-zones'
*/
router.get('/health-zones/:id', ctrlHealthZones.healthZoneReadOne);

/**
 * @swagger
 * /deaths:
 *   get:
 *     summary: Retrieve a list covid's deaths
 *     description: Retrieve a list of covid's deaths 
 *     tags:
 *       - deaths
 * 
 */
router.get('/deaths', ctrlDeaths.deathsReadAll);

/**
 * @swagger
 * /deaths/{id}:
 *   get:
 *     summary: Retrieve a covid's death
 *     description: Retrieve a covid's death
 *     tags:
 *       - deaths
  *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the death to retrieve.
 *         schema:
 *           type: integer
 * 
 */

router.get('/deaths/:id', ctrlDeaths.deathsReadOne);
router.get('/sex/:sex', ctrlDeaths.deathsReadBySex);
router.get('/countsex', ctrlDeaths.deathsCountSex);

module.exports = router;
