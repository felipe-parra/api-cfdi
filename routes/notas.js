const router = require('express').Router();
const { create, getAll } = require('../controllers/nota.controller');

router.get('/', getAll);

router.post('/', create);

module.exports = router;
