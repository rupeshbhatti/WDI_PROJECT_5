const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const csv        = require('fast-csv');
const fs         = require('fs');

const { dbURI } = require('../config/environment');
const GPContact = require('../models/gpcontact');
//const file      = require('../lib/GP.csv');

var stream = fs.createReadStream('../lib/GP.csv');

csv.fromStream(stream, {headers: [
  'OrganisationID',
  'OrganisationCode',
  'OrganisationType',
  'SubType',
  'OrganisationStatus',
  'IsPimsManaged',
  'isEPSEnabled',
  'OrganisationName',
  'Address1',
  'Address2',
  'Address3',
  'City',
  'County',
  'Postcode',
  'Latitude',
  'Longitude',
  'ParentODSCode',
  'ParentName',
  'Phone',
  'Email',
  'Website',
  'Fax'
]})
  .on('data', (data) => {
    var newsurgery = new GPContact();
    newsurgery.OrganisationID = data['OrganisationID'];
    newsurgery.OrganisationCode = data['OrganisationCode'];
    newsurgery.OrganisationType = data['OrganisationType'];
    newsurgery.SubType = data['SubType'];
    newsurgery.OrganisationStatus = data['OrganisationStatus'];
    newsurgery.IsPimsManaged = data['IsPimsManaged'];
    newsurgery.isEPSEnabled = data['isEPSEnabled'];
    newsurgery.OrganisationName = data['OrganisationName'];
    newsurgery.Address1 = data['Address1'];
    newsurgery.Address2 = data['Address2'];
    newsurgery.Address3 = data['Address3'];
    newsurgery.City = data['City'];
    newsurgery.County = data['County'];
    newsurgery.Postcode = data['Postcode'];
    newsurgery.Latitude = data['Latitude'];
    newsurgery.ParentODSCode = data['ParentODSCode'];
    newsurgery.ParentName = data['ParentName'];
    newsurgery.Phone = data['Phone'];
    newsurgery.Email = data['Email'];
    newsurgery.Website = data['Website'];
    newsurgery.Fax = data['Fax'];

    newsurgery.save((err, data) => {
      if (err) console.log(err);
      else {
        console.log('Saved ', data );
      }
    });
  });

// mongoose.connect(dbURI, { useMongoClient: true })
//   .then(db => db.dropDatabase())
//   .then(() => GPContact.create(newsurgery))
//   .then(data => console.log(`${data.length} gpcontacts created!`))
//   .catch(err => console.log(err))
//   .finally(() => mongoose.connection.close());
