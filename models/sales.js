const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Sales = sequelize.define('Sales', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Дата_продажи: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        Цена_продажи: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        Способ_оплаты: {
            type: DataTypes.ENUM('Наличные', 'Карта', 'Кредит'),
            allowNull: false
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

    return Sales;
};