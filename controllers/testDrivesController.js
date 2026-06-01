const { TestDrives, Cars, Customers, Employees } = require('../models');

const getTestDrives = async (req, res, next) => {
  try {
    const testDrives = await TestDrives.findAll({
      include: [
        { model: Cars, attributes: ['Марка', 'Модель'] },
        { model: Customers, attributes: ['Имя', 'Фамилия'] },
        { model: Employees, attributes: ['Имя', 'Фамилия'] }
      ]
    });
    res.json({ success: true, data: testDrives });
  } catch (error) {
    next(error);
  }
};

const getTestDriveById = async (req, res, next) => {
  try {
    const testDrive = await TestDrives.findByPk(req.params.id, {
      include: [
        { model: Cars },
        { model: Customers },
        { model: Employees }
      ]
    });
    if (!testDrive) {
      const error = new Error('Тест-драйв не найден');
      error.statusCode = 404;
      throw error;
    }
    res.json({ success: true, data: testDrive });
  } catch (error) {
    next(error);
  }
};

const createTestDrive = async (req, res, next) => {
  try {
    const newTestDrive = await TestDrives.create(req.body);
    res.status(201).json({ success: true, data: newTestDrive });
  } catch (error) {
    next(error);
  }
};

const updateTestDrive = async (req, res, next) => {
  try {
    const testDrive = await TestDrives.findByPk(req.params.id);
    if (!testDrive) {
      const error = new Error('Тест-драйв не найден');
      error.statusCode = 404;
      throw error;
    }
    await testDrive.update(req.body);
    res.json({ success: true, data: testDrive });
  } catch (error) {
    next(error);
  }
};

const deleteTestDrive = async (req, res, next) => {
  try {
    const testDrive = await TestDrives.findByPk(req.params.id);
    if (!testDrive) {
      const error = new Error('Тест-драйв не найден');
      error.statusCode = 404;
      throw error;
    }
    await testDrive.destroy();
    res.json({ success: true, message: 'Тест-драйв удалён' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getTestDrives, getTestDriveById, createTestDrive, updateTestDrive, deleteTestDrive };