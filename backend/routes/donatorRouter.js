var express = require('express');
var router = express.Router(); 
const donatorController = require('../controllers/donatorController') 

router.get('/check', donatorController.getAllActive)
router.post('/donation', donatorController.newDonation)

module.exports = router;