const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../dbserver');

// Импорт моделей
const Cars = require('./cars')(sequelize, DataTypes);
const Customers = require('./customers')(sequelize, DataTypes);
const Employees = require('./employees')(sequelize, DataTypes);
const Sales = require('./sales')(sequelize, DataTypes);
const TestDrives = require('./test-drives')(sequelize, DataTypes);

// Экспорт всех моделей
module.exports = {
    Cars,
    Customers,
    Employees,
    Sales,
    TestDrives,
    sequelize
};