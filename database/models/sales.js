const { Sequelize, DataTypes } = require("sequelize");

const Sales = Sequelize.define('Sales',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cars_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Cars',
            key: 'id'
        }
    },
    customers_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Дата_продажи_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    Цена_продажи_money: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            min: 0
        }
    }
})