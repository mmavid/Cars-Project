const { DataTypes } = require('sequelize');
const sequelize = require('../dbserver');
const Animals = sequelize.define('Animals', {
    animalid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    age: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    aviaryid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    adopted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  module.exports = Animals;