const Condon = require("../models/CondonJuan");
const salytRounds = 10
var jwt = require('jsonwebtoken')


const saveCondon = async (req, res) => { 
    const newCondon = new Condon({
        marca: req.body.marca,
        cantidad: req.body.cantidad
    });
    const savedCondon = await newCondon.save();
    // console.log(savedCondon);
    res.json(newCondon);
};

const findAllCondon = async (req, res) => {
    const oldCondon = await Condon.find();
    res.json(oldCondon);
};

const deleteCondon = async (req, res) => {
    await Condon.findByIdAndDelete(req.params.id);
    res.json({
        mensaje: "El dato ha sido eliminado"
    });
};

const updateCondon = async (req, res) => {
    const updatedCondon = await Condon.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      mensaje: "El dato se ha actualizo :D",
    });
  };

module.exports = {
    saveCondon,
    findAllCondon,
    deleteCondon,
    updateCondon
}