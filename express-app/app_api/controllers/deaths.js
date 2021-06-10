const mongoose = require('mongoose');
const d = mongoose.model('Death');

const sendJSONresponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};

/* GET api/deaths */
const deathsReadAll = (req, res) => {
    d
        .find({})
        .exec((err, deaths) => {
            if (!deaths) {
                sendJSONresponse(res, 404, { "message": "deaths not found" });
            } else if (err) { sendJSONresponse(res, 404, err); }
            else {
                sendJSONresponse(res, 200, deaths);
            }
        });
};

/* GET api/deaths/:id */
const deathsReadOne = (req, res) => {
    d
        .findById(req.params.id)
        .exec((err, deaths) => {
            if (!deaths) {
                sendJSONresponse(res, 404, { "message": "deaths not found" });
            } else if (err) {
                sendJSONresponse(res, 404, err);
            }
            else {
                sendJSONresponse(res, 200, deaths);
            }
        });
};

/* GET api/deaths/sex/:sex */
const deathsReadBySex = (req, res) => {
    d
        .find({ 'sexo': req.params.sex })
        .exec((err, deaths) => {
            if (!deaths) {
                sendJSONresponse(res, 404, { "message": "deaths not found" });
            } else if (err) {
                sendJSONresponse(res, 404, err);
            }
            else {
                sendJSONresponse(res, 200, deaths);
            }
        });
};

/* GET api/countsex */
const deathsCountSex = (req, res) => {
    d
        .countDocuments({ 'sexo': 'Hombres' })
        .exec((err, countHombres) => {
            if (!countHombres) {
                sendJSONresponse(res, 404, { "message": "Hombres not found" });
            } else if (err) {
                sendJSONresponse(res, 404, err);
            }
            else {
                d
                    .countDocuments({ 'sexo': 'Mujeres' })
                    .exec((err, countMujeres) => {
                        if (!countMujeres) {
                            sendJSONresponse(res, 404, { "message": "Mujeres not found" });
                        } else if (err) {
                            sendJSONresponse(res, 404, err);
                        } else {
                            sendJSONresponse(res, 200, countHombres + " " + countMujeres);
                        }
                    });
            }
        });
};

module.exports = {
    deathsReadAll,
    deathsReadOne,
    deathsReadBySex,
    deathsCountSex
};