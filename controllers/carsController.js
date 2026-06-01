const { Cars } = require('../models');

const getCars = async (req, res, next) => {
  try {
    const cars = await Cars.findAll();
    res.json({ success: true, data: cars });
  } catch (error) {
    next(error);
  }
};

const getCarById = async (req, res, next) => {
  try {
    const car = await Cars.findByPk(req.params.id);
    if (!car) {
      const error = new Error('Автомобиль не найден');
      error.statusCode = 404;
      throw error;
    }
    res.json({ success: true, data: car });
  } catch (error) {
    next(error);
  }
};

const createCar = async (req, res, next) => {
  try {
    const newCar = await Cars.create(req.body);
    res.status(201).json({ success: true, data: newCar });
  } catch (error) {
    next(error);
  }
};

const updateCar = async (req, res, next) => {
  try {
    const car = await Cars.findByPk(req.params.id);
    if (!car) {
      const error = new Error('Автомобиль не найден');
      error.statusCode = 404;
      throw error;
    }
    await car.update(req.body);
    res.json({ success: true, data: car });
  } catch (error) {
    next(error);
  }
};

const deleteCar = async (req, res, next) => {
  try {
    const car = await Cars.findByPk(req.params.id);
    if (!car) {
      const error = new Error('Автомобиль не найден');
      error.statusCode = 404;
      throw error;
    }
    await car.destroy();
    res.json({ success: true, message: 'Автомобиль удалён' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getCars, getCarById, createCar, updateCar, deleteCar };