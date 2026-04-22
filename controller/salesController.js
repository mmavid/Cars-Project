const { Sales } = require('../models')

const getSales = async (req, res) => {
  try {
    const sales = await Sales.findAll()
    res.json(sales)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

const getSaleById = async (req, res) => {
  try {
    const sale = await Sales.findByPk(req.params.id)
    if (!sale) return res.status(404).json({ message: 'Продажа не найдена' })
    res.json(sale)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

const createSale = async (req, res) => {
  try {
    const newSale = await Sales.create(req.body)
    res.status(201).json({ success: true, data: newSale })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

const updateSale = async (req, res) => {
  try {
    const sale = await Sales.findByPk(req.params.id)
    if (!sale) return res.status(404).json({ message: 'Продажа не найдена' })
    await sale.update(req.body)
    res.json({ success: true, data: sale })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

const deleteSale = async (req, res) => {
  try {
    const sale = await Sales.findByPk(req.params.id)
    if (!sale) return res.status(404).json({ message: 'Продажа не найдена' })
    await sale.destroy()
    res.json({ success: true, message: 'Продажа удалена' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

module.exports = { getSales, getSaleById, createSale, updateSale, deleteSale }