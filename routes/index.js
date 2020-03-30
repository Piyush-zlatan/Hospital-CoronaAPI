const express = require('express');

const router = express.Router();

console.log('Router running');
//For doctors
router.use('/doctors',require('./doctor'));

//For Patients
router.use('/register_patient',require('./patient'));
router.use('/patients',require('./patient'));

//For Report
router.use('/reports',require('./report'));

module.exports = router;