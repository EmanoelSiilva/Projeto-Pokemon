const PI = require('../models/PImodel')
const db = require('../models/PImodel')

exports.test = (req, res) => {
    res.send('Teste')
}

exports.details = (req, res) => {
    PI.find({}).then(function(pi){
        res.send(pi);
    });
}

exports.add = (req, res, next) => {
    PI.create(req.body).then(function(pi){
        res.send(pi);
      }).catch(next);
}

exports.update = (req, res, next) => {
    PI.findByIdAndUpdate({ _id: req.params.id}, req.body).then(() =>{
        PI.findOne({ _id: req.params.id }).then((pi) => {
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

exports.getPokemon = ((req, res) => {
    PI.aggregate([{ $sample: { size: 1 } }], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erro ao descobri o pokemon');
      } else {
        res.json(result[0]);
      }
    });
});