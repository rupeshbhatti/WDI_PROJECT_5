const rp = require('request-promise');

const infermedicaOptions = {
  uri: 'https://api.infermedica.com/v2/',
  headers: {
    'App-Id': process.env.INFERMEDICA_APP_ID,
    'App-Key': process.env.INFERMEDICA_APP_KEY
  },
  json: true
};

// /parse

function getParsedSymptoms(req,res){
  infermedicaOptions.uri = 'https://api.infermedica.com/v2/parse/';
  infermedicaOptions.method = 'POST';

  //req.body requires a single key of text in the req object
  infermedicaOptions.body = req.body;

  rp(infermedicaOptions)
    .then(data => {
      return res.status(200).json(data);
    })
    .catch(err => console.log(err));
}

function getDiagnosis(req,res){
  infermedicaOptions.uri = 'https://api.infermedica.com/v2/diagnosis/';
  infermedicaOptions.method = 'POST';

  //req.body requires a pre-screener info: sex, age and symptoms/risk factors/lab test results (the last 2 are optional)
  infermedicaOptions.body = req.body;

  rp(infermedicaOptions)
    .then(data => {
      return res.status(200).json(data);
    })
    .catch(err => console.log(err));
}

function explain(req,res){
  infermedicaOptions.uri = 'https://api.infermedica.com/v2/explain/';
  infermedicaOptions.method = 'POST';

  infermedicaOptions.body = req.body;

  rp(infermedicaOptions)
    .then(data => {
      return res.status(200).json(data);
    })
    .catch(err => console.log(err));
}

module.exports = {
  getParsedSymptoms: getParsedSymptoms,
  getDiagnosis: getDiagnosis,
  explain: explain
};
