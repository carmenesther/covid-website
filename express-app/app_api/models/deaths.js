const mongoose = require('mongoose');

const deathSchema = new mongoose.Schema({
    covid19: {
        type: String,
        required: true
    },
    mes_de_defuncion: {
        type: String,
        required: true
    },
    sexo: {
        type: String,
        required: true
    },
    edad: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
});

mongoose.model('Death', deathSchema);