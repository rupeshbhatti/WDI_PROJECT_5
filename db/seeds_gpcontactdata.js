const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const csv        = require('fast-csv');
const fs         = require('fs');

const { dbURI }  = require('../config/environment');
const GPContact  = require('../models/gpcontact');
const path       = require('path');

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
