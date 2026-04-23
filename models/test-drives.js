const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
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
        }
    });

    return TestDrives;
};