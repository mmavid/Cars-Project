const sequelize = require('../dbserver');
const { DataTypes } = require('sequelize');

const Cars = require('./cars')(sequelize, DataTypes);
const Customers = require('./customers')(sequelize, DataTypes);
const Employees = require('./employees')(sequelize, DataTypes);
const Sales = require('./sales')(sequelize, DataTypes);
const TestDrives = require('./test-drives')(sequelize, DataTypes);

Sales.belongsTo(Cars, { foreignKey: 'car_id' });
Sales.belongsTo(Customers, { foreignKey: 'customer_id' });
Sales.belongsTo(Employees, { foreignKey: 'employee_id' });

Cars.hasMany(Sales, { foreignKey: 'car_id' });
Customers.hasMany(Sales, { foreignKey: 'customer_id' });
Employees.hasMany(Sales, { foreignKey: 'employee_id' });

TestDrives.belongsTo(Cars, { foreignKey: 'car_id' });
TestDrives.belongsTo(Customers, { foreignKey: 'customer_id' });
TestDrives.belongsTo(Employees, { foreignKey: 'employee_id' });

Cars.hasMany(TestDrives, { foreignKey: 'car_id' });
Customers.hasMany(TestDrives, { foreignKey: 'customer_id' });
Employees.hasMany(TestDrives, { foreignKey: 'employee_id' });

module.exports = {sequelize,Cars,Customers,Employees,Sales,TestDrives};