const express = require('express');
const router = express.Router();
const { getSales, getSaleById, createSale, updateSale, deleteSale } = require('../controllers/salesController');

router.get('/', getSales);
router.get('/:id', getSaleById);
router.post('/', createSale);
router.patch('/:id', updateSale);
router.delete('/:id', deleteSale);

module.exports = router;