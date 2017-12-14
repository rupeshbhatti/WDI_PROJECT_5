const rp         = require('request-promise');
const { dbURI }  = require('../config/environment');
const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect(dbURI, { useMongoClient: true});

const Condition  = require('../models/condition');

const infermedicaOptions = {
  method: 'GET',
  uri: 'https://api.infermedica.com/v2/conditions/',
  headers: {
    'App-Id': process.env.INFERMEDICA_APP_ID,
    'App-Key': process.env.INFERMEDICA_APP_KEY
  },
  json: true
};

Condition.collection.drop();

rp(infermedicaOptions)
  .then(response => {
    const data = response;

    data.forEach(condition => {
      Condition.create({
        id: condition.id,
        name: condition.name,
        common_name: condition.common_name,
        sex_filter: condition.sex_filter,
        categories: condition.categories,
        prevalence: condition.prevalence,
        acuteness: condition.acuteness,
        severity: condition.severity,
        extras: condition.extras,
        triage_level: condition.triage_level
      });

      console.log(`${condition.name} was saved to the database`);
    });
  })
  .catch(err => console.log(err));
