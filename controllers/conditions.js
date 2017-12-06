const Condition = require('../models/condition');

function conditionsShow(req, res){
  Condition
    .findOne({ id: req.params.id})
    .exec()
    .then(condition => {
      if (!condition) return res.status(404).json({ message: 'Condition not found.' });
      return res.status(200).json(condition);
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong. '}));
}

module.exports = {
  conditionsShow: conditionsShow
};
