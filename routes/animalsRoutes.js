const express = require('express');
const router = express.Router();
const { getAnimals, getAnimalById, createAnimal, updateAnimal, deleteAnimal } = require('../controllers/animalsController');

router.get('/', getAnimals);
router.get('/:id', getAnimalById);
router.post('/', createAnimal);
router.patch('/:id', updateAnimal);
router.delete('/:id', deleteAnimal);

module.exports = router;