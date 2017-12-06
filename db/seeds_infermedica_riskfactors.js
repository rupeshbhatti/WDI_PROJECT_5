const rp = require('request-promise');
const { dbURI } = require('../config/environment');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect(dbURI, { useMongoClient: true});

const RiskFactor = require('../models/riskfactor');

const infermedicaOptions = {
  method: 'GET',
  uri: 'https://api.infermedica.com/v2/risk_factors/',
  headers: {
    'App-Id': process.env.INFERMEDICA_APP_ID,
    'App-Key': process.env.INFERMEDICA_APP_KEY
  },
  json: true
};

RiskFactor.collection.drop();

rp(infermedicaOptions)
  .then(response => {
    const data = response;

    data.forEach(riskfactor => {
      RiskFactor.create({
        id: riskfactor.id,
        name: riskfactor.name,
        common_name: riskfactor.common_name,
        question: riskfactor.question,
        sex_filter: riskfactor.sex_filter,
        category: riskfactor.category,
        extras: riskfactor.extras,
        image_url: riskfactor.image_url,
        image_source: riskfactor.image_source
      });

      console.log(`${riskfactor.name} was saved to the database`);
    });
  })
  .catch(err => console.log(err));
