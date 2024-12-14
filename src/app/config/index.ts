/* eslint-disable no-undef */
import dotenv from "dotenv";

dotenv.config({
  path: process.cwd() + "/.env",
});

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT || 8000,
  dbUrl: process.env.DB_URL || "mongodb://localhost:27017",
  defaultStudentPassword: process.env.DEFAULT_STUDENT_PASSWORD,
};
