const mongoose = require('mongoose');

const symptomSchema = new mongoose.Schema({
  id: String,
  name: String,
  common_name: String,
  question: String,
  sex_filter: String,
  category: String,
  extras: Object,
  children: Object,
  image_url: String,
  image_source: String,
  parent_id: String,
  parent_relation: String
});

module.exports = mongoose.model('Symptom', symptomSchema);
