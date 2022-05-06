const controller = {}
const Condo = require('../models/condo')
//Condominio
controller.listCondo = async (req, res) => {
    const condo = await Condo.find()
    con = [...condo]
    on = con.map(o => {return {"Nombre": o.name, "Direccion":o.direction}})
    res.send(on)
}
controller.getCondo = async (req, res) => {
    const condo = await Condo.find()
    res.json(condo)
}
controller.createCondo = async (req, res) => {
    const newCondo = new Condo(req.body)
    console.log(newCondo)
    await newCondo.save()
    res.send({message: 'Condominio created'})
}
controller.updateOwner = (req, res) => {}
controller.deleteOwner = (req, res) => {}

module.exports = controller