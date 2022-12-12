const express = require('express');
const router = express.Router();
const ownerRouter = require('./ownerRouter')
const donatorRouter = require('./donatorRouter')

router.use('/owner', ownerRouter)
router.use('/donator', donatorRouter)

module.exports = router;