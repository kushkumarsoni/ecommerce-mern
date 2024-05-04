import express from "express";
import { allUserController, newUserController } from "../controllers/user.js";
const router = express.Router();
router.post("/add", newUserController);
router.get("/list", allUserController);
export default router;
