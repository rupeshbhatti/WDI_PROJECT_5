const Symptom = require('../models/symptom');

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
  symptomsShow: symptomsShow
};
