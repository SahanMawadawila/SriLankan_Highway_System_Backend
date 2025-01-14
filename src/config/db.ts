import { Pool } from "pg";
import bcrypt from "bcrypt";
import { config } from "dotenv";
import { allInterchanges } from "../data/interchange-details";

config();

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Highway_System",
  password: "sahan123",
  port: 5432,
});

//create a table if not exists
export const createTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users(
      id SERIAL PRIMARY KEY,
      email VARCHAR(100) UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role INTEGER DEFAULT 2024,
      photo_url TEXT,
      refresh_token TEXT
    );
  `;
  try {
    await pool.query(query);
    console.log("Table created successfully");
  } catch (error) {
    console.log(error);
  }
};

//create tables for all interchanges
const createInterchangeTable = async (tableName: string) => {
  const query = `CREATE TABLE IF NOT EXISTS ${tableName} (
  id SERIAL PRIMARY KEY,
  number_plate VARCHAR(100),
  is_entered BOOLEAN,
  time TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
  )`;
  try {
    await pool.query(query);
    console.log(`${tableName} created`);
  } catch (error) {
    console.log(error);
  }
};

export const createAllInterchangeTables = async () => {
  for (const tableName of allInterchanges) {
    await createInterchangeTable(tableName);
  }
};

//insert a admin user if not exists
export const createAdmin = async () => {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD as string;
  const role = 5401;
  const user = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  if (user.rowCount === 0) {
    const hashPassword = await bcrypt.hash(password, 10);
    await pool.query(
      "INSERT INTO users(email, password, role) VALUES($1, $2, $3)",
      [email, hashPassword, role]
    );
    console.log("Admin user created successfully");
  }
};

//create police user if not exists
export const createPolice = async () => {
  const email = process.env.POLICE_EMAIL;
  const password = process.env.POLICE_PASSWORD!;
  const role = 4048;

  const user = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
  if (user.rowCount == 0) {
    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query(
      "INSERT INTO users(email,password,role) VALUES($1,$2,$3)",
      [email, hashedPassword, role]
    );
    console.log("Police was created");
  }
};
