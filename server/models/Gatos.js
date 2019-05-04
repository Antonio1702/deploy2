const mongoose = require('mongoose');
const { Schema } = mongoose;

const gatoSchema = new Schema ({
    nombre: String,
    raza: String,
    color: String
})

mongoose.model('gatos', gatoSchema);