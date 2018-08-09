const express = require("express");

const chat_controller = require('../controllers/chat.controller.js');

const router = express.Router()

router.get('/', chat_controller.index);


module.exports = router;
