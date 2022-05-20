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
    const owner = await Owner.findOne( {rut: req.params.rut})
    if (owner == null){
        res.send("Rut no encontrado")
    }else{
        res.json({
            name: owner.name,
            mail: owner.mail,
            phone: owner.phone,
            HousesId: owner.housesId
        })
    }
}
controller.createOwner = async (req, res) => {
    const newOwner = new Owner(req.body)
    console.log(newOwner)
    await newOwner.save()
    res.send({message: 'Owner created'})
}
controller.updateOwner = (req, res) => {}
controller.deleteOwner = (req, res) => {}

//deuda
controller.createDeuda = async (req, res) => {
    const newDeuda = new Deuda(req.body)
    console.log(newDeuda)
    await newDeuda.save()
    res.send({message: 'Deuda created'})
}

//Obtiene deuda actual
controller.getDeuda = async (req, res) => {
    const getDeuda = await Deuda.findOne( {rut:req.params.rut, pagado: false})
    if (getDeuda == null) {
        res.send("Sin deudas")
    }else{
            res.json({
                monto: getDeuda.monto,
                fechaDesde: getDeuda.fechadesde
            })
        }
}
controller.getDeudaHist = async (req, res) => {
    const getDeudaHist = await Deuda.find( {rut:req.params.rut, pagado: true} )
    dbts = [...getDeudaHist]
    debt = dbts.map(d => {return {"monto": d.monto, "fechadesde":d.fechadesde, "fechavencimiento":d.fechavenc}})
    if (debt == null){
        res.send("Deuda no encontrada")
    }else{
        res.json({
            debt
        })
    }
}

controller.listDeuda = async (req, res) => {
    const debt = await Deuda.find()
    deb = [...debt]
    on= deb.map(o => {return {"Fecha de inicio": o.Fechadesde, "Monto": o.Monto, "Fecha vencimiento":o.Fechavenc, "Ultimo pago":o.UltimoPago}})
    if (on == null){
        res.send("deudas no encontradas")
    }else{
        res.send(on)
    }
}

controller.updateDeuda = (req, res) => {}
controller.deleteDeuda = (req, res) => {}

module.exports = controller