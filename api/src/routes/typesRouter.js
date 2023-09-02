const {Router} = require('express');

const typesRouter = Router();

const { getTypeHandler } = require('../handlers/typesHandlers');

typesRouter.get('/', getTypeHandler);

module.exports = typesRouter;