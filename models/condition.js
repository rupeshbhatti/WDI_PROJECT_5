const mongoose = require('mongoose');

const conditionSchema = new mongoose.Schema({
  id: String,
  name: String,
  common_name: String,
  sex_filter: String,
  categories: Array,
  prevalence: String,
  acuteness: String,
  severity: String,
  extras: Object,
  triage_level: String
});

module.exports = mongoose.model('Condition', conditionSchema);
