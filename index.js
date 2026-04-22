const express = require('express');
const router = express.Router();

const carsRoutes = require('./carsRoutes');
const customersRoutes = require('./customersRoutes');
const employeesRoutes = require('./employeesRoutes');
const salesRoutes = require('./salesRoutes');
const testDrivesRoutes = require('./testDrivesRoutes');

router.use('/cars', carsRoutes);
router.use('/customers', customersRoutes);
router.use('/employees', employeesRoutes);
router.use('/sales', salesRoutes);
router.use('/testdrives', testDrivesRoutes);

module.exports = router;