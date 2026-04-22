const express = require('express');
const router = express.Router();

const animalsRoutes = require('./animalsRoutes');
const aviariesRoutes = require('./aviariesRoutes');
const employeesRoutes = require('./employeesRoutes');
const adoptivesRoutes = require('./adoptivesRoutes');
const adoptionsRoutes = require('./adoptionsRoutes');

router.use('/animals', animalsRoutes);
router.use('/aviaries', aviariesRoutes);
router.use('/employees', employeesRoutes);
router.use('/adoptives', adoptivesRoutes);
router.use('/adoptions', adoptionsRoutes);

router.get('/', (req, res) => {
  res.send('Server start!');
});

module.exports = router;