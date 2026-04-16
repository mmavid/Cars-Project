const { Sequelize, DataTypes } = require("sequelize");

const Customers = Sequelize.define('Customers',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ФИО:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    телефон:{
        type: DataTypes.STRING(20),
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    email:{
        type: DataTypes.STRING(100),
        allowNull: false
    }
})