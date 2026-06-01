const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Employees = sequelize.define('Employees', {
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
        Должность: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        Телефон: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        Email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        Дата_найма: {
            type: DataTypes.DATE,
            allowNull: true
        }
    });

    return Employees;
};