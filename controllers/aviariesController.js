const { Aviary, Employees, Animals } = require('../models');

const getAviaries = async (req, res) => {
  try {
    const aviaries = await Aviary.findAll({ include: [{ model: Employees }, { model: Animals }] });
    res.json(aviaries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAviaryById = async (req, res) => {
  try {
    const aviary = await Aviary.findByPk(req.params.id, { include: [{ model: Employees }, { model: Animals }] });
    if (!aviary) return res.status(404).json({ message: 'Вольер не найден' });
    res.json(aviary);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createAviary = async (req, res) => {
  try {
    const newAviary = await Aviary.create(req.body);
    res.status(201).json({ success: true, data: newAviary });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAviary = async (req, res) => {
  try {
    const aviary = await Aviary.findByPk(req.params.id);
    if (!aviary) return res.status(404).json({ message: 'Вольер не найден' });
    await aviary.update(req.body);
    res.json({ success: true, data: aviary });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAviary = async (req, res) => {
  try {
    const aviary = await Aviary.findByPk(req.params.id);
    if (!aviary) return res.status(404).json({ message: 'Вольер не найден' });
    await aviary.destroy();
    res.json({ success: true, message: 'Удалено' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAviaries, getAviaryById, createAviary, updateAviary, deleteAviary };