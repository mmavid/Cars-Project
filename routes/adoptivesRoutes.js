const express = require('express');
const router = express.Router();
const { getAdoptives, getAdoptiveById, createAdoptive, updateAdoptive, deleteAdoptive } = require('../controllers/adoptivesController');

router.get('/', getAdoptives);
router.get('/:id', getAdoptiveById);
router.post('/', createAdoptive);
router.patch('/:id', updateAdoptive);
router.delete('/:id', deleteAdoptive);

module.exports = router;