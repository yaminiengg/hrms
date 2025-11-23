import db from "../db.js";

export const createUser = (orgId, name, email, password, callback) => {
  db.run(
    "INSERT INTO users (org_id, name, email, password) VALUES (?, ?, ?, ?)",
    [orgId, name, email, password],
    callback
  );
};

export const findUserByEmail = (email, callback) => {
  db.get("SELECT * FROM users WHERE email = ?", [email], callback);
};
