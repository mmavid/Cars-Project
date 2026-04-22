const sequelize = require('../dbserver');
const Aviary = require('./Aviary');
const Employees = require('./Employees');
const Animals = require('./Animals');
const Adoptive = require('./Adoptive');
const Adoptions = require('./Adoptions');

Employees.hasMany(Aviary, { foreignKey: 'employeesid' });
Aviary.belongsTo(Employees, { foreignKey: 'employeesid' });

Aviary.hasMany(Animals, { foreignKey: 'aviaryid' });
Animals.belongsTo(Aviary, { foreignKey: 'aviaryid' });

Adoptive.hasMany(Adoptions, { foreignKey: 'adoptiveid' });
Adoptions.belongsTo(Adoptive, { foreignKey: 'adoptiveid' });

Animals.hasMany(Adoptions, { foreignKey: 'animalid' });
Adoptions.belongsTo(Animals, { foreignKey: 'animalid' });

Adoptions.hasOne(Adoptive, { foreignKey: 'idadoptions' });
Adoptive.belongsTo(Adoptions, { foreignKey: 'idadoptions' });

Animals.hasMany(Adoptive, { foreignKey: 'animalid' });
Adoptive.belongsTo(Animals, { foreignKey: 'animalid' });

module.exports = {
    sequelize,
    Aviary,
    Employees,
    Animals,
    Adoptive,
    Adoptions
};