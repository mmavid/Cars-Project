const { Sequelize, DataTypes } = require("sequelize");

const Employees = Sequelize.define('Employees',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ФИО:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    Должность:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Телефон:{
        type: DataTypes.STRING(20),
        allowNull: false,
        validate:{
            notEmpty: true
        }
    }
})