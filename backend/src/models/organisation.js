import db from "../db.js";

export const createOrganisation = (name, email, password, callback) => {
  db.run(
    "INSERT INTO organisations (name, email, password) VALUES (?, ?, ?)",
    [name, email, password],
    callback
  );
};

export const findOrgByEmail = (email, callback) => {
  db.get("SELECT * FROM organisations WHERE email = ?", [email], callback);
};
