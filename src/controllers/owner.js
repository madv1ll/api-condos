const controller = {}
const Owner = require('../models/owner')

controller.listOwner = async (req, res) => {
    const owner = await Owner.find()
    res.json(owner)
}
controller.getOwner = async (req, res) => {
    const owner = await Owner.findOne( {rut: req.params.rut})
    res.json({rut:owner.rut,
                name: owner.name})
}
controller.createOwner = async (req, res) => {
    const newOwner = new Owner(req.body)
    console.log(newOwner)
    await newOwner.save()
    res.send({message: 'Owner created'})
}
controller.updateOwner = (req, res) => {}
controller.deleteOwner = (req, res) => {}

module.exports = controller