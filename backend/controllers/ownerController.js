const {CampaignOwner, Campaign} = require('../db_models/db_models')

class ownerController {
    async createOwner(req, res, next) {        
        let {cryptoAddress, username} = req.body
        const owner = await CampaignOwner.create({cryptoAddress, username})       
        return res.json(owner)        
    }
    async createCampaign(req, res, next) {        
        let {name, description, price, expirationDate, status} = req.body
        const campaign = await Campaign.create({name, description, price, expirationDate, status})       
        return res.json(campaign)
    }
}

module.exports = new ownerController()
