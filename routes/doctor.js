const express = require('express');
const router  = express.Router();


const DoctorController = require('../controllers/doctorController');

//Setting up the route for the operations
router.post('/register',DoctorController.register);
router.post('/login',DoctorController.login);


module.exports = router;