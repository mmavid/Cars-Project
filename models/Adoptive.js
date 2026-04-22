const { DataTypes } = require('sequelize');
const sequelize = require('../dbserver');
const Adoptive = sequelize.define('Adoptive', {
    adoptiveid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nameadoptive: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    haspets: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    idadoptions: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    animalid: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  module.exports = Adoptive;