const express = require('express');
const router = express.Router();
const { getAviaries, getAviaryById, createAviary, updateAviary, deleteAviary } = require('../controllers/aviariesController');

router.get('/', getAviaries);
router.get('/:id', getAviaryById);
router.post('/', createAviary);
router.patch('/:id', updateAviary);
router.delete('/:id', deleteAviary);

module.exports = router;