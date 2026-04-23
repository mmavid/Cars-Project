const { Cars } = require('../models')

const getCars = async (req, res) => {
  try {
    const cars = await Cars.findAll()
    res.json(cars)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

const getCarById = async (req, res) => {
  try {
    const car = await Cars.findByPk(req.params.id)
    if (!car) return res.status(404).json({ message: 'Автомобиль не найден' })
    res.json(car)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

const createCar = async (req, res) => {
  try {
    const newCar = await Cars.create(req.body)
    res.status(201).json({ success: true, data: newCar })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

const updateCar = async (req, res) => {
  try {
    const car = await Cars.findByPk(req.params.id)
    if (!car) return res.status(404).json({ message: 'Автомобиль не найден' })
    await car.update(req.body)
    res.json({ success: true, data: car })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

const deleteCar = async (req, res) => {
  try {
    const car = await Cars.findByPk(req.params.id)
    if (!car) return res.status(404).json({ message: 'Автомобиль не найден' })
    await car.destroy()
    res.json({ success: true, message: 'Автомобиль удалён' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

module.exports = { getCars, getCarById, createCar, updateCar, deleteCar }