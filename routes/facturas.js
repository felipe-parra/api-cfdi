const router = require('express').Router();
const {
	createFactura,
	getAll,
	search,
	searchAndUpdate,
	searchAndDelete
} = require('../controllers/factura.controller');

// Get All documents
router.get('/', getAll);

// Get one document with query search
// GET /search?folio=124567
// GET /search?uuid=00-111-uuu
router.get('/search?', search);

// Create a document
router.post('/', createFactura);

// Update one document with query search
// PUT /search?folio=124567
// PUT /search?uuid=00-111-uuu
router.put('/search?', searchAndUpdate);

// DELETE one document with query search
// Delete /search?folio=124567
// Delete /search?uuid=00-111-uuu
router.delete('/search?', searchAndDelete);

module.exports = router;
