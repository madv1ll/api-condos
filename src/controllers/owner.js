const Owner = require('../models/owner');
const Deuda = require('../models/deuda');
const axios = require('axios');

const password = 'eliminar123';
const controller = {};

controller.listOwner = async (req, res) => {
    const owner = await Owner.find();
    own = [...owner];
    on = own.map(o => {return {"name": o.name, "rut":o.rut}});
    res.send(on);
};

controller.getOwner = async (req, res) => {
    const owner = await Owner.findOne( {rut: req.params.rut});
    if (owner == null){
        res.send("Rut no encontrado");
    }else{
        res.json({
            name: owner.name,
            mail: owner.mail,
            phone: owner.phone,
            HousesId: owner.housesId
        });
    }
};

controller.createOwner = async (req, res) => {
    const newOwner = new Owner(req.body);
    await newOwner.save()
    res.send({message: 'Owner created'});
};

controller.updateOwner = async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
    }
    const rut = req.params.rut;
    const duenno = await Owner.findOne({ rut: rut });
    Owner.findByIdAndUpdate(duenno._id, req.body, { useFindAndModify: false })
    .then(data => {
        if (!data) {
        res.status(404).send({
            message: `No se puede modificar el dueño con id=${id}, rut=${rut}. Tal vez el dueño no existe!`
        });
        } else res.send({ message: "Dueño modificado!" });
    })
    .catch(err => {
        res.status(500).send({
        message: "Error modificando el dueño de id=" + duenno._id
        });
    });
};

controller.deleteOwner = async (req, res) => {
    const rut = req.params.rut;
    const pass = req.params.pass;
    const {_id} = await Owner.findOne({ rut: rut });
    if (pass === password){
        Owner.findByIdAndRemove(_id)
          .then(data => {
            if (!data) {
              res.status(404).send({
                message: `No se puede eliminar el dueño con rut=${rut}. Tal vez el dueño no existe!`
              });
            } else {
              res.send({
                message: "Dueño eliminado!"
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "No se pudo eliminar el dueño con rut=" + rut
            });
          });
    }
};

//deuda
controller.createDeuda = async (req, res) => {
    const newDeuda = new Deuda(req.body);
    await newDeuda.save();
    res.send({message: 'Deuda creada'});
    // axios({
    //   method: 'post',
    //   url: 'http://musicpro-api.herokuapp.com/api/createClient',
    //   data: {
    //     rut: "19.453.567-5",
    //     nombre: "Valentina Mora",
    //     direccio: "direccion 232",
    //     fechaPago: "27/03/2022",
    //     fechavencimiento: "31/03/2022",
    //     valorPago: 5345354
    //   }
    // });
};

//Obtiene deuda actual
controller.getDeuda = async (req, res) => {
    const getDeuda = await Deuda.findOne( {rut:req.params.rut});
    if (getDeuda == null) {
        res.send("Sin deudas");
    }else{
            res.json({
                "id": getDeuda._id,
                "rut": getDeuda.rut,
                "nombre": getDeuda.nombre,
                "direccion": getDeuda.direccion,
                "fecha de Pago": getDeuda.fechaPago,
                "fecha de Vencimiento": getDeuda.fechavencimiento,
                "Valor de Pago": getDeuda.valorPago,
            });
        }
};
controller.getDeudaHist = async (req, res) => {
    const getDeudaHist = await Deuda.find( {rut:req.params.rut, pagado: true} );
    dbts = [...getDeudaHist];
    debt = dbts.map(d => {return d});
    if (debt == null){
        res.send("Deuda no encontrada");
    }else{
        res.json({
            debt
        });
    }
};

controller.listDeuda = async (req, res) => {
    const debt = await Deuda.find();
    deb = [...debt];
    on= deb.map(o => {return {"Fecha de inicio": o.Fechadesde, "Monto": o.Monto, "Fecha vencimiento":o.Fechavenc, "Ultimo pago":o.UltimoPago}});
    if (on == null){
        res.send("deudas no encontradas")
    }else{
        res.send(on)
    }
}
controller.updateDeuda = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
      const id = req.params.id;
      Deuda.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `No se puede modificar la deuda con id=${id}. Tal vez la deuda no exite!`
            });
          } else res.send({ message: "Deuda modificada!." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error modificando la deuda con id=" + id
          });
        });
    };
controller.deleteDeuda = (req, res) => {
    const pass = req.params.pass;
    const id = req.params.id;
    if (pass === password){
        Deuda.findByIdAndRemove(id)
          .then(data => {
            if (!data) {
              res.status(404).send({
                message: `No se puede eliminar la deuda con id=${id}. Tal vez la deuda no existe!`
              });
            } else {
              res.send({
                message: "Deuda eliminada!"
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "No se pudo eliminar la deuda con rut=" + id
            });
          });
    }
}

module.exports = controller