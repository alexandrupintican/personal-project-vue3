import "dotenv/config";
import express from "express";
import { Pool } from "pg";

const app = express();
const port = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3001;

const pool = new Pool({
  host: process.env.DATABASE_HOST ?? "localhost",
  port: process.env.DATABASE_PORT ? Number(process.env.DATABASE_PORT) : 5432,
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
});

app.get("/api/technologies", async (_req, res) => {
  try {
    const result = await pool.query(
      "SELECT name, confidence, category FROM technologies ORDER BY category, confidence DESC",
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Failed to fetch technologies", error);
    res.status(500).json({ error: "Failed to fetch technologies" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
