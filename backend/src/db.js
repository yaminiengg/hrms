import sqlite3 from "sqlite3";
sqlite3.verbose();

const db = new sqlite3.Database("./hrms.db");

// Run migrations
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS organisations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT UNIQUE,
      password TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      org_id INTEGER,
      name TEXT,
      email TEXT UNIQUE,
      password TEXT,
      FOREIGN KEY(org_id) REFERENCES organisations(id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS employees (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      org_id INTEGER,
      name TEXT,
      role TEXT,
      salary REAL,
      FOREIGN KEY(org_id) REFERENCES organisations(id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS teams (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      org_id INTEGER,
      name TEXT,
      FOREIGN KEY(org_id) REFERENCES organisations(id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS employeeTeam (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      employee_id INTEGER,
      team_id INTEGER
    )
  `);
});

// RETURN the same sqlite3 instance everywhere
export const getDB = () => db;

export default db;
