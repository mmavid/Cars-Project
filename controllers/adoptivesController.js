const { Adoptive, Adoptions, Animals } = require('../models');

const getAdoptives = async (req, res) => {
  try {
    const adoptives = await Adoptive.findAll({ include: [{ model: Adoptions }, { model: Animals }] });
    res.json(adoptives);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAdoptiveById = async (req, res) => {
  try {
    const adoptive = await Adoptive.findByPk(req.params.id, { include: [{ model: Adoptions }, { model: Animals }] });
    if (!adoptive) return res.status(404).json({ message: 'Усыновитель не найден' });
    res.json(adoptive);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createAdoptive = async (req, res) => {
  try {
    const newAdoptive = await Adoptive.create(req.body);
    res.status(201).json({ success: true, data: newAdoptive });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAdoptive = async (req, res) => {
  try {
    const adoptive = await Adoptive.findByPk(req.params.id);
    if (!adoptive) return res.status(404).json({ message: 'Усыновитель не найден' });
    await adoptive.update(req.body);
    res.json({ success: true, data: adoptive });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAdoptive = async (req, res) => {
  try {
    const adoptive = await Adoptive.findByPk(req.params.id);
    if (!adoptive) return res.status(404).json({ message: 'Усыновитель не найден' });
    await adoptive.destroy();
    res.json({ success: true, message: 'Удалено' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAdoptives, getAdoptiveById, createAdoptive, updateAdoptive, deleteAdoptive };