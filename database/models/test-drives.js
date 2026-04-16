const { Sequelize, DataTypes } = require("sequelize");

const TestGrives = Sequelize.define('TestGrives',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cars_id:{
        type: DataTypes.INTEGER,
        qllowNull: false
    },
    employee_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            madel: "Employees",
            key: 'id'
        } 
    },
    Дата_тест_драйва:{
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
})