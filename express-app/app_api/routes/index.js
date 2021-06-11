const express = require('express');
const router = express.Router();

const ctrlHealthZones = require('../controllers/health-zones');
const ctrlDeaths = require('../controllers/deaths');
const ctrlVaccination = require('../controllers/vaccination');


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
 *     deaths:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: death's ID.
 *           example: 0
 *         covid19:
 *           type: string
 *           description: covid-19 identificated or not.
 *           example: Covid-19 Virus identificado
 *         mes_defuncion:
 *           type: string
 *           description: month of the defunction.
 *           example: Enero
 *         sexo:
 *           type: string
 *           description: genre of the person.
 *           example: Mujeres
 *         edad:
 *           type: string
 *           description: age range of the person.
 *           example: De 80 a 84 años
 *         total:
 *           type: integer
 *           description: total of deaths.
 *           example: 1.666
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
 *     summary: Retrieve a list of covid's deaths
 *     description: Retrieve a list of covid's deaths 
 *     tags:
 *       - deaths
 *     responses:
 *       200:
 *         description: A list of deaths.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/deaths'
*/
router.get('/deaths', ctrlDeaths.deathsReadAll);

/**
 * @swagger
 * /deaths/{id}:
 *   get:
 *     summary: Retrieve a death
 *     description: Retrieve a death with the information
 *     tags:
 *       - deaths
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the death to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: One death.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/deaths'
*/
router.get('/deaths/:id', ctrlDeaths.deathsReadOne);

/**
 * @swagger
 * /deaths-genre/{genre}:
 *   get:
 *     summary: Retrieve a list of covid's deaths by genre
 *     description: Retrieve a list of covid's deaths by genre
 *     tags:
 *       - deaths
 *     parameters:
 *       - in: path
 *         name: genre
 *         required: true
 *         description: Genre of the person.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of deaths by a given genre.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/deaths'
 */
router.get('/deaths-genre/:genre', ctrlDeaths.deathsReadByGenre);

/**
 * @swagger
 * /deaths-countgenre:
 *   get:
 *     summary: Retrieve two numbers of total deaths by genre
 *     description: Retrieve two numbers of total deaths by genre "Hombres" and genre "Mujeres"
 *     tags:
 *       - deaths
 */
router.get('/deaths-countgenre', ctrlDeaths.deathsCountGenre);

router.post('/vaccination', ctrlVaccination.vaccinationCreate);

module.exports = router;
