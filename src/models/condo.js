const { Schema, model } = require('mongoose')

const condoSchema = new Schema({
    condosId    :{type: String, required: true},
    name        :{type: String, required: true},
    direction   :{type: String, required: true},
    houseTypeId :{type: String, required: true},
    CantCasa    :{type: String, required: true},
});


module.exports = model('condo', condoSchema);