const express = require('express');
const router = express.Router();
const { getAdoptions, getAdoptionById, createAdoption, updateAdoption, deleteAdoption } = require('../controllers/adoptionsController');

router.get('/', getAdoptions);
router.get('/:id', getAdoptionById);
router.post('/', createAdoption);
router.patch('/:id', updateAdoption);
router.delete('/:id', deleteAdoption);

module.exports = router;