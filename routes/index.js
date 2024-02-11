const express = require('express');
const router = express.Router();
const bookRoutes = require("./bookRoutes");
const swaggerUI = require("swagger-ui-express");
const swaggerConfig = require(`../swagger-output-${process.env.LANE}.json`);

router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerConfig));
router.use('/books', bookRoutes);

module.exports = router;
