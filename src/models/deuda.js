const { Schema, model } = require('mongoose')

const deudaSchema = new Schema({
    rut:               {type: String, required: true},
    nombre:            {type: String, required: true},
    direccion:         {type: String, required: true},
    fechaPago:         {type: String, required: false},
    fechavencimiento:  {type: String, required: true},
    valorPago:         {type: Number, required: true},
});

module.exports = model('deuda', deudaSchema);