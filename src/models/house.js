const { Schema, model } = require('mongoose')

const houseSchema = new Schema({
    houseId: {type: Number, required: true},
    condoId: {type: Number, required: true},
    price: {type: Number, required: false},
    m2: {type: Number, required: false},
    rooms: {type: Number, required: true},
    baths: {type: Number, required: true},
    floors: {type: Number, required: true}
});

module.exports = model('house', houseSchema);