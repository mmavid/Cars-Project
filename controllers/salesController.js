const { Sales, Cars, Customers, Employees } = require('../models');

const getSales = async (req, res, next) => {
  try {
    const sales = await Sales.findAll({
      include: [
        { model: Cars, attributes: ['Марка', 'Модель'] },
        { model: Customers, attributes: ['Имя', 'Фамилия'] },
        { model: Employees, attributes: ['Имя', 'Фамилия', 'Должность'] }
      ]
    });
    res.json({ success: true, data: sales });
  } catch (error) {
    next(error);
  }
};

const getSaleById = async (req, res, next) => {
  try {
    const sale = await Sales.findByPk(req.params.id, {
      include: [
        { model: Cars },
        { model: Customers },
        { model: Employees }
      ]
    });
    if (!sale) {
      const error = new Error('Продажа не найдена');
      error.statusCode = 404;
      throw error;
    }
    res.json({ success: true, data: sale });
  } catch (error) {
    next(error);
  }
};

const createSale = async (req, res, next) => {
  try {
    const newSale = await Sales.create(req.body);
    res.status(201).json({ success: true, data: newSale });
  } catch (error) {
    next(error);
  }
};

const updateSale = async (req, res, next) => {
  try {
    const sale = await Sales.findByPk(req.params.id);
    if (!sale) {
      const error = new Error('Продажа не найдена');
      error.statusCode = 404;
      throw error;
    }
    await sale.update(req.body);
    res.json({ success: true, data: sale });
  } catch (error) {
    next(error);
  }
};

const deleteSale = async (req, res, next) => {
  try {
    const sale = await Sales.findByPk(req.params.id);
    if (!sale) {
      const error = new Error('Продажа не найдена');
      error.statusCode = 404;
      throw error;
    }
    await sale.destroy();
    res.json({ success: true, message: 'Продажа удалена' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getSales, getSaleById, createSale, updateSale, deleteSale };