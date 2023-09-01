const {Router} = require('express');

const typesRouter = Router();

const { getTypeHandler } = require('../handlers/typesHandler');

typesRouter.get('/', getTypeHandler);

module.exports = typesRouter;