const express = require('express');
const passport = require('passport');
const router  = express.Router();

const PatientController = require('../controllers/patientController');

//Setting up router for patient
router.post('/',passport.authenticate('jwt', { session: false }),PatientController.register);
router.get('/:id/create_report',passport.authenticate('jwt', { session: false }),PatientController.createReport);
router.get('/:id/all_reports',passport.authenticate('jwt', { session: false }),PatientController.allReports);

module.exports = router;