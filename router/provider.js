const router = require('express').Router();
const model = require('../models')
const ProviderController = require('../controller/provider');

const Provider = model.Provider;

router.get('/', ProviderController.index);
router.get('/add', ProviderController.add);
router.post('/add', ProviderController.post);
// router.post('/create', ProviderController.added);
router.get('/erase/:id', ProviderController.erase);

module.exports = router;