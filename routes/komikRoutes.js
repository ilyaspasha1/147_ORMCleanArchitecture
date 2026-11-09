
const express = require('express');
const router = express.Router();

const komikController = require('../controllers/komikController');

// GET all comics
router.get('/', komikController.getAllKomik);

// GET comic by ID
router.get('/:id', komikController.getKomikById);

// POST new comic
router.post('/', komikController.createKomik);

// PUT update comic
router.put('/:id', komikController.updateKomik);

// DELETE comic
router.delete('/:id', komikController.deleteKomik);

module.exports = router;
