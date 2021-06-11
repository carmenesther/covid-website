const mongoose = require('mongoose');

const vaccinationSchema = new mongoose.Schema({
    comunidad_autonoma: {
        type: String,
        required: true
    },
    porcentaje_primera_dosis: {
        type: Number,
        required: true
    },
    porcentaje_segunda_dosis: {
        type: Number,
        required: true
    },
    porcentaje_total: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    }
});

mongoose.model('vaccination', vaccinationSchema);