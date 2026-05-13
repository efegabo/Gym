import Router from "express";
import { registerUser, loginUser} from "../controllers/authController.js";

const router = Router();

// Ruta para registrar un nuevo usuario
router.post("/register", registerUser);
 router.post("/login", loginUser);
export default router;