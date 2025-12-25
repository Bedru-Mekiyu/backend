import { Router } from "express";

const router=Router();

import { loginUser, logoutUser, registerUser } from "../controllers/user.controller.js";

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').post(logoutUserffff);



export default router;