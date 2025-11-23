import { createTeam, getTeams } from "../models/team.js";
import { addEmployeeToTeam } from "../models/employeeTeam.js";

export const addTeam = (req, res) => {
  const orgId = req.orgId;
  const { name } = req.body;

  createTeam(orgId, name, (err) => {
    if (err) return res.status(500).json({ message: "DB error" });
    res.json({ message: "Team created" });
  });
};

export const listTeams = (req, res) => {
  const orgId = req.orgId;

  getTeams(orgId, (err, rows) => {
    if (err) return res.status(500).json({ message: "DB error" });
    res.json(rows);
  });
};

export const assignEmployee = (req, res) => {
  const { employeeId, teamId } = req.body;

  addEmployeeToTeam(employeeId, teamId, (err) => {
    if (err) return res.status(500).json({ message: "DB error" });
    res.json({ message: "Employee assigned to team" });
  });
};
