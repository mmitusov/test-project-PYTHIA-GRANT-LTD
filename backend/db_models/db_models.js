const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const CampaignOwner = sequelize.define('campaignOwner', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    cryptoAddress: {type: DataTypes.STRING, unique: true},
    username: {type: DataTypes.STRING}
})

const Campaign = sequelize.define('campaign', {
    alphanumericId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    expirationDate: {type: DataTypes.DATEONLY},
    status: {type: DataTypes.STRING, allowNull: false}
})


CampaignOwner.hasMany(Campaign);
Campaign.belongsTo(CampaignOwner);


module.exports = {
    CampaignOwner,
    Campaign
}