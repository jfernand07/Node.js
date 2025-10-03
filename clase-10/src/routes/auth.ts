import { Router } from "express";
import { register, login } from "../controllers/auth.controller.ts";
import { validateUser } from "../Middlewares/validateuser.ts";

const router = Router();

router.post("/register", validateUser, register);
router.post("/login", login);

export default router;
