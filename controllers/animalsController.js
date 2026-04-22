const { Animals, Aviary } = require('../models');

const getAnimals = async (req, res) => {
  try {
    const animals = await Animals.findAll({ include: [{ model: Aviary }] });
    res.json(animals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAnimalById = async (req, res) => {
  try {
    const animal = await Animals.findByPk(req.params.id, { include: [{ model: Aviary }] });
    if (!animal) return res.status(404).json({ message: 'Животное не найдено' });
    res.json(animal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createAnimal = async (req, res) => {
  try {
    const { name, gender, age, aviaryid, adopted, breed } = req.body;
    const aviary = await Aviary.findByPk(aviaryid);
    if (!aviary) return res.status(404).json({ message: 'Вольер не найден' });
    const newAnimal = await Animals.create({ name, gender, age, aviaryid, adopted: adopted || false, breed });
    res.status(201).json({ success: true, data: newAnimal });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAnimal = async (req, res) => {
  try {
    const animal = await Animals.findByPk(req.params.id);
    if (!animal) return res.status(404).json({ message: 'Животное не найдено' });
    await animal.update(req.body);
    res.json({ success: true, data: animal });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAnimal = async (req, res) => {
  try {
    const animal = await Animals.findByPk(req.params.id);
    if (!animal) return res.status(404).json({ message: 'Животное не найдено' });
    await animal.destroy();
    res.json({ success: true, message: 'Удалено' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAnimals, getAnimalById, createAnimal, updateAnimal, deleteAnimal };