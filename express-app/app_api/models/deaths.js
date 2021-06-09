const mongoose = require('mongoose');

const deathSchema = new mongoose.Schema({
    'Covid-19': String,
    'Mes de defunción': String,
    'Sexo': String,
    'Edad': String,
    'Total': String
});

mongoose.model('Death', deathSchema);