const mongoose = require('mongoose');

const labtestSchema = new mongoose.Schema({
  id: String,
  name: String,
  common_name: String,
  category: String,
  results: Array
});

module.exports = mongoose.model('LabTest', labtestSchema);
