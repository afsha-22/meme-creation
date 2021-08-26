const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = process.env.DB_URL ? 
    new Sequelize(process.env.DB_URL) :
    new Sequelize(
        'database', 
        'username', 
        'password', 
        {
            host: 'localhost',
            dialect: 'mysql'
        }
    );

module.exports = sequelize;