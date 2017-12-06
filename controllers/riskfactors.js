const RiskFactor = require('../models/riskfactor');

function riskfactorsShow(req, res){
  RiskFactor
    .findOne({ id: req.params.id})
    .exec()
    .then(rf => {
      if (!rf) return res.status(404).json({ message: 'Riskfactor not found.' });
      return res.status(200).json(rf);
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong. '}));
}

module.exports = {
  riskfactorsShow: riskfactorsShow
};
