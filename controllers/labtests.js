const Labtest = require('../models/labtest');

function labtestsShow(req, res){
  Labtest
    .findOne({ id: req.params.id})
    .exec()
    .then(labtest => {
      if (!labtest) return res.status(404).json({ message: 'Labtest not found.' });
      return res.status(200).json(labtest);
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong. '}));
}

module.exports = {
  labtestsShow: labtestsShow
};
