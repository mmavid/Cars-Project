const { Sequelize, DataTypes } = require("sequelize");

const Cars = Sequelize.define('Cars',{
    id:{
        type:DataTypes.INTEGER,
        autoincrement: true,
        ptimaryKey: true
    },
    vin:{
        type:DataTypes.STRING(17),
        allowNull: false,
        validate:{
            len:[17,17]
        }
    },
    Марка:{
        type:DataTypes.STRING(50),
        allowNull: false
    },
    Модель:{
        type:DataTypes.STRING(100),
        allowNull: false
    },
    Цена:{
        type:DataTypes.DECIMAL(8,2),
        allowNull: false,
        validate:{
            min: 0
        }
    },
    Цвет:{
        type:DataTypes.STRING(20),
        allowNull: false
    },
    Год:{
        type:DataTypes.STRING(10),
        allowNull: true
    },
    Статус:{
        type:DataTypes.ENUM('В наличии','Отсутствует'),
        defaultValue:'В наличии'
    }
}) 