const PI = require('../models/PImodel')
const db = require('../models/PImodel')

exports.test = (req, res) => {
    res.send('Teste')
}

exports.details = (req, res) => {
    res.send({ type: 'GET' })
}

exports.add = (req, res, next) => {
    db.create(req.body).then((pi) => {
        res.send(pi)
    }).catch(next)
    
    res.send({ 
        type: 'POST',
        nome: req.body.nome,
        tipo: req.body.tipo
    })
}

exports.update = (req, res, next) => {
    PI.findByIdAndUpdate({ _id: req.params.id}, req.body).then(() =>{
        PI.findOne({ _id: req.params.id }).then((ip) => {
            res.send(pi)
        })
    }).catch(next)
}

exports.delete = function (req, res, next) {
    // apaga ‘pi’ da BD, depois, devolve o ‘pi’ apagado ao cliente
    PI.findByIdAndRemove({_id: req.params.id}).then(function(pi){
      res.send(pi);
    }).catch(next);
  };