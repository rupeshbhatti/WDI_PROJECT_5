const express = require('express');
const router = express.Router();

const infermedicaProxy = require('../controllers/infermedicaProxy');

router.route('/getparsedsymptoms/')
  .post(infermedicaProxy.parsedSymptoms);

module.exports = router;
