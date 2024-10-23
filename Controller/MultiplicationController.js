
const express = require('express');
const { multiplication } = require("../View/MultiplicationView");

const multiplicationRouter = express.Router();

multiplicationRouter.post("/multiply", multiplication);

module.exports = multiplicationRouter;
