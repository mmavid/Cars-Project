const { Customers } = require('../models');

const getCustomers = async (req, res, next) => {
  try {
    const customers = await Customers.findAll();
    res.json({ success: true, data: customers });
  } catch (error) {
    next(error);
  }
};

const getCustomerById = async (req, res, next) => {
  try {
    const customer = await Customers.findByPk(req.params.id);
    if (!customer) {
      const error = new Error('Клиент не найден');
      error.statusCode = 404;
      throw error;
    }
    res.json({ success: true, data: customer });
  } catch (error) {
    next(error);
  }
};

const createCustomer = async (req, res, next) => {
  try {
    const newCustomer = await Customers.create(req.body);
    res.status(201).json({ success: true, data: newCustomer });
  } catch (error) {
    next(error);
  }
};

const updateCustomer = async (req, res, next) => {
  try {
    const customer = await Customers.findByPk(req.params.id);
    if (!customer) {
      const error = new Error('Клиент не найден');
      error.statusCode = 404;
      throw error;
    }
    await customer.update(req.body);
    res.json({ success: true, data: customer });
  } catch (error) {
    next(error);
  }
};

const deleteCustomer = async (req, res, next) => {
  try {
    const customer = await Customers.findByPk(req.params.id);
    if (!customer) {
      const error = new Error('Клиент не найден');
      error.statusCode = 404;
      throw error;
    }
    await customer.destroy();
    res.json({ success: true, message: 'Клиент удалён' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getCustomers, getCustomerById, createCustomer, updateCustomer, deleteCustomer };