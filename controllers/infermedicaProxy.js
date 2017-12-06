const rp = require('request-promise');

const infermedicaOptions = {
  method: 'POST',
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
  // console.log(infermedicaOptions);

  infermedicaOptions.body = req.body;

  rp(infermedicaOptions)
    .then(data => {
      return res.status(200).json(data);
    })
    .catch(err => console.log(err));
}

module.exports = {
  parsedSymptoms: getParsedSymptoms
};
