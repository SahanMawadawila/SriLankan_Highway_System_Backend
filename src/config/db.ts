import { Pool } from "pg";

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
