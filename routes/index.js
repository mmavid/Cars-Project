const express = require('express');
const router = express.Router();

const carsRoutes = require('./carsRoutes');
const customersRoutes = require('./customersRoutes');
const employeesRoutes = require('./employeesRoutes');
const salesRoutes = require('./salesRoutes');
const testDrivesRoutes = require('./test-drivesRoutes');

router.use('/cars', carsRoutes);
router.use('/customers', customersRoutes);
router.use('/employees', employeesRoutes);
router.use('/sales', salesRoutes);
router.use('/test-drives', testDrivesRoutes);

module.exports = router;