
const mongoose = require('mongoose')

const conection = "mongodb+srv://api-user-1:j39z8eRuf5SrlvwV@api-condosbd.jvgjr.mongodb.net/api-condos?retryWrites=true&w=majority";

mongoose.connect(conection)
    .then(db => console.log('DB Connected'))
    .catch(err => console.log("error:\n", err));