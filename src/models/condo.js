import { Schema, model } from 'mongoose';

const condoSchema = new Schema({
    condosId    :{type: String, required: true},
    name        :{type: String, required: true},
    cantCasas   :{type: String, required: true},
    houseTypeId :{type: String, required: true},
});


export default model('condo', condoSchema);