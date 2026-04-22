const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: "postgres",
    port: 5432,
    database: "postgres",
    username: "postgres",
    password: "4x24oqwpH",
});

const Aviary = sequelize.define('Aviary', {
  aviaryid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true 
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: DataTypes.SMALLINT,
    allowNull: false
  },
  vmest: {
    type: DataTypes.SMALLINT,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  employeesid: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

const Employees = sequelize.define('Employees', {
  employeesid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  jobtitle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  payday: {
    type: DataTypes.DECIMAL(10, 2),  
    allowNull: false
  }
});

const Animals = sequelize.define('Animals', {
  animalid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type: DataTypes.SMALLINT,
    allowNull: false
  },
  age: {
    type: DataTypes.SMALLINT,
    allowNull: false
  },
  aviaryid: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  adopted: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  breed: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

const Adoptive = sequelize.define('Adoptive', {
  adoptiveid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  nameadoptive: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  haspets: {
    type: DataTypes.SMALLINT,
    allowNull: false
  },
  idadoptions: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  animalid: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

const Adoptions = sequelize.define('Adoptions', {  
  idadoptions: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  adoptiondate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  adoptiveid: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  animalid: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

// Связи
Employees.hasMany(Aviary, { foreignKey: 'employeesid' });
Aviary.belongsTo(Employees, { foreignKey: 'employeesid' });

Aviary.hasMany(Animals, { foreignKey: 'aviaryid' });
Animals.belongsTo(Aviary, { foreignKey: 'aviaryid' });

Adoptions.belongsTo(Adoptive, { foreignKey: 'adoptiveid' });
Adoptions.belongsTo(Animals, { foreignKey: 'animalid' });
Adoptive.hasMany(Adoptions, { foreignKey: 'adoptiveid' });
Animals.hasMany(Adoptions, { foreignKey: 'animalid' });

Adoptive.belongsTo(Adoptions, { foreignKey: 'idadoptions' });
Adoptions.hasOne(Adoptive, { foreignKey: 'idadoptions' });

Adoptive.belongsTo(Animals, { foreignKey: 'animalid' });
Animals.hasMany(Adoptive, { foreignKey: 'animalid' });

module.exports = { sequelize, Aviary, Employees, Animals, Adoptive, Adoptions };