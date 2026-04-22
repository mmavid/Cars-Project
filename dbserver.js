const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: "postgres",
    port: 5432,
    database: "postgres",
    username: "postgres",
    password: "4x24oqwpH",
    logging: false
});

module.exports = sequelize;