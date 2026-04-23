const { Employees } = require('../models');

const getEmployees = async (req, res) => {
  try {
    const employees = await Employees.findAll();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employees.findByPk(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Сотрудник не найден' });
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createEmployee = async (req, res) => {
  try {
    const newEmployee = await Employees.create(req.body);
    res.status(201).json({ success: true, data: newEmployee });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const employee = await Employees.findByPk(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Сотрудник не найден' });
    await employee.update(req.body);
    res.json({ success: true, data: employee });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employees.findByPk(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Сотрудник не найден' });
    await employee.destroy();
    res.json({ success: true, message: 'Сотрудник удалён' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee };