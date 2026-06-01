const { Employees } = require('../models');

const getEmployees = async (req, res, next) => {
  try {
    const employees = await Employees.findAll();
    res.json({ success: true, data: employees });
  } catch (error) {
    next(error);
  }
};

const getEmployeeById = async (req, res, next) => {
  try {
    const employee = await Employees.findByPk(req.params.id);
    if (!employee) {
      const error = new Error('Сотрудник не найден');
      error.statusCode = 404;
      throw error;
    }
    res.json({ success: true, data: employee });
  } catch (error) {
    next(error);
  }
};

const createEmployee = async (req, res, next) => {
  try {
    const newEmployee = await Employees.create(req.body);
    res.status(201).json({ success: true, data: newEmployee });
  } catch (error) {
    next(error);
  }
};

const updateEmployee = async (req, res, next) => {
  try {
    const employee = await Employees.findByPk(req.params.id);
    if (!employee) {
      const error = new Error('Сотрудник не найден');
      error.statusCode = 404;
      throw error;
    }
    await employee.update(req.body);
    res.json({ success: true, data: employee });
  } catch (error) {
    next(error);
  }
};

const deleteEmployee = async (req, res, next) => {
  try {
    const employee = await Employees.findByPk(req.params.id);
    if (!employee) {
      const error = new Error('Сотрудник не найден');
      error.statusCode = 404;
      throw error;
    }
    await employee.destroy();
    res.json({ success: true, message: 'Сотрудник удалён' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee };