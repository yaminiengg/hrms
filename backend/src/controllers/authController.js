import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createOrganisation, findOrgByEmail } from "../models/organisation.js";
import { createUser, findUserByEmail } from "../models/user.js";
import { getDB } from "../db.js";

export const registerOrg = (req, res) => {
  const { name, email, password } = req.body;

  findOrgByEmail(email, async (err, org) => {
    if (org) return res.status(400).json({ message: "Organisation already exists" });

    const hash = await bcrypt.hash(password, 10);

    createOrganisation(name, email, hash, (err2) => {
      if (err2) return res.status(500).json({ message: "DB error" });

      return res.json({ message: "Organisation registered" });
    });
  });
};

export const loginOrg = (req, res) => {
  const { email, password } = req.body;

  findOrgByEmail(email, async (err, org) => {
    if (!org) return res.status(400).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, org.password);
    if (!match) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ orgId: org.id }, process.env.JWT_SECRET);
    res.json({ token });
  });
};


export const getAllOrganisations = (req, res) => {
  const db = getDB();

  db.all("SELECT * FROM organisations", [], (err, rows) => {
    if (err) {
      console.error("Error fetching organisations:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json(rows);
  });
};