// Routes
import express from 'express';
const router = express.Router();
import loginUser from '../controllers/loginUser.controller.js';
import registerUser from "../controllers/auth.controller.js";

router.post('/login', loginUser);
router.post("/register", registerUser);

// module.exports = router
export default router;