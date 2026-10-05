import "dotenv/config";
import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();
const port = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3001;

serve({ fetch: app.fetch, port }, (info) => {
  console.log(`Server listening on http://localhost:${info.port}`);
});
