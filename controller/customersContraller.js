const { Customers } = require('../models')

const getCustomers = async (req, res) => {
  try {
    const customers = await Customers.findAll()
    res.json(customers)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

const getCustomerById = async (req, res) => {
  try {
    const customer = await Customers.findByPk(req.params.id)
    if (!customer) return res.status(404).json({ message: 'Клиент не найден' })
    res.json(customer)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

const createCustomer = async (req, res) => {
  try {
    const newCustomer = await Customers.create(req.body)
    res.status(201).json({ success: true, data: newCustomer })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

const updateCustomer = async (req, res) => {
  try {
    const customer = await Customers.findByPk(req.params.id)
    if (!customer) return res.status(404).json({ message: 'Клиент не найден' })
    await customer.update(req.body)
    res.json({ success: true, data: customer })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const customer = await Customers.findByPk(req.params.id)
    if (!customer) return res.status(404).json({ message: 'Клиент не найден' })
    await customer.destroy()
    res.json({ success: true, message: 'Клиент удалён' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

module.exports = { getCustomers, getCustomerById, createCustomer, updateCustomer, deleteCustomer }