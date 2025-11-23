import db from "../db.js";

export const createTeam = (orgId, name, callback) => {
  db.run(
    "INSERT INTO teams (org_id, name) VALUES (?, ?)",
    [orgId, name],
    callback
  );
};

export const getTeams = (orgId, callback) => {
  db.all("SELECT * FROM teams WHERE org_id = ?", [orgId], callback);
};
