const controller = {}
const Condo = require('../models/condo')
//Condominio
controller.listCondo = async (req, res) => {
    const condo = await Condo.find()
    con = [...condo]
    on = con.map(o => {return {"ID": o._id, "Nombre": o.name, "Direccion":o.direction, "Tipo de Casa": o.houseType, "Cantidad de Casas": o.housesAmnt, "Gastos Comunes": o.expenses}})
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
controller.updateCondo = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
    const id = req.params.id;
    Condo.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `No se puede modificar el condominio con id=${id}. Tal vez el condominio no existe!`
          });
        } else res.send({ message: "Condominio modificado!" });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error modificando el Condominio de id=" + id
        });
      });
  };
controller.deleteCondo = (req, res) => {
    const id = req.params.id;
    Condo.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `No se puede eleminar el condominio con id=${id}. Tal vez el condominio no existe!`
          });
        } else {
          res.send({
            message: "Condominio eliminado!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error eliminando el Condominio de id=" + id
        });
      });
  };
module.exports = controller