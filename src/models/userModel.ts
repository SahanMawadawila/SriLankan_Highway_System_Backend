import { pool } from "../config/db";
import { DatabaseConnectionError } from "../errors/database-error";

export interface User {
  id?: number;
  email: string;
  password: string;
  role?: number;
  photo_url?: string;
  refresh_token?: string;
}

export class UserModel {
  static async createUser(
    email: string,
    password: string,
    role?: number,
    photo_url?: string
  ): Promise<User> {
    const query = `
      INSERT INTO users(email, password, role, photo_url) VALUES($1, $2, $3, $4) RETURNING *;
    `;
    if (!role) {
      role = 2024;
    }

    //default photo_url (should remove this)
    if (!photo_url) {
      photo_url = "https://www.gravatar.com/avatar/";
    }
    const values = [email, password, role, photo_url];

    try {
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch {
      throw new DatabaseConnectionError(); //if any error occurs, this function throw errors to the caller. caller is inside a express-asyn-handler function. it will pass this error to the error handler middleware
    }
  }

  static async getUserByEmail(email: string): Promise<User> {
    const query = `
      SELECT * FROM users WHERE email = $1;
    `;
    const values = [email];
    try {
      const { rows } = await pool.query(query, values);

      return rows[0];
    } catch {
      throw new DatabaseConnectionError();
    }
  }

  //update refresh token
  static async updateRefreshToken(email: string, refreshToken: string | null) {
    const query = `
      UPDATE users SET refresh_token = $1 WHERE email = $2 RETURNING *;
    `;
    const values = [refreshToken, email];
    try {
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch {
      throw new DatabaseConnectionError();
    }
  }

  //get user by refresh token

  static async getUserByRefreshToken(refreshToken: string): Promise<User> {
    const query = `
      SELECT * FROM users WHERE refresh_token = $1;
    `;
    const values = [refreshToken];
    try {
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch {
      throw new DatabaseConnectionError();
    }
  }
}
