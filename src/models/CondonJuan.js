const mongoose = require('mongoose');

const CondonSchema = mongoose.Schema({
    marca: { 
       type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Condon", CondonSchema);