const {Campaign, UserDonation} = require('../db_models/db_models')
const cron = require('node-cron')

class donatorController {
    async getAllActive(req, res) {      
        let device = await Campaign.findAll({where: {status: "Active"}})        
        return res.json(device)
    }
    async newDonation(req, res) {
        let {campaignName, donatorUsername, donationAmount} = req.body
        const donation = await UserDonation.create({donatorUsername, donationAmount})
        const goalAmountStatus = await Campaign.findOne({where: {name: campaignName}})
        
        let updatedGoalAmount
        if (goalAmountStatus.goalAmount <= 0) {
            updatedGoalAmount = await Campaign.update(
                {
                    status: 'Successful',
                    goalAmount: 0
                },
                {
                    where: { status: 'Active' }
                }
            );
        } else {
            updatedGoalAmount = await Campaign.update(
                {
                    goalAmount: goalAmountStatus.goalAmount - donationAmount
                },
                {
                    where: { name: campaignName }
                }
            );
        }        
        return res.json({ 
            donation, 
            updatedGoalAmount
          })
    }
}

//Marking all campaigns as 'Expired' every 10 sec
const changeStatus = async () => {    
    const updatedGoalAmount = await Campaign.update(
        {
            status: 'Expired'
        },
        {
            where: { status: 'Successful', status: 'Active' }
        }
    );
}
async function startTracking() {
    const job = cron.schedule('*/5 * * * * *', () => {
        changeStatus();
    });
    job.start();
}
// startTracking()

module.exports = new donatorController()