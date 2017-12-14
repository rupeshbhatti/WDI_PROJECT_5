const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const csv        = require('fast-csv');
const fs         = require('fs');

const { dbURI } = require('../config/environment');
const GPContact = require('../models/gpcontact');
//const file      = require('../lib/GP.csv');
const path = require('path');

var stream = fs.createReadStream(path.resolve(__dirname, '../lib/GP.csv'));

const GPs = [];

csv.fromStream(stream,
  {
    delimiter: '\t',
    headers: [
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
    ]
  })
  .on('data', (data) => {
    GPs.push(data);
    console.log(GPs.length);
  //   var newsurgery = new GPContact();
  //   newsurgery.OrganisationID = data['OrganisationID'];
  //   newsurgery.OrganisationCode = data['OrganisationCode'];
  //   newsurgery.OrganisationType = data['OrganisationType'];
  //   newsurgery.SubType = data['SubType'];
  //   newsurgery.OrganisationStatus = data['OrganisationStatus'];
  //   newsurgery.IsPimsManaged = data['IsPimsManaged'];
  //   newsurgery.isEPSEnabled = data['isEPSEnabled'];
  //   newsurgery.OrganisationName = data['OrganisationName'];
  //   newsurgery.Address1 = data['Address1'];
  //   newsurgery.Address2 = data['Address2'];
  //   newsurgery.Address3 = data['Address3'];
  //   newsurgery.City = data['City'];
  //   newsurgery.County = data['County'];
  //   newsurgery.Postcode = data['Postcode'];
  //   newsurgery.Latitude = data['Latitude'];
  //   newsurgery.ParentODSCode = data['ParentODSCode'];
  //   newsurgery.ParentName = data['ParentName'];
  //   newsurgery.Phone = data['Phone'];
  //   newsurgery.Email = data['Email'];
  //   newsurgery.Website = data['Website'];
  //   newsurgery.Fax = data['Fax'];
  //
  //   newsurgery.save((err, data) => {
  //     if (err) console.log(err);
  //     else {
  //       console.log('Saved ', data );
  //     }
  //   });
  })
  .on('end', async function(){
    try {
      console.log('FINISHING');
      await mongoose.connect(dbURI, { useMongoClient: true });
      await GPContact.collection.drop();
      const results = await GPContact.create(GPs);
      console.log('FINISHED', results.length);
      await mongoose.connection.close();
      process.exit();
    } catch(e) {
      console.log('ERROR', e);
    }
  });
