const { DataTypes } = require('sequelize');
const sequelize = require('../dbserver');
const Aviary = sequelize.define('Aviary', {
    aviaryid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    vmest: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    employeesid: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  module.exports = Aviary;