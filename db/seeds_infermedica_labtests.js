const rp = require('request-promise');
const { dbURI } = require('../config/environment');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect(dbURI, { useMongoClient: true});

const LabTest = require('../models/labtest');

let infermedicaOptions = {
  method: 'GET',
  uri: 'https://api.infermedica.com/v2/lab_tests/',
  headers: {
    'App-Id': process.env.INFERMEDICA_APP_ID,
    'App-Key': process.env.INFERMEDICA_APP_KEY
  },
  json: true
};

LabTest.collection.drop();

infermedicaOptions = {
  method: 'GET',
  uri: 'https://api.infermedica.com/v2/lab_tests/',
  headers: {
    'App-Id': process.env.INFERMEDICA_APP_ID,
    'App-Key': process.env.INFERMEDICA_APP_KEY
  },
  json: true
};

rp(infermedicaOptions)
  .then(response => {
    const data = response;

    data.forEach(labtest => {
      LabTest.create({
        id: labtest.id,
        name: labtest.name,
        common_name: labtest.common_name,
        category: labtest.category,
        results: labtest.results
      });

      console.log(`${labtest.name} was saved to the database`);
    });
  })
  .catch(err => console.log(err));
