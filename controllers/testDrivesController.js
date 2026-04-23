const { TestDrives } = require('../models');

const getTestDrives = async (req, res) => {
  try {
    const testDrives = await TestDrives.findAll();
    res.json(testDrives);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTestDriveById = async (req, res) => {
  try {
    const testDrive = await TestDrives.findByPk(req.params.id);
    if (!testDrive) return res.status(404).json({ message: 'Тест-драйв не найден' });
    res.json(testDrive);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTestDrive = async (req, res) => {
  try {
    const newTestDrive = await TestDrives.create(req.body);
    res.status(201).json({ success: true, data: newTestDrive });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTestDrive = async (req, res) => {
  try {
    const testDrive = await TestDrives.findByPk(req.params.id);
    if (!testDrive) return res.status(404).json({ message: 'Тест-драйв не найден' });
    await testDrive.update(req.body);
    res.json({ success: true, data: testDrive });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTestDrive = async (req, res) => {
  try {
    const testDrive = await TestDrives.findByPk(req.params.id);
    if (!testDrive) return res.status(404).json({ message: 'Тест-драйв не найден' });
    await testDrive.destroy();
    res.json({ success: true, message: 'Тест-драйв удалён' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getTestDrives, getTestDriveById, createTestDrive, updateTestDrive, deleteTestDrive };