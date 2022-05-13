const { Schema, model } = require('mongoose')

const condoSchema = new Schema({
    name        :{type: String, required: true},
    direction   :{type: String, required: true},
    houseType   :{type: String, required: true},
    housesAmnt  :{type: Number, required: true},
    expenses    :{type: Number, required: true}
});


module.exports = model('condo', condoSchema);