const mongoose = require('mongoose');
const Deat = mongoose.model('Death');

const sendJSONresponse = (res, status, content) => {
  res.status(status);
  res.json(content);
};

/* GET api/deaths */
const deathsReadAll = (req, res) => {
    Deat
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

module.exports = {
    deathsReadAll
  };