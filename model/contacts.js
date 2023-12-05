const dbConnection = require('../config/database.js');
const sequelize = require('sequelize');

const contacts = dbConnection.define('contacts', {
        id: {type: sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: sequelize.DataTypes.STRING},
        email: {type: sequelize.DataTypes.STRING},
        message: {type: sequelize.DataTypes.STRING}
    }, {
        freezeTableName: true
    })

    module.exports = contacts;