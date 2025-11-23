import db from "../db.js";

export const addEmployeeToTeam = (empId, teamId, callback) => {
  db.run(
    "INSERT INTO employeeTeam (employee_id, team_id) VALUES (?, ?)",
    [empId, teamId],
    callback
  );
};
