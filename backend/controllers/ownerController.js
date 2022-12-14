const {CampaignOwner, Campaign} = require('../db_models/db_models')

class ownerController {
    async createOwner(req, res) {        
        let {ownerUsername, cryptoAddress} = req.body
        const owner = await CampaignOwner.create({ownerUsername, cryptoAddress})       
        return res.json(owner)        
    }
    async createCampaign(req, res) {        
        let {name, description, goalAmount, expirationDate, status} = req.body
        const campaign = await Campaign.create({name, description, goalAmount, expirationDate, status})       
        return res.json(campaign)
    }
}

module.exports = new ownerController()
