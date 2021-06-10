const mongoose = require('mongoose');
const hz = mongoose.model('health_zones');

const sendJSONresponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};

/* GET api/health-zones */
const healthZonesReadAll = (req, res) => {
    hz
      .find({$or: [{covid19: 'Covid-19 Virus identificado'}, {covid19: 'Covid-19 Virus no identificado (sospechoso)'}]})
      .exec((err, healthZones) => {
          if (!healthZones) {
            sendJSONresponse(res, 404, {"message" : "health zones not found"});
          } else if (err) { sendJSONresponse(res, 404, err);  }
          else { 
            sendJSONresponse(res, 200, healthZones);
          }
    });     
};

/* GET api/health-zones/:id */
const healthZoneReadOne = (req, res) => {
    hz.
    findById(req.params.id)
    .exec((err, healthZone) => {
        if(!healthZone){
            sendJSONresponse(res, 404, {"message": "health zone not found"});
        } else if(err) {
            sendJSONresponse(res, 404, err);
        } else {
            sendJSONresponse(res, 200, healthZone);
        }
    });
};

module.exports = {
    healthZonesReadAll,
    healthZoneReadOne
}