const express = require('express');
const passport = require('passport');
const router  = express.Router();

const ReportController = require('../../../controllers/api/v1/reportController');

//Setting the route to get the reports
router.get('/:status',passport.authenticate('jwt', { session: false }),ReportController.reports);



module.exports = router;