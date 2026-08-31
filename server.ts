import "dotenv/config";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { Pool } from "pg";

const app = new Hono();
const port = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3001;

const pool = new Pool({
  host: process.env.DATABASE_HOST ?? "localhost",
  port: process.env.DATABASE_PORT ? Number(process.env.DATABASE_PORT) : 5432,
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
});

app.get("/api/technologies", async (c) => {
  try {
    const result = await pool.query(
      "SELECT name, confidence, category FROM technologies ORDER BY category, confidence DESC",
    );
    return c.json(result.rows);
  } catch (error) {
    console.error("Failed to fetch technologies", error);
    return c.json({ error: "Failed to fetch technologies" }, 500);
  }
});

serve({ fetch: app.fetch, port }, (info) => {
  console.log(`Server listening on http://localhost:${info.port}`);
});
