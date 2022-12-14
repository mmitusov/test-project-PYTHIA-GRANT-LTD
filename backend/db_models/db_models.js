const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const CampaignOwner = sequelize.define('campaignOwner', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    ownerUsername: {type: DataTypes.STRING, allowNull: false},
    cryptoAddress: {type: DataTypes.STRING, unique: true}    
})

const Campaign = sequelize.define('campaign', {
    alphanumericId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    goalAmount: {type: DataTypes.INTEGER, allowNull: false},
    expirationDate: {type: DataTypes.DATEONLY, allowNull: false},
    status: {type: DataTypes.STRING, allowNull: false}
})

const UserDonation = sequelize.define('userDonation', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    donatorUsername: {type: DataTypes.STRING},
    donationAmount: {type: DataTypes.INTEGER}    
})


CampaignOwner.hasMany(Campaign);
Campaign.belongsTo(CampaignOwner);


module.exports = {
    CampaignOwner,
    Campaign,
    UserDonation
}