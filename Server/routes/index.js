const express     = require('express');
const Controller  = require('../controllers/mainController.js');
const controller  = new Controller();
const mainRouter  = express.Router();

mainRouter.post('/send_message/', controller.sendWebisteMessage);

module.exports = mainRouter;
