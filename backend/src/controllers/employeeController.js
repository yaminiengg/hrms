import { createEmployee, getEmployees } from "../models/employee.js";

export const addEmployee = (req, res) => {
  const orgId = req.orgId;
  const { name, role, salary } = req.body;

  createEmployee(orgId, name, role, salary, (err) => {
    if (err) return res.status(500).json({ message: "DB error" });
    res.json({ message: "Employee added" });
  });
};

export const listEmployees = (req, res) => {
  const orgId = req.orgId;

  getEmployees(orgId, (err, rows) => {
    if (err) return res.status(500).json({ message: "DB error" });
    res.json(rows);
  });
};
