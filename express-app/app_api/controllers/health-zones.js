const mongoose = require('mongoose');
const healthZones = mongoose.model('health_zones');

const sendJSONresponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};

/* GET api/health-zones */
const healthZonesReadAll = (req, res) => {
    Loc
      .find({})
      .exec((err, healthZones) => {
          if (!healthZones) {
            sendJSONresponse(res, 404, {"message" : "health zones not found"});
          } else if (err) { sendJSONresponse(res, 404, err);  }
          else { 
            sendJSONresponse(res, 200, healthZones);
          }
    });     
};

module.exports = {
    healthZonesReadAll
}