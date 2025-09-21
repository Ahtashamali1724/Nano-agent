const express = require("express");
const { Client } = require("pg");

const app = express();
const port = process.env.PORT || 3000;

// Postgres connect
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

client.connect()
  .then(() => console.log("✅ Database connected"))
  .catch(err => console.error("❌ DB error", err));

app.get("/", (req, res) => {
  res.send("Server is running with PostgreSQL!");
});

app.listen(port, () => {
  console.log(`🚀 Server started on port ${port}`);
});
