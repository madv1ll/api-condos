const controller = {}
const House = require('../models/house')
const password = 'eliminarcasa123'
//Condominio
controller.listHouse = async (req, res) => {
    const house = await House.find()
    con = [...house]
    on = con.map(o => {return {"houseId": o.houseId, "precio":o.price}})
    res.send(on)
}
controller.getHouse = async (req, res) => {
    const house = await House.findOne( {id: req.params.id})
    if (house == null){
        res.send("Casa no encontrada")
    }else{
        res.json({
            HouseId: house.houseId,
            condoId: house.condoId,
            Precio: house.price,
            M2: house.m2,
            Habitaciones: house.rooms,
            Banios: house.baths,
            Pisos: house.floors
        })
    }
}
controller.createHouse = async (req, res) => {
    const newHouse = new House(req.body)
    console.log(newHouse)
    await newHouse.save()
    res.send({message: 'House created'})
}
controller.updateHouse = async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
    }
    const houseId = req.params.id;
    const house = await House.findOne({ houseId: houseId });
    House.findByIdAndUpdate(house._id, req.body, { useFindAndModify: false })
    .then(data => {
        if (!data) {
        res.status(404).send({
            message: `No se puede modificar la casa con id=${houseId}. Tal vez la casa no existe!`
        });
        } else res.send({ message: "Casa modificada!" });
    })
    .catch(err => {
        res.status(500).send({
        message: "Error modificando la casa con id=" + houseId
        });
    });
};
controller.deleteHouse = async (req, res) => {
    const houseId = req.params.id;
    const pass = req.params.pass;
    const house = await House.findOne({ houseId: houseId });
    if (pass === password){
        House.findByIdAndRemove(house._id)
          .then(data => {
            if (!data) {
              res.status(404).send({
                message: `No se puede eliminar la casa con id=${houseId}. Tal vez la casa no existe!`
              });
            } else {
              res.send({
                message: "Casa eliminado!"
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "No se pudo eliminar la casa con id=" + houseId
            });
          });
    }
};
module.exports = controller