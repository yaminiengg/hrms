import express from "express";
import { registerOrg, loginOrg, getAllOrganisations} from "../controllers/authController.js";

const router = express.Router();

router.post("/register-org", registerOrg);
router.post("/login", loginOrg);
router.get("/organisations", getAllOrganisations);

export default router;
