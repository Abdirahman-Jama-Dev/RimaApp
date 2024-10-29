const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'sqlite', // Change to mysql for production
    logging: false,
});

module.exports = sequelize;
