import { Schema, model } from 'mongoose';

const ownerSchema = new Schema({
    rut: {type: String, required: true},
    name: {type: String, required: true},
    mail: {type: String, required: false},
    phone: {type: Number, required: false},
    condosId: {type: Array, required: true}
});


export default model('owner', ownerSchema);