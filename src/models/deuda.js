const { Schema, model } = require('mongoose')

const deudaSchema = new Schema({
    rut:               {type: String, required: true},
    nombre:            {type: String, required: true},
    apPaterno:         {type: String, required: true},
    apMaterno:         {type: String, required: true},
    nroBoleta:         {type: Number, required: true},
    direccion:         {type: String, required: true},
    fechaPago:         {type: String, required: false},
    fechaVencimiento:  {type: String, required: true},
    monto:             {type: Number, required: true},
    canal:             {type: Number, required: true},
});

module.exports = model('deuda', deudaSchema);