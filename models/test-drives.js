const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const TestDrives = sequelize.define('TestDrives', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Дата_тест_драйва: {
            type: DataTypes.DATE,
            allowNull: false
        },
        Длительность: {
            type: DataTypes.INTEGER,
            allowNull: true,
            comment: 'Длительность в минутах'
        },
        Комментарий: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        car_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Cars',
                key: 'id'
            }
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Customers',
                key: 'id'
            }
        },
        employee_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Employees',
                key: 'id'
            }
        }
    });

    return TestDrives;
};