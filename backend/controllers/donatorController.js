const {Campaign} = require('../db_models/db_models')

class donatorController {
    async getAll(req, res) {      
        let device = await Campaign.findAll()        
        return res.json(device)
    }
    async getOne(req, res) {
        const {id} = req.body 
        const device = await Campaign.findOne({where: {id}})
        return res.json(device)
    }
}

module.exports = new donatorController()