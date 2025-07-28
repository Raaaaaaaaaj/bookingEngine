// Routes
const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/loginUser.controller');

router.post('/login', loginUser);

module.exports = router