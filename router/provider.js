const router = require('express').Router();
const model = require('../models');
const ProviderRouter = require('../controller/provider');

const Provider = model.Provider;

router.get('/', ProviderRouter.index);

module.exports = router;