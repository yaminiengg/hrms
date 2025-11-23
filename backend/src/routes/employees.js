import express from "express";
import { authenticate } from "../middlewares/authMiddleware.js";
import { addEmployee, listEmployees } from "../controllers/employeeController.js";

const router = express.Router();

router.post("/", authenticate, addEmployee);
router.get("/", authenticate, listEmployees);

export default router;
