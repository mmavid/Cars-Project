const { Adoptions, Adoptive, Animals } = require('../models');

const getAdoptions = async (req, res) => {
  try {
    const adoptions = await Adoptions.findAll({ include: [{ model: Adoptive }, { model: Animals }] });
    res.json(adoptions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAdoptionById = async (req, res) => {
  try {
    const adoption = await Adoptions.findByPk(req.params.id, { include: [{ model: Adoptive }, { model: Animals }] });
    if (!adoption) return res.status(404).json({ message: 'Усыновление не найдено' });
    res.json(adoption);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createAdoption = async (req, res) => {
  try {
    const newAdoption = await Adoptions.create(req.body);
    res.status(201).json({ success: true, data: newAdoption });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAdoption = async (req, res) => {
  try {
    const adoption = await Adoptions.findByPk(req.params.id);
    if (!adoption) return res.status(404).json({ message: 'Усыновление не найдено' });
    await adoption.update(req.body);
    res.json({ success: true, data: adoption });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAdoption = async (req, res) => {
  try {
    const adoption = await Adoptions.findByPk(req.params.id);
    if (!adoption) return res.status(404).json({ message: 'Усыновление не найдено' });
    await adoption.destroy();
    res.json({ success: true, message: 'Удалено' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAdoptions, getAdoptionById, createAdoption, updateAdoption, deleteAdoption };