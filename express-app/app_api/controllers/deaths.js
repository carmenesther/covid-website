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
          sendJSONresponse(res, 404, {"message" : "deaths not found"});
        } else if (err) { sendJSONresponse(res, 404, err);  }
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
            sendJSONresponse(res, 404, {"message" : "deaths not found"});
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
    .find(req.params.sex) //
    .exec((err, deaths) => {
        if (!deaths) {
            sendJSONresponse(res, 404, {"message" : "deaths not found"});
        } else if (err) { 
            sendJSONresponse(res, 404, err);  
        }
        else { 
            sendJSONresponse(res, 200, deaths);
        }
    });       
};

module.exports = {
    deathsReadAll,
    deathsReadOne,
    deathsReadBySex
  };