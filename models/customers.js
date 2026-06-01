const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Customers = sequelize.define('Customers', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Фамилия: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        Имя: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        Отчество: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        Телефон: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        Email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        Адрес: {
            type: DataTypes.STRING(200),
            allowNull: true
        }
    });

    return Customers;
};