var express = require('express');
var router = express.Router(); 
const ownerController = require('../controllers/ownerController')

router.post('/owner', ownerController.createOwner)
router.post('/campaign', ownerController.createCampaign)

module.exports = router;