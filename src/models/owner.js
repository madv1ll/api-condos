const { Schema, model } = require('mongoose')

const ownerSchema = new Schema({
    rut: {type: String, required: true},
    name: {type: String, required: true},
    mail: {type: String, required: false},
    phone: {type: Number, required: false},
    housesId: {type: Array, required: true}
});

module.exports = model('owner', ownerSchema);