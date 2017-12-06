const rp = require('request-promise');
const { dbURI } = require('../config/environment');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect(dbURI, { useMongoClient: true});

const Symptom = require('../models/symptom');

const infermedicaOptions = {
  method: 'GET',
  uri: 'https://api.infermedica.com/v2/symptoms/',
  headers: {
    'App-Id': process.env.INFERMEDICA_APP_ID,
    'App-Key': process.env.INFERMEDICA_APP_KEY
  },
  json: true
};

Symptom.collection.drop();

rp(infermedicaOptions)
  .then(response => {
    const data = response;

    data.forEach(symptom => {
      Symptom.create({
        id: symptom.id,
        name: symptom.name,
        common_name: symptom.common_name,
        question: symptom.question,
        sex_filter: symptom.sex_filter,
        category: symptom.category,
        extras: symptom.extras,
        children: symptom.children,
        image_url: symptom.image_url,
        image_source: symptom.image_source,
        parent_id: symptom.parent_id,
        parent_relation: symptom.parent_relation
      });

      console.log(`${symptom.name} was saved to the database`);
    });
  })
  .catch(err => console.log(err));
