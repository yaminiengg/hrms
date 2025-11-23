import db from "../db.js";

export const createEmployee = (orgId, name, role, salary, callback) => {
  db.run(
    "INSERT INTO employees (org_id, name, role, salary) VALUES (?, ?, ?, ?)",
    [orgId, name, role, salary],
    callback
  );
};

export const getEmployees = (orgId, callback) => {
  db.all("SELECT * FROM employees WHERE org_id = ?", [orgId], callback);
};
