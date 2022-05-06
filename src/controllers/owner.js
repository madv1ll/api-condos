const controller = {}
const Owner = require('../models/owner')
const Deuda = require('../models/deuda')

controller.listOwner = async (req, res) => {
    const owner = await Owner.find()
    own = [...owner]
    on = own.map(o => {return {"name": o.name, "rut":o.rut}})
    res.send(on)
}
controller.getOwner = async (req, res) => {
    const owner = await Owner.find()
    res.json(owner)
}
controller.createOwner = async (req, res) => {
    const newOwner = new Owner(req.body)
    console.log(newOwner)
    await newOwner.save()
    res.send({message: 'Owner created'})
}
controller.updateOwner = (req, res) => {}
controller.deleteOwner = (req, res) => {}


controller.createDeuda = async (req, res) => {
    const newDeuda = new Deuda(req.body)
    console.log(newDeuda)
    await newDeuda.save()
    res.send({message: 'Deuda created'})
}

controller.getDeuda = async (req, res) => {
    const Deuda = await Deuda.find()
    res.json(Deuda)
}

controller.listDeuda = async (req, res) => {
    const debt = await Deuda.find()
    deb = [...debt]
    on= deb.map(o => {return {"Fecha de inicio": o.Fechadesde, "Monto": o.Monto, "Fecha vencimiento":o.Fechavenc, "Ultimo pago":o.UltimoPago}})
    res.send(on)
}

controller.updateDeuda = (req, res) => {}
controller.deleteDeuda = (req, res) => {}

module.exports = controller