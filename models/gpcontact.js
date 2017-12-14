const mongoose = require('mongoose');

const gpcontactSchema = new mongoose.Schema({
  OrganisationID: String,
  OrganisationCode: String,
  OrganisationType: String,
  SubType: String,
  OrganisationStatus: String,
  IsPimsManaged: String,
  isEPSEnabled: String,
  OrganisationName: String,
  Address1: String,
  Address2: String,
  Address3: String,
  City: String,
  County: String,
  Postcode: String,
  Latitude: Number,
  Longitude: Number,
  ParentODSCode: String,
  ParentName: String,
  Phone: String,
  Email: String,
  Website: String,
  Fax: String
});

module.exports = mongoose.model('GPContact', gpcontactSchema);
