var express = require('express');
var router = express.Router(); 
const donatorController = require('../controllers/donatorController') 

router.get('/check', donatorController.getAll)
router.get('/one', donatorController.getOne)

module.exports = router;