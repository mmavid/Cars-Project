const { DataTypes } = require('sequelize');
const sequelize = require('../dbserver');
const Employees = sequelize.define('Employees', {
    employeesid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    jobtitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    payday: {
      type: DataTypes.DECIMAL(10, 2),  
      allowNull: false
    }
  });
  module.exports = Employees;