var express = require('express');
var router = express.Router(); 
const ownerController = require('../controllers/ownerController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/owner', checkRole('ADMIN'), ownerController.createOwner)
router.post('/campaign', checkRole('ADMIN'), ownerController.createCampaign)

module.exports = router;