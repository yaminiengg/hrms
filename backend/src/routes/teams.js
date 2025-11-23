import express from "express";
import { authenticate } from "../middlewares/authMiddleware.js";
import { addTeam, listTeams, assignEmployee } from "../controllers/teamController.js";

const router = express.Router();

router.post("/", authenticate, addTeam);
router.get("/", authenticate, listTeams);
router.post("/assign", authenticate, assignEmployee);

export default router;
