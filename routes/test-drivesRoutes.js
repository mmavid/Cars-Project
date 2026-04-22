const express = require('express');
const router = express.Router();
const { getTestDrives, getTestDriveById, createTestDrive, updateTestDrive, deleteTestDrive } = require('../controllers/testDrivesController');

router.get('/', getTestDrives);
router.get('/:id', getTestDriveById);
router.post('/', createTestDrive);
router.patch('/:id', updateTestDrive);
router.delete('/:id', deleteTestDrive);

module.exports = router;