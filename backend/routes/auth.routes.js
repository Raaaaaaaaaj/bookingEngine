// Routes
const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/loginUser.controller');
import { registerUser } from "../controllers/auth.controller"

router.post('/login', loginUser);
router.post("/register", registerUser);

module.exports = router