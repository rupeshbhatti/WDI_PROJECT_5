const mongoose = require('mongoose');

const riskfactorSchema = new mongoose.Schema({
  id: String,
  name: String,
  common_name: String,
  question: String,
  sex_filter: String,
  category: String,
  extras: Object,
  image_url: String,
  image_source: String
});

module.exports = mongoose.model('RiskFactor', riskfactorSchema);
