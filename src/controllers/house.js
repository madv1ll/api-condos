const controller = {}
const House = require('../models/house')
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
controller.updateHouse = (req, res) => {}
controller.deleteHouse = (req, res) => {}

module.exports = controller