import dotenv from "dotenv";

dotenv.config({
  path: process.cwd() + "/.env",
});

export default {
  port: process.env.PORT || 8000,
  dbUrl: process.env.DB_URL || "mongodb://localhost:27017",
};
