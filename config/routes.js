const express = require('express');
const router  = express.Router();

const infermedicaProxies = require('../controllers/infermedicaProxies');

const conditions  = require('../controllers/conditions');
const labtests    = require('../controllers/labtests');
const symptoms    = require('../controllers/symptoms');
const riskfactors = require('../controllers/riskfactors');


// Infermedica API proxy routes
router.route('/getparsedsymptoms/')
  .post(infermedicaProxies.getParsedSymptoms);

router.route('/getdiagnosis/')
  .post(infermedicaProxies.getDiagnosis);

router.route('/explain/')
  .post(infermedicaProxies.explain);


// Condition route via mongo
router.route('/getconditions/:id')
  .get(conditions.conditionsShow);


// Labtest route via mongo
router.route('/getlabtests/:id')
  .get(labtests.labtestsShow);

// Symptom routes via mongo
router.route('/getsymptoms/:id')
  .get(symptoms.symptomsShow);

router.route('/getsymptoms/')
  .get(symptoms.symptomsIndex);


// Riskfactor routes via mongo
router.route('/getriskfactors/:id')
  .get(riskfactors.riskfactorsShow);


module.exports = router;
