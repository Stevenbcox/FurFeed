const { Pool } = require("pg");

let pool;

if (process.env.DATABASE_URL) {
  // If DATABASE_URL exists (on Render)
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });
} else {
  // Otherwise, use local development settings
  pool = new Pool({
    user: process.env.DB_USER || "stevencox",
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_NAME || "furfeed",
    password: process.env.DB_PASSWORD || "Password1",
    port: process.env.DB_PORT || 5432,
  });
}

module.exports = pool;