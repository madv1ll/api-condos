const { Schema, model } = require('mongoose')

const deudaSchema = new Schema({
    monto:      {type: String, required: true},
    fechadesde: {type: String, required: true},
    fechavenc:  {type: String, required: true},
    pagado:     {type: Boolean, required: true},
    fechaPago:  {type: String, required: true},
    rut:        {type: String, required: true}
});

module.exports = model('deuda', deudaSchema);