const Symptom = require('../models/symptom');

function symptomsIndex(req,res,next){
  Symptom
    .find()
    .exec()
    .then(symptoms => {
      res.json(symptoms);
    })
    .catch(next);
}

function symptomsShow(req, res){
  Symptom
    .findOne({ id: req.params.id})
    .exec()
    .then(symptom => {
      if (!symptom) return res.status(404).json({ message: 'Symptom not found.' });
      return res.status(200).json(symptom);
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong. '}));
}

module.exports = {
  symptomsIndex: symptomsIndex,
  symptomsShow: symptomsShow
};
