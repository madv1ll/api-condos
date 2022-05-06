const { Schema, model } = require('mongoose')

const deudaSchema = new Schema({
    Ideuda:     {type: String, required: true},
    Monto:      {type: String, required: true},
    Fechadesde: {type: String, required: true},
    Fechavenc:  {type: String, required: true},
    UltimoPago: {type: String, required: true},
});

module.exports = model('deuda', deudaSchema);