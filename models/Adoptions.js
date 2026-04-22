const { DataTypes } = require('sequelize');
const sequelize = require('../dbserver');
const Adoptions = sequelize.define('Adoptions', {  
    idadoptions: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    adoptiondate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    adoptiveid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    animalid: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  module.exports = Adoptions;