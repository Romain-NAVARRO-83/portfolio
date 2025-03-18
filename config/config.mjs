import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

export default {
  development: {
    username: process.env.DB_USER || "portfolio",
    password: process.env.DB_PASSWORD || "portfolio",
    database: process.env.DB_NAME || "portfolio",
    host: process.env.DB_HOST || "portfolio",
    dialect: "postgres",
    port: process.env.DB_PORT || 5432
  },
  test: {
    username: process.env.DB_USER || "portfolio",
    password: process.env.DB_PASSWORD || "portfolio",
    database: process.env.DB_NAME || "portfolio",
    host: process.env.DB_HOST || "portfolio",
    dialect: "postgres",
    port: process.env.DB_PORT || 5432
  },
  production: {
    username: process.env.DB_USER || "portfolio",
    password: process.env.DB_PASSWORD || "portfolio",
    database: process.env.DB_NAME || "portfolio",
    host: process.env.DB_HOST || "portfolio",
    dialect: "postgres",
    port: process.env.DB_PORT || 5432
  }
};
