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
    if (!req.body.rut){res.send({message: 'Falta rut'});return false}
    if (!req.body.nombre){res.send({message: 'Falta nombre'});return false}
    if (!req.body.apPaterno){res.send({message: 'Falta apPatreno'});return false}
    if (!req.body.apMaterno){res.send({message: 'Falta apMaterno'});return false}
    if (!req.body.nroBoleta){res.send({message: 'Falta NroBoleta'});return false}
    if (!req.body.direccion){res.send({message: 'Falta direccion'});return false}
    if (!req.body.fechaPago){res.send({message: 'Falta fechaPago'});return false}
    if (!req.body.fechaVencimiento){res.send({message: 'Falta fechaVencimiento'});return false}
    if (!req.body.monto){res.send({message: 'Falta monto'}); return false}
    if (!req.body.canal){res.send({message: 'Falta canal '+req.body.canal}); return false}
    if (req.body.canal != 1 && req.body.canal != 2){res.send({message: 'el canal debe ser 1=ingreso o 2=grupo canal: '+ typeof(req.body.canal)});return false;}
    if (req.body.canal == 2){
      const newDeuda = new Deuda(req.body);
      await newDeuda.save();
      res.send({message: 'Deuda creada'});
    } else{
      const newDeuda = new Deuda(req.body);
      await newDeuda.save();
      //GRUPO 1
      axios({
        method: 'post',
        url: 'http://localhost:3000/api/owner/newDeuda',
        data: {
        rut: req.body.rut
        ,nombre: req.body.nombre
        ,apPaterno: req.body.apPaterno
        ,apMaterno: req.body.apMaterno
        ,nroBoleta: req.body.nroBoleta
        ,direccion: req.body.direccion
        ,fechaPago: req.body.fechaPago
        ,fechaVencimiento: req.body.fechaVencimiento
        ,monto: req.body.monto
        ,canal: 2
        }
      });
      // //GRUPO 2
      // axios({
      //   method: 'post',
      //   url: '',
      //   data: {
      //   rut: req.body.rut
      //   ,nombre: req.body.nombre
      //   ,apPaterno: req.body.apPaterno
      //   ,apMaterno: req.body.apMaterno
      //   ,nroBoleta: req.body.nroBoleta
      //   ,direccion: req.body.direccion
      //   ,fechaPago: req.body.fechaPago
      //   ,fechaVencimiento: req.body.fechaVencimiento
      //   ,monto: req.body.monto
      //   ,canal: req.body.canal
      //   }
      // });
      // //GRUPO 3
      // axios({
      //   method: 'post',
      //   url: '',
      //   data: {
      //   rut: req.body.rut
      //   ,nombre: req.body.nombre
      //   ,apPaterno: req.body.apPaterno
      //   ,apMaterno: req.body.apMaterno
      //   ,nroBoleta: req.body.nroBoleta
      //   ,direccion: req.body.direccion
      //   ,fechaPago: req.body.fechaPago
      //   ,fechaVencimiento: req.body.fechaVencimiento
      //   ,monto: req.body.monto
      //   ,canal: req.body.canal
      //   }
      // });
      res.send({message: 'Deuda creada y enviada a grupos'});
    }
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
                "apPaterno": getDeuda.apPaterno,
                "apMaterno": getDeuda.apMaterno,
                "nroBoleta": getDeuda.nroBoleta,
                "direccion": getDeuda.direccion,
                "fecha de Pago": getDeuda.fechaPago,
                "fecha de Vencimiento": getDeuda.fechaVencimiento,
                "Valor de Pago": getDeuda.Monto
            });
            // "rut": "19.453.567-5"
            // ,"nombre": "Valentina"
            // ,"apPaterno": "Mora"
            // ,"apMaterno": "Mora"
            // ,"nroBoleta": 12222
            // ,"direccion": "direccion 232"
            // ,"fechaPago": "27/04/2022"
            // ,"fechaVencimiento": "31/04/2022"
            // ,"monto": 5345354
            // ,"canal": 2
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